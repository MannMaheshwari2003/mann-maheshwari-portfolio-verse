import { Resend } from 'resend';

// Server-side only code - this file is never imported by the client
const RESEND_API_KEY = 're_pkpYKUeY_FsQ3MUwzdZiJ4GCB9swbnoMn';

// Export the function to be used by your server file
export async function sendEmail(reqBody: any) {
  try {
    // Use the hardcoded API key
    const resend = new Resend(RESEND_API_KEY);
    
    const { name, email, message } = reqBody;

    if (!name || !email || !message) {
      return { status: 400, body: { error: 'Name, email, and message are required' } };
    }

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
