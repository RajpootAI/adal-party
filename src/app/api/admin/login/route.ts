import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";

  if (!normalizedEmail || typeof password !== "string") {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (!url || !anonKey || !adminEmail) {
    return NextResponse.json({ error: "Supabase admin authentication is not configured." }, { status: 503 });
  }

  if (normalizedEmail !== adminEmail) {
    return NextResponse.json({ error: "Invalid admin credentials." }, { status: 401 });
  }

  const supabase = createClient(url, anonKey, { auth: { persistSession: false } });
  const { data, error } = await supabase.auth.signInWithPassword({ email: normalizedEmail, password });

  if (error || !data.session) {
    if (error?.message.toLowerCase().includes("confirm")) {
      return NextResponse.json({ error: "Please confirm your admin email address in Supabase before signing in." }, { status: 401 });
    }
    return NextResponse.json({ error: "Invalid admin credentials." }, { status: 401 });
  }

  return NextResponse.json({ accessToken: data.session.access_token, user: { email: data.user.email } });
}
