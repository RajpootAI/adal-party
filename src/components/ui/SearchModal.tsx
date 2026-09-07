"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18nContext";
import { manifestoPolicies } from "@/data/manifesto";
import { newsArticles, partyEvents } from "@/data/partyData";
import { Search, X, ChevronRight, BookOpen, Newspaper, Calendar } from "lucide-react";

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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

    // Search Policies
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

    // Search News
    newsArticles.forEach((n) => {
      const match =
        n.titleUr.toLowerCase().includes(q) ||
        n.titleEn.toLowerCase().includes(q) ||
        n.summaryUr.toLowerCase().includes(q) ||
        n.summaryEn.toLowerCase().includes(q);
      if (match) {
        results.push({
          id: n.id,
          type: "news",
          title: isUrdu ? n.titleUr : n.titleEn,
          snippet: isUrdu ? n.summaryUr : n.summaryEn,
          href: `/news/${n.slug}`,
        });
      }
    });

    // Search Events
    partyEvents.forEach((e) => {
      const match =
        e.titleUr.toLowerCase().includes(q) ||
        e.titleEn.toLowerCase().includes(q) ||
        e.descriptionUr.toLowerCase().includes(q) ||
        e.descriptionEn.toLowerCase().includes(q) ||
        e.city.toLowerCase().includes(q);
      if (match) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 pt-20 animate-in fade-in">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-adal-gold-500/40 bg-white shadow-2xl">
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-gray-200 bg-adal-green-950 p-4 text-white">
          <Search className="h-5 w-5 text-adal-gold-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isUrdu ? "منشور کے 35 شعبہ جات، خبریں یا تقاریب تلاش کریں..." : "Search 35 policy areas, news, or events..."}
            className="w-full bg-transparent px-3 text-white placeholder-gray-400 focus:outline-none text-base"
          />
          <button
            onClick={onClose}
            className="rounded p-1.5 text-gray-300 hover:bg-white/10 hover:text-white"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {query.trim() === "" ? (
            <div className="py-8 text-center text-sm text-gray-500">
              <p className="font-medium text-gray-700">
                {isUrdu ? "منشور کے اہم الفاظ لکھ کر تلاش کریں:" : "Popular search queries:"}
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {["کیس کیلنڈر", "Case Calendar", "نئے صوبے", "New Provinces", "CPEC 2.0", "AI-assisted", "Agri-Business", "رکنیت"].map((kw) => (
                  <button
                    key={kw}
                    onClick={() => setQuery(kw)}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-adal-green-900 hover:bg-adal-gold-100 hover:text-adal-green-950 transition-colors"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-10 text-center text-sm text-gray-500">
              <p className="text-base font-semibold text-gray-800">
                {isUrdu ? "کوئی نتیجہ نہیں ملا" : "No results found"}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {isUrdu ? `"${query}" کے لیے کوئی ریکارڈ دستیاب نہیں ہے۔` : `No records matched "${query}". Try another term.`}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1">
                {isUrdu ? `${searchResults.length} نتائج موصول ہوئے` : `${searchResults.length} Results Found`}
              </div>
              {searchResults.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-start justify-between rounded-lg p-3 hover:bg-adal-green-50 border border-transparent hover:border-adal-gold-500/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded bg-adal-green-900 text-adal-gold-400 text-xs">
                      {item.type === "policy" && <BookOpen className="h-3.5 w-3.5" />}
                      {item.type === "news" && <Newspaper className="h-3.5 w-3.5" />}
                      {item.type === "event" && <Calendar className="h-3.5 w-3.5" />}
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-adal-green-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 line-clamp-2 text-xs text-gray-600">
                        {item.snippet}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-adal-green-800 self-center shrink-0 rtl:rotate-180" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
