import type { LocalizedNewsArticle, NewsArticle } from "@/lib/news";
import type { Project } from "@/lib/projects";
import type { Service } from "@/lib/services";
import type { TeamMember } from "@/lib/team";
import { PRIMARY_EMAIL, SECONDARY_EMAIL, ALL_EMAILS } from "@/lib/email-config";

export const siteMetadata = {
  name: "PT SAN & PT BBR",
  legalName: "PT SAN & PT BBR",
  siteUrl: "https://san-bbr.id",
  locale: "id_ID",
  defaultTitle:
    "PT SAN & PT BBR | Infrastruktur & Roadworks Kalimantan",
  defaultDescription:
    "PT SAN & PT BBR adalah mitra konstruksi dan infrastruktur yang berfokus pada pembangunan jalan, earthwork, dan layanan aspal di Kalimantan Tengah.",
  defaultKeywords: [
    "konstruksi kalimantan tengah",
    "aspal hotmix",
    "earthwork",
    "kontraktor jalan",
    "PT SAN & PT BBR",
  ],
  defaultImage: "https://san-bbr.id/logo-san-full.jpeg",
  contactEmail: PRIMARY_EMAIL,
  contactEmailSecondary: SECONDARY_EMAIL,
  contactEmails: [...ALL_EMAILS],
  address: {
    streetAddress: "Jalan Mahir Mahar no. 88, Km. 4.6, Kel. Menteng",
    addressLocality: "Palangka Raya, Kalimantan Tengah",
    addressRegion: "Kalimantan Tengah",
    postalCode: "73111",
    addressCountry: "ID",
    latitude: -2.264455526168132,
    longitude: 113.8804974210874,
  },
  serviceArea: "Kalimantan Tengah",
  organizationId: "https://san-bbr.id/#organization",
};

/**
 * Ensure all canonical URLs are rendered as absolute URLs.
 */
export const buildCanonicalUrl = (path = "/"): string => {
  if (!path) return siteMetadata.siteUrl;
  try {
    const normalized = path.startsWith("http")
      ? path
      : `${path.startsWith("/") ? "" : "/"}${path}`;
    return new URL(normalized, siteMetadata.siteUrl).toString();
  } catch (_err) {
    return siteMetadata.siteUrl;
  }
};

export const toAbsoluteUrl = (value?: string | null): string | undefined => {
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  return `${siteMetadata.siteUrl}${value.startsWith("/") ? "" : "/"}${value}`;
};

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export const createBreadcrumbJsonLd = (items: BreadcrumbItem[]) => {
  if (!items.length) return undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildCanonicalUrl(item.url),
    })),
  } as const;
};

export const createOrganizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": siteMetadata.organizationId,
  name: siteMetadata.name,
  legalName: siteMetadata.legalName,
  url: siteMetadata.siteUrl,
  logo: toAbsoluteUrl("/logo-san-full.jpeg"),
  image: toAbsoluteUrl("/logo-san-full.jpeg"),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: siteMetadata.contactEmail,
    availableLanguage: ["id", "en"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteMetadata.address.streetAddress,
    addressLocality: siteMetadata.address.addressLocality,
    addressRegion: siteMetadata.address.addressRegion,
    postalCode: siteMetadata.address.postalCode,
    addressCountry: siteMetadata.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteMetadata.address.latitude,
    longitude: siteMetadata.address.longitude,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: siteMetadata.serviceArea,
  },
});

export const createWebsiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteMetadata.siteUrl}#website`,
  url: siteMetadata.siteUrl,
  name: siteMetadata.name,
  description: siteMetadata.defaultDescription,
  inLanguage: siteMetadata.locale,
  publisher: {
    "@id": siteMetadata.organizationId,
  },
});

export const createWebPageJsonLd = ({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name,
  description,
  url,
  image: image ? toAbsoluteUrl(image) : undefined,
  inLanguage: siteMetadata.locale,
  isPartOf: {
    "@id": siteMetadata.organizationId,
  },
});

export const createServiceJsonLd = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  serviceType: service.title,
  provider: {
    "@id": siteMetadata.organizationId,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: siteMetadata.serviceArea,
  },
  image: toAbsoluteUrl(service.image),
  url: buildCanonicalUrl(`/services/${service.slug}`),
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
});

export const createProjectJsonLd = (project: Project) => ({
  "@context": "https://schema.org",
  "@type": "Project",
  name: project.title,
  description: project.description,
  image: toAbsoluteUrl(project.image),
  url: buildCanonicalUrl(`/works/${project.slug}`),
  locationCreated: project.location,
  sponsor: {
    "@id": siteMetadata.organizationId,
  },
  category: project.category,
});

export const createNewsArticleJsonLd = (
  article: LocalizedNewsArticle | NewsArticle,
) => ({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: article.title,
  description: article.excerpt ?? article.title,
  datePublished: article.date,
  dateModified: article.date,
  author: {
    "@type": "Person",
    name: article.author,
  },
  image: Array.isArray((article as NewsArticle).contentImages)
    ? (article as NewsArticle).contentImages?.map((img) => toAbsoluteUrl(img))
    : [toAbsoluteUrl((article as LocalizedNewsArticle).image ?? "")].filter(
        Boolean,
      ),
  mainEntityOfPage: buildCanonicalUrl(`/news/${article.slug}`),
  publisher: {
    "@type": "Organization",
    name: siteMetadata.name,
    logo: {
      "@type": "ImageObject",
      url: toAbsoluteUrl("/logo-san-full.jpeg"),
    },
  },
});

export const createTeamMemberJsonLd = (member: TeamMember) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: member.name,
  jobTitle: member.role,
  description: member.bio,
  image: member.photo ? toAbsoluteUrl(member.photo) : undefined,
  worksFor: {
    "@id": siteMetadata.organizationId,
  },
  email: member.email,
  url: member.linkedin,
});

export const createContactPageJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `${siteMetadata.name} Contact`,
  url: buildCanonicalUrl("/contact"),
  description:
    "Hubungi PT SAN & PT BBR untuk konsultasi layanan konstruksi, infrastruktur, dan proyek jalan di Kalimantan Tengah.",
  inLanguage: siteMetadata.locale,
  publisher: {
    "@id": siteMetadata.organizationId,
  },
});

export const createPlaceJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Place",
  name: siteMetadata.name,
  url: buildCanonicalUrl("/location"),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteMetadata.address.streetAddress,
    addressLocality: siteMetadata.address.addressLocality,
    addressRegion: siteMetadata.address.addressRegion,
    postalCode: siteMetadata.address.postalCode,
    addressCountry: siteMetadata.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteMetadata.address.latitude,
    longitude: siteMetadata.address.longitude,
  },
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: siteMetadata.serviceArea,
  },
});
