"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { newsArticles } from "@/data/partyData";
import { Newspaper, Calendar, ArrowLeft, Share2, Printer, ChevronRight } from "lucide-react";

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { language, isUrdu, t } = useI18n();
  const [copied, setCopied] = useState(false);

  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="bg-adal-green-950 text-gray-300 py-4 border-b border-adal-gold-500/20 text-xs">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/news" className="hover:text-adal-gold-300 transition-colors">
                {t.nav.news}
              </Link>
              <span>/</span>
              <span className="text-gray-400 truncate max-w-[200px] sm:max-w-md">
                {isUrdu ? article.titleUr : article.titleEn}
              </span>
            </div>

            <Link href="/news" className="inline-flex items-center gap-1 text-adal-gold-300 hover:text-white">
              <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
              <span>{isUrdu ? "تمام خبریں" : "Back to News"}</span>
            </Link>
          </div>
        </div>

        {/* Article Container */}
        <article className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="rounded bg-adal-green-100 px-3 py-1 font-bold text-adal-green-950">
                  {article.category}
                </span>
                <span>•</span>
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString(language === "ur" ? "ur-PK" : "en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{article.author}</span>
              </div>

              <h1 className="font-urdu text-2xl sm:text-4xl font-extrabold text-adal-green-950 leading-tight urdu-editorial">
                {isUrdu ? article.titleUr : article.titleEn}
              </h1>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
                >
                  <Share2 className="h-3.5 w-3.5 text-adal-gold-600" />
                  <span>{copied ? (isUrdu ? "کاپی ہو گیا!" : "Copied!") : t.cta.share}</span>
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="rounded-2xl border border-gray-200 bg-adal-surface p-6 sm:p-10 space-y-6">
              <div className="rounded-xl border-l-4 border-adal-gold-500 bg-white p-4 shadow-sm rtl:border-l-0 rtl:border-r-4">
                <p className="font-urdu text-base sm:text-lg font-medium text-adal-green-950 leading-loose urdu-editorial">
                  {isUrdu ? article.summaryUr : article.summaryEn}
                </p>
              </div>

              <div className="font-urdu text-sm sm:text-base text-gray-800 leading-loose urdu-editorial whitespace-pre-line">
                {isUrdu ? article.contentUr : article.contentEn}
              </div>
            </div>

            {/* Back to News Navigation */}
            <div className="pt-6 text-center">
              <Link
                href="/news"
                className="inline-flex items-center gap-1.5 rounded-lg bg-adal-green-900 px-5 py-2.5 text-xs font-bold text-adal-gold-300 hover:bg-adal-green-800 transition-colors shadow"
              >
                <span>{isUrdu ? "دیگر بیانات و خبریں ملاحظہ کریں" : "Return to All News"}</span>
                <ChevronRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
