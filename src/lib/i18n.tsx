import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { SalesCategory } from "./products";

import { enTranslations } from "./i18n-en";
import { idTranslations } from "./i18n-id";
import { zhTranslations } from "./i18n-zh";

export type Language = "EN" | "ID" | "ZH";

type HeaderTranslations = {
  home: string;
  aboutUs: string;
  aboutDropdownAria: string;
  languageLabel: string;
  changeLanguageAria: string;
  getQuote: string;
  switchLanguageAria: Record<Language, string>;
  aboutLinks: {
    companyIntroduction: string;
    companyLeadership: string;
  };
  navigationItems: {
    services: string;
    products: string;
    ourWorks: string;
    gallery: string;
    news: string;
    career: string;
    location: string;
    contact: string;
  };
  productLinks: {
    rentalAlatBerat: string;
    jasaKonstruksi: string;
  };
  careerLinks: {
    employee: string;
    intern: string;
    san: string;
    bbr: string;
  };
};

type HeroTranslations = {
  welcome: string;
  defaultTitle: string;
  defaultDescription: string;
};

type AboutSectionTranslations = {
  label: string;
  title: string;
  description: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  ptSan: {
    title: string;
    description: string;
  };
  ptBbr: {
    title: string;
    description: string;
  };
  achievements: {
    established: string;
    establishedDesc: string;
    yearsExperience: string;
    yearsExperienceDesc: string;
    successfulProjects: string;
    successfulProjectsDesc: string;
    satisfiedClients: string;
    satisfiedClientsDesc: string;
  };
  values: {
    title: string;
    integrity: {
      title: string;
      description: string;
    };
    quality: {
      title: string;
      description: string;
    };
    innovation: {
      title: string;
      description: string;
    };
    reliability: {
      title: string;
      description: string;
    };
  };
  learnMore: string;
};

type VisionMissionTranslations = {
  label: string;
  title: string;
  subtitle: string;
  ptSan: {
    vision: { title: string; content: string };
    mission: { title: string; points: string[] };
  };
  ptBbr: {
    vision: { title: string; content: string };
    mission: { title: string; points: string[] };
  };
  vision: {
    title: string;
    content: string;
  };
  mission: {
    title: string;
    points: string[];
  };
};

type ServicesSectionTranslations = {
  label: string;
  title: string;
  description: string;
  ptSan: {
    title: string;
    description: string;
    action: string;
  };
  ptBbr: {
    title: string;
    description: string;
    action: string;
  };
  viewAll: string;
  learnMore: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaRequestQuote: string;
};

type ProjectsSectionTranslations = {
  label: string;
  title: string;
  description: string;
  viewAll: string;
  client: string;
  location: string;
  year: string;
  stats?: {
    yearsExperience: string;
    roadsBuilt: string;
    sitesDeveloped: string;
    sitesDevelopedValue: string;
    clientSatisfaction: string;
  };
  categories?: Record<string, string>;
  statuses?: Record<string, string>;
  ctaTitle?: string;
  ctaDescription?: string;
  startProject?: string;
};

type ProjectContentTranslations = {
  title?: string;
  client?: string;
  location?: string;
  year?: string;
  category?: string;
  status?: string;
  description?: string;
};

type ClientsSectionTranslations = {
  label: string;
  title: string;
  description: string;
};

type SupportedBySectionTranslations = {
  label: string;
  title: string;
  description?: string;
};

type NewsSectionTranslations = {
  label: string;
  title: string;
  description: string;
  readMore: string;
  viewAll: string;
  pageTitle: string;
  pageDescription: string;
  detail: {
    backToNews: string;
    shareLabel: string;
    shareButton: string;
    copyLinkButton: string;
    copyLinkTitle: string;
    copyLinkDescription: string;
    moreArticles: string;
    summaryTitle: string;
    categoryLabel: string;
    contentMissing: {
      title: string;
      description: string;
    };
    linkedIn: string;
    whatsapp: string;
    twitter: string;
  };
  featured?: string;
  categories?: Record<string, string>;
};

type CTASectionTranslations = {
  title: string;
  description: string;
  benefits: string[];
  contactInfo: {
    phone: string;
    email: string;
    hours: {
      title: string;
      description: string;
      schedule: Array<{
        day: string;
        time: string;
        status?: "open" | "closed";
      }>;
    };
  };
  getQuote: string;
  viewProducts: string;
  contactUs: string;
  readyToStart: string;
};

