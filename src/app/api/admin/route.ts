import { NextRequest, NextResponse } from "next/server";
import {
  createNewsArticle, fetchContactMessages, fetchDonations, fetchMembershipApplications,
  fetchNewsArticles, fetchSiteSettings, fetchVolunteers, updateContactStatus,
  updateMembershipApplication, updateSiteSettings,
} from "@/lib/db";
import { isAdminRequest } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  if (!(await isAdminRequest(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const [applications, volunteers, donations, messages, news, settings] = await Promise.all([
    fetchMembershipApplications(), fetchVolunteers(), fetchDonations(), fetchContactMessages(), fetchNewsArticles(), fetchSiteSettings(),
  ]);
  return NextResponse.json({ applications, volunteers, donations, messages, news, settings });
}

export async function PATCH(req: NextRequest) {
  if (!(await isAdminRequest(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  if (body.entity === "membership" && body.id) await updateMembershipApplication(body.id, body.data || {});
  else if (body.entity === "contact" && body.id && body.status) await updateContactStatus(body.id, body.status);
  else if (body.entity === "settings" && body.data) await updateSiteSettings(body.data);
  else return NextResponse.json({ error: "Invalid update request." }, { status: 400 });
  return NextResponse.json({ success: true });
}

export async function POST(req: NextRequest) {
  if (!(await isAdminRequest(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  if (body.entity !== "news" || !body.data) return NextResponse.json({ error: "Invalid create request." }, { status: 400 });
  const article = await createNewsArticle(body.data);
  return NextResponse.json({ success: true, article });
}