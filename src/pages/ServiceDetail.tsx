import { useEffect, useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getServiceBySlug } from "@/lib/services";
import { useHero } from "@/hooks/use-hero";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  CheckCircle2,
  PhoneCall,
  Mail,
  Clock,
  ShieldCheck,
  ClipboardCheck,
  HardHat,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { projects, type Project } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";
import {
  buildCanonicalUrl,
  createBreadcrumbJsonLd,
  createServiceJsonLd,
  createWebPageJsonLd,
} from "@/lib/seo";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { setHero } = useHero();
  const { t, translations } = useI18n();

  const service = useMemo(
    () => (slug ? getServiceBySlug(slug) : undefined),
    [slug],
  );

  useEffect(() => {
    if (service) {
      setHero({
        variant: "simple",
        label: t("servicesSection.label"),
        title: t(`services.${service.slug}.title`),
        description: t(`services.${service.slug}.description`),
      });
    }
  }, [service, setHero, t]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const translateOrFallback = (key: string, fallback: string) => {
    const value = t(key);
    return value === key ? fallback : value;
  };

  const localizedTitle = translateOrFallback(
    `services.${service.slug}.title`,
    service.title,
  );
  const localizedDescription = translateOrFallback(
    `services.${service.slug}.description`,
    service.description,
  );
  const localizedService: typeof service = {
    ...service,
    title: localizedTitle,
    description: localizedDescription,
  };
  const canonical = buildCanonicalUrl(`/services/${service.slug}`);
  const keywords = (
    translations.services?.[service.slug]?.features ?? service.features
  ).filter((feature): feature is string => Boolean(feature?.trim?.()));
  const breadcrumb = createBreadcrumbJsonLd([
    { name: t("common.home"), url: "/" },
    { name: t("common.services"), url: "/services" },
    { name: localizedTitle, url: `/services/${service.slug}` },
  ]);
  const seoTitle = `${localizedTitle} | ${t("servicesSection.label")}`;

  return (
    <main className="container mx-auto container-padding section-padding">
      <SEO
        title={seoTitle}
        description={localizedDescription}
        canonical={canonical}
        keywords={keywords}
        openGraph={{
          title: seoTitle,
          description: localizedDescription,
          url: canonical,
          image: service.image,
          type: "service",
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: localizedTitle,
            description: localizedDescription,
            url: canonical,
            image: service.image,
          }),
          createServiceJsonLd(localizedService),
          breadcrumb,
        ].filter(Boolean)}
      />
      {/* Breadcrumbs */}
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">{t("common.home")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/#services">{t("common.services")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {t(`services.${service.slug}.title`)}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <article className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main */}
        <div className="lg:col-span-2 space-y-6">
          {(() => {
            // Content presets per service for richer details
            const key = (service.slug || service.title).toLowerCase();
            const is = (k: string) => key.includes(k);

            // Default presets per service (kept for fallback)
            const defaultScope: string[] = is("chipseal")
              ? [
                  "Survey kondisi dan penentuan jenis single/double",
                  "Perbaikan minor: patching, pembersihan, dan priming",
                  "Penyemprotan binder (tack/seal coat)",
                  "Penyebaran agregat dan penggilasan bertahap",
                  "Pembersihan akhir dan pembukaan lalu lintas bertahap",
                ]
              : is("ctrb")
                ? [
                    "Penggalian/pengupasan material eksisting",
                    "Pencampuran in-place dengan semen/chemical",
                    "Perataan (profiling) dan pemadatan berlapis",
                    "Curing, perawatan, dan uji mutu lapangan",
                  ]
                : is("ctrsb")
                  ? [
                      "Perbaikan subbase dan stabilisasi semen",
                      "Perataan, pemadatan, dan kontrol geometri",
                      "Curing serta pengujian kepadatan/kekuatan",
                    ]
                  : is("upgrade-unbound")
                    ? [
                        "Reprofiling & reshaping badan jalan",
                        "Perbaikan material dan drainase",
                        "Pemadatan hingga spesifikasi target",
                      ]
                    : is("aspal-hotmix")
                      ? [
                          "Tack coat dan persiapan alat",
                          "Penghamparan HMA (finisher) berlapis",
                          "Pemadatan (breakdown–finish rolling)",
                          "Pekerjaan joint dan pembersihan akhir",
                        ]
                      : [
                          "Survey & penentuan metode",
                          "Mobilisasi alat & material",
                          "Pelaksanaan pekerjaan inti",
                          "QC/QA dan serah terima pekerjaan",
                        ];
            const defaultSpecs: { label: string; value: string }[] = is(
              "chipseal",
            )
              ? [
                  { label: "Tipe", value: "Single/Double chipseal" },
                  {
                    label: "Binder",
                    value: "Aspal modifikasi/PG sesuai kebutuhan",
                  },
                  {
                    label: "Agregat",
                    value: "Gradasi seragam, bersih & kering",
                  },
                  { label: "Kepadatan", value: "Cakupan agregat ≥ 90%" },
                ]
              : is("ctrb")
                ? [
                    { label: "Metode", value: "Recycling in-place" },
                    {
                      label: "Stabilisasi",
                      value: "Semen/chemical sesuai desain",
                    },
                    { label: "Curing", value: "3–7 hari (typical)" },
                    { label: "QC", value: "UCS/ITSM & kepadatan lapangan" },
                  ]
                : is("ctrsb")
                  ? [
                      { label: "Lapisan", value: "Subbase (pondasi bawah)" },
                      {
                        label: "Stabilisasi",
                        value: "Semen—modulus meningkat",
                      },
                      { label: "Kepadatan", value: ">= 100% target (typical)" },
                      {
                        label: "QC",
                        value: "Kepadatan, kuat tekan tidak langsung",
                      },
                    ]
                  : is("upgrade-unbound")
                    ? [
                        {
                          label: "Fokus",
                          value: "Perbaikan material & geometri",
                        },
                        {
                          label: "Kepadatan",
                          value: ">= 95–100% (sesuai spesifikasi)",
                        },
                        {
                          label: "Drainase",
                          value: "Perbaikan saluran & bahu jalan",
                        },
                        {
                          label: "QC",
                          value: "Sand cone/NDG & uji CBR (bila perlu)",
                        },
                      ]
                    : is("aspal-hotmix")
                      ? [
                          { label: "Campuran", value: "HMA/SMA sesuai desain" },
                          {
                            label: "PG Grade",
                            value: "Sesuai kebutuhan lalu lintas/iklim",
                          },
                          {
                            label: "Pemadatan",
                            value: "Pattern roller terkendali",
                          },
                          {
                            label: "QC",
                            value: "Marshall/Volumetrik & kepadatan",
                          },
                        ]
                      : [
                          { label: "Metode", value: "Sesuai standar proyek" },
                          { label: "Kualitas", value: "QC/QA berjenjang" },
                          { label: "Keselamatan", value: "HSE terapkan penuh" },
                          {
                            label: "Dokumentasi",
                            value: "Laporan harian–final",
                          },
                        ];

            // Attempt to load translated scope/specs from i18n resources. If the translation
            // is missing (t returns a string path), fall back to the default presets above.
            // Try to read structured arrays from the translations object. This
            // preserves proper typing (arrays/objects) instead of using `t()`
            // which returns strings.
            const transScope =
              translations?.services?.[service.slug]?.scope ?? undefined;
            const scope: string[] = Array.isArray(transScope)
              ? transScope
              : defaultScope;

            const transSpecs =
              translations?.services?.[service.slug]?.specs ?? undefined;
            const specs: { label: string; value: string }[] = Array.isArray(
              transSpecs,
            )
              ? transSpecs
              : defaultSpecs;

            const deliverables: string[] = [
              "Rencana mutu & rencana keselamatan kerja",
              "Metode kerja & jadwal pelaksanaan",
              "Laporan harian/mingguan & dokumentasi foto",
              "Hasil pengujian laboratorium & lapangan",
              "As-built & berita acara serah terima",
            ];

            const applications: string[] = [
              "Jalan hauling & tambang",
              "Jalan akses industri & perkebunan",
              "Jalan lingkungan & perumahan",
              "Area logistik & fasilitas pendukung",
            ];

            return (
              <>
                {/* Scope of Work */}
                <Card className="border-card-border">
                  <CardContent className="p-6">
                    <h3 className="heading-sm mb-4">
                      {t("serviceDetail.scopeOfWork")}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {scope.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <CheckCircle2 className="h-5 w-5 mt-0.5 text-accent" />
                          <span className="text-body">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Technical Specs */}
                <Card className="border-card-border">
                  <CardContent className="p-6">
                    <h3 className="heading-sm mb-4">
                      {t("serviceDetail.specifications")}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {specs.map(({ label, value }, i) => (
                        <div
                          key={i}
                          className="flex items-start justify-between rounded-xl border border-card-border bg-background-secondary p-4"
                        >
                          <span className="text-sm text-muted-foreground">
                            {label}
                          </span>
                          <span className="text-sm font-medium text-foreground text-right ml-4">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Deliverables */}
                <Card className="border-card-border">
                  <CardContent className="p-6">
                    <h3 className="heading-sm mb-4">
                      {t("serviceDetail.deliverables.title")}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {deliverables.map((d, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <ClipboardCheck className="h-5 w-5 mt-0.5 text-accent" />
                          <span className="text-body">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Applications */}
                <Card className="border-card-border">
                  <CardContent className="p-6">
                    <h3 className="heading-sm mb-4">
                      {t("serviceDetail.applications.title")}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {applications.map((a, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <HardHat className="h-5 w-5 mt-0.5 text-accent" />
                          <span className="text-body">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </>
            );
          })()}
          <Card className="overflow-hidden border-card-border">
            <div className="relative aspect-[16/9]">
              <img
                src={service.image}
                alt={t(`services.${service.slug}.title`)}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center shadow">
                  <service.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <Badge variant="secondary" className="bg-white/90 text-primary">
                  {t("serviceDetail.premiumService")}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h2 className="heading-sm mb-3">{t("common.projectOverview")}</h2>
              <p className="text-body text-muted-foreground">
                {t(`services.${service.slug}.description`) ||
                  service.description}
              </p>
            </CardContent>
          </Card>

          <Card className="border-card-border">
            <CardContent className="p-6">
              <h3 className="heading-sm mb-4">{t("common.keyFeatures")}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(
                  translations.services?.[service.slug]?.features ??
                  service.features
                ).map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="text-body">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Process */}
          <Card className="border-card-border">
            <CardContent className="p-6">
              <h3 className="heading-sm mb-4">
                {t("serviceDetail.process.title")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-background-secondary border border-card-border">
                  <div className="flex items-center gap-2 mb-2">
                    <PhoneCall className="h-5 w-5 text-accent" />
                    <span className="font-medium">
                      {t("serviceDetail.process.steps.consultation.title")}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("serviceDetail.process.steps.consultation.description")}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background-secondary border border-card-border">
                  <div className="flex items-center gap-2 mb-2">
                    <ClipboardCheck className="h-5 w-5 text-accent" />
                    <span className="font-medium">
                      {t("serviceDetail.process.steps.planning.title")}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("serviceDetail.process.steps.planning.description")}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background-secondary border border-card-border">
                  <div className="flex items-center gap-2 mb-2">
                    <HardHat className="h-5 w-5 text-accent" />
                    <span className="font-medium">
                      {t("serviceDetail.process.steps.execution.title")}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("serviceDetail.process.steps.execution.description")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQs */}
          <Card className="border-card-border">
            <CardContent className="p-6">
              <h3 className="heading-sm mb-4">
                {t("serviceDetail.faqs.title")}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {t("serviceDetail.faqs.title") && (
                  <>
                    {/** Render from translations to keep both languages in sync */}
                    {
                      /* inline IIFE to map items */ (() => {
                        const items =
                          // We can't access arrays directly via t(), so we rely on structured keys by index length 5
                          ([0, 1, 2, 3, 4] as const).map((i) => ({
                            q: t(`serviceDetail.faqs.items.${i}.q`),
                            a: t(`serviceDetail.faqs.items.${i}.a`),
                          }));
                        return (
                          <>
                            {items.map((it, idx) => (
                              <AccordionItem
                                key={idx}
                                value={`item-${idx + 1}`}
                              >
                                <AccordionTrigger>{it.q}</AccordionTrigger>
                                <AccordionContent>
                                  <div className="flex items-start gap-2 text-muted-foreground">
                                    {idx === 0 ? (
                                      <Clock className="h-4 w-4 text-accent mt-0.5" />
                                    ) : idx === 1 ? (
                                      <ShieldCheck className="h-4 w-4 text-accent mt-0.5" />
                                    ) : (
                                      <ClipboardCheck className="h-4 w-4 text-accent mt-0.5" />
                                    )}
                                    <p className="text-sm">{it.a}</p>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </>
                        );
                      })()
                    }
                  </>
                )}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-2">
            <Link to="/#services" className="text-primary underline">
              ← {t("serviceDetail.backToServices")}
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <Card className="border-card-border">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">
                {t("serviceDetail.sidebar.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("serviceDetail.sidebar.descriptionTemplate", {
                  service: service.title.toLowerCase(),
                })}
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+6280000000"
                  className="flex items-center gap-2 text-primary hover:text-accent"
                >
                  <PhoneCall className="h-4 w-4" /> +62 800-0000
                </a>
                <a
                  href="mailto:info@san-bbr.id"
                  className="flex items-center gap-2 text-primary hover:text-accent"
                >
                  <Mail className="h-4 w-4" /> info@san-bbr.id
                </a>
              </div>
              <Button asChild className="w-full bg-gradient-accent">
                <Link to="/contact">
                  {t("ctaSection.getQuote")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Quick facts */}
          <Card className="border-card-border">
            <CardContent className="p-6 space-y-3">
              <h3 className="font-semibold">
                {t("serviceDetail.whyChoose.title")}
              </h3>
              {([0, 1, 2] as const).map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent" />{" "}
                  {t(`serviceDetail.whyChoose.items.${i}`)}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Related projects */}
          {(() => {
            const categoryMap: Record<string, Project["category"] | undefined> =
              {
                "Aspal Hotmix, Modifikasi, Cold Mix": "Aspal Hotmix",
                Chipseal: "Aspal Hotmix",
                Eatwork: "Earthwork",
                "Upgrade Unbound": "Road Construction",
                "Cement Treated Recycling Base (CTRB)": "Road Construction",
                "Cement Treated Recycling Sub Base (CTRSB)":
                  "Road Construction",
              };
            const mapped = categoryMap[service.title];
            const related = mapped
              ? projects.filter((p) => p.category === mapped).slice(0, 2)
              : [];
            return related.length ? (
              <Card className="border-card-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">
                    {t("common.relatedProjects")}
                  </h3>
                  <ul className="space-y-3">
                    {related.map((p) => (
                      <li key={p.id} className="text-sm">
                        <Link
                          to={`/works/${p.slug}`}
                          className="text-primary hover:text-accent"
                        >
                          {p.title}
                        </Link>
                        <div className="text-muted-foreground">
                          {p.location} • {p.year}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/works">{t("projectsSection.viewAll")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : null;
          })()}
        </aside>
      </article>

      {/* Bottom CTA */}
      <div className="mt-10">
        <Card className="bg-gradient-hero text-primary-foreground border-none">
          <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg md:text-xl font-semibold">
                {t("serviceDetail.bottomCta.titleTemplate", {
                  service: service.title.toLowerCase(),
                })}
              </div>
              <p className="opacity-90">
                {t("serviceDetail.bottomCta.description")}
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:text-white"
              >
                <Link to="/contact">{t("ctaSection.getQuote")}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-black hover:text-white hover:bg-white/10"
              >
                <Link to="/#services">
                  {t("serviceDetail.bottomCta.exploreServices")}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ServiceDetail;
