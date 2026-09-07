/**
 * Pakistan Adal Party - Database & Data Access Layer
 * 
 * Architecture:
 * - When NEXT_PUBLIC_SUPABASE_URL & NEXT_PUBLIC_SUPABASE_ANON_KEY are provided, queries execute against Supabase/PostgreSQL.
 * - Otherwise, smoothly operates against the local in-memory partyStore singleton.
 */

import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { partyStore } from "./store";
import { MembershipApplication, Volunteer, Donation, ContactMessage, NewsArticle } from "@/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

function getSupabase(): SupabaseClient {
  if (!supabaseUrl || !supabaseKey) throw new Error("Supabase is not configured.");
  return createClient(supabaseUrl, supabaseKey, { auth: { autoRefreshToken: false, persistSession: false } });
}

function mapMembership(row: Record<string, unknown>): MembershipApplication {
  return { id: String(row.id), applicationNumber: String(row.application_number), fullName: String(row.full_name), cnic: String(row.cnic), phone: String(row.phone), mobile: row.mobile as string | undefined, email: row.email as string | undefined, address: String(row.address), city: row.city as string | undefined, district: String(row.district), province: String(row.province), profession: row.profession as string | undefined, education: row.education as string | undefined, membershipType: row.membership_type as MembershipApplication["membershipType"], commitmentAccepted: Boolean(row.commitment_accepted), signatureReference: row.signature_reference as string | undefined, status: row.status as MembershipApplication["status"], adminNotes: row.admin_notes as string | undefined, createdAt: String(row.created_at), updatedAt: row.updated_at as string | undefined };
}

function mapVolunteer(row: Record<string, unknown>): Volunteer {
  return { id: String(row.id), fullName: String(row.full_name), email: String(row.email), phone: String(row.phone), city: String(row.city), district: String(row.district), province: String(row.province), areaOfInterest: String(row.area_of_interest), availability: String(row.availability), message: row.message as string | undefined, status: row.status as Volunteer["status"], createdAt: String(row.created_at) };
}

function mapDonation(row: Record<string, unknown>): Donation {
  return { id: String(row.id), donationReference: String(row.donation_reference), amount: Number(row.amount), currency: String(row.currency), donorName: row.donor_name as string | undefined, email: row.email as string | undefined, phone: row.phone as string | undefined, isAnonymous: Boolean(row.is_anonymous), paymentProvider: String(row.payment_provider), paymentStatus: row.payment_status as Donation["paymentStatus"], transactionReference: row.transaction_reference as string | undefined, createdAt: String(row.created_at) };
}

function mapContact(row: Record<string, unknown>): ContactMessage {
  return { id: String(row.id), fullName: String(row.full_name), email: String(row.email), phone: row.phone as string | undefined, subject: String(row.subject), message: String(row.message), status: row.status as ContactMessage["status"], createdAt: String(row.created_at) };
}

function mapNews(row: Record<string, unknown>): NewsArticle {
  return { id: String(row.id), slug: String(row.slug), titleEn: String(row.title_en), titleUr: String(row.title_ur), summaryEn: String(row.summary_en), summaryUr: String(row.summary_ur), contentEn: String(row.content_en), contentUr: String(row.content_ur), category: String(row.category), author: String(row.author), publishedAt: String(row.published_at), coverImage: String(row.cover_image || ""), isFeatured: Boolean(row.is_featured), status: row.status as NewsArticle["status"] };
}

export function maskCNIC(cnic: string): string {
  const clean = cnic.replace(/[^0-9]/g, "");
  if (clean.length === 13) return `${clean.substring(0, 5)}-*******-${clean.substring(12)}`;
  return cnic.length > 6 ? `${cnic.substring(0, 4)}****${cnic.slice(-2)}` : "****";
}

export async function submitMembershipApplication(data: Omit<MembershipApplication, "id" | "applicationNumber" | "createdAt" | "status">) {
  if (!isSupabaseConfigured) return partyStore.addApplication(data);
  const { data: row, error } = await getSupabase().from("membership_applications").insert({ application_number: `PAP-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`, full_name: data.fullName, cnic: data.cnic, phone: data.phone, mobile: data.mobile, email: data.email, address: data.address, city: data.city, district: data.district, province: data.province, profession: data.profession, education: data.education, membership_type: data.membershipType, commitment_accepted: data.commitmentAccepted, signature_reference: data.signatureReference }).select().single();
  if (error) throw error;
  return mapMembership(row);
}

export async function fetchMembershipApplications() {
  if (!isSupabaseConfigured) return partyStore.getApplications();
  const { data, error } = await getSupabase().from("membership_applications").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []).map(mapMembership);
}

export async function fetchMembershipByNumber(appNum: string) {
  if (!isSupabaseConfigured) return partyStore.getApplicationByNumber(appNum);
  const { data, error } = await getSupabase().from("membership_applications").select("*").ilike("application_number", appNum.trim()).maybeSingle();
  if (error) throw error;
  return data ? mapMembership(data) : undefined;
}

export async function updateApplicationStatus(id: string, status: MembershipApplication["status"], notes?: string) {
  if (!isSupabaseConfigured) return partyStore.updateApplicationStatus(id, status, notes);
  const { error } = await getSupabase().from("membership_applications").update({ status, admin_notes: notes, updated_at: new Date().toISOString() }).eq("id", id);
  if (error) throw error;
  return true;
}

