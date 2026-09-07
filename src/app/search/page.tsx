"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { manifestoPolicies } from "@/data/manifesto";
import { newsArticles, partyEvents } from "@/data/partyData";
import { Search, BookOpen, Newspaper, Calendar, ChevronRight } from "lucide-react";

export default function SearchPage() {
  const { language, isUrdu, t } = useI18n();
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const results: Array<{
      id: string;
      type: "policy" | "news" | "event";
      title: string;
      snippet: string;
      href: string;
    }> = [];

    manifestoPolicies.forEach((p) => {
      const matchUr =
        p.titleUr.toLowerCase().includes(q) ||
        p.summaryUr.toLowerCase().includes(q) ||
        p.fullTextUr.toLowerCase().includes(q);
      const matchEn =
        p.titleEn.toLowerCase().includes(q) ||
        p.summaryEn.toLowerCase().includes(q) ||
        p.fullTextEn.toLowerCase().includes(q);
      const matchTerms = p.officialTerms?.some((term) => term.toLowerCase().includes(q));

      if (matchUr || matchEn || matchTerms) {
        results.push({
          id: `pol-${p.number}`,
          type: "policy",
          title: `${p.number}. ${isUrdu ? p.titleUr : p.titleEn}`,
          snippet: isUrdu ? p.summaryUr : p.summaryEn,
          href: `/manifesto/${p.slug}`,
        });
      }
    });

    newsArticles.forEach((n) => {
      if (
        n.titleUr.toLowerCase().includes(q) ||
        n.titleEn.toLowerCase().includes(q) ||
        n.summaryUr.toLowerCase().includes(q) ||
        n.summaryEn.toLowerCase().includes(q)
      ) {
        results.push({
          id: n.id,
          type: "news",
          title: isUrdu ? n.titleUr : n.titleEn,
          snippet: isUrdu ? n.summaryUr : n.summaryEn,
          href: `/news/${n.slug}`,
        });
      }
    });

    partyEvents.forEach((e) => {
      if (
        e.titleUr.toLowerCase().includes(q) ||
        e.titleEn.toLowerCase().includes(q) ||
        e.city.toLowerCase().includes(q)
      ) {
        results.push({
          id: e.id,
          type: "event",
          title: isUrdu ? e.titleUr : e.titleEn,
          snippet: `${e.city} — ${e.eventDate}`,
          href: `/events/${e.slug}`,
        });
      }
    });

    return results;
  }, [query, isUrdu]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-adal-surface py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-adal-green-950 font-urdu urdu-editorial leading-tight">
              {isUrdu ? "پورٹل تلاش و تحقیقی انڈیکس" : "Platform Search Index"}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              {isUrdu
                ? "قومی منشور کے 35 شعبہ جات، بیانات اور پارٹی سرگرمیوں میں بیک وقت تلاش کریں۔"
                : "Search across the 35 manifesto policy areas, legal papers, news, and official events."}
            </p>
          </div>

          {/* Search Input */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 rtl:left-auto rtl:right-4" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isUrdu ? "کوئی بھی لفظ لکھیں (مثلاً: کیس کیلنڈر، ٹیکس، گوادر، پولیس)..." : "Enter search query (e.g. Case Calendar, Gwadar, Police, CPEC)..."}
                className="w-full rounded-xl border border-gray-300 py-3.5 pl-12 pr-4 text-sm text-gray-900 focus:border-adal-gold-500 focus:outline-none rtl:pl-4 rtl:pr-12 shadow-sm"
              />
            </div>
          </div>

          {/* Results List */}
          {query.trim() !== "" && (
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 px-1">
                {searchResults.length} {isUrdu ? "نتائج" : "Matches Found"}
              </div>

              {searchResults.length === 0 ? (
                <div className="rounded-xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500">
                  {isUrdu ? "کوئی ریکارڈ دستیاب نہیں ہے۔" : "No results found."}
                </div>
              ) : (
                searchResults.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex items-start justify-between rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:border-adal-gold-500/60 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-adal-green-900 text-adal-gold-400">
                        {item.type === "policy" && <BookOpen className="h-4 w-4" />}
                        {item.type === "news" && <Newspaper className="h-4 w-4" />}
                        {item.type === "event" && <Calendar className="h-4 w-4" />}
                      </span>

                      <div>
                        <h3 className="font-urdu text-base sm:text-lg font-bold text-adal-green-950 group-hover:text-adal-green-800 transition-colors urdu-editorial leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs text-gray-600 line-clamp-2 leading-relaxed">
                          {item.snippet}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-adal-green-900 self-center shrink-0 rtl:rotate-180" />
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
