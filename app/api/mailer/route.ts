// pages/api/send-email.js
import { NextResponse } from "next/server";
import { ServerClient } from 'postmark';

const EMAIL = process.env.EMAIL || "";
const POSTMARK_SERVER_TOKEN = process.env.POSTMARK_SERVER_TOKEN || "";
const SUBJECT = 'New message from your website';

export const POST = async (req: Request, res: Response) => {
  try {
    const req_json = await req.json();
    validateRequestBody(req_json);
    const emailResponse = await sendEmail({ from: req_json.from, textBody: req_json.textBody });
    return NextResponse.json({ message: 'Email sent successfully!', response: emailResponse });
  } catch (error: any) {
    return NextResponse.json({ message: 'Failed to send email', error: error.message});
  }
}

function validateRequestBody(body: any) {
  if (!body.from || !body.textBody) {
    throw new Error('Request body is missing required fields.');
  }
}

async function sendEmail({ from, textBody }: { from: string, textBody: string }) {
  if (!POSTMARK_SERVER_TOKEN) {
    throw new Error('Server token is not defined.');
  }
  const client = new ServerClient(POSTMARK_SERVER_TOKEN as string);
  
  return client.sendEmail({
    From: EMAIL,
    To: EMAIL,
    Subject: SUBJECT,
    TextBody: from + '\n\n\n' + textBody,
    MessageStream: "broadcast"
  });
}
