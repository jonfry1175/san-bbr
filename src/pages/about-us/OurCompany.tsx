import { useEffect, useMemo, memo } from "react";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import CompanyStrategySection from "@/components/CompanyStrategySection";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import SEO from "@/components/SEO";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";

const meta = resolveMeta(getStaticPageMeta("aboutCompany"));
const OurCompany = memo(() => {
  const { setHero } = useHero();
  const { t } = useI18n();
  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        { name: t("aboutPages.ourCompany.hero.label"), url: meta.path },
      ]),
    [t],
  );
  useEffect(() => {
    setHero({
      variant: "simple",
      label: t("aboutPages.ourCompany.hero.label"),
      title: t("aboutPages.ourCompany.hero.title"),
      description: t("aboutPages.ourCompany.hero.description"),
    });
  }, [setHero, t]);
  const localizedTitle = t("aboutPages.ourCompany.hero.title") || meta.title;
  const localizedDescription =
    t("aboutPages.ourCompany.hero.description") || meta.description;

  return (
    <>
      <SEO
        title={localizedTitle}
        description={localizedDescription}
        canonical={meta.canonical}
        keywords={meta.keywords}
        openGraph={{
          title: localizedTitle,
          description: localizedDescription,
          url: meta.canonical,
          image: meta.image,
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: localizedTitle,
            description: localizedDescription,
            url: meta.canonical,
            image: meta.image,
          }),
          breadcrumbs,
        ].filter(Boolean)}
      />
      <main>
        {/* Detailed company history, values, mission/vision */}
        <AboutSection />

        {/* Vision & Mission Section */}
        <VisionMissionSection />

        {/* Strategi Perusahaan (SIPADU) */}
        <CompanyStrategySection />
      </main>
    </>
  );
});

export default OurCompany;