export async function updateMembershipApplication(id: string, data: Partial<Omit<MembershipApplication, "id" | "applicationNumber" | "createdAt">>) {
  if (!isSupabaseConfigured) {
    const current = partyStore.getApplications().find((application) => application.id === id);
    if (!current) return false;
    Object.assign(current, data, { updatedAt: new Date().toISOString() });
    return true;
  }
  const updates: Record<string, unknown> = {};
  const fields: Record<string, string> = {
    fullName: "full_name", cnic: "cnic", phone: "phone", mobile: "mobile", email: "email",
    address: "address", city: "city", district: "district", province: "province", profession: "profession",
    education: "education", membershipType: "membership_type", commitmentAccepted: "commitment_accepted",
    signatureReference: "signature_reference", status: "status", adminNotes: "admin_notes",
  };
  for (const [key, column] of Object.entries(fields)) {
    if (data[key as keyof typeof data] !== undefined) updates[column] = data[key as keyof typeof data];
  }
  updates.updated_at = new Date().toISOString();
  const { error } = await getSupabase().from("membership_applications").update(updates).eq("id", id);
  if (error) throw error;
  return true;
}

export async function submitVolunteer(data: Omit<Volunteer, "id" | "status" | "createdAt">) {
  if (!isSupabaseConfigured) return partyStore.addVolunteer(data);
  const { data: row, error } = await getSupabase().from("volunteers").insert({ full_name: data.fullName, email: data.email, phone: data.phone, city: data.city, district: data.district, province: data.province, area_of_interest: data.areaOfInterest, availability: data.availability, message: data.message }).select().single();
  if (error) throw error;
  return mapVolunteer(row);
}

export async function fetchVolunteers() {
  if (!isSupabaseConfigured) return partyStore.getVolunteers();
  const { data, error } = await getSupabase().from("volunteers").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []).map(mapVolunteer);
}

export async function recordDonation(data: Omit<Donation, "id" | "donationReference" | "createdAt" | "paymentStatus">) {
  if (!isSupabaseConfigured) return partyStore.addDonation(data);
  const { data: row, error } = await getSupabase().from("donations").insert({ donation_reference: `DON-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`, amount: data.amount, currency: data.currency, donor_name: data.donorName, email: data.email, phone: data.phone, is_anonymous: data.isAnonymous, payment_provider: data.paymentProvider, transaction_reference: data.transactionReference }).select().single();
  if (error) throw error;
  return mapDonation(row);
}

export async function fetchDonations() {
  if (!isSupabaseConfigured) return partyStore.getDonations();
  const { data, error } = await getSupabase().from("donations").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []).map(mapDonation);
}

export async function submitContactMessage(data: Omit<ContactMessage, "id" | "createdAt" | "status">) {
  if (!isSupabaseConfigured) return partyStore.addMessage(data);
  const { data: row, error } = await getSupabase().from("contact_messages").insert({ full_name: data.fullName, email: data.email, phone: data.phone, subject: data.subject, message: data.message }).select().single();
  if (error) throw error;
  return mapContact(row);
}

export async function fetchContactMessages() {
  if (!isSupabaseConfigured) return partyStore.getMessages();
  const { data, error } = await getSupabase().from("contact_messages").select("*").order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []).map(mapContact);
}

export async function updateContactStatus(id: string, status: ContactMessage["status"]) {
  if (!isSupabaseConfigured) return partyStore.updateMessageStatus(id, status);
  const { error } = await getSupabase().from("contact_messages").update({ status }).eq("id", id);
  if (error) throw error;
  return true;
}

export async function fetchNewsArticles() {
  if (!isSupabaseConfigured) return partyStore.getNews();
  const { data, error } = await getSupabase().from("news_articles").select("*").order("published_at", { ascending: false });
  if (error) throw error;
  return (data || []).map(mapNews);
}

export async function createNewsArticle(article: Omit<NewsArticle, "id">) {
  if (!isSupabaseConfigured) return partyStore.addNews(article);
  const { data: row, error } = await getSupabase().from("news_articles").insert({ slug: article.slug, title_en: article.titleEn, title_ur: article.titleUr, summary_en: article.summaryEn, summary_ur: article.summaryUr, content_en: article.contentEn, content_ur: article.contentUr, category: article.category, author: article.author, published_at: article.publishedAt, cover_image: article.coverImage, is_featured: article.isFeatured, status: article.status }).select().single();
  if (error) throw error;
  return mapNews(row);
}

export async function fetchSiteSettings() {
  if (!isSupabaseConfigured) return partyStore.getSiteSettings();
  const { data, error } = await getSupabase().from("site_settings").select("key, value");
  if (error) throw error;
  return Object.fromEntries((data || []).map((setting) => [setting.key, setting.value]));
}

export async function updateSiteSettings(settings: Record<string, string>) {
  if (!isSupabaseConfigured) return partyStore.updateSiteSettings(settings);
  const { error } = await getSupabase().from("site_settings").upsert(Object.entries(settings).map(([key, value]) => ({ key, value })));
  if (error) throw error;
  return fetchSiteSettings();
}
