import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

export async function isAdminRequest(req: NextRequest): Promise<boolean> {
  const authorization = req.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) return false;

  const token = authorization.slice("Bearer ".length);
  if (token === (process.env.ADMIN_SECRET_KEY || "")) return true;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return false;

  const supabase = createClient(url, anonKey, { auth: { persistSession: false } });
  const { data: { user } } = await supabase.auth.getUser(token);
  if (!user) return false;

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  return Boolean(adminEmail && user.email?.toLowerCase() === adminEmail);
}
