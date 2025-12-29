import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/contactValidation";

// Helper function to escape HTML entities
function escapeHtml(text) {
  if (!text) return "";
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate and sanitize input data on server side
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return Response.json(
        {
          message: "Validation failed. Please check your input.",
          errors: validationResult.error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const {
      fullName,
      emailAddress,
      companyName,
      phoneNumber,
      orderType,
      message,
    } = validationResult.data;

    const transporter = nodemailer.createTransport({
      host: process.env.GMAIL_HOST,
      port: process.env.GMAIL_PORT,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.GMAIL_USER,
      replyTo: emailAddress,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${escapeHtml(fullName)}`,
      html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 30px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">

            <!-- Header -->
            <tr>
              <td style="background:#0f172a; padding:20px; text-align:center;">
                <h2 style="margin:0; color:#ffffff; font-weight:600;">
                  📩 New Contact Request
                </h2>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:30px;">
                <p style="margin:0 0 20px; font-size:15px; color:#475569;">
                  You've received a new enquiry from your Ansar Overseas.
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px; color:#334155;">
                  <tr>
                    <td style="padding:8px 0; font-weight:600;">Full Name</td>
                    <td style="padding:8px 0;">${escapeHtml(fullName)}</td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0; font-weight:600;">Email Address</td>
                    <td style="padding:8px 0;">
                        ${escapeHtml(emailAddress)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0; font-weight:600;">Company Name</td>
                    <td style="padding:8px 0;">${escapeHtml(companyName || "N/A")}</td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0; font-weight:600;">Phone Number</td>
                    <td style="padding:8px 0;">
                        ${escapeHtml(phoneNumber || "N/A")}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 0; font-weight:600;">Order Type</td>
                    <td style="padding:8px 0;">
                      <span style="background:#e0f2fe; color:#0369a1; padding:4px 10px; border-radius:20px; font-size:12px;">
                        ${escapeHtml(orderType)}
                      </span>
                    </td>
                  </tr>
                </table>

                <!-- Message Box -->
                <div style="margin-top:25px;">
                  <p style="margin:0 0 8px; font-weight:600; color:#334155;">Message</p>
                  <div style="background:#f8fafc; border-left:4px solid #2563eb; padding:15px; border-radius:6px; color:#475569; line-height:1.6; white-space: pre-wrap;">
                    ${escapeHtml(message)}
                  </div>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f1f5f9; padding:15px; text-align:center; font-size:12px; color:#64748b;">
               &copy; 2025 Ansar Overseas. All rights reserved.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    return Response.json(
      { message: "Message sent successfully! We'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return Response.json(
      {
        message:
          "Failed to send message. Please try again later or contact us directly.",
      },
      { status: 500 }
    );
  }
}
