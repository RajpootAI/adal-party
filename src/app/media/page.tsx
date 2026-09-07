"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { mediaItems } from "@/data/partyData";
import { Image as ImageIcon, Video, Mic, FileText, Download, ExternalLink } from "lucide-react";

export default function MediaPage() {
  const { language, isUrdu, t } = useI18n();
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", labelUr: "تمام میڈیا", labelEn: "All Media", icon: ImageIcon },
    { id: "photo", labelUr: "تصاویر و مونوگرام", labelEn: "Official Photos & Crests", icon: ImageIcon },
    { id: "document", labelUr: "سرکاری دستاویزات", labelEn: "Publications & Documents", icon: FileText },
    { id: "video", labelUr: "ویڈیوز", labelEn: "Video Archives", icon: Video },
    { id: "speech", labelUr: "خطابات", labelEn: "Official Speeches", icon: Mic },
  ];

  const filteredMedia = mediaItems.filter((item) => {
    if (activeTab === "all") return true;
    return item.mediaType === activeTab;
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-adal-surface">
        {/* Banner */}
        <section className="bg-gradient-to-b from-adal-green-950 via-adal-green-900 to-adal-green-950 text-white py-14 sm:py-20 border-b-4 border-adal-gold-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-adal-gold-400/50 bg-adal-green-900/80 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3">
              <ImageIcon className="h-3.5 w-3.5" />
              <span>{isUrdu ? "مرکزی میڈیا سنٹر" : "Official Media Center"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-urdu urdu-editorial leading-tight">
              {isUrdu ? "میڈیا گیلری، اشاعتیں اور سرکاری لوگو" : "Media Center, Publications & Brand Assets"}
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              {isUrdu
                ? "پاکستان عدل پارٹی کا مصدقہ مونوگرام، سرکاری دستاویزات اور پریس میٹریل۔"
                : "Official high-resolution emblems, authentic policy documents, and authorized media assets."}
            </p>
          </div>
        </section>

        {/* Media Tabs & Gallery */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold transition-all ${
                      activeTab === tab.id
                        ? "bg-adal-green-900 text-adal-gold-300 shadow-sm"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{isUrdu ? tab.labelUr : tab.labelEn}</span>
                  </button>
                );
              })}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMedia.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:border-adal-gold-500/60 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-square w-full bg-adal-green-950 flex items-center justify-center p-6 border-b border-gray-100">
                    <Image
                      src={item.thumbnailUrl || "/logo.jpg"}
                      alt={isUrdu ? item.titleUr : item.titleEn}
                      width={240}
                      height={240}
                      className="max-h-full max-w-full object-contain rounded-lg"
                    />
                    <span className="absolute top-3 right-3 rounded bg-adal-green-900/90 px-2.5 py-0.5 text-[10px] font-bold text-adal-gold-300 border border-adal-gold-500/30">
                      {item.mediaType.toUpperCase()}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-gray-400">
                        {item.date}
                      </span>
                      <h3 className="mt-1 font-urdu font-bold text-adal-green-950 text-base leading-snug urdu-editorial">
                        {isUrdu ? item.titleUr : item.titleEn}
                      </h3>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <a
                        href={item.url}
                        download
                        className="inline-flex items-center gap-1 text-xs font-bold text-adal-green-900 hover:text-adal-gold-600"
                      >
                        <Download className="h-3.5 w-3.5 text-adal-gold-600" />
                        <span>{isUrdu ? "فائل حاصل کریں" : "Download Asset"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note regarding authentic media */}
            {(activeTab === "video" || activeTab === "speech") && filteredMedia.length === 0 && (
              <div className="rounded-xl border border-gray-200 bg-white p-12 text-center text-sm text-gray-500 max-w-md mx-auto">
                <p className="font-semibold text-gray-700">
                  {isUrdu ? "کوئی ویڈیو یا تقریر دستیاب نہیں ہے" : "No recordings published yet"}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {isUrdu
                    ? "پارٹی ضوابط کے مطابق صرف حقیقی اور مصدقہ تقاریر ہی اپ لوڈ کی جاتی ہیں۔"
                    : "Per institutional policy, only verified official recordings will be published."}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
