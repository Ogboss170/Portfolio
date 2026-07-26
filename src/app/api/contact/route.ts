import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All form fields (name, email, subject, message) are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Graceful fallback for client preview mode if RESEND_API_KEY environment variable is not configured yet
      console.log("Contact Form Submission (Preview Mode):", { name, email, subject, message });
      return NextResponse.json({
        success: true,
        message: "Message received in preview mode. To receive real inbox emails, add RESEND_API_KEY to Vercel Environment Variables.",
      });
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: ["ogboss170@gmail.com"],
      replyTo: email,
      subject: `[Portfolio Inquiry] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; rounded: 8px;">
          <h2 style="color: #2563eb; margin-top: 0;">New Message from Portfolio Website</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #2563eb;">
            <p style="margin: 0; whitespace: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 30px;" />
          <p style="font-size: 12px; color: #64748b;">Sent via Oghosa Portfolio Website • Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Email API Error:", error);
    return NextResponse.json(
      { error: "Failed to transmit message." },
      { status: 500 }
    );
  }
}
