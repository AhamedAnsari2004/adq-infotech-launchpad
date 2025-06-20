
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  serviceRequired: string;
  projectDetails: string;
}

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

// Rate limiting storage (in-memory for simplicity)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sanitizeInput = (input: string): string => {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};

const extractClientIP = (forwardedFor: string | null): string => {
  if (!forwardedFor) return "unknown";
  
  // x-forwarded-for can contain multiple IPs: "client, proxy1, proxy2"
  // We want the first (original client) IP
  const firstIP = forwardedFor.split(',')[0].trim();
  
  // Validate that it's a proper IP format (basic validation)
  const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  
  return ipRegex.test(firstIP) ? firstIP : "unknown";
};

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const limit = rateLimitStore.get(ip);
  
  if (!limit || now > limit.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }
  
  if (limit.count >= 5) { // Max 5 submissions per hour
    return false;
  }
  
  limit.count++;
  return true;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    // Get client IP for rate limiting - fix the multiple IP issue
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIP = extractClientIP(forwardedFor);
    console.log("Client IP extracted:", clientIP, "from header:", forwardedFor);
    
    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const formData: ContactFormData = await req.json();

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.serviceRequired || !formData.projectDetails) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    if (!isValidEmail(formData.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate service required
    const validServices = ['web-development', 'web-design', 'ui-ux', 'logo-design', 'consultation'];
    if (!validServices.includes(formData.serviceRequired)) {
      return new Response(
        JSON.stringify({ error: "Invalid service selection" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      full_name: sanitizeInput(formData.fullName),
      email: sanitizeInput(formData.email.toLowerCase()),
      phone: formData.phone ? sanitizeInput(formData.phone) : null,
      service_required: formData.serviceRequired,
      project_details: sanitizeInput(formData.projectDetails),
      ip_address: clientIP === "unknown" ? null : clientIP,
      user_agent: req.headers.get("user-agent") || null,
    };

    console.log("Attempting to insert data:", sanitizedData);

    // Insert into database
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([sanitizedData])
      .select();

    if (error) {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to submit form" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Contact form submitted successfully:", data);

    // Send email notification in the background
    if (data && data[0]) {
      const submissionId = data[0].id;
      console.log("Sending email notification for submission:", submissionId);
      
      // Trigger email notification (fire and forget)
      supabase.functions.invoke('send-contact-notification', {
        body: {
          ...formData,
          submissionId: submissionId
        }
      }).then((emailResult) => {
        if (emailResult.error) {
          console.error("Email notification error:", emailResult.error);
        } else {
          console.log("Email notification triggered successfully");
        }
      }).catch((emailError) => {
        console.error("Failed to trigger email notification:", emailError);
      });
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon." 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-contact-form function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
