import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// The API key will be set in Vercel environment variables
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_pkpYKUeY_FsQ3MUwzdZiJ4GCB9swbnoMn';

// This function handles both Vercel serverless environment and local development
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate request body
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Initialize Resend
    const resend = new Resend(RESEND_API_KEY);

    // Send the email
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
    const errorMsg = err?.message || JSON.stringify(err);
    return res.status(500).json({ error: errorMsg });
  }
}

// Keep the sendEmail function for local dev compatibility
export async function sendEmail(reqBody: any) {
  try {
    const { name, email, message } = reqBody;

    if (!name || !email || !message) {
      return { status: 400, body: { error: 'Name, email, and message are required' } };
    }

    const resend = new Resend(RESEND_API_KEY);
    
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
