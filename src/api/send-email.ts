import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend('re_pkpYKUeY_FsQ3MUwzdZiJ4GCB9swbnoMn');

// This function needs to be the default export to work as a proper API endpoint
export default async function handler(request: Request) {
  try {
    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Sanitize inputs to prevent XSS
    const sanitizedMessage = message.replace(/<[^>]*>/g, '');
    const sanitizedName = name.replace(/<[^>]*>/g, '');

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mannmaheshwari2003@gmail.com'],
      subject: `Portfolio Contact from ${sanitizedName}`,
      replyTo: email,
      text: `Name: ${sanitizedName}\nEmail: ${email}\nMessage: ${sanitizedMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">
            New Contact Form Submission
          </h1>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="margin: 10px 0; font-size: 16px;">
              <strong style="color: #666;">Name:</strong> ${sanitizedName}
            </p>
            <p style="margin: 10px 0; font-size: 16px;">
              <strong style="color: #666;">Email:</strong> ${email}
            </p>
            <p style="margin: 10px 0; font-size: 16px;">
              <strong style="color: #666;">Message:</strong>
            </p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px; border: 1px solid #eee;">
              ${sanitizedMessage.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="margin-top: 20px; font-size: 14px; color: #666; text-align: center;">
            This email was sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
