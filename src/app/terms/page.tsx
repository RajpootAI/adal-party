"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { Scale, FileText, CheckCircle2 } from "lucide-react";

export default function TermsPage() {
  const { language, isUrdu } = useI18n();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-gray-200 pb-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-adal-green-900 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3">
              <Scale className="h-3.5 w-3.5" />
              <span>{isUrdu ? "قواعد و آئین" : "Terms & Discipline"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-adal-green-950 font-urdu urdu-editorial">
              {isUrdu ? "پارٹی وابستگی، قواعد اور ڈسپلن" : "Terms of Affiliation & Party Discipline"}
            </h1>
            <p className="mt-2 text-xs text-gray-500 font-mono">
              Official Constitution & Legal Charter • 2026
            </p>
          </div>

          <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-adal-green-950">
                {isUrdu ? "1. آئینِ پاکستان اور پارٹی ڈسپلن کی پاسداری" : "1. Adherence to Constitution & Party Discipline"}
              </h2>
              <p>
                {isUrdu
                  ? "پاکستان عدل پارٹی کا ہر رکن آئینِ پاکستان کی بالادستی، قانون کی حکمرانی اور پارٹی کے قواعد و ضوابط کا پابند ہے۔ کسی قسم کی بدعنوانی، فرقہ واریت یا لسانی تعصب پارٹی ڈسپلن کی خلاف ورزی تصور ہوگی۔"
                  : "Every member affirms loyalty to the Constitution of the Islamic Republic of Pakistan, the supreme rule of law, and internal party democracy. Corruption, baradari favoritism, and ethno-linguistic factionalism are grounds for immediate disciplinary termination."}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-adal-green-950">
                {isUrdu ? "2. حلف نامہ کی قانونی حیثیت" : "2. Binding Nature of the Membership Oath"}
              </h2>
              <p>
                {isUrdu
                  ? "رکنیت فارم پر حلف نامے کا اقرار ایک مقدس اخلاقی اور تنظیمی عہد ہے جس کے تحت رکن پارٹی منشور کو سمجھ کر اس کی ترویج کا پابند ہوتا ہے۔"
                  : "The solemn party oath (حلف نامہ) submitted during membership constitutes a legally and morally binding covenant to work for the progress, justice, and prosperity of Pakistan."}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-adal-green-950">
                {isUrdu ? "3. سرکاری دستاویزات کا مستند استعمال" : "3. Authentic Use of Authorized Materials"}
              </h2>
              <p>
                {isUrdu
                  ? "پارٹی کا سرکاری مونوگرام، لوگو اور قومی منشور 2026 صرف مصدقہ تنظیمی مقاصد کے لیے ہی استعمال کیا جا سکتا ہے۔"
                  : "The official emblem, manifesto publications, and authorized digital materials remain the exclusive institutional property of Pakistan Adal Party."}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
