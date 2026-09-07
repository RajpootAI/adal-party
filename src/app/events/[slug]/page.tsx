"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { partyEvents } from "@/data/partyData";
import { Calendar, MapPin, Clock, ArrowLeft, Share2, CheckCircle2, ChevronRight } from "lucide-react";

export default function EventDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { language, isUrdu, t } = useI18n();
  const [registered, setRegistered] = useState(false);

  const event = partyEvents.find((e) => e.slug === slug);
  if (!event) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="bg-adal-green-950 text-gray-300 py-4 border-b border-adal-gold-500/20 text-xs">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/events" className="hover:text-adal-gold-300 transition-colors">
                {t.nav.events}
              </Link>
              <span>/</span>
              <span className="text-gray-400 truncate max-w-[200px] sm:max-w-md">
                {isUrdu ? event.titleUr : event.titleEn}
              </span>
            </div>

            <Link href="/events" className="inline-flex items-center gap-1 text-adal-gold-300 hover:text-white">
              <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
              <span>{isUrdu ? "تمام سرگرمیاں" : "Back to Events"}</span>
            </Link>
          </div>
        </div>

        {/* Event Detail Container */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <span className="rounded bg-emerald-100 px-2.5 py-0.5 font-bold text-emerald-900">
                  {event.status}
                </span>
                <span>•</span>
                <span className="font-semibold text-adal-green-950">{event.city}</span>
              </div>

              <h1 className="font-urdu text-2xl sm:text-4xl font-extrabold text-adal-green-950 leading-tight urdu-editorial">
                {isUrdu ? event.titleUr : event.titleEn}
              </h1>

              <div className="mt-4 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-600 pb-4 border-b border-gray-100">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="h-4 w-4 text-adal-gold-600" />
                  <span>
                    {new Date(event.eventDate).toLocaleDateString(language === "ur" ? "ur-PK" : "en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </span>

                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="h-4 w-4 text-adal-gold-600" />
                  <span>{event.eventTime}</span>
                </span>

                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="h-4 w-4 text-adal-gold-600" />
                  <span>{isUrdu ? event.locationUr : event.locationEn}</span>
                </span>
              </div>
            </div>

            {/* Description & Agenda */}
            <div className="rounded-2xl border border-gray-200 bg-adal-surface p-6 sm:p-8 space-y-4">
              <h2 className="text-base font-bold text-adal-green-950">
                {isUrdu ? "تقریب کی تفصیلات و مقاصد" : "Event Objectives & Program Agenda"}
              </h2>
              <p className="font-urdu text-sm sm:text-base text-gray-800 leading-loose urdu-editorial">
                {isUrdu ? event.descriptionUr : event.descriptionEn}
              </p>
            </div>

            {/* Registration CTA Card */}
            <div className="rounded-2xl border-2 border-adal-gold-400 bg-gradient-to-r from-adal-green-950 to-adal-green-900 p-6 sm:p-8 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-adal-gold-300 font-urdu urdu-editorial">
                  {isUrdu ? "اس تقریب میں بطور مندوب شرکت کریں" : "Register as an Official Delegate"}
                </h3>
                <p className="mt-1 text-xs text-gray-300">
                  {isUrdu
                    ? "سیمینار میں شرکت کے لیے سیٹ محفوظ کروائیں۔"
                    : "Reserve your seat for this policy deliberation and symposium."}
                </p>
              </div>

              {registered ? (
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-5 py-2.5 text-xs font-bold text-white">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{isUrdu ? "رجسٹریشن موصول ہو گئی" : "Seat Reserved"}</span>
                </div>
              ) : (
                <button
                  onClick={() => setRegistered(true)}
                  className="rounded-lg bg-adal-gold-500 px-6 py-3 text-xs sm:text-sm font-bold text-adal-green-950 hover:bg-adal-gold-400 transition-colors shadow shrink-0"
                >
                  {isUrdu ? "آن لائن رجسٹریشن کریں" : "Register Now"}
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
