"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18nContext";
import { Scale, Shield, Landmark, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export function PartyIntroduction() {
  const { language, isUrdu, t } = useI18n();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 rounded bg-adal-green-50 px-3 py-1 text-xs font-bold text-adal-green-900 border border-adal-green-200 mb-3">
            <Landmark className="h-3.5 w-3.5 text-adal-gold-600" />
            <span>{isUrdu ? "تعارف و فکری اساس" : "Foundational Philosophy"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-adal-green-950 tracking-tight">
            {isUrdu ? "پاکستان عدل پارٹی کا بنیادی منشور و عہد" : "The Constitutional Promise of Pakistan Adal Party"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            {isUrdu
              ? "ایک قوم، ایک ریاست، ایک آئین، ایک قومی شناخت اور متعدد انتظامی اکائیاں"
              : "One Nation, One Sovereign State, One Supreme Constitution, Multiple Administrative Units"}
          </p>
        </div>

        {/* Solemn Constitutional Pledge Card (From Official Manifesto) */}
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl border-2 border-adal-gold-400 bg-gradient-to-br from-adal-green-900 via-adal-green-950 to-adal-green-900 p-8 sm:p-12 text-white shadow-institution-lg relative overflow-hidden">
          {/* Subtle background crest */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <Scale className="w-96 h-96 text-adal-gold-400" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 pb-4 border-b border-adal-gold-500/30">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-adal-gold-500 text-adal-green-950 font-bold">
                <Scale className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-adal-gold-300">
                  {t.corePledge.title}
                </h3>
                <span className="text-xs text-gray-300">
                  {isUrdu ? "قومی منشور 2026 کا رہنما اصول" : "Authoritative Extract — National Manifesto 2026"}
                </span>
              </div>
            </div>

            <blockquote className="mt-6 text-base sm:text-xl leading-relaxed text-gray-100 font-light italic">
              {isUrdu ? (
                <span className="font-urdu font-medium block urdu-editorial text-lg sm:text-2xl leading-loose text-adal-gold-100 not-italic">
                  "{t.corePledge.text}"
                </span>
              ) : (
                <span>"{t.corePledge.text}"</span>
              )}
            </blockquote>

            {/* Core Party Mottos */}
            <div className="mt-8 pt-6 border-t border-adal-gold-500/30 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg bg-white/5 border border-adal-gold-500/20 p-4">
                <div className="text-xs uppercase tracking-wider text-adal-gold-400 font-bold mb-1">
                  {isUrdu ? "قومی نعرہ و نظریہ" : "Party Motto"}
                </div>
                <p className="text-sm font-semibold text-white">
                  {t.corePledge.motto1}
                </p>
              </div>

              <div className="rounded-lg bg-white/5 border border-adal-gold-500/20 p-4">
                <div className="text-xs uppercase tracking-wider text-adal-gold-400 font-bold mb-1">
                  {isUrdu ? "ریاست کی امانت" : "Sacred Trust"}
                </div>
                <p className="text-sm font-semibold text-white">
                  {t.corePledge.motto2}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars Summary */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-adal-gold-500/50 hover:shadow-md transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-adal-green-50 text-adal-green-900 border border-adal-green-200 mb-4">
              <Scale className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-adal-green-950">
              {isUrdu ? "کیس کیلنڈر اور عدالتی انقلاب" : "Case Calendar Judicial Mandate"}
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              {isUrdu
                ? "ہر مقدمے کے آغاز پر سماعت اور فیصلے کی قانونی تاریخ کا پابند شیڈول۔ اصول: Justice delayed shall not become justice denied۔"
                : "A legally binding timetable for hearings, evidence, and verdicts for every court case, ensuring justice is never denied by indefinite delay."}
            </p>
            <Link
              href="/manifesto/8-judicial-case-calendar"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-adal-green-900 hover:text-adal-gold-600"
            >
              <span>{isUrdu ? "پالیسی نمبر 8 پڑھیں" : "Read Policy #8"}</span>
              <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </Link>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-adal-gold-500/50 hover:shadow-md transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-adal-green-50 text-adal-green-900 border border-adal-green-200 mb-4">
              <Landmark className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-adal-green-950">
              {isUrdu ? "انتظامی بنیادوں پر نئے صوبے" : "Non-Ethnic Administrative Provinces"}
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              {isUrdu
                ? "قومی کمیشن برائے انتظامی تنظیمِ نو کے تحت آبادی، معاشی استعداد اور عوامی سہولت کے مطابق نئے صوبوں کا قیام۔"
                : "Establishing smaller, efficient administrative provinces recommended by an independent National Commission to bring government to the grassroots."}
            </p>
            <Link
              href="/manifesto/2-new-provinces"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-adal-green-900 hover:text-adal-gold-600"
            >
              <span>{isUrdu ? "پالیسی نمبر 2 پڑھیں" : "Read Policy #2"}</span>
              <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </Link>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-adal-gold-500/50 hover:shadow-md transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-adal-green-50 text-adal-green-900 border border-adal-green-200 mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-adal-green-950">
              {isUrdu ? "درآمدات سے پیداوار کی طرف منتقلی" : "From Debt Consumption to Production"}
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              {isUrdu
                ? "غیر ملکی قرضوں کی جگہ برآمدی صنعت کاری، زرعی انڈسٹری اور دفاعی ٹیکنالوجی کی پیداوار کو ملکی معیشت کی بنیاد بنانا۔"
                : "Dismantling foreign debt dependency through specialized industrial zones, modernized agri-business, and high-tech defense exports."}
            </p>
            <Link
              href="/manifesto/12-production-economy"
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-adal-green-900 hover:text-adal-gold-600"
            >
              <span>{isUrdu ? "پالیسی نمبر 12 پڑھیں" : "Read Policy #12"}</span>
              <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
