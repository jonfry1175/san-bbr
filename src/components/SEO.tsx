import { memo, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { buildCanonicalUrl, siteMetadata, toAbsoluteUrl } from "@/lib/seo";

type OpenGraphConfig = {
  title?: string;
  description?: string;
  type?: string;
  url?: string;
  image?: string;
};

type TwitterConfig = {
  card?: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
  title?: string;
  description?: string;
  image?: string;
};

type AlternateLink = {
  hrefLang: string;
  href: string;
};

export type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  keywords?: string[];
  openGraph?: OpenGraphConfig;
  twitter?: TwitterConfig;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  alternates?: AlternateLink[];
  children?: ReactNode;
};

const SEOComponent = ({
  title,
  description,
  canonical,
  noindex,
  keywords,
  openGraph,
  twitter,
  jsonLd,
  alternates,
  children,
}: SEOProps) => {
  const resolvedTitle = title ?? siteMetadata.defaultTitle;
  const resolvedDescription = description ?? siteMetadata.defaultDescription;
  const resolvedCanonical = buildCanonicalUrl(canonical);
  const resolvedKeywords = (keywords ?? siteMetadata.defaultKeywords).filter(
    Boolean,
  );

  const og: OpenGraphConfig = {
    title: openGraph?.title ?? resolvedTitle,
    description: openGraph?.description ?? resolvedDescription,
    type: openGraph?.type ?? "website",
    url: openGraph?.url ?? resolvedCanonical,
    image: openGraph?.image ?? siteMetadata.defaultImage,
  };

  const twitterConfig: TwitterConfig = {
    card: twitter?.card ?? "summary_large_image",
    site: twitter?.site,
    title: twitter?.title ?? resolvedTitle,
    description: twitter?.description ?? resolvedDescription,
    image: twitter?.image ?? og.image,
  };

  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet
      prioritizeSeoTags
      defaultTitle={siteMetadata.defaultTitle}
      titleTemplate={`%s | ${siteMetadata.name}`}
    >
      <html lang={siteMetadata.locale.startsWith("id") ? "id" : "en"} />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {resolvedKeywords.length ? (
        <meta name="keywords" content={resolvedKeywords.join(", ")} />
      ) : null}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={resolvedCanonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteMetadata.name} />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={og.url} />
      {og.image ? (
        <meta property="og:image" content={toAbsoluteUrl(og.image)} />
      ) : null}
      <meta property="og:locale" content={siteMetadata.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterConfig.card} />
      {twitterConfig.site ? (
        <meta name="twitter:site" content={twitterConfig.site} />
      ) : null}
      <meta name="twitter:title" content={twitterConfig.title} />
      <meta name="twitter:description" content={twitterConfig.description} />
      {twitterConfig.image ? (
        <meta
          name="twitter:image"
          content={toAbsoluteUrl(twitterConfig.image)}
        />
      ) : null}

      {/* Alternate language links */}
      {alternates?.map((alternate) => (
        <link
          key={`${alternate.hrefLang}-${alternate.href}`}
          rel="alternate"
          hrefLang={alternate.hrefLang}
          href={buildCanonicalUrl(alternate.href)}
        />
      ))}

      {/* Structured data */}
      {jsonLdArray.map((schema, idx) => (
        <script
          key={idx.toString()}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0),
          }}
        />
      ))}

      {children ?? null}
    </Helmet>
  );
};

const SEO = memo(SEOComponent);
export default SEO;
