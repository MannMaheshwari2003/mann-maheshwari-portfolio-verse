import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// This is the correct format for Vercel serverless functions
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Access API key from environment variables
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('Missing Resend API key');
      return res.status(500).json({ 
        error: 'Email service configuration error. API key is missing.' 
      });
    }
    
    const { name, email, message } = req.body;

    // Validate request
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Initialize Resend with API key
    const resend = new Resend(apiKey);
    
    // Send email
    console.log(`Sending email from ${email} with API key ${apiKey.substring(0, 5)}...`);
    
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mannmaheshwari2003@gmail.com'],
      subject: `Portfolio Contact from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<div><b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</div>`,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ error: error.message || JSON.stringify(error) });
    }
    
    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error('Email sending error:', err);
    return res.status(500).json({ 
      error: err?.message || 'Unknown server error',
      stack: process.env.NODE_ENV === 'development' ? err?.stack : undefined
    });
  }
}

// Keep the sendEmail function for local dev compatibility
export async function sendEmail(reqBody: any) {
  try {
    const { name, email, message } = reqBody;

    if (!name || !email || !message) {
      return { status: 400, body: { error: 'Name, email, and message are required' } };
    }

    const resend = new Resend(process.env.RESEND_API_KEY || 're_pkpYKUeY_FsQ3MUwzdZiJ4GCB9swbnoMn');
    
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mannmaheshwari2003@gmail.com'],
      subject: `Portfolio Contact from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<div><b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</div>`,
    });

    if (error) {
      console.error('Resend API error:', error);
      return { status: 500, body: { error: error.message || JSON.stringify(error) } };
    }
    
    return { status: 200, body: { success: true, data } };
  } catch (err: any) {
    console.error('Email sending error:', err);
    const errorMsg = err?.message || JSON.stringify(err);
    return { status: 500, body: { error: errorMsg } };
  }
}
