import { useEffect, useMemo, memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MotionSection from "@/components/MotionSection";
import { Badge } from "@/components/ui/badge";
import { useHero } from "@/hooks/use-hero";
import { getLocalizedTeamMembers } from "@/lib/team";
import { CERTIFICATE_COUNT } from "@/lib/certifications";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
// import companyTeamImage from "@/assets/our-company.jpg";
const companyTeamImage =
  "https://placehold.co/1200x800/f97316/ffffff?text=Our+Team";
import SEO from "@/components/SEO";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import {
  principles,
  stats,
  leadershipHierarchy,
  organizationDivisions,
} from "@/lib/our-team-data";

const meta = resolveMeta(getStaticPageMeta("aboutTeam"));

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const listVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
};

const OurTeam = memo(() => {
  const { setHero } = useHero();
  const { t } = useI18n();
  const certificateCountDisplay = t(
    "aboutPages.ourTeam.stats.certifiedProfessionals.value",
    { count: String(CERTIFICATE_COUNT) }
  );
  const shuffledMembers = useMemo(
    () => [...getLocalizedTeamMembers()].sort(() => Math.random() - 0.5),
    []
  );

  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        { name: t("aboutPages.ourTeam.hero.label"), url: meta.path },
      ]),
    [t]
  );

  useEffect(() => {
    setHero({
      variant: "simple",
      label: t("aboutPages.ourTeam.hero.label"),
      title: t("aboutPages.ourTeam.hero.title"),
      description: t("aboutPages.ourTeam.hero.description"),
    });
  }, [setHero, t]);

  const localizedTitle = t("aboutPages.ourTeam.hero.title") || meta.title;
  const localizedDescription =
    t("aboutPages.ourTeam.hero.description") || meta.description;

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
        <MotionSection
          id="company-introduction"
          className="section-padding bg-background pb-12 md:pb-14 lg:pb-16"
          aria-labelledby="company-introduction-heading"
        >
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 xl:gap-14">
              <div className="order-2 flex h-full flex-col space-y-6 lg:order-1">
                <div className="space-y-4">
                  <h2
                    id="company-introduction-heading"
                    className="heading-lg text-foreground leading-snug tracking-wide md:leading-tight md:tracking-wider"
                  >
                    {t("aboutPages.ourCompany.intro.heading")}
                  </h2>
                  <p
                    className="text-body text-muted-foreground max-w-3xl text-justify"
                    // paragraph may contain simple <em> markup from translations
                    dangerouslySetInnerHTML={{
                      __html: String(
                        t("aboutPages.ourCompany.intro.paragraph1")
                      ),
                    }}
                  />
                  <p
                    className="text-body text-muted-foreground max-w-2xl text-justify"
                    // paragraph may contain simple <em> markup from translations
                    dangerouslySetInnerHTML={{
                      __html: String(
                        t("aboutPages.ourCompany.intro.paragraph2")
                      ),
                    }}
                  />
                </div>
              </div>

              <div className="order-1 flex h-full flex-col justify-center lg:order-2">
                <div className="relative h-full overflow-hidden rounded-3xl border border-card-border bg-card shadow-xl">
                  <img
                    src={companyTeamImage}
                    alt={t("aboutPages.ourCompany.intro.imageAlt")}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-background/10 to-transparent" />
                </div>
                <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground lg:text-left">
                  {t("aboutPages.ourCompany.intro.slogan")}
                </p>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* problem gap between MotionSection and section */}
        <section className="section-padding pt-12 md:pt-14 lg:pt-16">
          <div className="container mx-auto container-padding">
            <motion.div
              className="max-w-3xl text-slate-900"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <Badge
                variant="secondary"
                className="border-accent/20 bg-accent/10 text-accent"
              >
                {t("aboutPages.ourTeam.badges.peopleCulture")}
              </Badge>
              <h2 className="heading-md mt-4">
                {t("aboutPages.ourTeam.overview.title")}
              </h2>
              <p
                className="mt-4 text-lg text-slate-700"
                dangerouslySetInnerHTML={{
                  __html: t("aboutPages.ourTeam.overview.description"),
                }}
              />
            </motion.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.div
                className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-900 shadow-[0_30px_120px_-40px_rgba(15,23,42,0.15)]"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-2xl font-semibold">
                  {t("aboutPages.ourTeam.leadership.title")}
                </h3>
                <p className="mt-3 text-slate-600">
                  {t("aboutPages.ourTeam.leadership.description")}
                </p>
                <div className="mt-6 grid gap-5">
                  {principles.map((principle, idx) => (
                    <div
                      key={principle.title}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h4 className="text-lg font-semibold text-slate-900">
                        {t(
                          `aboutPages.ourTeam.leadership.principles.${idx}.title`
                        )}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {t(
                          `aboutPages.ourTeam.leadership.principles.${idx}.description`
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="grid gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-accent/5 via-white to-white p-6 text-slate-900"
                  >
                    <div>
                      <p className="text-4xl font-semibold">
                        {idx === 0
                          ? certificateCountDisplay
                          : t("aboutPages.ourTeam.stats.trainingHours.value")}
                      </p>
                      <p className="mt-2 text-sm uppercase tracking-wide text-slate-600">
                        {idx === 0
                          ? t(
                              "aboutPages.ourTeam.stats.certifiedProfessionals.label"
                            )
                          : t("aboutPages.ourTeam.stats.trainingHours.label")}
                      </p>
                    </div>
                    {stat.cta ? (
                      <Link
                        to={stat.cta.href}
                        className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        {t(
                          "aboutPages.ourTeam.stats.certifiedProfessionals.ctaLabel"
                        )}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    ) : null}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding border-t border-slate-200 bg-slate-50">
          <div className="container mx-auto container-padding">
            <motion.div
              className="flex flex-col items-center gap-12"
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_120px_-40px_rgba(15,23,42,0.2)]"
                variants={itemVariants}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-b from-white via-accent/5 to-accent/10"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-28 -left-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col gap-10 p-8 sm:p-12">
                  <div className="mx-auto max-w-3xl text-center">
                    <Badge className="inline-flex items-center gap-2 rounded-full border-0 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                      {t("aboutPages.ourTeam.organization.badgeCompany")}
                    </Badge>
                    <h3 className="mt-5 text-2xl font-semibold text-slate-900 sm:text-3xl">
                      {t("aboutPages.ourTeam.organization.title")}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {t("aboutPages.ourTeam.organization.paragraph1")}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {t("aboutPages.ourTeam.organization.paragraph2")}
                    </p>
                  </div>

                  <div className="relative flex flex-col items-center gap-12">
                    {/* Vertical line moved behind the cards using z-0 and card z-10 */}
                    <span
                      className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-accent/60 via-accent/20 to-transparent sm:block z-0"
                      aria-hidden="true"
                    />
                    <div className="relative flex flex-col items-center gap-12 w-full z-10">
                      {leadershipHierarchy.map((level, index) => {
                        const Icon = level.icon;
                        return (
                          <div
                            key={level.title}
                            className="relative flex max-w-2xl flex-col items-center text-center bg-white"
                          >
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 text-white shadow-[0_14px_45px_-18px_rgba(239,68,68,0.55)]">
                              <Icon className="h-7 w-7" />
                            </span>
                            <div className="mt-4 max-w-xl">
                              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent/70">
                                {t(
                                  "aboutPages.ourTeam.organization.levelLabelTemplate",
                                  { index: String(index + 1) }
                                )}
                              </p>
                              <p className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
                                {t(
                                  `aboutPages.ourTeam.organization.hierarchy.${index}.title`
                                )}
                              </p>
                              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                                {t(
                                  `aboutPages.ourTeam.organization.hierarchy.${index}.description`
                                )}
                              </p>
                            </div>
                            {index < leadershipHierarchy.length - 1 && (
                              <span
                                className="absolute left-1/2 top-[calc(100%+1rem)] h-10 w-px -translate-x-1/2 bg-gradient-to-b from-accent/50 via-accent/25 to-transparent"
                                aria-hidden="true"
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative mx-auto w-full max-w-4xl pt-10">
                    <span
                      className="absolute left-1/2 top-0 hidden h-10 w-px -translate-x-1/2 bg-gradient-to-b from-accent/50 via-accent/30 to-transparent sm:block"
                      aria-hidden="true"
                    />
                    <div className="relative flex flex-wrap justify-center gap-y-10 gap-x-8">
                      <span
                        className="absolute left-8 right-8 top-10 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent sm:block"
                        aria-hidden="true"
                      />
                      {organizationDivisions.map((division, index) => {
                        const Icon = division.icon;
                        return (
                          <div
                            key={division.name}
                            className="relative flex w-full max-w-[200px] flex-col items-center text-center sm:max-w-[220px]"
                          >
                            <span
                              className="absolute left-1/2 -top-10 hidden h-10 w-px -translate-x-1/2 bg-gradient-to-b from-accent/35 via-accent/15 to-transparent sm:block"
                              aria-hidden="true"
                            />
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/12 text-accent shadow-inner">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="mt-4">
                              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/70">
                                {t(
                                  "aboutPages.ourTeam.organization.divisionLabelTemplate",
                                  { index: String(index + 1) }
                                )}
                              </p>
                              <p className="mt-2 text-base font-semibold text-slate-900">
                                {t(
                                  `aboutPages.ourTeam.organization.divisions.${index}.name`
                                )}
                              </p>
                              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                {t(
                                  `aboutPages.ourTeam.organization.divisions.${index}.focus`
                                )}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
});

export default OurTeam;
