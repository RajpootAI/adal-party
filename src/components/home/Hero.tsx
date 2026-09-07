"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18nContext";
import {
  BookOpen,
  UserPlus,
  HeartHandshake,
  Scale,
  ArrowRight,
} from "lucide-react";

export function Hero() {
  const { language, isUrdu, t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-adal-green-950 via-adal-green-900 to-adal-green-950 text-white pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b-4 border-adal-gold-500">
      {/* Subtle Geometric Motif Background */}
      <div className="absolute inset-0 hero-pattern opacity-40 pointer-events-none"></div>

      {/* Decorative Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[650px] h-[300px] sm:h-[500px] lg:h-[650px] bg-adal-green-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center w-full">
          {/* Official Emblem Logo */}
          <div className="relative mb-5 sm:mb-6 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-adal-gold-400 via-adal-gold-500 to-adal-gold-300 opacity-70 blur group-hover:opacity-100 transition duration-500"></div>
            <div className="relative h-24 w-24 sm:h-32 sm:w-32 lg:h-36 lg:w-36 rounded-full border-4 border-adal-gold-400 bg-white p-1 shadow-2xl overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Pakistan Adal Party Official Emblem"
                width={144}
                height={144}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Badge: Official Positioning */}
          <div className="inline-flex items-center gap-2 rounded-full border border-adal-gold-400/50 bg-adal-green-900/80 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold text-adal-gold-300 backdrop-blur-md mb-5 sm:mb-6 shadow-sm max-w-full">
            <Scale className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-adal-gold-400 flex-shrink-0" />
            <span className="truncate">
              {isUrdu ? "پاکستان عدل پارٹی — قومی منشور 2026" : "Pakistan Adal Party — National Manifesto 2026"}
            </span>
          </div>

          {/* Primary Thematic Statement */}
          <h1 className="w-full max-w-5xl">
            {isUrdu ? (
              <span className="font-urdu font-black block urdu-editorial text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white">
                امن، انصاف، ترقی اور مساوات سب کے لیے
              </span>
            ) : (
              <span className="block text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-tight">
                Peace, Justice, Development and Equality for All
              </span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 w-full max-w-3xl text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed font-light">
            {isUrdu ? (
              <span className="font-urdu text-base sm:text-xl urdu-editorial leading-relaxed block text-gray-100">
                ایک قوم، ایک ریاست، ایک آئین، ایک قومی شناخت اور متعدد انتظامی اکائیاں — ریاست کسی خاندان، جماعت یا طبقے کی جاگیر نہیں، پاکستان کے ہر شہری کی امانت ہے۔
              </span>
            ) : (
              <span>
                One Nation, One State, One Constitution, One Supreme Rule of Law. Re-engineering Pakistan's governance through 35 foundational policy commitments and the Pakistan 2036 National Transformation Plan.
              </span>
            )}
          </p>

          {/* Action CTAs — stacked on mobile, row on sm+ */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full max-w-xl sm:max-w-2xl">
            <Link
              href="/membership"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-adal-gold-400 via-adal-gold-500 to-adal-gold-600 px-6 py-3.5 text-sm sm:text-base font-bold text-adal-green-950 shadow-lg hover:from-adal-gold-300 hover:to-adal-gold-500 transition-all transform hover:-translate-y-0.5"
            >
              <UserPlus className="h-5 w-5 flex-shrink-0" />
              <span>{t.cta.join}</span>
            </Link>

            <Link
              href="/manifesto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border-2 border-adal-gold-400/80 bg-adal-green-900/60 px-6 py-3.5 text-sm sm:text-base font-semibold text-adal-gold-300 backdrop-blur hover:bg-adal-gold-500/20 transition-all"
            >
              <BookOpen className="h-5 w-5 flex-shrink-0" />
              <span>{t.cta.readManifesto}</span>
            </Link>

            <div className="flex w-full sm:w-auto gap-3">
              <Link
                href="/volunteer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white hover:bg-white/20 transition-all"
              >
                <HeartHandshake className="h-4 w-4 text-adal-gold-400 flex-shrink-0" />
                <span>{t.cta.becomeVolunteer}</span>
              </Link>

              <Link
                href="/donate"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg bg-adal-green-800/80 border border-adal-gold-500/30 px-4 py-3 text-sm font-medium text-adal-gold-300 hover:bg-adal-green-800 transition-all"
              >
                <span>{t.nav.donate}</span>
              </Link>
            </div>
          </div>

          {/* Key Institutional Stats — 2 cols on mobile, 4 on md+ */}
          <div className="mt-12 sm:mt-14 pt-8 sm:pt-10 border-t border-adal-gold-500/30 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl text-center">
            <div className="p-3">
              <div className="text-3xl sm:text-4xl font-black text-adal-gold-400">35</div>
              <div className="mt-1 text-xs sm:text-sm text-gray-300 font-medium">
                {isUrdu ? "قومی پالیسی شعبہ جات" : "National Policy Commitments"}
              </div>
            </div>

            <div className="p-3">
              <div className="text-3xl sm:text-4xl font-black text-adal-gold-400">2036</div>
              <div className="mt-1 text-xs sm:text-sm text-gray-300 font-medium">
                {isUrdu ? "دس سالہ تبدیلی منصوبہ" : "10-Year Transformation Horizon"}
              </div>
            </div>

            <div className="p-3">
              <div className="text-3xl sm:text-4xl font-black text-adal-gold-400">#1</div>
              <div className="mt-1 text-xs sm:text-sm text-gray-300 font-medium">
                {isUrdu ? "کیس کیلنڈر — عدالتی احتساب" : "Case Calendar Judicial Mandate"}
              </div>
            </div>

            <div className="p-3">
              <div className="text-3xl sm:text-4xl font-black text-adal-gold-400">100%</div>
              <div className="mt-1 text-xs sm:text-sm text-gray-300 font-medium">
                {isUrdu ? "مساوی آئینی شہری حقوق" : "Equal Constitutional Protection"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
