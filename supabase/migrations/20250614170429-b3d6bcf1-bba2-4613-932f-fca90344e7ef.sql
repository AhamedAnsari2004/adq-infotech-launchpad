
-- Create contact_submissions table with proper security
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_required TEXT NOT NULL,
  project_details TEXT NOT NULL,
  ip_address INET,
  user_agent TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'responded')),
  admin_notes TEXT
);

-- Add indexes for performance
CREATE INDEX idx_contact_submissions_submitted_at ON public.contact_submissions(submitted_at DESC);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for admin access only (assuming admins have a specific role or email domain)
-- For now, we'll create a policy that requires authentication and can be refined later
CREATE POLICY "Admin can view all contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admin can update contact submissions" 
  ON public.contact_submissions 
  FOR UPDATE 
  USING (auth.uid() IS NOT NULL);

-- The edge function will handle inserts with elevated privileges
CREATE POLICY "Service role can insert contact submissions" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);