type CompanyStrategyTranslations = {
  label: string;
  title: string;
  description: string;
  ptSan: {
    title: string;
    description: string;
  };
  ptBbr: {
    title: string;
    description: string;
  };
  sipadu: {
    sinergi: {
      title: string;
      description: string;
    };
    integritas: {
      title: string;
      description: string;
    };
    perlindungan: {
      title: string;
      description: string;
    };
    amanah: {
      title: string;
      description: string;
    };
    dedikasi: {
      title: string;
      description: string;
    };
    unggul: {
      title: string;
      description: string;
    };
  };
  logoMeaning: {
    title: string;
    companyName: string;
    items: {
      redColor: {
        title: string;
        description: string;
      };
      redCube: {
        title: string;
        description: string;
      };
      whiteCenter: {
        title: string;
        description: string;
      };
      blackLines: {
        title: string;
        description: string;
      };
    };
  };
  strategies: {
    excellence: {
      title: string;
      description: string;
    };
    innovation: {
      title: string;
      description: string;
    };
    sustainability: {
      title: string;
      description: string;
    };
    partnership: {
      title: string;
      description: string;
    };
  };
};

type CareerTranslations = {
  label: string;
  internPageLabel: string;
  internPageTitle: string;
  internPageDescription: string;
  pageTitle: string;
  pageDescription: string;
  openPositionsLabel: string;
  internPositionsLabel: string;
  internPositionsDescription: string;
  requirementsLabel: string;
  visionText?: string;
  missionText?: string;
  jobs: Record<
    string,
    {
      title: string;
      department: string;
      location: string;
      employmentType: string;
      description: string;
      requirements: string[];
    }
  >;
  cta: {
    notFoundTitle: string;
    notFoundDescriptionPrefix: string;
    sendCvButton: string;
    applyNow: string;
  };
};

type ContactTranslations = {
  hero: {
    label: string;
    title: string;
    description: string;
  };
  form: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
  };
  details: {
    title: string;
    addressLabel: string;
    emailLabel: string;
    getDirections: string;
    secondaryEmailLine: string;
  };
  validation: {
    nameRequired: string;
    emailInvalid: string;
    subjectRequired: string;
    messageMin: string;
  };
  toast: {
    success: string;
  };
  mail: {
    subjectTemplate: string; // e.g. "Application: {subject}"
    generalSubject: string;
  };
};

type GalleryTranslations = {
  label: string;
  title: string;
  description: string;
  emptyState: {
    title: string;
    description: string;
  };
  ui?: {
    filterBy: string;
    viewLabel: string;
    gridAria: string;
    byCategoryAria: string;
    keyboardHint: string; // expects Ctrl+ combos; keep generic
  };
  autoplay: {
    play: string;
    pause: string;
    prevAria: string;
    nextAria: string;
  };
  overlay: {
    photoPrefix: string;
    projectLabelPrefix: string;
    clickToView: string;
  };
  card?: {
    hdBadge: string;
  };
  category: {
    adaro: { title: string; description: string; badge: string };
    kalimantan: { title: string; description: string; badge: string };
    borneo: { title: string; description: string; badge: string };
    allTitle: string;
    allDescription: string;
  };
  stats?: {
    projectDocs: string;
    projectCategories: string;
    qualityAssured: string;
    completedProjects: string;
  };
  showingLabel: string;
  photosNoun: string;
  clickToViewDetail: string;
  modal: {
    companyName: string;
  };
  ariaGalleryNavigation: string; // expects {title} replacement
};

type LocationTranslations = {
  label: string;
  pageTitle: string;
  pageDescription: string;
  map?: {
    coverageBadge: string;
    headline: string;
    subheadline: string;
    category: {
      headOffice: string;
      strategicPartner: string;
      industryPartner: string;
    };
    zoomOut: string;
    viewOnMap: string;
    showLess: string;
    viewMoreTemplate: string; // expects {count}
  };
};

type CommonTranslations = {
  loading: string;
  home: string;
  works: string;
  services: string;
  all: string;
  backToHome: string;
  goBack: string;
  backToTop: string;
  viewNews: string;
  viewDetails: string;
  contactUs: string;
  or: string;
  keyDetails: string;
  client: string;
  location: string;
  year: string;
  status: string;
  category: string;
  projectOverview: string;
  keyFeatures: string;
  relatedProjects: string;
  pageNotFound: string;
  pageNotFoundDescription: string;
};

