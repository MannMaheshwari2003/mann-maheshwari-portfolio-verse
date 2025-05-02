
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend('re_pkpYKUeY_FsQ3MUwzdZiJ4GCB9swbnoMn');

// A simple function to handle email sending
export const sendContactEmail = async (input: { 
  name: string; 
  email: string; 
  message: string;
}) => {
  const { name, email, message } = input;
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mannmaheshwari2003@gmail.com'],
      subject: `Portfolio Contact from ${name}`,
      replyTo: email,
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
    throw new Error(error.message);
  }
};
