import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

import heroCertifiedBackground from "@/assets/hero-section-profesional-bersertifikat.jpg";
import heroAwardsBackground from "@/assets/hero-section-penghargaan-kami.jpg";

export type HeroVariant = "home" | "simple";

export type HeroState = {
  variant: HeroVariant;
  label?: string;
  title?: string;
  description?: string;
  backgroundImage?: string;
};

type HeroContextValue = {
  hero: HeroState;
  setHero: (next: Partial<HeroState>) => void;
  resetHero: () => void;
};

export const HeroContext = createContext<HeroContextValue | undefined>(
  undefined
);

const defaultHero: HeroState = {
  variant: "home",
  label: undefined,
  title: undefined,
  description: undefined,
  backgroundImage: undefined,
};

// Compute a sensible hero default for a given route.
// Page components may still override via setHero in their effects.
const getDefaultHeroForPath: (
  pathname: string,
  t: (path: string, replacements?: Record<string, string>) => string
) => HeroState = (
  pathname: string,
  t: (path: string, replacements?: Record<string, string>) => string
) => {
  if (pathname === "/") {
    return { variant: "home", label: t("hero.welcome") };
  }

  // Static pages
  if (pathname.startsWith("/about-us/company-leadership")) {
    return {
      variant: "simple",
      label: t("aboutPages.companyLeadership.hero.label"),
      title: t("aboutPages.companyLeadership.hero.title"),
      description: t("aboutPages.companyLeadership.hero.description"),
    } satisfies HeroState;
  }
  if (pathname.startsWith("/about-us/company-introduction")) {
    return {
      variant: "simple",
      label: t("aboutPages.companyIntroduction.hero.label"),
      title: t("aboutPages.companyIntroduction.hero.title"),
      description: t("aboutPages.companyIntroduction.hero.description"),
    } satisfies HeroState;
  }
  if (pathname.startsWith("/about")) {
    return {
      variant: "simple",
      label: t("aboutPages.companyIntroduction.hero.label"),
      title: t("aboutPages.companyIntroduction.hero.title"),
    } satisfies HeroState;
  }
  if (pathname.startsWith("/works/")) {
    // Work details will override with specific data
    return { variant: "simple", label: t("projectsSection.label") };
  }
  if (pathname === "/works") {
    return {
      variant: "simple",
      label: t("projectsSection.label"),
      title: t("projectsSection.title"),
      description: t("projectsSection.description"),
    } satisfies HeroState;
  }
  if (pathname.startsWith("/gallery")) {
    return {
      variant: "simple",
      label: t("gallery.label"),
      title: t("gallery.title"),
      description: t("gallery.description"),
    } satisfies HeroState;
  }
  if (pathname.startsWith("/news/")) {
    // News details will override with specific article data
    return { variant: "simple", label: t("newsSection.label") };
  }
  if (pathname === "/news") {
    return {
      variant: "simple",
      label: t("newsSection.label"),
      title: t("newsSection.pageTitle"),
      description: t("newsSection.pageDescription"),
    } satisfies HeroState;
  }
  if (pathname.startsWith("/products")) {
    return {
      variant: "simple",
      label: t("products.hero.label"),
      title: t("products.hero.title"),
      description: t("products.hero.description"),
    } satisfies HeroState;
  }
  if (pathname.startsWith("/services/")) {
    // Service details will override with specific service data
    return { variant: "simple", label: t("servicesSection.label") };
  }
  if (pathname === "/services") {
    return {
      variant: "simple",
      label: t("servicesSection.label"),
      title: t("servicesSection.title"),
      description: t("servicesSection.description"),
    } satisfies HeroState;
  }
  if (pathname.startsWith("/career/intern")) {
    return {
      variant: "simple",
      label: t("career.internPageLabel"),
      title: t("career.internPageTitle"),
      description: t("career.internPageDescription"),
    } satisfies HeroState;
  }
  if (pathname.startsWith("/career")) {
    return {
      variant: "simple",
      label: t("career.label"),
      title: t("career.pageTitle"),
      description: t("career.pageDescription"),
    } satisfies HeroState;
  }
  if (pathname.startsWith("/contact")) {
    return {
      variant: "simple",
      label: t("contact.hero.label"),
      title: t("contact.hero.title"),
      description: t("contact.hero.description"),
    } satisfies HeroState;
  }
  if (pathname.startsWith("/location")) {
    return {
      variant: "simple",
      label: t("location.label"),
      title: t("location.pageTitle"),
      description: t("location.pageDescription"),
    } satisfies HeroState;
  }

  // Fallback for unknown routes
  return { variant: "simple" };
};

export const HeroProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { t } = useI18n();
  const [hero, setHeroState] = useState<HeroState>(defaultHero);

  const setHero = useCallback((next: Partial<HeroState>) => {
    setHeroState((prev) => ({ ...prev, ...next }));
  }, []);

  const resetHero = useCallback(() => setHeroState(defaultHero), []);

  useEffect(() => {
    // Reset on route change to route-specific sensible defaults.
    setHeroState(getDefaultHeroForPath(location.pathname, t));
  }, [location.pathname, t]);

  const value = useMemo<HeroContextValue>(
    () => ({ hero, setHero, resetHero }),
    [hero, setHero, resetHero]
  );

  return <HeroContext.Provider value={value}>{children}</HeroContext.Provider>;
};