type FooterTranslations = {
  company: {
    title: string;
    description: string;
    followUs: string;
  };
  quickLinks: {
    title: string;
    aboutUs: string;
    ourTeam: string;
    services: string;
    projects: string;
    news: string;
    career: string;
    location: string;
    contact: string;
  };
  services: {
    title: string;
    earthwork: string;
    asphalt: string;
    concrete: string;
    maintenance: string;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    emailSecondary: string;
    emails: string[];
  };
  location: {
    title: string;
    openInGoogleMaps: string;
  };
  newsletter?: {
    title: string;
    error: string;
  };
  ctaLookingForPartner: string;
  ctaLetsBuild: string;
  copyright: string;
};

// About pages (Our Company, Our Team, Team Member Detail, Certification Gallery)
type AboutPagesTranslations = {
  ourCompany: {
    hero: { label: string; title: string; description: string };
    intro: {
      heading: string;
      paragraph1: string;
      paragraph2: string;
      imageAlt: string;
      slogan: string;
    };
  };
  ourTeam: {
    hero: { label: string; title: string; description: string };
    badges: { peopleCulture: string };
    overview: { title: string; description: string };
    leadership: {
      title: string;
      description: string;
      principles: Array<{ title: string; description: string }>;
    };
    stats: {
      certifiedProfessionals: {
        label: string;
        value: string;
        ctaLabel: string;
      };
      trainingHours: { label: string; value: string };
    };
    organization: {
      badgeCompany: string;
      title: string;
      paragraph1: string;
      paragraph2: string;
      hierarchy: Array<{ title: string; description: string }>;
      divisions: Array<{ name: string; focus: string }>;
      levelLabelTemplate: string; // expects {index}
      divisionLabelTemplate: string; // expects {index}
    };
  };
  teamMemberDetail: {
    backToTeam: string;
    buttons: {
      email: string;
      linkedIn: string;
      emailAria: string;
      linkedInAria: string;
    };
    signatureQuote: string;
    leadershipProfile: string;
    keyStrengths: string;
    keyAchievements: string;
    leadershipMetrics: string;
    timeline: {
      title: string;
      description: string;
      descriptionTemplate?: string;
    };
  };
  certificationGallery: {
    hero: { label: string; title: string; description: string };
    badge: string;
    headingTemplate: string; // expects {company}
    intro: string;
    defaultCaption: string;
    captions: Record<string, string>;
  };
  companyAwardsGallery: {
    hero: { label: string; title: string; description: string };
    badge: string;
    headingTemplate: string; // expects {company}
    intro: string;
    defaultCaption: string;
    captions: Record<string, string>;
  };
};

type AboutPageTranslations = {
  companyIntroduction: string;
  companyLeadership: string;
  description: string;
  badge: string;
  ourStory: string;
  storyText1: string;
  storyText2: string;
  whyChooseTitle: string;
  whyChooseDesc: string;
  comprehensiveWarranty: string;
  lightingTowerWarranty: string;
  excavatorWarranty: string;
  dumpTruckWarranty: string;
  factorySupport: string;
  expertSupport: string;
  dedicatedSupport: string;
  sparePartsAvailability: string;
  branchSupport: string;
  lifetimePerformance: string;
  provenTrackRecord: string;
  globalDeployment: string;
  strongPresence: string;
  extensiveNetwork: string;
  trustedCompanies: string;
  ourLeadershipTitle: string;
  leadershipHeroDesc: string;
  viewProfile: string;
  viewProfileDesc: string;
};

type LeadersTranslations = {
  suherman: { position: string };
  bisterPanjaitan: { position: string };
};

