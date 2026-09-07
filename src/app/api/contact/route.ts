import { NextRequest, NextResponse } from "next/server";
import { submitContactMessage, fetchContactMessages, updateContactStatus } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.fullName || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    const message = await submitContactMessage({
      fullName: body.fullName.trim(),
      email: body.email.trim(),
      phone: body.phone ? body.phone.trim() : undefined,
      subject: body.subject.trim(),
      message: body.message.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been delivered to the Central Secretariat.",
      id: message.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Server error occurred." }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.ADMIN_SECRET_KEY || "adal2026admin"}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const messages = await fetchContactMessages();
  return NextResponse.json({ messages });
}
