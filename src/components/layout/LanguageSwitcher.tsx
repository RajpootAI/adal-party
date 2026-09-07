"use client";

import React from "react";
import { useI18n } from "@/lib/i18nContext";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useI18n();

  return (
    <div className={`inline-flex items-center rounded-md border border-adal-gold-500/40 bg-adal-green-950/40 p-0.5 text-xs font-medium backdrop-blur-sm ${className}`}>
      <Globe className="mx-1.5 h-3.5 w-3.5 text-adal-gold-400" />
      <button
        type="button"
        onClick={() => setLanguage("ur")}
        className={`px-2.5 py-1 rounded transition-all duration-150 ${
          language === "ur"
            ? "bg-adal-gold-500 text-adal-green-950 font-bold shadow-sm"
            : "text-gray-200 hover:text-white"
        }`}
        aria-label="اردو میں تبدیل کریں"
      >
        اردو
      </button>
      <span className="text-adal-gold-500/30">|</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 rounded transition-all duration-150 ${
          language === "en"
            ? "bg-adal-gold-500 text-adal-green-950 font-bold shadow-sm"
            : "text-gray-200 hover:text-white"
        }`}
        aria-label="Switch to English"
      >
        English
      </button>
    </div>
  );
}
