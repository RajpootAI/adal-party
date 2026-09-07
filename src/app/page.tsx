import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PartyIntroduction } from "@/components/home/PartyIntroduction";
import { ManifestoGrid } from "@/components/home/ManifestoGrid";
import { Pakistan2036Section } from "@/components/home/Pakistan2036Section";
import { MembershipCTA } from "@/components/home/MembershipCTA";
import { LeadershipPreview } from "@/components/home/LeadershipPreview";
import { NewsAndEventsSection } from "@/components/home/NewsAndEventsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <PartyIntroduction />
        <ManifestoGrid showAll={false} />
        <Pakistan2036Section />
        <MembershipCTA />
        <LeadershipPreview />
        <NewsAndEventsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
