
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactNotificationData {
  fullName: string;
  email: string;
  phone?: string;
  serviceRequired: string;
  projectDetails: string;
  submissionId: string;
}

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
    const formData: ContactNotificationData = await req.json();
    console.log("Processing email notification for submission:", formData.submissionId);

    // Format service name for display
    const serviceNames: { [key: string]: string } = {
      'web-development': 'Web Development',
      'web-design': 'Web Designing',
      'ui-ux': 'UI/UX Designing',
      'logo-design': 'Logo Designing',
      'consultation': 'Free Consultation'
    };

    const serviceName = serviceNames[formData.serviceRequired] || formData.serviceRequired;

    const emailResponse = await resend.emails.send({
      from: "ADQ INFOTECH Contact Form <onboarding@resend.dev>",
      to: ["adqinfotech@gmail.com"],
      subject: `New Contact Form Submission - ${serviceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1f2937; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              <div style="height: 3px; background: linear-gradient(90deg, #3b82f6, #8b5cf6); margin: 20px auto; width: 100px; border-radius: 2px;"></div>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h2>
              <p style="margin: 8px 0; color: #4b5563;"><strong>Name:</strong> ${formData.fullName}</p>
              <p style="margin: 8px 0; color: #4b5563;"><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #3b82f6; text-decoration: none;">${formData.email}</a></p>
              ${formData.phone ? `<p style="margin: 8px 0; color: #4b5563;"><strong>Phone:</strong> <a href="tel:${formData.phone}" style="color: #3b82f6; text-decoration: none;">${formData.phone}</a></p>` : ''}
            </div>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #3b82f6;">
              <h2 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Service Required</h2>
              <p style="margin: 0; color: #1e40af; font-weight: 600; font-size: 16px;">${serviceName}</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
              <h2 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Project Details</h2>
              <p style="margin: 0; color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${formData.projectDetails}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                Submission ID: ${formData.submissionId}<br>
                Received: ${new Date().toLocaleString()}
              </p>
            </div>
            
            <div style="margin-top: 20px; text-align: center;">
              <a href="mailto:${formData.email}" style="display: inline-block; background: linear-gradient(90deg, #3b82f6, #8b5cf6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">Reply to Client</a>
            </div>
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend error:", emailResponse.error);
      throw new Error(`Failed to send email: ${emailResponse.error.message}`);
    }

    console.log("Email notification sent successfully:", emailResponse.data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        messageId: emailResponse.data?.id,
        message: "Email notification sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email notification" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