type ServiceDetailTranslations = {
  scopeOfWork: string;
  specifications: string;
  deliverables: { title: string };
  applications: { title: string };
  premiumService: string;
  process: {
    title: string;
    steps: {
      consultation: { title: string; description: string };
      planning: { title: string; description: string };
      execution: { title: string; description: string };
    };
  };
  faqs: {
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  backToServices: string;
  sidebar: {
    title: string;
    descriptionTemplate: string; // expects {service}
  };
  whyChoose: {
    title: string;
    items: string[];
  };
  bottomCta: {
    titleTemplate: string; // expects {service}
    description: string;
    exploreServices: string;
  };
};

export type TranslationResources = {
  header: HeaderTranslations;
  hero: HeroTranslations;
  aboutSection: AboutSectionTranslations;
  visionMission: VisionMissionTranslations;
  servicesSection: ServicesSectionTranslations;
  projectsSection: ProjectsSectionTranslations;
  projectsData: Record<string, ProjectContentTranslations>;
  clientsSection: ClientsSectionTranslations;
  supportedBySection: SupportedBySectionTranslations;
  careerSupportedBySection: SupportedBySectionTranslations;
  newsSection: NewsSectionTranslations;
  ctaSection: CTASectionTranslations;
  companyStrategy: CompanyStrategyTranslations;
  career: CareerTranslations;
  gallery: GalleryTranslations;
  contact: ContactTranslations;
  location: LocationTranslations;
  serviceDetail: ServiceDetailTranslations;
  /** Per-service translations keyed by service slug */
  services: Record<
    string,
    {
      title: string;
      description: string;
      features: string[];
      scope?: string[];
      specs?: Array<{ label: string; value: string }>;
    }
  >;
  aboutPages: AboutPagesTranslations;
  aboutPage: AboutPageTranslations;
  leaders: LeadersTranslations;
  about: {
    ourVision: string;
    ourMission: string;
  };
  products: {
    hero: {
      label: string;
      title: string;
      description: string;
    };
    intro: {
      badge: string;
      description: string;
      rent: {
        badge: string;
        title: string;
        description: string;
      };
      sale: {
        badge: string;
        title: string;
        description: string;
      };
      all: {
        badge: string;
        title: string;
        description: string;
      };
    };
    filters: {
      title: string;
      description: string;
      categoryTitle: string;
      allCategories: string;
      moreCategoriesLabel: string;
      viewOptions: string;
      exploreMore: string; // expects {count}
      productNoun: string;
      searchPlaceholder?: string;
      sortPlaceholder?: string;
      reset?: string;
      activeLabel?: string;
      salesCategoryTitle?: string;
      salesCategories?: {
        all: string;
        rent: string;
        sale: string;
      };
    };
    emptyState: {
      title: string;
      description: string;
    };
    status: {
      contactLabel: string;
      descriptionTemplate: string; // expects {email} and {whatsapp}
      descriptionEmailOnly?: string; // expects {email}
      descriptionDualEmail?: string; // expects {email} and {emailSecondary}
    };
    pagination?: {
      perPage: string;
      perPageAria: string;
      summaryTemplate: string; // expects {start}, {end}, {total}, {noun}
    };
    detail?: {
      specsTitle: string;
      highlights: string;
      categoryHighlights: string;
      availabilityStatus: string;
      nextSteps: string;
      nextStepsList: string[];
      helpText: string;
      whatsappButton: string;
      rentPrefix?: string;
      salePrefix?: string;
      locationTitle?: string;
      locationValue?: string;
    };
    /** Optional structured product data translations keyed by id */
    productsData?: {
      categories?: Record<
        string,
        { name?: string; description?: string; highlight?: string }
      >;
      products?: Record<
        string,
        {
          name?: string;
          description?: string;
          specs?: string[];
          weightClass?: string;
          tags?: string[];
          salesCategory?: SalesCategory;
        }
      >;
      sortOptions?: Record<string, { label?: string }>;
    };
  };
  common: CommonTranslations;
  footer: FooterTranslations;
};

const resources: Record<Language, TranslationResources> = {
  EN: enTranslations,
  ID: idTranslations,
  ZH: zhTranslations,
};

const languageMeta: Record<Language, { label: string; flag: string }> = {
  EN: { label: "English", flag: "🇺🇸" },
  ID: { label: "Bahasa Indonesia", flag: "🇮🇩" },
  ZH: { label: "简体中文", flag: "🇨🇳" },
};

const GEO_LOOKUP_URL = "https://ipapi.co/json/";
const GEO_TIMEOUT_MS = 3500;

type GeoDetectionResponse = {
  country_code?: string;
  countryCode?: string;
  country?: string;
  country_code_iso3166_alpha2?: string;
  countryCodeIso2?: string;
  languages?: string | string[];
};

const getLanguageFromCountry = (countryCode?: string): Language | undefined => {
  if (!countryCode) return undefined;
  const normalized = countryCode.trim().toUpperCase();
  if (normalized.length !== 2) return undefined;

  switch (normalized) {
    case "ID":
      return "ID";
    case "CN":
    case "HK":
    case "MO":
    case "TW":
      return "ZH";
    default:
      return "EN";
  }
};

const getLanguageFromLocale = (locale?: string): Language | undefined => {
  if (!locale) return undefined;
  const normalized = locale.trim().toLowerCase();
  if (!normalized) return undefined;

  if (normalized.startsWith("id")) return "ID";
  if (normalized.startsWith("zh") || normalized.startsWith("cmn")) return "ZH";

  return undefined;
};

const inferLanguageFromLocales = (locales: string[]): Language | undefined => {
  for (const locale of locales) {
    const match = getLanguageFromLocale(locale);
    if (match) return match;
  }
  return undefined;
};

const getLanguageFromNavigator = (): Language | undefined => {
  if (typeof navigator === "undefined") return undefined;

  const languages = Array.isArray(navigator.languages)
    ? navigator.languages
    : [];
  const fromNavigatorList = inferLanguageFromLocales(languages);
  if (fromNavigatorList) return fromNavigatorList;

  return getLanguageFromLocale(navigator.language);
};

const extractCountryCode = (data: GeoDetectionResponse): string | undefined => {
  const candidates = [
    data.country_code,
    data.countryCode,
    data.country_code_iso3166_alpha2,
    data.countryCodeIso2,
    data.country,
  ];

  for (const candidate of candidates) {
    if (typeof candidate !== "string") continue;
    const trimmed = candidate.trim();
    if (trimmed.length === 2) return trimmed;
  }

  return undefined;
};

const extractGeoLocales = (data: GeoDetectionResponse): string[] => {
  if (Array.isArray(data.languages)) {
    return data.languages.filter(
      (value): value is string => typeof value === "string"
    );
  }

  if (typeof data.languages === "string") {
    return data.languages
      .split(/[;,]/)
      .map((value) => value.trim())
      .filter(Boolean);
  }

  return [];
};

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  languageMeta: typeof languageMeta;
  translations: TranslationResources;
  t: (path: string, replacements?: Record<string, string>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "khp_language";
const defaultLanguage: Language = "ID";

const resolvePath = (obj: unknown, path: string): unknown =>
  path.split(".").reduce<unknown>((acc, segment) => {
    if (
      acc &&
      typeof acc === "object" &&
      segment in (acc as Record<string, unknown>)
    ) {
      return (acc as Record<string, unknown>)[segment];
    }
    return undefined;
  }, obj);

const applyReplacements = (
  value: string,
  replacements?: Record<string, string>
) => {
  if (!replacements) return value;
  return Object.keys(replacements).reduce(
    (acc, key) =>
      acc.replace(new RegExp(`\\{${key}\\}`, "g"), replacements[key]),
    value
  );
};

export const I18nProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return defaultLanguage;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    return stored && stored in resources ? stored : defaultLanguage;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && stored in resources) return;
    if (language !== defaultLanguage) return;

    let isActive = true;
    const controller = new AbortController();

    const maybeSetLanguage = (candidate?: Language) => {
      if (!isActive || !candidate || candidate === language) return;
      setLanguageState(candidate);
    };

    const fallbackToNavigator = () => {
      const navigatorLanguage = getLanguageFromNavigator();
      if (navigatorLanguage) {
        maybeSetLanguage(navigatorLanguage);
      }
    };

    const detectLanguage = async () => {
      const timeoutId = window.setTimeout(
        () => controller.abort(),
        GEO_TIMEOUT_MS
      );
      try {
        const response = await fetch(GEO_LOOKUP_URL, {
          signal: controller.signal,
        });
        if (!response.ok) {
          fallbackToNavigator();
          return;
        }

        const data = (await response.json()) as GeoDetectionResponse;
        const countryLanguage = getLanguageFromCountry(
          extractCountryCode(data)
        );
        if (countryLanguage) {
          maybeSetLanguage(countryLanguage);
          return;
        }

        const geoLocaleLanguage = inferLanguageFromLocales(
          extractGeoLocales(data)
        );
        if (geoLocaleLanguage) {
          maybeSetLanguage(geoLocaleLanguage);
          return;
        }

        fallbackToNavigator();
      } catch (error) {
        fallbackToNavigator();
      } finally {
        window.clearTimeout(timeoutId);
      }
    };

    void detectLanguage();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, [language]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const translations = useMemo(() => resources[language], [language]);

  const t = useCallback(
    (path: string, replacements?: Record<string, string>) => {
      const value = resolvePath(translations, path);
      if (typeof value === "string") {
        return applyReplacements(value, replacements);
      }
      return path;
    },
    [translations]
  );

  const contextValue = useMemo<I18nContextValue>(
    () => ({ language, setLanguage, languageMeta, translations, t }),
    [language, setLanguage, translations, t]
  );

  return (
    <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
