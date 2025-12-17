import SEO from "@/components/SEO";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { Suspense, lazy, useEffect, useMemo } from "react";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const VisionMissionSection = lazy(
  () => import("@/components/VisionMissionSection")
);
// const CompanyStrategySection = lazy(
//   () => import("@/components/CompanyStrategySection")
// );
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const OurProductsSection = lazy(
  () => import("@/components/OurProductsSection")
);
// const ClientsSection = lazy(() => import("@/components/ClientsSection"));
// const SupportedBySection = lazy(
//   () => import("@/components/SupportedBySection")
// );
const NewsSection = lazy(() => import("@/components/NewsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));

const Index = () => {
  const { setHero } = useHero();
  const { t } = useI18n();
  const meta = useMemo(() => resolveMeta(getStaticPageMeta("home")), []);
  const breadcrumbs = useMemo(
    () => createBreadcrumbJsonLd([{ name: t("common.home"), url: "/" }]),
    [t]
  );

  useEffect(() => {
    // Ensure home hero variant
    setHero({ variant: "home", label: t("hero.welcome") });
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
      <Suspense fallback={null}>
        <AboutSection />
        <VisionMissionSection />
        {/* <CompanyStrategySection /> */}
        {/* Show services on all viewports; limit to 3 on the home page */}
        <ServicesSection limit={3} />
        <OurProductsSection />
        {/* <ProjectsSection /> */}
        {/* <ClientsSection /> */}
        {/* <SupportedBySection /> */}
        <NewsSection />
        <CTASection />
      </Suspense>
    </>
  );
};

export default Index;
