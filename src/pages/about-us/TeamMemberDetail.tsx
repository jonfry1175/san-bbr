import { useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getTeamMemberBySlug } from "@/lib/team";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import SEO from "@/components/SEO";
import {
  buildCanonicalUrl,
  createBreadcrumbJsonLd,
  createTeamMemberJsonLd,
  createWebPageJsonLd,
  siteMetadata,
} from "@/lib/seo";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const listVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const TeamMemberDetail = memo(() => {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? getTeamMemberBySlug(slug) : undefined;
  const { setHero } = useHero();
  const { t } = useI18n();

  useEffect(() => {
    if (!member) return;
    setHero({
      variant: "simple",
      label: member.role,
      title: member.name,
      description: member.focus,
    });
  }, [member, setHero]);

  if (!member) {
    return <Navigate to="/about-us/company-leadership" replace />;
  }

  const canonical = buildCanonicalUrl(`/about-us/company-leadership/${member.slug}`);
  const title = `${member.name} | ${member.role} - ${siteMetadata.name}`;
  const description = member.bio || member.focus;
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: t("common.home"), url: "/" },
    {
      name: t("aboutPages.companyLeadership.hero.label"),
      url: "/about-us/company-leadership",
    },
    { name: member.name, url: `/about-us/company-leadership/${member.slug}` },
  ]);
  const keywords = [
    member.role,
    member.name,
    "tim karya halim sampoerna",
    "leadership konstruksi kalimantan",
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords}
        openGraph={{
          title,
          description,
          url: canonical,
          image: member.photo,
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: title,
            description,
            url: canonical,
            image: member.photo,
          }),
          createTeamMemberJsonLd(member),
          breadcrumbs,
        ].filter(Boolean)}
      />
      <main className="bg-neutral-950 text-white">
        <section className="section-padding">
          <div className="container mx-auto container-padding">
            <div className="mb-10">
              <Button
                asChild
                variant="ghost"
                className="text-white/70 hover:text-white"
              >
                <Link
                  to="/about-us/company-leadership"
                  className="inline-flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  {t("aboutPages.teamMemberDetail.backToTeam")}
                </Link>
              </Button>
            </div>
            <motion.div
              className="grid gap-10 lg:grid-cols-[340px_1fr]"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.article
                variants={itemVariants}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_140px_-60px_rgba(15,23,42,0.9)] backdrop-blur"
              >
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="relative h-44 w-44 overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-xl">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <Badge className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    {member.role}
                  </Badge>
                  <div className="flex items-center justify-center gap-2 text-sm text-white/70">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {member.email && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="border border-white/10 bg-white/5 text-white/80 hover:border-accent/40 hover:bg-accent/20 hover:text-white"
                      >
                        <a
                          href={`mailto:${member.email}`}
                          aria-label={t(
                            "aboutPages.teamMemberDetail.buttons.emailAria",
                            { name: member.name },
                          )}
                        >
                          <Mail className="h-4 w-4" aria-hidden="true" />
                          <span>
                            {t("aboutPages.teamMemberDetail.buttons.email")}
                          </span>
                        </a>
                      </Button>
                    )}
                    {member.linkedin && (
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="border border-white/10 bg-white/5 text-white/80 hover:border-accent/40 hover:bg-accent/20 hover:text-white"
                      >
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={t(
                            "aboutPages.teamMemberDetail.buttons.linkedInAria",
                            { name: member.name },
                          )}
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                          <span>
                            {t("aboutPages.teamMemberDetail.buttons.linkedIn")}
                          </span>
                        </a>
                      </Button>
                    )}
                  </div>
                  <div className="w-full space-y-3 rounded-2xl border border-white/10 bg-neutral-950/70 p-4 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                      {t("aboutPages.teamMemberDetail.signatureQuote")}
                    </p>
                    <p className="text-sm leading-relaxed text-white/80">
                      {member.quote}
                    </p>
                  </div>
                </div>
              </motion.article>

              <motion.article
                variants={itemVariants}
                className="flex flex-col gap-10 text-white"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Badge
                      variant="secondary"
                      className="bg-white/10 text-white border-white/10 uppercase tracking-[0.28em]"
                    >
                      {t("aboutPages.teamMemberDetail.leadershipProfile")}
                    </Badge>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                      <span>{member.tenure}</span>
                    </div>
                    <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                      {member.name}
                    </h1>
                    <p className="text-lg text-white/70 leading-relaxed">
                      {member.focus}
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-white/80">
                    {member.background}
                  </p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                      {t("aboutPages.teamMemberDetail.keyStrengths")}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {member.strengths.map((strength) => (
                        <Badge
                          key={strength}
                          className="rounded-full border border-accent/40 bg-accent/15 px-4 py-1 text-[12px] font-medium text-accent"
                        >
                          {strength}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                      {t("aboutPages.teamMemberDetail.keyAchievements")}
                    </p>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {member.achievements.map((achievement) => (
                        <Card
                          key={achievement}
                          className="border-white/10 bg-neutral-900/80 text-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.7)]"
                        >
                          <CardContent className="p-5">
                            <p className="text-sm leading-relaxed text-white/80">
                              {achievement}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                    {t("aboutPages.teamMemberDetail.leadershipMetrics")}
                  </p>
                  <motion.div
                    className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {member.stats.map((stat) => (
                      <motion.div key={stat.label} variants={itemVariants}>
                        <Card className="border-white/10 bg-neutral-900/80 text-white shadow-none">
                          <CardContent className="p-6">
                            <CardTitle className="text-3xl font-semibold text-white">
                              {stat.value}
                            </CardTitle>
                            <p className="mt-2 text-xs uppercase tracking-[0.32em] text-white/60">
                              {stat.label}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.article>
            </motion.div>
          </div>
        </section>

        <section className="section-padding border-t border-white/5 bg-neutral-900/70">
          <div className="container mx-auto container-padding">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-white">
                {t("aboutPages.teamMemberDetail.timeline.title")}
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                {t("aboutPages.teamMemberDetail.timeline.descriptionTemplate", {
                  name: member.name,
                })}
              </p>
              <div className="relative mt-10 space-y-8 before:absolute before:left-[10px] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-white/10 before:to-transparent">
                {member.timeline.map((event, index) => (
                  <motion.div
                    key={`${event.year}-${event.title}`}
                    className="relative pl-12"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <div className="absolute left-[4px] top-1 h-3 w-3 -translate-x-1/2 rounded-full border border-white/20 bg-accent shadow-lg" />
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                      {event.year}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {event.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
});

export default TeamMemberDetail;
