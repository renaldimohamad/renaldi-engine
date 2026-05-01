import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Basic Rate Limiting (In-memory - resets on server restart)
const rateLimitMap = new Map();

export async function POST(req: Request) {
  try {
    const { name, email, message, honeypot } = await req.json();

    // 1. Check if API Key is configured (Simulation Mode for Development)
    if (!process.env.RESEND_API_KEY) {
      console.log('--------------------------------------------------');
      console.log('📧 CONTACT FORM (DEVELOPMENT MODE)');
      console.log('Data:', { name, email, message });
      console.log('Status: Simulated Success');
      console.log('Tip: Add RESEND_API_KEY to .env for real emails.');
      console.log('--------------------------------------------------');

      // Simulate network latency for better UX testing
      await new Promise(resolve => setTimeout(resolve, 1500));

      return NextResponse.json({ 
        success: true, 
        message: "Message received (Simulated)" 
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 1. Spam Prevention (Honeypot)
    if (honeypot) {
       return NextResponse.json({ message: "Spam detected" }, { status: 400 });
    }

    // 2. Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // 3. Simple Rate Limiting
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip);
    
    if (lastRequest && (now - lastRequest < 60000)) { // 1 minute limit
      return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });
    }
    rateLimitMap.set(ip, now);

    // 4. Send Email to Owner (Renaldi)
    const ownerEmail = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update this after verifying domain
      to: 'renaldimohamad77@gmail.com',
      replyTo: email,
      subject: `New Message from ${name} (Portfolio)`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #5850ec; padding-bottom: 10px;">New Message Received</h2>
          <div style="margin: 20px 0;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #5850ec;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #666;">Sent from your Portfolio contact form.</p>
        </div>
      `,
    });

    // 5. Send Auto-Reply to User
    await resend.emails.send({
      from: 'Renaldi Mohamad <onboarding@resend.dev>', // Update this after verifying domain
      to: email,
      subject: 'Thanks for reaching out! 👋',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #374151; line-height: 1.6;">
          <h2 style="color: #111827;">Hi ${name},</h2>
          <p>Thank you for reaching out to me through my portfolio website!</p>
          <p>I've received your message and I'll get back to you as soon as possible.</p>
          <div style="margin: 30px 0; padding: 20px; background-color: #f3f4f6; border-radius: 10px;">
             <p style="margin: 0; font-style: italic;">"I process messages within 24-48 hours. Looking forward to our conversation!"</p>
          </div>
          <p>Best regards,</p>
          <p style="font-weight: bold; margin: 0;">Renaldi Mohamad</p>
          <p style="font-size: 14px; color: #6b7280; margin: 5px 0;">Fullstack Engineer</p>
          <div style="margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
            <a href="https://renaldi.me" style="color: #5850ec; text-decoration: none; font-size: 14px;">Visit Portfolio</a>
          </div>
        </div>
      `,
    });

    console.log(`[Email Success] From: ${email}`);
    return NextResponse.json({ success: true, id: ownerEmail.data?.id });

  } catch (error: any) {
    console.error('[Contact Error]', error);
    return NextResponse.json({ error: error.message || "Failed to send message" }, { status: 500 });
  }
}
