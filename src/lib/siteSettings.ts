"use client";

import { useEffect, useState } from "react";
import { defaultSiteSettings } from "@/data/partyData";

export type SiteSettings = typeof defaultSiteSettings;

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSiteSettings);

  useEffect(() => {
    let active = true;
    fetch("/api/settings", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (active && data?.settings) setSettings({ ...defaultSiteSettings, ...data.settings });
      })
      .catch(() => undefined);
    return () => {
      active = false;
    };
  }, []);

  return settings;
}
