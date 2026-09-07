"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import {
  Scale,
  Shield,
  Factory,
  Radio,
  Users,
  Compass,
  Heart,
  TrendingUp,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function VisionMissionPage() {
  const { language, isUrdu, t } = useI18n();

  const themes = [
    {
      id: "justice",
      titleUr: "انصاف اور قانون کی بالادستی",
      titleEn: "Justice & Rule of Law",
      icon: Scale,
      leadUr: "No one above the law — قانون سب کے لیے برابر ہے",
      leadEn: "No one above the law — Equality before the bar of justice",
      descUr: "عدالت کو تاریخ دینے کے بجائے فیصلہ دینے کا ادارہ بنانا۔ کیس کیلنڈر سسٹم نافذ کرنا تاکہ برسوں کی تاخیر ختم ہو۔ جج ہو، جنرل، وزیر اعظم یا عام شہری—کوئی قانون سے بالا تر نہیں ہو گا۔",
      descEn: "Transforming courts into institutions that deliver prompt justice rather than continuous adjournments. Statutory Case Calendars and universal public accountability without elite immunity.",
      policyRef: "پالیسی 8، 9، 10، 11، 32",
    },
    {
      id: "equality",
      titleUr: "مساوات اور بنیادی حقوق",
      titleEn: "Equality & Constitutional Rights",
      icon: Heart,
      leadUr: "Equal Citizenship under the Constitution",
      leadEn: "Equal Citizenship under the Constitution",
      descUr: "ہر پاکستانی شہری، خواہ مسلمان ہو یا غیر مسلم، قانون کے تحت مساوی تحفظ، عزت اور بنیادی حقوق کا حقدار ہے۔ اقلیتوں کی عبادت گاہوں کا تحفظ ریاست کی غیر مشروط ذمہ داری ہے۔",
      descEn: "Every Pakistani citizen, Muslim or non-Muslim, is guaranteed equal protection, dignity, and fundamental rights. State protection of religious minorities and equality under the law.",
      policyRef: "پالیسی 28، 29",
    },
    {
      id: "unity",
      titleUr: "قومی اتحاد و ہم آہنگی",
      titleEn: "National Unity & Cohesion",
      icon: Users,
      leadUr: "ایک قوم، ایک ریاست، ایک آئین، ایک قومی شناخت",
      leadEn: "One Nation, One State, One Constitution, One Identity",
      descUr: "صوبہ قوم نہیں ہو گا بلکہ ریاست پاکستان کی انتظامی اکائی ہو گا۔ لسانی یا نسلی تعصب کے بجائے تمام پاکستانیوں کے مساوی حقوق اور آئینی یکجہتی کو اولین ترجیح دی جائے گی۔",
      descEn: "Provinces are administrative servants of the federation, not sovereign nationalities. Transcending ethnic divisiveness into a single, cohesive, proud Pakistani constitutional identity.",
      policyRef: "پالیسی 1، 2، 34",
    },
    {
      id: "production",
      titleUr: "پیداواری معیشت",
      titleEn: "Production-Led Economy",
      icon: Factory,
      leadUr: "Consumption Economy to Production Economy",
      leadEn: "From Consumption Economy to Production Economy",
      descUr: "پاکستان کو غیر ملکی قرضوں کے چنگل سے نکال کر پیداوار، برآمدات، اسپیشل اکنامک زونز، جدید زرعی انڈسٹری اور دفاعی ٹیکنالوجی کا عالمی مرکز بنانا۔",
      descEn: "Ending the vicious cycle of foreign borrowing to finance elite consumption; mobilizing domestic manufacturing, agri-business modernization, and high-tech defense exports.",
      policyRef: "پالیسی 12، 13، 14، 15، 16",
    },
    {
      id: "connectivity",
      titleUr: "اسٹریٹجک رابطہ (کنیکٹیویٹی)",
      titleEn: "Strategic Connectivity",
      icon: Radio,
      leadUr: "National Coastal Economic Corridor & Trade Gateway",
      leadEn: "National Coastal Economic Corridor & Regional Trade Gateway",
      descUr: "کراچی اور گوادر کو خطے کے تجارتی محور میں بدلنا، وسطی ایشیا تک تجارتی راستے کھولنا، اور تیز رفتار ریلوے و ڈیجیٹل فائبر کا ملک گیر جال بچھانا۔",
      descEn: "Unleashing the Karachi-Gwadar economic axis, Arabian Sea trade routes, high-speed freight rail lines, and national optical fiber corridors to position Pakistan as the Regional Trade Gateway.",
      policyRef: "پالیسی 17، 18، 19",
    },
    {
      id: "security",
      titleUr: "دفاع اور قومی سلامتی",
      titleEn: "National Defense & Security",
      icon: Shield,
      leadUr: "Peace through Strength — مضبوط پاکستان، محفوظ پاکستان",
      leadEn: "Peace through Strength — Strong and Secure Pakistan",
      descUr: "سائبر، ڈرون، اور مصنوعی ذہانت سے لیس خود کفیل دفاعی صلاحیت۔ پاکستان فرسٹ اور متوازن خارجہ پالیسی کے تحت تمام ممالک سے باوقار سفارتی تعلقات۔",
      descEn: "Equipping defense with sovereign cyber, autonomous drone systems, and tactical AI. Upholding a balanced, independent 'Pakistan First' diplomacy anchored on sovereign parity.",
      policyRef: "پالیسی 20، 21، 22، 23",
    },
    {
      id: "development",
      titleUr: "انسانی ترقی و نوجوان",
      titleEn: "Human Development & Youth",
      icon: TrendingUp,
      leadUr: "Skill + Education + Industry & National Economic Asset",
      leadEn: "Skill + Education + Industry & Youth as Economic Assets",
      descUr: "نوجوانوں کو ملک کا سب سے بڑا معاشی اثاثہ بنانا۔ یکساں نصابِ تعلیم، ہر ضلع میں ٹیکنیکل یونیورسٹیاں، اور آئی ٹی فری لانسنگ ہبز کا قیام۔",
      descEn: "Unlocking Pakistan’s youth as our primary National Economic Asset through the 'Skill + Education + Industry' framework and universal district healthcare.",
      policyRef: "پالیسی 5، 7، 25، 27",
    },
    {
      id: "participation",
      titleUr: "عوامی شمولیت و بلدیاتی جمہوریت",
      titleEn: "Citizen Participation & Local Power",
      icon: Compass,
      leadUr: "مقامی حکومت: اقتدار عوام کی دہلیز تک",
      leadEn: "Local Government: Power at the People's Doorstep",
      descUr: "صرف صوبائی حکومتوں تک محدود رہنے کے بجائے اختیارات اور مالی وسائل کو اضلاع، تحصیلوں اور منتخب بلدیاتی کونسلوں تک منتقل کرنا۔",
      descEn: "Devolving real financial, planning, and executive power to elected municipal councils, ensuring the state serves citizens at their immediate doorstep.",
      policyRef: "پالیسی 3، 24، 30",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-adal-green-950 via-adal-green-900 to-adal-green-950 text-white py-16 sm:py-24 border-b-4 border-adal-gold-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-adal-gold-400/50 bg-adal-green-900/80 px-4 py-1 text-xs font-bold text-adal-gold-300 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{isUrdu ? "فکری و سیاسی منشور" : "Vision & Strategic Mission"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white font-urdu urdu-editorial leading-tight">
              {isUrdu ? "وژن اور مشن: آئین، عدل اور قومی وقار" : "Vision & Mission: Justice, Sovereignty and Prosperity"}
            </h1>

            <p className="mt-4 text-base sm:text-xl font-urdu text-adal-gold-200 urdu-editorial max-w-3xl mx-auto">
              "عدل سے ریاست — اتحاد سے قوم — پیداوار سے خوشحالی — قوت سے امن"
            </p>
          </div>
        </section>

        {/* 8 Core Manifesto Vision Themes */}
        <section className="py-16 sm:py-24 bg-adal-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {themes.map((theme) => {
                const Icon = theme.icon;
                return (
                  <div
                    key={theme.id}
                    className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:border-adal-gold-500/60 hover:shadow-institution-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-adal-green-900 text-adal-gold-400 shadow-sm">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded bg-adal-green-50 px-2.5 py-1 text-[11px] font-bold text-adal-green-900 border border-adal-green-200">
                          {theme.policyRef}
                        </span>
                      </div>

                      <h2 className="font-urdu text-2xl font-bold text-adal-green-950 urdu-editorial leading-tight">
                        {theme.titleUr}
                      </h2>

                      <p className="text-xs font-bold uppercase tracking-wider text-adal-gold-600 mt-0.5">
                        {theme.titleEn}
                      </p>

                      <div className="my-3 rounded-lg bg-gray-50 p-2.5 text-xs font-semibold text-adal-green-900 border-l-2 border-adal-gold-500 rtl:border-l-0 rtl:border-r-2">
                        {isUrdu ? theme.leadUr : theme.leadEn}
                      </div>

                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                        {isUrdu ? theme.descUr : theme.descEn}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href="/manifesto"
                        className="inline-flex items-center gap-1 text-xs font-bold text-adal-green-900 hover:text-adal-gold-600 transition-colors"
                      >
                        <span>{isUrdu ? "منشور میں تفصیلات دیکھیں" : "Explore in Manifesto"}</span>
                        <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Fundamental Electoral Promise Section */}
        <section className="py-16 bg-adal-green-950 text-white border-t-2 border-adal-gold-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h3 className="font-urdu text-2xl sm:text-3xl font-bold text-adal-gold-300 urdu-editorial">
              پاکستان عدل پارٹی کا انتخابی عہد
            </h3>

            <p className="font-urdu text-sm sm:text-lg text-gray-200 leading-loose urdu-editorial">
              "ہم پاکستان کو لسانی صوبوں کا مجموعہ نہیں بلکہ ایک مضبوط پاکستانی قومی ریاست بنائیں گے۔ ہم صوبے عوام کی سہولت کے لیے بنائیں گے، قومیں تقسیم کرنے کے لیے نہیں۔ ہم عدالت کو تاریخ دینے کے بجائے فیصلہ دینے کا ادارہ بنائیں گے۔ ہم پولیس کو سیاست سے نکال کر عوام کے سامنے جواب دہ بنائیں گے۔ ہم معیشت کو قرض سے پیداوار کی طرف لے جائیں گے، اور ریاست کی دفاعی قوت جدید ٹیکنالوجی سے مضبوط کریں گے۔"
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/membership"
                className="rounded-lg bg-adal-gold-500 px-6 py-3 text-sm font-bold text-adal-green-950 hover:bg-adal-gold-400 transition-all shadow"
              >
                {t.cta.join}
              </Link>
              <Link
                href="/manifesto"
                className="rounded-lg border border-adal-gold-400 px-6 py-3 text-sm font-semibold text-adal-gold-300 hover:bg-white/10 transition-all"
              >
                {t.cta.readManifesto}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
