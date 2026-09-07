"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18nContext";
import {
  Milestone,
  Users,
  Scale,
  Factory,
  Radio,
  Shield,
  ChevronRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export function Pakistan2036Section() {
  const { language, isUrdu, t } = useI18n();
  const [activePillar, setActivePillar] = useState<number>(0);

  const transformationPillars = [
    {
      id: "unity",
      titleEn: "National Unity",
      titleUr: "قومی اتحاد",
      subtitleEn: "National Identity & Administrative Reorganization",
      subtitleUr: "قومی شناخت اور انتظامی اصلاحات",
      descriptionEn: "Reorganizing Pakistan into efficient administrative provinces governed by rule of law rather than linguistic polarization. Establishing one sovereign national identity under the Constitution.",
      descriptionUr: "لسانی و نسلی تعصبات سے پاک، انتظامی بنیادوں پر نئے صوبوں کا قیام۔ ایک قوم، ایک آئین، ایک ریاست اور ایک قومی وفاداری۔",
      icon: Users,
      sourcePoint: "قومی شناخت اور انتظامی اصلاحات",
    },
    {
      id: "justice",
      titleEn: "Justice",
      titleUr: "انصاف",
      subtitleEn: "Case Calendar System & Police Accountability",
      subtitleUr: "کیلنڈر سسٹم اور پولیس اصلاحات",
      descriptionEn: "Statutory deadlines for all court proceedings. Deciding cases rather than extending dates. Depoliticizing police to serve local communities under strict national standards.",
      descriptionUr: "کیس کیلنڈر سسٹم کے تحت ہر مقدمے کی حتمی تاریخ کا تعین۔ عدالتوں کو تاریخ دینے کے بجائے فیصلہ دینے والے اداروں میں بدلنا، اور غیر سیاسی عوامی پولیس۔",
      icon: Scale,
      sourcePoint: "کیلنڈر سسٹم اور پولیس اصلاحات",
    },
    {
      id: "production",
      titleEn: "Production",
      titleUr: "پیداوار",
      subtitleEn: "Industry, Agriculture & Sovereign Technology",
      subtitleUr: "صنعت، زراعت اور ٹیکنالوجی",
      descriptionEn: "Pivoting the national economic model from debt-financed consumption to domestic production, special economic zones, agri-business, and high-tech defense manufacturing.",
      descriptionUr: "قرضوں پر انحصار کا خاتمہ، اسپیشل اکنامک زونز، جدید زرعی انڈسٹری، اور پاکستان کو دفاعی ٹیکنالوجی کا پروڈیوسر اور برآمد کنندہ بنانا۔",
      icon: Factory,
      sourcePoint: "صنعت، زراعت اور ٹیکنالوجی",
    },
    {
      id: "connectivity",
      titleEn: "Connectivity",
      titleUr: "رابطہ (کنیکٹیویٹی)",
      subtitleEn: "Railways, Maritime Ports & Digital Infrastructure",
      subtitleUr: "ریل، بندرگاہیں اور ڈیجیٹل انفراسٹرکچر",
      descriptionEn: "Developing the Karachi-Gwadar National Coastal Economic Corridor, regional trade gateways to Central Asia, modernized freight railways, and nationwide high-speed optical fiber.",
      descriptionUr: "کراچی تا گوادر ساحلی معاشی راہداری، وسطی ایشیا تک تجارتی راستے، ریلوے کی جدید کاری اور ملک گیر تیز رفتار ڈیجیٹل شاہراہیں اور فائبر نیٹ ورک۔",
      icon: Radio,
      sourcePoint: "ریل، بندرگاہیں اور ڈیجیٹل انفراسٹرکچر",
    },
    {
      id: "security",
      titleEn: "Security",
      titleUr: "سلامتی",
      subtitleEn: "Peace through Strength & Sovereign Foreign Policy",
      subtitleUr: "مضبوط دفاع اور خود مختار خارجہ پالیسی",
      descriptionEn: "Modernizing defense through autonomous systems, cyber security, and tactical AI. Adopting a balanced, independent 'Pakistan First' diplomacy based on sovereign parity.",
      descriptionUr: "طاقت کے ذریعے امن؛ جدید سائبر، ڈرون اور آرٹیفیشل انٹیلی جنس دفاعی صلاحیت۔ متوازن اور غیر جانبدارانہ 'پاکستان فرسٹ' خارجہ حکمت عملی۔",
      icon: Shield,
      sourcePoint: "مضبوط دفاع اور خود مختار خارجہ پالیسی",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-adal-green-950 via-adal-green-900 to-adal-green-950 text-white relative overflow-hidden border-b-4 border-adal-gold-500">
      {/* Background Decorative Rings */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-adal-gold-500/20 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border border-adal-gold-500/20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-adal-gold-400/60 bg-adal-green-900/80 px-4 py-1 text-xs font-bold text-adal-gold-300 backdrop-blur mb-3">
            <Milestone className="h-4 w-4 text-adal-gold-400" />
            <span>{t.plan2036.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-urdu urdu-editorial leading-tight">
            {isUrdu ? t.plan2036.title : "Pakistan 2036 National Transformation Plan"}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            {isUrdu
              ? "دس سالہ جامع حکمت عملی جس کے 5 بنیادی اسٹریٹجک ستون ہیں — پاکستان عدل پارٹی کا انتخابی و ریاستی منشور"
              : t.plan2036.subtitle}
          </p>
        </div>

        {/* 5-Pillar Interactive Visualizer */}
        <div className="mt-14 max-w-6xl mx-auto">
          {/* Pillar Navigation Tabs */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 sm:gap-2 p-1.5 rounded-xl bg-adal-green-950/60 border border-adal-gold-500/30 backdrop-blur">
            {transformationPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = activePillar === index;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(index)}
                  className={`flex flex-col items-center gap-1.5 sm:gap-2 rounded-lg p-2.5 sm:p-4 text-center transition-all ${
                    isActive
                      ? "bg-gradient-to-b from-adal-gold-500 to-adal-gold-600 text-adal-green-950 shadow-lg font-bold scale-[1.02]"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${isActive ? "text-adal-green-950" : "text-adal-gold-400"}`} />
                  <span className="text-[10px] sm:text-xs font-bold tracking-tight leading-tight">
                    {isUrdu ? pillar.titleUr : pillar.titleEn}
                  </span>
                  <span className="text-[9px] sm:text-[10px] opacity-80 hidden sm:inline">
                    Pillar #{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Showcase Card */}
          <div className="mt-4 sm:mt-6 rounded-2xl border-2 border-adal-gold-400 bg-adal-green-950/90 p-5 sm:p-8 lg:p-12 shadow-2xl backdrop-blur relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-adal-gold-400 uppercase tracking-widest">
                  <span>Pillar {activePillar + 1} of 5</span>
                  <span>•</span>
                  <span>{transformationPillars[activePillar].sourcePoint}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-urdu urdu-editorial leading-tight">
                  {isUrdu
                    ? `${transformationPillars[activePillar].titleUr}: ${transformationPillars[activePillar].subtitleUr}`
                    : `${transformationPillars[activePillar].titleEn}: ${transformationPillars[activePillar].subtitleEn}`}
                </h3>

                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  {isUrdu
                    ? transformationPillars[activePillar].descriptionUr
                    : transformationPillars[activePillar].descriptionEn}
                </p>

                {/* Source Mandate Quote */}
                <div className="pt-4 border-t border-adal-green-800">
                  <p className="text-xs italic text-adal-gold-300/90">
                    {isUrdu
                      ? "ماخوذ از سرکاری قومی منشور 2026: دس سالہ قومی ترقیاتی منصوبہ — پاکستان 2036"
                      : "Directly derived from the Official National Manifesto 2026: Pakistan 2036 Transformation Blueprint"}
                  </p>
                </div>
              </div>

              {/* Graphic Feature Box */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-xl bg-adal-green-900/60 border border-adal-gold-500/30 text-center">
                <div className="h-20 w-20 rounded-full border-2 border-adal-gold-400 bg-adal-green-950 flex items-center justify-center mb-4 shadow-inner">
                  {React.createElement(transformationPillars[activePillar].icon, {
                    className: "h-10 w-10 text-adal-gold-400",
                  })}
                </div>

                <span className="text-xs font-mono font-bold text-adal-gold-400 tracking-wider">
                  HORIZON 2026–2036
                </span>

                <h4 className="mt-1 text-base font-bold text-white">
                  {isUrdu ? transformationPillars[activePillar].titleUr : transformationPillars[activePillar].titleEn}
                </h4>

                <Link
                  href="/manifesto/35-pakistan-2036"
                  className="mt-4 inline-flex items-center gap-1.5 rounded bg-adal-gold-500 px-4 py-2 text-xs font-bold text-adal-green-950 hover:bg-adal-gold-400 transition-colors"
                >
                  <span>{isUrdu ? "مکمل پالیسی 35 کا متن" : "Read Full Policy #35"}</span>
                  <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Electoral Covenant Box (From Page 8 of Manifesto) */}
        <div className="mt-14 max-w-4xl mx-auto text-center bg-white/5 border border-adal-gold-500/30 rounded-xl p-6 sm:p-8">
          <p className="font-urdu font-bold text-lg sm:text-2xl text-adal-gold-200 urdu-editorial leading-loose">
            "عدل سے ریاست — اتحاد سے قوم — پیداوار سے خوشحالی — قوت سے امن"
          </p>
          <p className="mt-2 text-xs sm:text-sm text-gray-300">
            {isUrdu
              ? "ریاست کسی خاندان، جماعت یا طبقے کی جاگیر نہیں — پاکستان کے ہر شہری کی امانت ہے۔"
              : "The State is not the fiefdom of any family, political party, or privileged class — it is the sacred trust of every citizen of Pakistan."}
          </p>
        </div>
      </div>
    </section>
  );
}
