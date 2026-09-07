"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { manifestoPolicies } from "@/data/manifesto";
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Share2,
  Printer,
  ChevronRight,
  CheckCircle2,
  Tag,
  Scale,
  Shield,
  Milestone
} from "lucide-react";

export default function PolicyDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { language, isUrdu, t } = useI18n();
  const [copied, setCopied] = useState(false);

  const policy = manifestoPolicies.find((p) => p.slug === slug);
  if (!policy) {
    notFound();
  }

  const currentIndex = manifestoPolicies.findIndex((p) => p.slug === slug);
  const prevPolicy = currentIndex > 0 ? manifestoPolicies[currentIndex - 1] : null;
  const nextPolicy = currentIndex < manifestoPolicies.length - 1 ? manifestoPolicies[currentIndex + 1] : null;

  const relatedPolicies = manifestoPolicies
    .filter((p) => p.category === policy.category && p.number !== policy.number)
    .slice(0, 3);

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

  const formattedNum = policy.number.toString().padStart(2, "0");

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="bg-adal-green-950 text-gray-300 py-4 border-b border-adal-gold-500/20 text-xs">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/manifesto" className="hover:text-adal-gold-300 transition-colors">
                {t.nav.manifesto}
              </Link>
              <span>/</span>
              <span className="text-adal-gold-400 font-mono">#{formattedNum}</span>
              <span>/</span>
              <span className="text-gray-400 truncate max-w-[200px] sm:max-w-md">
                {isUrdu ? policy.titleUr : policy.titleEn}
              </span>
            </div>

            <Link
              href="/manifesto"
              className="hidden sm:inline-flex items-center gap-1 text-adal-gold-300 hover:text-white"
            >
              <span>{t.cta.backToManifesto}</span>
            </Link>
          </div>
        </div>

        {/* Policy Header Banner */}
        <section className="bg-gradient-to-b from-adal-green-900 to-adal-green-950 text-white py-12 sm:py-16 border-b-2 border-adal-gold-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-adal-gold-500 text-adal-green-950 font-black text-xl shadow-lg">
                {formattedNum}
              </span>

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded bg-adal-green-800 px-3 py-1 text-xs font-bold text-adal-gold-300 border border-adal-gold-500/30">
                  {isUrdu ? policy.categoryUr : policy.category}
                </span>

                <span className="rounded bg-white/10 px-2.5 py-0.5 text-xs text-gray-300">
                  National Manifesto 2026
                </span>
              </div>
            </div>

            <h1 className="font-urdu text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight urdu-editorial">
              {policy.titleUr}
            </h1>

            <p className="mt-2 text-sm sm:text-lg font-semibold uppercase tracking-wider text-adal-gold-400">
              {policy.titleEn}
            </p>

            {/* Quick Actions */}
            <div className="mt-6 pt-6 border-t border-adal-green-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 rounded bg-white/10 px-3 py-1.5 text-xs text-gray-200 hover:bg-white/20 transition-colors"
                >
                  <Share2 className="h-3.5 w-3.5 text-adal-gold-400" />
                  <span>{copied ? (isUrdu ? "لنک کاپی ہو گیا!" : "Link Copied!") : t.cta.share}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 rounded bg-white/10 px-3 py-1.5 text-xs text-gray-200 hover:bg-white/20 transition-colors"
                >
                  <Printer className="h-3.5 w-3.5 text-adal-gold-400" />
                  <span>{t.cta.print}</span>
                </button>
              </div>

              <a
                href="/downloads/manshoor-pakistan-adal-party-2026.pdf"
                download
                className="text-xs text-adal-gold-300 hover:underline"
              >
                {isUrdu ? "سرکاری منشور پی ڈی ایف ڈاؤن لوڈ کریں" : "Download Official Manifesto PDF"}
              </a>
            </div>
          </div>
        </section>

        {/* Policy Content Container */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Official Terminology Tags */}
            {policy.officialTerms && policy.officialTerms.length > 0 && (
              <div className="rounded-xl border border-adal-gold-500/30 bg-adal-green-50/50 p-4">
                <div className="text-xs font-bold text-adal-green-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Tag className="h-3.5 w-3.5 text-adal-gold-600" />
                  <span>{isUrdu ? "سرکاری منشور کی مخصوص اصطلاحات" : "Official Manifesto Terminology"}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {policy.officialTerms.map((term, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-white border border-adal-gold-400 px-3 py-1 text-xs font-bold text-adal-green-900 shadow-sm"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Official Policy Text in Urdu (Authoritative) */}
            <div className="rounded-xl border-2 border-adal-green-900/20 bg-adal-surface p-6 sm:p-8">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-200 mb-4">
                <span className="h-3 w-3 rounded-full bg-adal-green-900"></span>
                <h2 className="font-urdu text-xl font-bold text-adal-green-950 urdu-editorial">
                  سرکاری منشور کا مستند متن (اردو)
                </h2>
              </div>
              <div className="font-urdu text-base sm:text-xl leading-loose text-gray-800 whitespace-pre-line urdu-editorial">
                {policy.fullTextUr}
              </div>
            </div>

            {/* Faithful English Translation */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-200 mb-4">
                <span className="h-3 w-3 rounded-full bg-adal-gold-500"></span>
                <h2 className="text-lg font-bold text-adal-green-950 uppercase tracking-wide">
                  Official Policy Declaration (English Translation)
                </h2>
              </div>
              <div className="text-sm sm:text-base leading-relaxed text-gray-700 whitespace-pre-line">
                {policy.fullTextEn}
              </div>
            </div>

            {/* Key Action Points */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <h3 className="text-base sm:text-lg font-bold text-adal-green-950 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-adal-green-700" />
                <span>{isUrdu ? "اہم ترین پالیسی نکات اور اقدامات" : "Key Legislative & Operational Commitments"}</span>
              </h3>
              <ul className="space-y-3">
                {(isUrdu ? policy.keyPointsUr : policy.keyPointsEn).map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
                    <span className="mt-1 h-2 w-2 rounded-full bg-adal-gold-500 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prev / Next Policy Navigation */}
            <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevPolicy ? (
                <Link
                  href={`/manifesto/${prevPolicy.slug}`}
                  className="w-full sm:w-auto inline-flex items-center gap-2 rounded-lg border border-gray-300 p-3 hover:border-adal-gold-500 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 text-adal-gold-600 rtl:rotate-180" />
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-mono">Previous Policy</span>
                    <p className="text-xs font-bold text-adal-green-950">
                      #{prevPolicy.number} {isUrdu ? prevPolicy.titleUr.split(":")[0] : prevPolicy.titleEn.split(":")[0]}
                    </p>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}

              {nextPolicy ? (
                <Link
                  href={`/manifesto/${nextPolicy.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-end gap-2 rounded-lg border border-gray-300 p-3 hover:border-adal-gold-500 transition-colors text-right"
                >
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-mono">Next Policy</span>
                    <p className="text-xs font-bold text-adal-green-950">
                      #{nextPolicy.number} {isUrdu ? nextPolicy.titleUr.split(":")[0] : nextPolicy.titleEn.split(":")[0]}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-adal-gold-600 rtl:rotate-180" />
                </Link>
              ) : (
                <div></div>
              )}
            </div>

            {/* Related Policies in Same Category */}
            {relatedPolicies.length > 0 && (
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                  {isUrdu ? "اسی شعبے سے متعلق دیگر پالیسیاں" : "Related Policies in this Category"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedPolicies.map((rel) => (
                    <Link
                      key={rel.number}
                      href={`/manifesto/${rel.slug}`}
                      className="rounded-lg border border-gray-200 p-4 hover:border-adal-gold-500 hover:shadow-sm transition-all"
                    >
                      <span className="text-xs font-mono font-bold text-adal-gold-600">
                        #{rel.number.toString().padStart(2, "0")}
                      </span>
                      <h4 className="font-urdu font-bold text-adal-green-950 text-sm mt-1 leading-snug">
                        {isUrdu ? rel.titleUr : rel.titleEn}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
