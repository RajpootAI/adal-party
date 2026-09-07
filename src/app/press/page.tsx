"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { pressReleases } from "@/data/partyData";
import { FileText, Calendar, Download, Share2, Printer } from "lucide-react";

export default function PressPage() {
  const { language, isUrdu, t } = useI18n();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-adal-surface">
        {/* Banner */}
        <section className="bg-gradient-to-b from-adal-green-950 via-adal-green-900 to-adal-green-950 text-white py-14 sm:py-20 border-b-4 border-adal-gold-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-adal-gold-400/50 bg-adal-green-900/80 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3">
              <FileText className="h-3.5 w-3.5" />
              <span>{isUrdu ? "مرکزی پریس بیانات" : "Official Press Releases"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-urdu urdu-editorial leading-tight">
              {isUrdu ? "سرکاری پریس ریلیز اور قانونی اعلانات" : "Press Releases & Official Communiqués"}
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              {isUrdu
                ? "مرکزی میڈیا سیل کی جانب سے جاری کردہ باضابطہ اعلامیے اور بیانات۔"
                : "Authenticated communiqués, policy briefings, and official resolutions."}
            </p>
          </div>
        </section>

        {/* Press Releases List */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {pressReleases.map((release) => (
              <article
                key={release.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:border-adal-gold-500/60 hover:shadow-md transition-all space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-100 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-adal-green-900 bg-adal-green-50 px-2.5 py-0.5 rounded border border-adal-green-200">
                      {release.releaseNumber}
                    </span>
                    <span>•</span>
                    <time dateTime={release.publishedDate}>
                      {new Date(release.publishedDate).toLocaleDateString(language === "ur" ? "ur-PK" : "en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    Official Release
                  </span>
                </div>

                <h2 className="font-urdu text-xl sm:text-2xl font-bold text-adal-green-950 urdu-editorial leading-snug">
                  {isUrdu ? release.titleUr : release.titleEn}
                </h2>

                <p className="font-urdu text-sm sm:text-base text-gray-700 leading-loose urdu-editorial">
                  {isUrdu ? release.contentUr : release.contentEn}
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Central Media Cell • Islamabad</span>
                  <a
                    href="/downloads/manshoor-pakistan-adal-party-2026.pdf"
                    download
                    className="inline-flex items-center gap-1.5 font-bold text-adal-green-900 hover:text-adal-gold-600"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>{isUrdu ? "منشور پی ڈی ایف" : "Download PDF"}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
