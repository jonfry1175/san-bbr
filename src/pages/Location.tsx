import { useEffect, useMemo } from "react";
import LocationMap from "@/components/LocationMap";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import SEO from "@/components/SEO";
import {
  createBreadcrumbJsonLd,
  createPlaceJsonLd,
  createWebPageJsonLd,
} from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";

const meta = resolveMeta(getStaticPageMeta("location"));

const Location = () => {
  const { setHero } = useHero();
  const { translations, t } = useI18n();

  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        { name: t("common.location"), url: meta.path },
      ]),
    [t],
  );

  useEffect(() => {
    setHero({
      variant: "simple",
      label: translations.location.label,
      title: translations.location.pageTitle,
      description: translations.location.pageDescription,
    });
  }, [setHero, translations]);

  return (
    <>
      <SEO
        title={translations.location.pageTitle || meta.title}
        description={translations.location.pageDescription || meta.description}
        canonical={meta.canonical}
        keywords={meta.keywords}
        openGraph={{
          title: translations.location.pageTitle || meta.title,
          description:
            translations.location.pageDescription || meta.description,
          url: meta.canonical,
          image: meta.image,
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: translations.location.pageTitle || meta.title,
            description:
              translations.location.pageDescription || meta.description,
            url: meta.canonical,
            image: meta.image,
          }),
          createPlaceJsonLd(),
          breadcrumbs,
        ].filter(Boolean)}
      />
      <div className="bg-background">
        <LocationMap />
      </div>
    </>
  );
};

export default Location;
