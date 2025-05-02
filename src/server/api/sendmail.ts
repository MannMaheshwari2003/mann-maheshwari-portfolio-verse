
import { Resend } from 'resend';

// Create a new instance of the Resend client
const resend = new Resend('re_EqHN8VRP_AiC7g2nkU4T4UykYKdLPvcHV');

export async function sendContactEmail(name: string, email: string, message: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mannmaheshwari2003@gmail.com'],
      subject: `Portfolio Contact from ${name}`,
      reply_to: email,
      html: `
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('Failed to send email:', error);
    throw new Error(error.message);
  }
}
