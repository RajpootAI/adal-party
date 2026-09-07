"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { Download, FileText, FileCheck, BookOpen, ShieldCheck, ChevronRight } from "lucide-react";

export default function DownloadsPage() {
  const { language, isUrdu, t } = useI18n();

  const documents = [
    {
      id: "doc-manifesto",
      titleUr: "پاکستان عدل پارٹی — قومی منشور 2026 (مستند دستاویز)",
      titleEn: "Pakistan Adal Party — National Manifesto 2026 (Official Full PDF)",
      descUr: "تمام 35 پالیسی شعبہ جات اور دس سالہ قومی تبدیلی منصوبہ 2036 پر مشتمل سرکاری اشاعت۔",
      descEn: "Complete official 8-page manifesto comprising all 35 policy areas and the Pakistan 2036 National Transformation Plan.",
      fileSize: "1.8 MB",
      format: "PDF Document",
      url: "/downloads/manshoor-pakistan-adal-party-2026.pdf",
      highlight: true,
    },
    {
      id: "doc-membership",
      titleUr: "پاکستان عدل پارٹی — ممبر شپ فارم اور حلف نامہ",
      titleEn: "Official Membership Form & Solemn Oath (Printable PDF)",
      descUr: "باقاعدہ پرنٹ ایبل ممبرشپ فارم بمع حلف نامہ برائے دستی اندراج و ضلعی جمع آوری۔",
      descEn: "Official printable membership application form with solemn constitutional oath.",
      fileSize: "30 KB",
      format: "PDF Document",
      url: "/downloads/Membership.pdf",
      highlight: true,
    },
    {
      id: "doc-logo",
      titleUr: "پاکستان عدل پارٹی سرکاری مونوگرام اور لوگو پیک",
      titleEn: "Official Party Crest & High-Resolution Emblem",
      descUr: "مینارِ پاکستان، میزانِ عدل اور قومی رنگوں پر مشتمل مصدقہ ڈیجیٹل لوگو۔",
      descEn: "Official emblem featuring Minar-e-Pakistan, scales of justice, and emerald-gold seal.",
      fileSize: "108 KB",
      format: "JPEG Image",
      url: "/logo.jpg",
      highlight: false,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-adal-surface">
        {/* Banner */}
        <section className="bg-gradient-to-b from-adal-green-950 via-adal-green-900 to-adal-green-950 text-white py-14 sm:py-20 border-b-4 border-adal-gold-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-adal-gold-400/50 bg-adal-green-900/80 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3">
              <Download className="h-3.5 w-3.5" />
              <span>{isUrdu ? "مرکزی دستاویزات" : "Document Repository"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-urdu urdu-editorial leading-tight">
              {isUrdu ? "سرکاری اشاعتیں، منشور اور فارمز" : "Official Downloads & Publications"}
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              {isUrdu
                ? "پاکستان عدل پارٹی کی مستند سرکاری پی ڈی ایف دستاویزات اور اشاعتیں حاصل کریں۔"
                : "Download official authorized party literature, legislative policy charters, and membership forms."}
            </p>
          </div>
        </section>

        {/* Document Cards */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className={`rounded-2xl border bg-white p-6 sm:p-8 shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 ${
                  doc.highlight
                    ? "border-2 border-adal-gold-500 bg-gradient-to-r from-adal-gold-50/20 to-white"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-adal-green-900 text-adal-gold-400 shadow">
                    <FileText className="h-7 w-7" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-gray-100 px-2.5 py-0.5 text-[10px] font-mono font-bold text-gray-700">
                        {doc.format}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">{doc.fileSize}</span>
                    </div>

                    <h2 className="font-urdu text-lg sm:text-xl font-bold text-adal-green-950 urdu-editorial leading-snug">
                      {isUrdu ? doc.titleUr : doc.titleEn}
                    </h2>

                    <p className="text-xs text-gray-600 leading-relaxed max-w-xl">
                      {isUrdu ? doc.descUr : doc.descEn}
                    </p>
                  </div>
                </div>

                <a
                  href={doc.url}
                  download
                  className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-adal-gold-500 to-adal-gold-600 px-5 py-3 text-xs sm:text-sm font-bold text-adal-green-950 shadow hover:from-adal-gold-400 hover:to-adal-gold-500 transition-all transform hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" />
                  <span>{isUrdu ? "ڈاؤن لوڈ کریں" : "Download PDF"}</span>
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
