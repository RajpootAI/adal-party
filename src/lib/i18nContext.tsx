"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/types";
import { translations } from "@/data/translations";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  isUrdu: boolean;
  dir: "rtl" | "ltr";
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ur"); // Default to Urdu as the authoritative national language or detect

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("pap_lang") as Language;
      if (savedLang === "en" || savedLang === "ur") {
        setLanguageState(savedLang);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const isRtl = language === "ur";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = language;
    try {
      localStorage.setItem("pap_lang", language);
      document.cookie = `pap_lang=${language}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // ignore
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const currentTranslations = language === "ur" ? translations.ur : translations.en;

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage,
        t: currentTranslations,
        isUrdu: language === "ur",
        dir: language === "ur" ? "rtl" : "ltr",
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
