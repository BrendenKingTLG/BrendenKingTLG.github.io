// pages/api/send-email.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request, res: Response) => {
  try {
    const req_json = await req.json();
    validateRequestBody(req_json);
    const emailResponse = await sendEmail({
      from: req_json.from,
      textBody: req_json.textBody,
    });
    return NextResponse.json({
      message: "Email sent successfully!",
      response: emailResponse,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Failed to send email",
      error: error.message,
    });
  }
};

function validateRequestBody(body: any) {
  if (!body.from || !body.textBody) {
    throw new Error("Request body is missing required fields.");
  }
}

async function sendEmail({
  from,
  textBody,
}: {
  from: string;
  textBody: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NM_USER,
      pass: process.env.NM_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.NM_USER,
    to: process.env.NM_USER,
    subject: "Personal Website Contact Form",
    text: `${from}\n\n${textBody}`,
  };

  await transporter.sendMail(mailOptions);
}
