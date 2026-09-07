"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { Search, ShieldCheck, CheckCircle2, Clock, AlertCircle, ChevronRight, UserPlus } from "lucide-react";

function StatusBadge({ status }: { status: string }) {
  let color = "bg-gray-100 text-gray-800 border-gray-300";
  if (status === "Approved") color = "bg-emerald-100 text-emerald-800 border-emerald-300";
  if (status === "Under Review") color = "bg-blue-100 text-blue-800 border-blue-300";
  if (status === "Pending") color = "bg-amber-100 text-amber-800 border-amber-300";
  if (status === "Rejected") color = "bg-red-100 text-red-800 border-red-300";
  if (status === "Contact Required") color = "bg-purple-100 text-purple-800 border-purple-300";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${color}`}>
      {status}
    </span>
  );
}

export default function MembershipStatusPage() {
  const { language, isUrdu, t } = useI18n();
  const [appNumber, setAppNumber] = useState("");
  const [result, setResult] = useState<any>(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!appNumber.trim()) return;

    setLoading(true);
    setSearched(true);
    setResult(null);

    try {
      const res = await fetch(`/api/membership?appNumber=${encodeURIComponent(appNumber.trim())}`);
      const data = await res.json();
      if (res.ok && data.found) {
        setResult(data);
      } else {
        setResult(null);
      }
    } catch {
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-adal-surface py-12 sm:py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-adal-green-900 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-2">
              <Search className="h-3.5 w-3.5" />
              <span>{isUrdu ? "سرکاری توثیق" : "Verification Portal"}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-adal-green-950 font-urdu urdu-editorial">
              {isUrdu ? "رکنیت کی درخواست کی تصدیق" : "Track Membership Application Status"}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-gray-600">
              {isUrdu
                ? "اپنی درخواست کے ساتھ جاری کیا گیا سرکاری ریفرنس نمبر درج کریں۔"
                : "Enter the tracking number issued during your online application (e.g. PAP-2026-10492)."}
            </p>
          </div>

          {/* Search Box */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <form onSubmit={handleLookup} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  {isUrdu ? "درخواست ریفرنس نمبر" : "Application Tracking Reference"}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={appNumber}
                    onChange={(e) => setAppNumber(e.target.value)}
                    placeholder="PAP-2026-XXXXX"
                    className="w-full rounded-lg border border-gray-300 p-3 font-mono text-sm uppercase focus:border-adal-gold-500 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-adal-green-900 py-3 text-sm font-bold text-adal-gold-300 hover:bg-adal-green-800 transition-colors shadow disabled:opacity-50"
              >
                {loading ? (isUrdu ? "تلاش جاری ہے..." : "Checking...") : isUrdu ? "تصدیق کریں" : "Verify Status"}
              </button>
            </form>
          </div>

          {/* Result Box */}
          {searched && !loading && (
            <div className="mt-6 animate-in fade-in">
              {result ? (
                <div className="rounded-xl border border-emerald-300 bg-white p-6 shadow-md space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <span className="font-mono text-xs font-bold text-gray-500">
                      {result.applicationNumber}
                    </span>
                    <StatusBadge status={result.status} />
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">{isUrdu ? "درخواست گزار:" : "Applicant Name:"}</span>
                      <span className="font-bold text-gray-900">{result.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">{isUrdu ? "علاقہ / ضلع:" : "Region / District:"}</span>
                      <span className="font-semibold text-gray-800">{result.district}, {result.province}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">{isUrdu ? "تاریخ اندراج:" : "Submission Date:"}</span>
                      <span className="text-gray-700">
                        {new Date(result.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 leading-relaxed">
                    {result.status === "Approved" && (
                      <p className="text-emerald-800 font-medium">
                        ✓ {isUrdu ? "آپ کی رکنیت مرکزی کمیٹی سے منظور ہو چکی ہے۔ ضلعی تنظیم جلد رابطہ کرے گی۔" : "Your membership has been verified and approved by the Secretariat."}
                      </p>
                    )}
                    {result.status === "Pending" && (
                      <p className="text-amber-800 font-medium">
                        ⌛ {isUrdu ? "آپ کی درخواست موصول ہو چکی ہے اور ابتدائی انتظامی جانچ کے مرحلے میں ہے۔" : "Your application is currently in queue for initial administrative review."}
                      </p>
                    )}
                    {result.status === "Under Review" && (
                      <p className="text-blue-800 font-medium">
                        📋 {isUrdu ? "آپ کے کوائف صوبائی آرگنائزنگ سیل میں زیرِ غور ہیں۔" : "Your credentials are being reviewed by the Provincial Coordination Committee."}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-center text-xs text-red-800">
                  <AlertCircle className="h-5 w-5 text-red-600 mx-auto mb-1.5" />
                  <p className="font-bold">{isUrdu ? "ریکارڈ موجود نہیں ہے" : "Record Not Found"}</p>
                  <p className="mt-1 text-red-700">
                    {isUrdu
                      ? "درج کردہ ریفرنس نمبر سے کوئی درخواست نہیں ملی۔ برائے مہربانی اپنا نمبر دوبارہ چیک کریں۔"
                      : "No application matched this reference code. Please verify your reference or contact the central office."}
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 text-center text-xs text-gray-500">
            <Link href="/membership" className="text-adal-green-900 font-bold hover:underline">
              {isUrdu ? "نئی رکنیت کی درخواست جمع کروائیں" : "Submit a New Membership Application"}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
