import { useEffect, useMemo, memo } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import SEO from "@/components/SEO";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import heroAwardsBackground from "@/assets/hero-section-penghargaan-kami.jpg";
import {
  certificateImageDefinitions,
  type CertificateImage,
} from "@/lib/company-awards-data";

const meta = resolveMeta(getStaticPageMeta("companyAwards"));

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const gridVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const CompanyAwardsGallery = memo(() => {
  const { setHero } = useHero();
  const { t } = useI18n();

  const localizedTitle =
    t("aboutPages.companyAwardsGallery.hero.title") || meta.title;
  const localizedDescription =
    t("aboutPages.companyAwardsGallery.hero.description") || meta.description;

  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        {
          name: t("aboutPages.companyAwardsGallery.hero.label"),
          url: meta.path,
        },
      ]),
    [t]
  );

  const certificateImages: CertificateImage[] = useMemo(
    () =>
      certificateImageDefinitions.map((image) => {
        const translatedCaption = t(image.captionKey);
        return {
          ...image,
          caption:
            translatedCaption === image.captionKey
              ? image.fallbackCaption
              : translatedCaption,
        };
      }),
    [t]
  );

  useEffect(() => {
    setHero({
      variant: "simple",
      label: t("aboutPages.companyAwardsGallery.hero.label"),
      title: t("aboutPages.companyAwardsGallery.hero.title"),
      description: t("aboutPages.companyAwardsGallery.hero.description"),
      backgroundImage: heroAwardsBackground,
    });
  }, [setHero, t]);

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
      <main className="bg-white text-slate-900">
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <Badge
                variant="secondary"
                className="border-accent/20 bg-accent/10 text-accent"
              >
                {t("aboutPages.companyAwardsGallery.badge")}
              </Badge>
              <h1 className="heading-md mt-4">
                {t("aboutPages.companyAwardsGallery.headingTemplate", {
                  company: "PT. Karya Halim Sampoerna",
                })}
              </h1>
              <p className="mt-4 text-lg text-slate-600 md:whitespace-nowrap">
                {t("aboutPages.companyAwardsGallery.intro")}
              </p>
            </motion.div>

            <motion.div
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={gridVariants}
              initial="hidden"
              animate="show"
              style={{ opacity: 1 }}
            >
              {certificateImages.map((image, index) => (
                <motion.figure
                  key={image.id}
                  variants={itemVariants}
                  className="group flex flex-col"
                  style={{ opacity: 1 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-2xl group">
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading="eager"
                            decoding="async"
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="block h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 lg:h-80"
                            draggable={false}
                            style={{ opacity: 1 }}
                            onError={(e) => {
                              console.error("Image failed to load:", image.src);
                            }}
                            onLoad={() => {
                              console.log("Image loaded:", image.src);
                            }}
                          />
                          <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"
                            aria-hidden="true"
                          />
                          {/* Hover overlay with view indicator */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                              <svg
                                className="w-6 h-6 text-slate-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-7xl p-0 overflow-hidden border-0 bg-black/95 backdrop-blur-sm">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="relative"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto max-h-[90vh] object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <h4 className="text-white text-lg font-semibold">
                            {image.alt}
                          </h4>
                          <p className="text-white/80 text-sm mt-1">
                            {image.caption}
                          </p>
                        </div>
                      </motion.div>
                    </DialogContent>
                  </Dialog>
                  <figcaption className="mt-3 text-sm leading-relaxed text-accent">
                    {image.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
});

export default CompanyAwardsGallery;
