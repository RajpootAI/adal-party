"use client";

import React, { useState } from "react";
import { useI18n } from "@/lib/i18nContext";
import { Mail, CheckCircle2, ShieldCheck } from "lucide-react";

export function NewsletterSection() {
  const { language, isUrdu } = useI18n();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-14 bg-adal-green-950 text-white border-b border-adal-gold-500/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-adal-gold-500/20 text-adal-gold-400 mb-3 border border-adal-gold-500/30">
          <Mail className="h-6 w-6" />
        </div>

        <h3 className="text-xl sm:text-3xl font-bold font-urdu urdu-editorial text-white">
          {isUrdu ? "مرکزی پارٹی اعلامیہ اور قانونی تجاویز حاصل کریں" : "Subscribe to Official Party Bulletins & Legal Papers"}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
          {isUrdu
            ? "قومی منشور، پارلیمانی اصلاحات اور تحریک کی سرگرمیوں سے باخبر رہنے کیلئے اپنا ای میل درج کریں۔"
            : "Receive authenticated policy research, legislative briefs, and central statements directly to your inbox."}
        </p>

        {submitted ? (
          <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-adal-green-900 border border-adal-gold-400 p-4 text-sm text-adal-gold-300 animate-in fade-in">
            <CheckCircle2 className="h-5 w-5 text-adal-gold-400 shrink-0" />
            <span>
              {isUrdu
                ? "شکریہ! آپ کا ای میل سرکاری فہرست میں شامل کر لیا گیا ہے۔"
                : "Thank you. Your email has been registered for central press notifications."}
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isUrdu ? "آپ کا ای میل پتہ درج کریں..." : "Enter your email address..."}
              className="w-full rounded-lg border border-adal-green-800 bg-adal-green-900/80 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-adal-gold-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 rounded-lg bg-adal-gold-500 px-6 py-3 text-sm font-bold text-adal-green-950 hover:bg-adal-gold-400 transition-colors shadow"
            >
              {isUrdu ? "سبسکرائب کریں" : "Subscribe"}
            </button>
          </form>
        )}

        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
          <ShieldCheck className="h-3.5 w-3.5 text-adal-gold-400" />
          <span>{isUrdu ? "ہم آپ کا ڈیٹا کسی تیسرے فریق کو فراہم نہیں کرتے" : "Zero spam. Your data remains strictly protected."}</span>
        </div>
      </div>
    </section>
  );
}
