"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { partyEvents } from "@/data/partyData";
import { Calendar, MapPin, Clock, ArrowRight, ChevronRight } from "lucide-react";

export default function EventsPage() {
  const { language, isUrdu, t } = useI18n();
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredEvents = partyEvents.filter((e) => {
    if (statusFilter === "all") return true;
    return e.status === statusFilter;
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-adal-surface">
        {/* Banner */}
        <section className="bg-gradient-to-b from-adal-green-950 via-adal-green-900 to-adal-green-950 text-white py-14 sm:py-20 border-b-4 border-adal-gold-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-adal-gold-400/50 bg-adal-green-900/80 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3">
              <Calendar className="h-3.5 w-3.5" />
              <span>{isUrdu ? "پارٹی سرگرمیاں" : "Party Calendar"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-urdu urdu-editorial leading-tight">
              {isUrdu ? "تقاریب، سیمینارز اور کنونشنز" : "Events & Policy Conventions"}
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              {isUrdu
                ? "قومی پالیسی سیمینارز، قانونی مباحث اور عوامی رابطے کے مصدقہ شیڈول کا اندراج۔"
                : "Schedule of national policy conventions, judicial symposia, and grassroots organizational forums."}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Status Tabs */}
            <div className="flex items-center justify-center gap-2 mb-8 text-xs">
              {[
                { id: "all", labelUr: "تمام سرگرمیاں", labelEn: "All Events" },
                { id: "Upcoming", labelUr: "آئندہ تقاریب", labelEn: "Upcoming" },
                { id: "Completed", labelUr: "مکمل شدہ", labelEn: "Completed" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setStatusFilter(tab.id)}
                  className={`px-4 py-2 rounded-lg font-bold transition-all ${
                    statusFilter === tab.id
                      ? "bg-adal-green-900 text-adal-gold-300 shadow-sm"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {isUrdu ? tab.labelUr : tab.labelEn}
                </button>
              ))}
            </div>

            {filteredEvents.length === 0 ? (
              <div className="rounded-xl border border-gray-200 bg-white p-12 text-center text-sm text-gray-500">
                {isUrdu ? "کوئی تقریب موجود نہیں ہے۔" : "No upcoming events scheduled."}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-adal-gold-500/60 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      {/* Date Badge */}
                      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-adal-green-900 text-adal-gold-300 text-center font-bold">
                        <span className="text-xs uppercase leading-none">
                          {new Date(event.eventDate).toLocaleDateString("en-US", { month: "short" })}
                        </span>
                        <span className="text-xl leading-tight">
                          {new Date(event.eventDate).getDate()}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-900">
                            {event.status}
                          </span>
                          <span className="text-xs text-gray-500">{event.city}</span>
                        </div>

                        <h2 className="font-urdu text-lg sm:text-xl font-bold text-adal-green-950 urdu-editorial leading-snug">
                          <Link href={`/events/${event.slug}`} className="hover:text-adal-gold-600">
                            {isUrdu ? event.titleUr : event.titleEn}
                          </Link>
                        </h2>

                        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                          {isUrdu ? event.descriptionUr : event.descriptionEn}
                        </p>

                        <div className="pt-2 flex flex-wrap gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-adal-gold-600" />
                            <span>{isUrdu ? event.locationUr : event.locationEn}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-adal-gold-600" />
                            <span>{event.eventTime}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/events/${event.slug}`}
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-adal-green-900 px-4 py-2.5 text-xs font-bold text-adal-gold-300 hover:bg-adal-green-800 transition-colors shadow"
                    >
                      <span>{isUrdu ? "تفصیلات دیکھیں" : "View Details"}</span>
                      <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
                    </Link>
                  </div>
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
