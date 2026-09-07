"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18nContext";
import { manifestoPolicies, manifestoCategories } from "@/data/manifesto";
import {
  BookOpen,
  Search,
  Filter,
  ArrowRight,
  ChevronRight,
  Download,
  Sparkles,
  CheckCircle,
  Tag
} from "lucide-react";

export function ManifestoGrid({ showAll = false }: { showAll?: boolean }) {
  const { language, isUrdu, t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPolicies = useMemo(() => {
    return manifestoPolicies.filter((p) => {
      const matchCat = selectedCategory === "all" || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.titleUr.toLowerCase().includes(q) ||
        p.titleEn.toLowerCase().includes(q) ||
        p.summaryUr.toLowerCase().includes(q) ||
        p.summaryEn.toLowerCase().includes(q) ||
        p.number.toString() === q ||
        p.officialTerms?.some((term) => term.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedPolicies = showAll ? filteredPolicies : filteredPolicies.slice(0, 12);

  return (
    <section id="manifesto-grid" className="py-16 sm:py-24 bg-adal-parchment border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-adal-green-900 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3 shadow-sm">
            <BookOpen className="h-3.5 w-3.5 text-adal-gold-400" />
            <span>{isUrdu ? "پاکستان عدل پارٹی — قومی منشور 2026" : "National Manifesto 2026"}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-adal-green-950 tracking-tight">
            {isUrdu ? "35 بنیادی پالیسی شعبہ جات اور انقلابی اصلاحات" : "The 35 Policy Commitments for National Transformation"}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600">
            {isUrdu
              ? "آئینی، معاشی، عدالتی اور سماجی مسائل کا سائنسی اور جامع حل۔ ہر پالیسی پاکستان کے روشن اور باوقار مستقبل کی ضمانت ہے۔"
              : "A rigorous, structural policy agenda grounded in constitutional supremacy, judicial accountability, and production-led sovereignty."}
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mt-8 sm:mt-10 flex flex-col gap-4">
          {/* Category Pills — horizontally scrollable on mobile */}
          <div className="overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-1.5 text-xs min-w-max sm:min-w-0 sm:flex-wrap sm:justify-start">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 rounded-full font-medium transition-all flex-shrink-0 ${
                  selectedCategory === "all"
                    ? "bg-adal-green-900 text-adal-gold-300 font-bold shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {t.cta.filterAll} ({manifestoPolicies.length})
              </button>
              {manifestoCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all flex-shrink-0 ${
                    selectedCategory === cat.id
                      ? "bg-adal-green-900 text-adal-gold-300 font-bold shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {isUrdu ? cat.titleUr : cat.titleEn}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Search — full width on mobile */}
          <div className="relative w-full sm:w-72 sm:self-end">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rtl:left-auto rtl:right-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isUrdu ? "پالیسی تلاش کریں..." : "Filter policies..."}
              className="w-full rounded-full border border-gray-300 bg-white py-2 pl-9 pr-4 text-xs text-gray-900 placeholder-gray-400 focus:border-adal-gold-500 focus:outline-none shadow-sm rtl:pl-4 rtl:pr-9"
            />
          </div>
        </div>

        {/* 35 Policies Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedPolicies.map((policy) => {
            const formattedNumber = policy.number.toString().padStart(2, "0");
            const isPillar35 = policy.number === 35;

            return (
              <div
                key={policy.number}
                className={`group flex flex-col justify-between rounded-xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-institution-lg ${
                  isPillar35
                    ? "border-2 border-adal-gold-500 bg-gradient-to-br from-adal-green-50/50 to-white"
                    : "border-gray-200 hover:border-adal-gold-500/60"
                }`}
              >
                <div>
                  {/* Top Row: Number badge & Category tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-lg font-black text-sm shadow-sm ${
                        isPillar35
                          ? "bg-adal-gold-500 text-adal-green-950 font-black"
                          : "bg-adal-green-900 text-adal-gold-300 group-hover:bg-adal-gold-500 group-hover:text-adal-green-950 transition-colors"
                      }`}
                    >
                      {formattedNumber}
                    </span>

                    <span className="rounded bg-adal-green-50 px-2.5 py-0.5 text-[11px] font-semibold text-adal-green-800 border border-adal-green-200">
                      {isUrdu ? policy.categoryUr : policy.category}
                    </span>
                  </div>

                  {/* Urdu & English Titles */}
                  <h3 className="font-urdu text-xl font-bold text-adal-green-950 group-hover:text-adal-green-800 transition-colors urdu-editorial leading-tight">
                    {policy.titleUr}
                  </h3>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-adal-gold-600">
                    {policy.titleEn}
                  </p>

                  {/* Summary */}
                  <p className="mt-3 text-xs leading-relaxed text-gray-600 line-clamp-3">
                    {isUrdu ? policy.summaryUr : policy.summaryEn}
                  </p>

                  {/* Official Terminology Pills */}
                  {policy.officialTerms && policy.officialTerms.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {policy.officialTerms.map((term, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-700"
                        >
                          <Tag className="h-2.5 w-2.5 text-adal-gold-600" />
                          <span>{term}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action Link */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/manifesto/${policy.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-adal-green-900 group-hover:text-adal-gold-600 transition-colors"
                  >
                    <span>{t.cta.viewPolicy}</span>
                    <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                  </Link>

                  <span className="text-[11px] font-mono text-gray-400">
                    #{formattedNumber}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / Download Footer CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {!showAll && (
            <Link
              href="/manifesto"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-adal-green-900 px-6 py-3 text-sm font-bold text-adal-gold-300 shadow hover:bg-adal-green-800 transition-all"
            >
              <span>{t.cta.exploreAll35}</span>
              <ChevronRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          )}

          <a
            href="/downloads/manshoor-pakistan-adal-party-2026.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-adal-gold-500 bg-white px-6 py-3 text-sm font-bold text-adal-green-950 shadow-sm hover:bg-adal-gold-50 transition-all"
          >
            <Download className="h-4 w-4 text-adal-gold-600" />
            <span>{t.cta.downloadManifesto}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
