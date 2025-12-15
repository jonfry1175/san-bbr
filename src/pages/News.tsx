import NewsSection from "@/components/NewsSection";
import SEO from "@/components/SEO";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { useEffect, useMemo } from "react";

const meta = resolveMeta(getStaticPageMeta("news"));

const News = () => {
  const { setHero } = useHero();
  const { t } = useI18n();
  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        { name: t("common.news"), url: meta.path },
      ]),
    [t],
  );

  useEffect(() => {
    setHero({
      variant: "simple",
      label: t("newsSection.label"),
      title: t("newsSection.pageTitle"),
      description: t("newsSection.pageDescription"),
    });
  }, [setHero, t]);

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        keywords={meta.keywords}
        openGraph={{
          title: meta.title,
          description: meta.description,
          url: meta.canonical,
          image: meta.image,
          type: "website",
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: meta.title,
            description: meta.description,
            url: meta.canonical,
            image: meta.image,
          }),
          breadcrumbs,
        ].filter(Boolean)}
      />
      {/* Main Content */}
      <main>
        <NewsSection />
      </main>
    </>
  );
};

export default News;
