"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import {
  Scale,
  Shield,
  Landmark,
  Compass,
  CheckCircle2,
  Users,
  ChevronRight,
  BookOpen
} from "lucide-react";

export default function AboutPage() {
  const { language, isUrdu, t } = useI18n();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-adal-green-950 via-adal-green-900 to-adal-green-950 text-white py-16 sm:py-20 border-b-4 border-adal-gold-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-adal-gold-400/50 bg-adal-green-900/80 px-4 py-1 text-xs font-bold text-adal-gold-300 mb-3">
              <Landmark className="h-3.5 w-3.5" />
              <span>{isUrdu ? "تعارف و فکری منشور" : "About the Party"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white font-urdu urdu-editorial leading-tight">
              {isUrdu ? "پاکستان عدل پارٹی — تعارف اور فکری اساس" : "About Pakistan Adal Party"}
            </h1>

            <p className="mt-4 text-sm sm:text-lg text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
              {isUrdu
                ? "ایک قوم، ایک ریاست، ایک آئین، ایک قومی شناخت اور متعدد انتظامی اکائیاں۔ عدل، قانون کی بالادستی اور مساوات پر مبنی پاکستان کا قیام۔"
                : "An institutional-grade national political movement dedicated to the rule of law, constitutional equality, administrative decentralization, and a production-led sovereign economy."}
            </p>
          </div>
        </section>

        {/* Section 1: Political Philosophy & Problem Statement */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-l-4 border-adal-gold-500 pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
              <span className="text-xs font-bold uppercase tracking-widest text-adal-gold-600">
                {isUrdu ? "بنیادی فکری تشخیص" : "Foundational Diagnosis"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-adal-green-950 font-urdu urdu-editorial mt-1">
                {isUrdu ? "پاکستان کا اصل بحران کیا ہے؟" : "The Core Crisis of the Pakistani State"}
              </h2>
            </div>

            <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
              <p>
                {isUrdu ? (
                  <span className="font-urdu urdu-editorial leading-loose block text-gray-800">
                    پاکستان عدل پارٹی سمجھتی ہے کہ پاکستان کا بنیادی بحران محض حکومتوں اور چہروں کی تبدیلی نہیں ہے، بلکہ یہ ناقص ریاستی نظم، فرسودہ سیاسی و انتظامی ڈھانچے، مستقل عدالتی تاخیر، حد سے زیادہ انتظامی مرکزیت، اور موروثی اشرافیائی سیاست کا مشترکہ نتیجہ ہے۔
                  </span>
                ) : (
                  <span>
                    Pakistan Adal Party recognizes that Pakistan's enduring crisis cannot be resolved by cosmetic shifts of ruling faces or musical chairs among ruling dynasties. The crisis is structural: an outdated colonial bureaucracy, extreme administrative centralization, chronic judicial backlogs where cases drag for decades, and an elite cartel economy reliant on foreign debt.
                  </span>
                )}
              </p>

              <div className="rounded-xl border border-adal-gold-400 bg-adal-green-950 p-6 text-white my-6 shadow">
                <p className="font-urdu font-semibold text-base sm:text-xl text-adal-gold-100 leading-loose urdu-editorial">
                  "ریاست کسی خاندان، جماعت یا طبقے کی جاگیر نہیں — پاکستان کے ہر شہری کی امانت ہے۔"
                </p>
                <p className="mt-2 text-xs text-gray-300">
                  {isUrdu ? "قومی منشور 2026 کا بنیادی اصول" : "Cardinal Principle — National Manifesto 2026"}
                </p>
              </div>

              <p>
                {isUrdu ? (
                  <span className="font-urdu urdu-editorial leading-loose block text-gray-800">
                    ہم پاکستان کو کسی مخصوص برادری یا لسانی جاگیر کے بجائے ایک مضبوط، منصفانہ، جدید اور خود مختار ریاست بنائیں گے جہاں ریاست کی وفاداری نسل، زبان، صوبے، برادری یا علاقے سے نہیں بلکہ آئین، قانون اور ریاست پاکستان سے وابستہ ہو۔
                  </span>
                ) : (
                  <span>
                    We stand for a modern constitutional republic where civic loyalty is untangled from ethnic, linguistic, or clan identities and anchored firmly in the Constitution, the rule of law, and equal citizenship for all.
                  </span>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Core Principles (8 Pillars) */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-adal-gold-600 uppercase tracking-widest">
                Our Non-Negotiable Pillars
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-adal-green-950 font-urdu urdu-editorial mt-1">
                {isUrdu ? "پاکستان عدل پارٹی کے 8 بنیادی اصول" : "Eight Non-Negotiable Institutional Principles"}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {[
                {
                  titleUr: "عدل اور قانون کی بالادستی",
                  titleEn: "Rule of Law & Justice",
                  descUr: "No one above the law. صدر سے عام شہری تک احتساب کا ایک کڑا معیار۔",
                  descEn: "No one above the law. Universal accountability from top office to citizen.",
                  icon: Scale,
                },
                {
                  titleUr: "مساوات اور یکساں حقوق",
                  titleEn: "Equal Citizenship",
                  descUr: "ہر شہری کو آئین کے تحت مکمل مساوی حقوق اور جان و مال کا تحفظ۔",
                  descEn: "Equal protection and fundamental constitutional rights for all citizens.",
                  icon: Shield,
                },
                {
                  titleUr: "قومی اتحاد و ہم آہنگی",
                  titleEn: "National Unity",
                  descUr: "لسانی تفریق کے بجائے ایک متحدہ پاکستانی قومی شناخت کا احیاء۔",
                  descEn: "Transcending ethnic fragmentation into proud, sovereign Pakistani nationhood.",
                  icon: Users,
                },
                {
                  titleUr: "پیداواری معیشت",
                  titleEn: "Production Economy",
                  descUr: "قرضوں پر مبنی معیشت کی جگہ مقامی صنعت اور برآمدات کی حوصلہ افزائی۔",
                  descEn: "Ending sovereign debt dependency via export industrialization and agro-tech.",
                  icon: Landmark,
                },
                {
                  titleUr: "اسٹریٹجک مواصلات",
                  titleEn: "Strategic Connectivity",
                  descUr: "گوادر، کراچی اور ریلوے روٹس کے ذریعے خطے کا تجارتی مرکز بننا۔",
                  descEn: "Unlocking regional trade gateways through Gwadar, Karachi, and rail grids.",
                  icon: Compass,
                },
                {
                  titleUr: "خود کفیل دفاع و سلامتی",
                  titleEn: "Sovereign Defense",
                  descUr: "طاقت کے ذریعے امن؛ جدید سائبر، ڈرون اور دفاعی ٹیکنالوجی کی برآمد۔",
                  descEn: "Peace through strength; modernizing sovereign cyber and autonomous defense.",
                  icon: Shield,
                },
                {
                  titleUr: "عوامی شمولیت و بلدیات",
                  titleEn: "Citizen Participation",
                  descUr: "اقتدار عوام کی دہلیز تک؛ بااختیار منتخب مقامی حکومتیں اور بلدیاتی نظام۔",
                  descEn: "Devolving fiscal and municipal planning powers to grassroots councils.",
                  icon: Users,
                },
                {
                  titleUr: "قومی تبدیلی (2036)",
                  titleEn: "National Transformation",
                  descUr: "پاکستان کو 2036 تک عالمی اقتصادی اور ادارہ جاتی قوت میں بدلنا۔",
                  descEn: "A disciplined 10-year roadmap to transform Pakistan by 2036.",
                  icon: Scale,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-adal-gold-500/60 hover:shadow-md transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-adal-green-50 text-adal-green-900 border border-adal-green-200 mb-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-urdu font-bold text-adal-green-950 text-base urdu-editorial leading-tight">
                      {isUrdu ? item.titleUr : item.titleEn}
                    </h3>
                    <p className="text-[11px] font-semibold text-adal-gold-600 uppercase mt-0.5">
                      {item.titleEn}
                    </p>
                    <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                      {isUrdu ? item.descUr : item.descEn}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Commitment to Citizens CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-adal-green-950 font-urdu urdu-editorial">
              {isUrdu ? "نظریاتی سفر میں ہمارے ساتھ شامل ہوں" : "Join the Constitutional Movement"}
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
              {isUrdu
                ? "پاکستان عدل پارٹی کسی ایک فرد کی جاگیر نہیں بلکہ آئین، عدل اور خوشحالی کے خواہاں ہر باضمیر پاکستانی کی جماعت ہے۔"
                : "Explore our complete 35 policy commitments or step forward as an official member or volunteer."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/manifesto"
                className="inline-flex items-center gap-2 rounded-lg bg-adal-green-900 px-6 py-3 text-xs sm:text-sm font-bold text-adal-gold-300 hover:bg-adal-green-800 transition-colors shadow"
              >
                <BookOpen className="h-4 w-4" />
                <span>{t.cta.readManifesto}</span>
              </Link>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-lg bg-adal-gold-500 px-6 py-3 text-xs sm:text-sm font-bold text-adal-green-950 hover:bg-adal-gold-400 transition-colors shadow"
              >
                <span>{t.cta.join}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
