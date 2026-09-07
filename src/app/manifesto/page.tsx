"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { manifestoPolicies, manifestoCategories } from "@/data/manifesto";
import { ManifestoGrid } from "@/components/home/ManifestoGrid";
import { Pakistan2036Section } from "@/components/home/Pakistan2036Section";
import { BookOpen, Download, Printer, Share2, Scale, ChevronRight, FileText } from "lucide-react";

export default function ManifestoPage() {
  const { language, isUrdu, t } = useI18n();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Editorial Manifesto Hero */}
        <section className="bg-gradient-to-b from-adal-green-950 via-adal-green-900 to-adal-green-950 text-white py-14 sm:py-20 border-b-4 border-adal-gold-500 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-adal-gold-400/50 bg-adal-green-900/80 px-4 py-1 text-xs font-bold text-adal-gold-300 mb-4">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{isUrdu ? "سرکاری آئینی دستاویز" : "Official Policy Charter"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-urdu urdu-editorial tracking-tight text-white leading-tight">
              {isUrdu ? "پاکستان عدل پارٹی — قومی منشور 2026" : "Pakistan Adal Party — National Manifesto 2026"}
            </h1>

            <p className="mt-4 text-lg sm:text-2xl font-urdu font-medium text-adal-gold-200 urdu-editorial max-w-3xl mx-auto">
              "امن، انصاف، ترقی اور مساوات سب کے لیے"
            </p>

            <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              {isUrdu
                ? "35 جامع اور انقلابی پالیسی شعبہ جات اور دس سالہ قومی ترقیاتی منصوبہ (پاکستان 2036)"
                : "35 Principal Policy Areas and the Pakistan 2036 National Transformation Plan"}
            </p>

            {/* Document Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/downloads/manshoor-pakistan-adal-party-2026.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-adal-gold-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-adal-green-950 hover:bg-adal-gold-400 transition-colors shadow"
              >
                <Download className="h-4 w-4" />
                <span>{t.cta.downloadManifesto}</span>
              </a>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-lg border border-adal-gold-400/60 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-adal-gold-300 hover:bg-white/20 transition-colors"
              >
                <Printer className="h-4 w-4" />
                <span>{t.cta.print}</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-600 bg-white/5 px-4 py-2.5 text-xs sm:text-sm text-gray-200 hover:bg-white/10 transition-colors"
              >
                <Share2 className="h-4 w-4 text-adal-gold-400" />
                <span>{copied ? (isUrdu ? "لنک کاپی ہو گیا!" : "Link Copied!") : t.cta.share}</span>
              </button>
            </div>
          </div>
        </section>

        {/* LAYER 1: Category Architecture Overview */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-adal-gold-600 uppercase tracking-widest">
                Layer 1: Structural Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-adal-green-950 font-urdu urdu-editorial mt-1">
                {isUrdu ? "منشور کے اہم تنظیمی شعبہ جات" : "Manifesto Policy Pillars"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {manifestoCategories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-adal-gold-500/50 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded bg-adal-green-50 px-2.5 py-0.5 text-xs font-bold text-adal-green-900 border border-adal-green-200">
                      {category.policyNumbers.length} {isUrdu ? "پالیسیاں" : "Policies"}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      #{category.policyNumbers.join(", #")}
                    </span>
                  </div>

                  <h3 className="font-urdu text-lg font-bold text-adal-green-950 urdu-editorial leading-tight">
                    {isUrdu ? category.titleUr : category.titleEn}
                  </h3>

                  <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                    {isUrdu ? category.descriptionUr : category.descriptionEn}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                    {category.policyNumbers.map((num) => {
                      const p = manifestoPolicies.find((pol) => pol.number === num);
                      if (!p) return null;
                      return (
                        <Link
                          key={num}
                          href={`/manifesto/${p.slug}`}
                          className="rounded bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-adal-green-900 hover:bg-adal-gold-100 transition-colors"
                        >
                          #{num} {isUrdu ? p.titleUr.split(":")[0] : p.titleEn.split(":")[0]}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LAYER 2: All 35 Policy Areas Grid with search and category filters */}
        <ManifestoGrid showAll={true} />

        {/* Centerpiece 2036 National Transformation Plan */}
        <Pakistan2036Section />
      </main>

      <Footer />
    </div>
  );
}
