import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18nContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pakistanadalparty.org"),
  title: "Pakistan Adal Party | پاکستان عدل پارٹی — Official Platform",
  description: "Official platform of Pakistan Adal Party (پاکستان عدل پارٹی). Peace, Justice, Development and Equality for All. National Manifesto 2026 & Pakistan 2036 National Transformation Plan.",
  keywords: [
    "Pakistan Adal Party",
    "پاکستان عدل پارٹی",
    "Adal Party",
    "National Manifesto 2026",
    "قومی منشور 2026",
    "Rule of Law",
    "Case Calendar System",
    "Pakistan 2036",
    "Judicial Reforms",
    "Political Party Pakistan"
  ],
  authors: [{ name: "Pakistan Adal Party Central Secretariat" }],
  openGraph: {
    title: "Pakistan Adal Party | پاکستان عدل پارٹی",
    description: "Peace, Justice, Development and Equality for All — National Manifesto 2026",
    url: "https://pakistanadalparty.org",
    siteName: "Pakistan Adal Party Official Platform",
    images: [
      {
        url: "/logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Pakistan Adal Party Emblem - Minar-e-Pakistan & Scales of Justice",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakistan Adal Party | پاکستان عدل پارٹی",
    description: "Official National Platform — National Manifesto 2026 and Pakistan 2036 Transformation Plan.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ur" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PoliticalParty",
              name: "Pakistan Adal Party",
              alternateName: "پاکستان عدل پارٹی",
              url: "https://pakistanadalparty.org",
              logo: "https://pakistanadalparty.org/logo.jpg",
              foundingDate: "2026",
              slogan: "Peace, Justice, Development and Equality for All | امن، انصاف، ترقی اور مساوات سب کے لیے",
              knowsAbout: [
                "Rule of Law",
                "Case Calendar System",
                "Administrative Provinces",
                "National Industrial Revolution",
                "Agri-Business Economy",
                "Pakistan 2036 National Transformation Plan"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-adal-gold-500 selection:text-adal-green-950 overflow-x-hidden w-full">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
