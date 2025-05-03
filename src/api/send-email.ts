import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// This function needs to be the default export to work as a proper API endpoint
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mannmaheshwari2003@gmail.com'],
      subject: `Portfolio Contact from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<div><b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</div>`,
    });
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ success: true, data });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
