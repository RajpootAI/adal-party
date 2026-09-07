"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import {
  Building,
  Network,
  Users,
  Scale,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export default function OrganizationPage() {
  const { language, isUrdu, t } = useI18n();

  const hierarchy = [
    {
      level: 1,
      titleUr: "مرکزی مجلسِ عاملہ (قومی کونسل)",
      titleEn: "National Executive Council",
      descUr: "قومی پالیسی سازی، پارلیمانی حکمت عملی اور 35 پالیسی شعبہ جات کے نفاذ کی سپریم باڈی۔",
      descEn: "Supreme policy-making body responsible for national strategy, electoral governance, and manifesto execution.",
      units: ["مرکزی سیکرٹریٹ اسلام آباد", "مرکزی پارلیمانی بورڈ", "آئینی و قانونی تھنک ٹینک"],
    },
    {
      level: 2,
      titleUr: "صوبائی تنظیمی کونسلز",
      titleEn: "Provincial Organizing Councils",
      descUr: "تمام صوبوں اور وفاقی اکائیوں میں تنظیمی رابطے، فیلڈ مہمات اور صوبائی سفارشات کے نگران۔",
      descEn: "Executive councils directing provincial party administration, legislative advocacy, and district operations.",
      units: ["پنجاب", "سندھ", "خیبر پختونخوا", "بلوچستان", "اسلام آباد وفاقی کونسل", "گلگت بلتستان", "آزاد کشمیر"],
    },
    {
      level: 3,
      titleUr: "ڈویژنل رابطہ کمیٹیاں",
      titleEn: "Divisional Coordination Units",
      descUr: "صوبائی تنظیم اور اضلاع کے مابین رابطہ کاری، عوامی سیمینارز اور ریجنل پالیسی فیڈ بیک۔",
      descEn: "Regional coordination hubs connecting provincial councils with district organizing chapters.",
      units: ["تمام ڈویژنل ہیڈ کوارٹرز میں فعال رابطے"],
    },
    {
      level: 4,
      titleUr: "ضلعی مجلسِ عاملہ و سیکرٹریٹس",
      titleEn: "District Executive Bodies",
      descUr: "ہر ضلع میں باقاعدہ دفتری نظام، رکنیت سازی، مقامی مسائل کی نشاندہی اور قانونی معاونت سیل۔",
      descEn: "District-level operational secretariats managing local membership drives and citizen advocacy.",
      units: ["ضلعی صدر", "ضلعی جنرل سیکرٹری", "ضلعی لیگل ایڈ سیل", "ضلعی یوتھ کوآرڈینیٹر"],
    },
    {
      level: 5,
      titleUr: "تحصیل تنظیمی یونٹس",
      titleEn: "Tehsil Working Committees",
      descUr: "تحصیل سطح پر بلدیاتی نمائندگی، کسان و تاجر ونگز اور یونین کونسل سطح پر آگاہی۔",
      descEn: "Sub-district operational teams mobilizing local communities and municipal candidates.",
      units: ["تحصیل لیول کونسل اور ورکنگ گروپس"],
    },
    {
      level: 6,
      titleUr: "مقامی حکومت و بنیادی یونین کونسل سیلز",
      titleEn: "Grassroots Municipal & Ward Cells",
      descUr: "پالیسی نمبر 3 'اقتدار عوام کی دہلیز تک' کے تحت ہر محلے اور دیہات میں نظریاتی کارکنان کی کونسل۔",
      descEn: "Grassroots ward committees delivering on Policy #3: Power at the People's Doorstep.",
      units: ["یونین کونسل نمائندگان", "محلہ ورکرز سیل", "کمیونٹی سروس نیٹ ورک"],
    },
  ];

  const wings = [
    {
      titleUr: "آئینی و قانونی ونگ",
      titleEn: "Constitutional & Legal Wing",
      descUr: "کیس کیلنڈر سسٹم، پولیس ریفارمز اور عام شہریوں کے لیے قانونی معاونت کا نگران ونگ۔",
      descEn: "Jurists and advocates drafting legislative acts for the Case Calendar system and police accountability.",
    },
    {
      titleUr: "یوتھ و ڈیجیٹل ٹیکنالوجی ونگ",
      titleEn: "Youth & Technology Wing",
      descUr: "نوجوانوں میں ڈیجیٹل اسکلز، فری لانسنگ اور پالیسی نمبر 27 کے تحت روزگار کے مواقع۔",
      descEn: "Mobilizing tech professionals and student leaders to advance youth as a National Economic Asset.",
    },
    {
      titleUr: "خواتین کی معاشی و آئینی شمولیت ونگ",
      titleEn: "Women's Constitutional Inclusion Wing",
      descUr: "خواتین کے وراثتی حقوق کے تحفظ اور معاشی سرگرمیوں میں شمولیت کا نگراں سیل۔",
      descEn: "Ensuring female representation in leadership and advancing Policy #28 economic protections.",
    },
    {
      titleUr: "کسان و زرعی انقلاب ونگ",
      titleEn: "Agriculture & Farmers Wing",
      descUr: "ایگری بزنس اکانومی، واٹر سیکیورٹی اور کسانوں کے حقوق کی جدوجہد۔",
      descEn: "Grassroots agrarian organizers driving the transition to a modernized Agri-Business Economy.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Header Banner */}
        <section className="bg-gradient-to-b from-adal-green-950 via-adal-green-900 to-adal-green-950 text-white py-14 sm:py-20 border-b-4 border-adal-gold-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-adal-gold-400/50 bg-adal-green-900/80 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3">
              <Network className="h-3.5 w-3.5" />
              <span>{isUrdu ? "ادارہ جاتی تنظیم سازی" : "Institutional Structure"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-urdu urdu-editorial leading-tight">
              {isUrdu ? "پاکستان عدل پارٹی کا تنظیمی ڈھانچہ" : "Party Organizational Hierarchy"}
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              {isUrdu
                ? "اقتدار عوام کی دہلیز تک پہنچانے کے لیے شفاف، جمہوری اور کثیر سطحی تنظیمی نیٹ ورک۔"
                : "A devolved institutional hierarchy structured from Central Executive Council down to grassroots municipal wards."}
            </p>
          </div>
        </section>

        {/* Visual Hierarchy Flow */}
        <section className="py-16 bg-adal-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-adal-gold-600">
                Institutional Flow
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-adal-green-950 font-urdu urdu-editorial mt-1">
                {isUrdu ? "مرکز سے مقامی وارڈ تک درجہ بدرجہ نظم" : "Six-Tier Decentralized Structure"}
              </h2>
            </div>

            <div className="space-y-4 relative">
              {hierarchy.map((tier, index) => (
                <div
                  key={tier.level}
                  className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:border-adal-gold-500/60 hover:shadow-md transition-all relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-adal-green-900 text-adal-gold-300 font-bold text-sm">
                        L{tier.level}
                      </span>
                      <div>
                        <h3 className="font-urdu text-xl font-bold text-adal-green-950 urdu-editorial leading-tight">
                          {isUrdu ? tier.titleUr : tier.titleEn}
                        </h3>
                        <span className="text-xs font-semibold text-adal-gold-600 uppercase">
                          {tier.titleEn}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-gray-400">
                      TIER 0{tier.level}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {isUrdu ? tier.descUr : tier.descEn}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tier.units.map((unit, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-adal-green-950 font-medium"
                      >
                        • {unit}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Wings Section */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-adal-gold-600">
                Specialized Policy Wings
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-adal-green-950 font-urdu urdu-editorial mt-1">
                {isUrdu ? "خصوصی شعبہ جات اور ٹاسک فورسز" : "Specialized Action & Research Wings"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wings.map((wing, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-adal-surface p-6 shadow-sm hover:border-adal-gold-500/50 transition-all"
                >
                  <h3 className="font-urdu text-lg font-bold text-adal-green-950 urdu-editorial leading-snug">
                    {isUrdu ? wing.titleUr : wing.titleEn}
                  </h3>
                  <p className="text-xs font-semibold text-adal-gold-600 uppercase mt-0.5">
                    {wing.titleEn}
                  </p>
                  <p className="mt-2.5 text-xs text-gray-600 leading-relaxed">
                    {isUrdu ? wing.descUr : wing.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
