import { MetadataRoute } from "next";
import { manifestoPolicies } from "@/data/manifesto";
import { newsArticles, partyEvents } from "@/data/partyData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pakistanadalparty.org";

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/vision-mission",
    "/manifesto",
    "/membership",
    "/membership/status",
    "/leadership",
    "/organization",
    "/news",
    "/events",
    "/media",
    "/press",
    "/volunteer",
    "/donate",
    "/contact",
    "/downloads",
    "/search",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/manifesto" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/manifesto" || route === "/membership" ? 0.9 : 0.7,
  }));

  const policyRoutes: MetadataRoute.Sitemap = manifestoPolicies.map((p) => ({
    url: `${baseUrl}/manifesto/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const newsRoutes: MetadataRoute.Sitemap = newsArticles.map((n) => ({
    url: `${baseUrl}/news/${n.slug}`,
    lastModified: new Date(n.publishedAt),
    changeFrequency: "never",
    priority: 0.6,
  }));

  const eventRoutes: MetadataRoute.Sitemap = partyEvents.map((e) => ({
    url: `${baseUrl}/events/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...policyRoutes, ...newsRoutes, ...eventRoutes];
}
