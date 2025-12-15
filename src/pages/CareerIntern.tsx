import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PRIMARY_EMAIL } from "@/lib/email-config";

import SEO from "@/components/SEO";
import CareerSupportedBySection from "@/components/CareerSupportedBySection";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { useEffect, useMemo, memo } from "react";
import { useI18n } from "@/lib/i18n";
import { useHero } from "@/hooks/use-hero";
import { motion, useReducedMotion } from "framer-motion";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";

const meta = resolveMeta(getStaticPageMeta("career"));

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  description: string;
  requirements: string[];
};

const CareerIntern = memo(() => {
  const { setHero } = useHero();
  const { translations, t } = useI18n();
  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        { name: t("common.career"), url: "/career/intern" },
      ]),
    [t]
  );
  const mail = PRIMARY_EMAIL;
  const mailSecondary = "recruitment@karyahalimsampoerna.id";

  useEffect(() => {
    setHero({
      variant: "simple",
      label: translations.career.internPageLabel,
      title: translations.career.internPageTitle,
      description: translations.career.internPageDescription,
    });
  }, [setHero, translations]);

  const internJobs: Job[] = useMemo(() => {
    const keys = [
      "site-engineer-intern",
      "safety-hse-intern",
      "estimator-planning-intern",
    ] as const;
    return [];
    // return keys.map((key) => {
    //   const data = translations.career.jobs[key];
    //   const job: Job = {
    //     id: key,
    //     title: data.title,
    //     department: data.department,
    //     location: data.location,
    //     employmentType: data.employmentType,
    //     description: data.description,
    //     requirements: data.requirements,
    //   };
    //   return job;
    // });
  }, [translations]);

  const prefersReduced = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { y: 16, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 160, damping: 18 },
    },
  };

  return (
    <>
      <SEO
        title={`${translations.career.internPositionsLabel} - ${translations.career.pageTitle}`}
        description={translations.career.internPositionsDescription}
        canonical={`${meta.canonical}/intern`}
        keywords={meta.keywords}
        openGraph={{
          title: `${translations.career.internPositionsLabel} - ${translations.career.pageTitle}`,
          description: translations.career.internPositionsDescription,
          url: `${meta.canonical}/intern`,
          image: meta.image,
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: `${translations.career.internPositionsLabel} - ${translations.career.pageTitle}`,
            description: translations.career.internPositionsDescription,
            url: `${meta.canonical}/intern`,
            image: meta.image,
          }),
          breadcrumbs,
        ].filter(Boolean)}
      />
      <main className="container mx-auto container-padding section-padding">
        <motion.div
          className="mb-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="text-accent font-medium uppercase tracking-wide">
            {translations.career.internPositionsLabel}
          </span>
          <h2 className="heading-md mt-2">
            {translations.career.internPositionsLabel}
          </h2>
          <p className="text-body text-muted-foreground mt-2">
            {translations.career.internPositionsDescription}
          </p>
        </motion.div>

        {internJobs.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {internJobs.map((job) => (
              <motion.div
                key={job.id}
                variants={item}
                whileHover={{ y: -4, scale: prefersReduced ? 1 : 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Card className="card-hover h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="heading-sm">{job.title}</h3>
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-small text-muted-foreground">
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary"
                          >
                            {job.department}
                          </Badge>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-accent" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-4 w-4 text-accent" />
                            {job.employmentType}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p
                      className="text-body text-muted-foreground mt-4"
                      dangerouslySetInnerHTML={{
                        __html: String(job.description),
                      }}
                    />

                    <div className="mt-4 flex-grow">
                      <p className="font-medium">
                        {translations.career.requirementsLabel}
                      </p>
                      <ul className="mt-2 list-disc list-inside text-body text-muted-foreground space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 mt-6 border-t border-card-border flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="text-small text-muted-foreground">
                        {translations.career.cta.notFoundDescriptionPrefix}{" "}
                        <a
                          href={`mailto:${mail}?subject=Application%3A%20${encodeURIComponent(
                            job.title
                          )}`}
                          className="text-primary hover:underline"
                        >
                          {mail}
                        </a>{" "}
                        <span className="text-muted-foreground">
                          {t("common.or")}
                        </span>{" "}
                        <a
                          href={`mailto:${mailSecondary}?subject=Application%3A%20${encodeURIComponent(
                            job.title
                          )}`}
                          className="text-primary hover:underline"
                        >
                          {mailSecondary}
                        </a>
                      </div>
                      <motion.div
                        className="sm:ml-auto"
                        whileHover={{ y: -2, scale: prefersReduced ? 1 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          asChild
                          className="w-full sm:w-auto bg-gradient-accent button-glow"
                        >
                          <a
                            href={`mailto:${mail}?subject=Application%3A%20${encodeURIComponent(
                              job.title
                            )}`}
                          >
                            {translations.career.cta.applyNow}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : null}

        {/* Career-specific Supported By Section */}
        <CareerSupportedBySection />

        {/* General CTA */}
        <motion.div
          className="mt-12 bg-background-secondary rounded-2xl p-8 md:p-10 border border-card-border"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="heading-md">{t("career.cta.notFoundTitle")}</h3>
              <p className="text-body text-muted-foreground mt-2">
                {t("career.cta.notFoundDescriptionPrefix")}{" "}
                <a
                  href={`mailto:${mail}`}
                  className="text-primary hover:underline"
                >
                  {mail}
                </a>{" "}
                <span className="text-muted-foreground">{t("common.or")}</span>{" "}
                <a
                  href={`mailto:${mailSecondary}`}
                  className="text-primary hover:underline"
                >
                  {mailSecondary}
                </a>
              </p>
            </div>
            <div className="flex md:justify-end">
              <motion.div
                whileHover={{ y: -2, scale: prefersReduced ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-accent button-glow px-8"
                >
                  <a
                    href={`mailto:${mail}?subject=${encodeURIComponent(t("contact.mail.generalSubject"))}`}
                  >
                    {t("career.cta.sendCvButton")}
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
});

export default CareerIntern;
