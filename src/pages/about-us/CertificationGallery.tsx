import { useEffect, useMemo, memo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import SEO from "@/components/SEO";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";

// import heroCertifiedBackground from "@/assets/hero-section-profesional-bersertifikat.jpg";
const heroCertifiedBackground =
  "https://placehold.co/1920x600/f97316/ffffff?text=Certified+Professionals";
import {
  certificateImageDefinitions,
  type CertificateImageDefinition,
} from "@/lib/certifications";

const meta = resolveMeta(getStaticPageMeta("certifications"));

type CertificateImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

// Move variants outside component to prevent recreation on each render
const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

// Memoized certificate card component to prevent unnecessary re-renders
const CertificateCard = memo(
  ({ image, onOpen }: { image: CertificateImage; onOpen: () => void }) => {
    // Prefetch image on hover for instant dialog opening
    const prefetchImage = useCallback(() => {
      const img = new Image();
      img.src = image.src;
    }, [image.src]);

    return (
      <motion.figure
        variants={itemVariants}
        className="group flex flex-col"
        style={{ willChange: "transform, opacity" }}
      >
        <button
          className="w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-2xl group"
          onClick={onOpen}
          onMouseEnter={prefetchImage}
          onTouchStart={prefetchImage}
          aria-label={`View ${image.alt}`}
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="block h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 lg:h-80"
              draggable={false}
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
                  aria-hidden="true"
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
        <figcaption
          className="mt-3 text-sm leading-relaxed text-accent"
          dangerouslySetInnerHTML={{
            __html: String(image.caption),
          }}
        />
      </motion.figure>
    );
  }
);

CertificateCard.displayName = "CertificateCard";

const CertificationGallery = memo(() => {
  const { setHero } = useHero();
  const { t } = useI18n();
  const [selectedImage, setSelectedImage] = useState<CertificateImage | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const localizedTitle =
    t("aboutPages.certificationGallery.hero.title") || meta.title;
  const localizedDescription =
    t("aboutPages.certificationGallery.hero.description") || meta.description;

  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        {
          name: t("aboutPages.certificationGallery.hero.label"),
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

  const handleOpenDialog = useCallback((image: CertificateImage) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  }, []);

  const handleDialogChange = useCallback((open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      // Clear selected image after animation completes
      setTimeout(() => setSelectedImage(null), 200);
    }
  }, []);

  useEffect(() => {
    setHero({
      variant: "simple",
      label: t("aboutPages.certificationGallery.hero.label"),
      title: t("aboutPages.certificationGallery.hero.title"),
      description: t("aboutPages.certificationGallery.hero.description"),
      backgroundImage: heroCertifiedBackground,
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
        <section className="section-padding pb-0">
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
                {t("aboutPages.certificationGallery.badge")}
              </Badge>
              <h1 className="heading-md mt-4">
                {t("aboutPages.certificationGallery.headingTemplate", {
                  company: "PT SAN & PT BBR",
                })}
              </h1>
              <p
                className="mt-4 text-lg text-slate-600"
                dangerouslySetInnerHTML={{
                  __html: String(t("aboutPages.certificationGallery.intro")),
                }}
              />
            </motion.div>
          </div>
        </section>

        <section className="section-padding pt-12">
          <div className="container mx-auto container-padding">
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={gridVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {certificateImages.map((image) => (
                <CertificateCard
                  key={image.id}
                  image={image}
                  onOpen={() => handleOpenDialog(image)}
                />
              ))}
            </motion.div>

            {/* Single Dialog instance for better performance */}
            <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
              {selectedImage && (
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
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="w-full h-auto max-h-[90vh] object-contain"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h4 className="text-white text-lg font-semibold">
                        {selectedImage.alt}
                      </h4>
                      <p
                        className="text-white/80 text-sm mt-1"
                        dangerouslySetInnerHTML={{
                          __html: String(selectedImage.caption),
                        }}
                      />
                    </div>
                  </motion.div>
                </DialogContent>
              )}
            </Dialog>
          </div>
        </section>
      </main>
    </>
  );
});

export default CertificationGallery;
