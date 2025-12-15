import ServicesSection from "@/components/ServicesSection";
import SEO from "@/components/SEO";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { useI18n } from "@/lib/i18n";
import { useMemo } from "react";

const meta = resolveMeta(getStaticPageMeta("services"));

const Services = () => {
  const { t } = useI18n();
  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        { name: t("common.services"), url: meta.path },
      ]),
    [t],
  );
  return (
    <main className="section-padding bg-background-secondary min-h-screen">
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
      <ServicesSection />
    </main>
  );
};

export default Services;
