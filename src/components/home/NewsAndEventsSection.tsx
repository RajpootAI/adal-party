"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18nContext";
import { newsArticles, partyEvents } from "@/data/partyData";
import { Newspaper, Calendar, MapPin, Clock, ChevronRight, ArrowUpRight } from "lucide-react";

export function NewsAndEventsSection() {
  const { language, isUrdu, t } = useI18n();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Latest News (8 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b-2 border-adal-green-900">
              <div className="flex items-center gap-2">
                <Newspaper className="h-5 w-5 text-adal-gold-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-adal-green-950">
                  {t.nav.news}
                </h2>
              </div>
              <Link
                href="/news"
                className="text-xs font-bold text-adal-green-900 hover:text-adal-gold-600 flex items-center gap-1"
              >
                <span>{isUrdu ? "تمام خبریں" : "View All News"}</span>
                <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </Link>
            </div>

            <div className="space-y-4">
              {newsArticles.slice(0, 2).map((article) => (
                <article
                  key={article.id}
                  className="rounded-xl border border-gray-200 p-5 hover:border-adal-gold-500/50 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span className="rounded bg-adal-green-50 px-2 py-0.5 font-semibold text-adal-green-800">
                      {article.category}
                    </span>
                    <span>•</span>
                    <time dateTime={article.publishedAt}>
                      {new Date(article.publishedAt).toLocaleDateString(language === "ur" ? "ur-PK" : "en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <h3 className="font-urdu text-lg sm:text-xl font-bold text-adal-green-950 group-hover:text-adal-green-800 transition-colors urdu-editorial leading-snug">
                    <Link href={`/news/${article.slug}`}>
                      {isUrdu ? article.titleUr : article.titleEn}
                    </Link>
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {isUrdu ? article.summaryUr : article.summaryEn}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-adal-green-900 group-hover:text-adal-gold-600"
                    >
                      <span>{isUrdu ? "مکمل بیان پڑھیں" : "Read Full Statement"}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <span className="text-[11px] text-gray-400">{article.author}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Upcoming Events (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b-2 border-adal-gold-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-adal-green-900" />
                <h2 className="text-xl sm:text-2xl font-bold text-adal-green-950">
                  {t.nav.events}
                </h2>
              </div>
              <Link
                href="/events"
                className="text-xs font-bold text-adal-green-900 hover:text-adal-gold-600 flex items-center gap-1"
              >
                <span>{isUrdu ? "تمام سرگرمیاں" : "View Events"}</span>
                <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </Link>
            </div>

            <div className="space-y-3.5">
              {partyEvents.slice(0, 2).map((event) => (
                <div
                  key={event.id}
                  className="rounded-xl border border-gray-200 bg-adal-surface p-4 hover:border-adal-gold-500/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    {/* Date Block */}
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-adal-green-900 text-adal-gold-300 font-bold text-center p-1">
                      <span className="text-xs uppercase leading-none">
                        {new Date(event.eventDate).toLocaleDateString("en-US", { month: "short" })}
                      </span>
                      <span className="text-lg leading-tight">
                        {new Date(event.eventDate).getDate()}
                      </span>
                    </div>

                    <div>
                      <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-900">
                        {event.status}
                      </span>

                      <h4 className="mt-1 font-bold text-adal-green-950 text-sm leading-snug">
                        <Link href={`/events/${event.slug}`} className="hover:text-adal-gold-600">
                          {isUrdu ? event.titleUr : event.titleEn}
                        </Link>
                      </h4>

                      <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-adal-gold-600" />
                          <span>{event.city}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-adal-gold-600" />
                          <span>{event.eventTime}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
