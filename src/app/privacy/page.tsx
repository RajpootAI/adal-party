"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { ShieldCheck, Lock, EyeOff, Server, FileText } from "lucide-react";

export default function PrivacyPage() {
  const { language, isUrdu } = useI18n();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="border-b border-gray-200 pb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-adal-green-900 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{isUrdu ? "آئینی رازداری و ڈیٹا تحفظ" : "Data Governance & Privacy"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-adal-green-950 font-urdu urdu-editorial">
              {isUrdu ? "رازداری کی پالیسی اور قومی شناختی کارڈ کا تحفظ" : "Privacy Policy & CNIC Protection Charter"}
            </h1>
            <p className="mt-2 text-xs text-gray-500 font-mono">
              Last Updated: September 2026 • Official Platform Standard
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
            {/* Section 1: CNIC & Personal Data */}
            <div className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
                <Lock className="h-5 w-5 text-emerald-700" />
                <span>{isUrdu ? "1. شناختی کارڈ (CNIC) کے تحفظ کا قانونی وعدہ" : "1. Strict Protection of National CNIC Records"}</span>
              </div>
              <p className="leading-relaxed">
                {isUrdu
                  ? "پاکستان عدل پارٹی کی رکنیت حاصل کرنے کے لیے قومی شناختی کارڈ نمبر ایک لازمی اور قانونی تقاضا ہے۔ پارٹی اس بات کی غیر مشروط آئینی ضمانت دیتی ہے کہ آپ کا شناختی کارڈ، رہائشی پتہ اور رابطہ نمبر کبھی کسی صورت عوامی سطح پر ظاہر نہیں کیے جائیں گے، نہ ہی تجارتی یا انتخابی مقاصد کے لیے کسی تیسرے فریق کو فروخت کیے جائیں گے۔"
                  : "Under official party regulations, the 13-digit CNIC number is mandatory to authenticate legitimate citizen workers and prevent fraudulent party enrollment. Pakistan Adal Party unconditionally guarantees that CNIC numbers and personal residential details are encrypted in transit, masked on all admin review interfaces, and never published in any public directory."}
              </p>
            </div>

            {/* Section 2: Data Collection */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-adal-green-950">
                {isUrdu ? "2. جمع کی جانے والی معلومات" : "2. Information We Collect"}
              </h2>
              <p>
                {isUrdu
                  ? "ہم صرف وہی معلومات جمع کرتے ہیں جو باضابطہ ممبرشپ فارم، رضاکارانہ شمولیت یا رابطہ فارم میں شہری کی مرضی سے درج کی جاتی ہیں: مکمل نام، شناختی کارڈ نمبر، فون نمبر، ضلع، صوبہ اور تعلیمی/پیشہ ورانہ کوائف۔"
                  : "We only collect data strictly provided on our official application forms: applicant full name, CNIC number, contact mobile, district and provincial residency, profession, and voluntary contributions."}
              </p>
            </div>

            {/* Section 3: Financial Contributions */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-adal-green-950">
                {isUrdu ? "3. مالی تعاون اور ادائیگیوں کا تحفظ" : "3. Financial Contributions & Donor Anonymity"}
              </h2>
              <p>
                {isUrdu
                  ? "مالی تعاون کی تمام ادائیگیاں قانونی بینکنگ چینلز کے ذریعے ہوتی ہیں۔ اگر کوئی ڈونر اپنا نام ظاہر نہیں کرنا چاہتا تو اس کے کوائف داخلی رپورٹس میں پوشیدہ رکھے جاتے ہیں۔"
                  : "All political donations and institutional membership fees are processed via verified banking channels and regulatory accounting. Donors electing anonymity have their identifying records withheld from non-regulatory reporting."}
              </p>
            </div>

            {/* Section 4: Accessibility Statement */}
            <div id="accessibility" className="rounded-xl border border-gray-200 bg-gray-50 p-6 space-y-3">
              <h2 className="text-lg font-bold text-adal-green-950">
                {isUrdu ? "4. رسائی کے تقاضے (Accessibility Statement)" : "4. Accessibility Statement (WCAG 2.2 AA)"}
              </h2>
              <p>
                {isUrdu
                  ? "یہ ویب سائٹ تمام شہریوں بشمول معذور افراد کے لیے آسانی سے قابلِ رسائی ہے۔ اس میں کی بورڈ نیویگیشن، اسکرین ریڈر سپورٹ، واضح کنٹراسٹ اور ریڈیوسڈ موشن کا خیال رکھا گیا ہے۔"
                  : "The Pakistan Adal Party digital platform is engineered to align with WCAG 2.2 AA principles: high contrast ratios, semantic heading structures, visible keyboard focus indicators, screen-reader aria labels, and respect for prefers-reduced-motion."}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
