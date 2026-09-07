"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { newsArticles } from "@/data/partyData";
import { Newspaper, Calendar, ArrowUpRight, Search, ChevronRight } from "lucide-react";

export default function NewsPage() {
  const { language, isUrdu, t } = useI18n();
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [query, setQuery] = useState<string>("");

  const categories = ["all", "Official Announcement", "Policy Analysis", "Party Organization"];

  const filteredNews = newsArticles.filter((n) => {
    const matchCat = categoryFilter === "all" || n.category === categoryFilter;
    const q = query.toLowerCase().trim();
    const matchQ =
      !q ||
      n.titleUr.toLowerCase().includes(q) ||
      n.titleEn.toLowerCase().includes(q) ||
      n.summaryUr.toLowerCase().includes(q) ||
      n.summaryEn.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-adal-surface">
        {/* Banner */}
        <section className="bg-gradient-to-b from-adal-green-950 via-adal-green-900 to-adal-green-950 text-white py-14 sm:py-20 border-b-4 border-adal-gold-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-adal-gold-400/50 bg-adal-green-900/80 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3">
              <Newspaper className="h-3.5 w-3.5" />
              <span>{isUrdu ? "مرکزی پریس سیل" : "Official Media Secretariat"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white font-urdu urdu-editorial leading-tight">
              {isUrdu ? "خبریں، بیانات اور تجزیاتی رپورٹس" : "Official News & Statements"}
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              {isUrdu
                ? "پاکستان عدل پارٹی کے مصدقہ پالیسی بیانات اور تنظیمی سرگرمیوں کا مستند ریکارڈ۔"
                : "Authenticated statements, policy briefs, and verified communiqués from the central secretariat."}
            </p>
          </div>
        </section>

        {/* Content & Filter Bar */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                      categoryFilter === cat
                        ? "bg-adal-green-900 text-adal-gold-300 shadow-sm"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {cat === "all" ? (isUrdu ? "تمام خبریں" : "All Categories") : cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rtl:left-auto rtl:right-3" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={isUrdu ? "خبر تلاش کریں..." : "Search articles..."}
                  className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-4 text-xs text-gray-900 focus:border-adal-gold-500 focus:outline-none shadow-sm rtl:pl-4 rtl:pr-9"
                />
              </div>
            </div>

            {/* Articles List */}
            {filteredNews.length === 0 ? (
              <div className="rounded-xl border border-gray-200 bg-white p-12 text-center text-sm text-gray-500">
                {isUrdu ? "کوئی خبر دستیاب نہیں ہے۔" : "News will be published here."}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((art) => (
                  <article
                    key={art.id}
                    className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-adal-gold-500/60 hover:shadow-institution-lg transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span className="rounded bg-adal-green-50 px-2.5 py-0.5 text-[11px] font-bold text-adal-green-900 border border-adal-green-200">
                          {art.category}
                        </span>
                        <time dateTime={art.publishedAt}>
                          {new Date(art.publishedAt).toLocaleDateString(language === "ur" ? "ur-PK" : "en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>

                      <h2 className="font-urdu text-xl font-bold text-adal-green-950 group-hover:text-adal-green-800 transition-colors urdu-editorial leading-snug">
                        <Link href={`/news/${art.slug}`}>
                          {isUrdu ? art.titleUr : art.titleEn}
                        </Link>
                      </h2>

                      <p className="mt-3 text-xs leading-relaxed text-gray-600 line-clamp-3">
                        {isUrdu ? art.summaryUr : art.summaryEn}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
                      <Link
                        href={`/news/${art.slug}`}
                        className="inline-flex items-center gap-1 text-adal-green-900 group-hover:text-adal-gold-600"
                      >
                        <span>{isUrdu ? "مکمل خبر پڑھیں" : "Read Full Story"}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>

                      <span className="text-[11px] font-normal text-gray-400">
                        {art.author}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
