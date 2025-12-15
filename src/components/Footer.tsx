import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HIRING_ALIAS_EMAIL, PRIMARY_EMAIL } from "@/lib/email-config";
import {
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  Send,
  ArrowUp,
  Loader2,
} from "lucide-react";
import companyLogo from "@/assets/company-logo.png";
import { services as serviceList } from "@/lib/services";
import { Link } from "react-router-dom";

import { useI18n } from "@/lib/i18n";
import {
  branchLocations,
  getGoogleMapsDirectionsUrl,
  getGoogleMapsStreetViewEmbedUrl,
  LOCATION_CATEGORY_META,
} from "@/lib/locations";

const Footer = () => {
  // Newsletter form state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [locationCarouselApi, setLocationCarouselApi] =
    useState<CarouselApi | null>(null);
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);

  const { t } = useI18n();
  const quickLinks = [
    { name: t("footer.quickLinks.aboutUs"), href: "/about-us/our-company" },
    { name: t("footer.quickLinks.ourTeam"), href: "/about-us/our-team" },
    { name: t("footer.quickLinks.services"), href: "/services" },
    { name: t("footer.quickLinks.projects"), href: "/works" },
    { name: t("footer.quickLinks.news"), href: "/news" },
    { name: t("footer.quickLinks.career"), href: "/career" },
    { name: t("footer.quickLinks.location"), href: "/location" },
    { name: t("footer.quickLinks.contact"), href: "/contact" },
  ];

  const featuredServices = serviceList.slice(0, 7);
  const contactEmails = [PRIMARY_EMAIL, HIRING_ALIAS_EMAIL];
  const mailtoAll = `mailto:${contactEmails.join(",")}`;

  const hasLocations = branchLocations.length > 0;
  const activeLocation = hasLocations
    ? branchLocations[Math.min(activeLocationIndex, branchLocations.length - 1)]
    : null;

  useEffect(() => {
    if (!locationCarouselApi) {
      return;
    }

    const handleSelect = () => {
      setActiveLocationIndex(locationCarouselApi.selectedScrollSnap());
    };

    handleSelect();
    locationCarouselApi.on("select", handleSelect);
    locationCarouselApi.on("reInit", handleSelect);

    return () => {
      locationCarouselApi.off("select", handleSelect);
      locationCarouselApi.off("reInit", handleSelect);
    };
  }, [locationCarouselApi]);

  // Services list synced from src/lib/services.ts
  // Clicking a service routes to /services/:slug

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const value = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!isValid) {
      setError(t("contact.validation.emailInvalid"));
      return;
    }
    try {
      setIsSubmitting(true);
      // Simulate async request
      await new Promise((r) => setTimeout(r, 700));
      setEmail("");
      toast.success(t("contact.toast.success"));
    } catch (err) {
      toast.error(t("footer.newsletter.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-neutral-900 text-white">
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent blur-3xl" />
      </div>
      {/* Main Footer Content */}
      <div className="container mx-auto container-padding section-padding">
        {/* CTA band */}
        <div className="mb-10 rounded-2xl bg-gradient-accent p-6 text-accent-foreground shadow-soft md:p-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-small uppercase tracking-wide/loose opacity-80">
                {t("footer.ctaLookingForPartner")}
              </p>
              <h3 className="heading-sm">{t("footer.ctaLetsBuild")}</h3>
            </div>
            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 md:w-auto"
                asChild
              >
                <a href="/services" aria-label={t("servicesSection.viewAll")}>
                  {t("servicesSection.viewAll")}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img
                src={companyLogo}
                alt="PT. Karya Halim Sampoerna"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-primary-foreground/80 leading-relaxed">
                {t("footer.company.description")}
              </p>
            </div>

            {/* Social Media */}
            {/* <div>
              <h4 className="font-heading font-semibold mb-4">
                {t("footer.company.followUs")}
              </h4>
              <ul className="flex gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter / X" },
                ].map(({ icon: Icon, href, label }, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-xl bg-white/5 hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                      asChild
                    >
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={label}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{label}</span>
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Quick Links */}
          <nav
            aria-label="Footer Quick Links"
            className="md:border-l md:border-white/10 md:pl-8 lg:w-40 flex flex-col h-full"
          >
            <h4 className="font-heading font-semibold mb-6">
              {t("footer.quickLinks.title")}
            </h4>
            <ul className="grid grid-cols-1 gap-y-3 flex-1 h-full">
              {quickLinks.map((link) => (
                <li key={link.name} className="flex">
                  <a
                    href={link.href}
                    className={`group flex items-center whitespace-nowrap text-primary-foreground/80 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-md`}
                    style={{ width: "100%" }}
                  >
                    <ArrowRight className="mr-2 h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    <span className="truncate w-full">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="md:border-l md:border-white/10 md:pl-8 lg:flex-1 flex flex-col h-full">
            <h4 className="font-heading font-semibold mb-6">
              {t("footer.services.title")}
            </h4>
            <ul className="grid grid-cols-1 gap-y-3 flex-1 h-full">
              {featuredServices.map((svc) => (
                <li key={svc.id}>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="group flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-md"
                  >
                    <div className="h-2 w-2 rounded-full bg-accent/80 mt-1.5 flex-shrink-0" />
                    <span className="text-sm leading-tight">
                      {t(`services.${svc.slug}.title`).replace(
                        /\s*\((CTRB|CTRSB)\)$/i,
                        "",
                      )}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:rounded-md"
                  aria-label={t("servicesSection.viewAll")}
                >
                  {t("servicesSection.viewAll")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:border-l md:border-white/10 md:pl-8">
            <h4 className="font-heading font-semibold mb-6">
              {t("footer.contact.title")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    Kota Palangka Raya,
                    <br />
                    Kalimantan Tengah - 73111
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {contactEmails.map((contactEmail) => (
                  <div
                    key={contactEmail}
                    className="flex items-center space-x-3"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-accent" />
                    </span>
                    <a
                      href={mailtoAll}
                      className="text-primary-foreground/80 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-md"
                    >
                      {contactEmail}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            {/* <div className="mt-8">
              <h5 className="font-medium mb-3">
                {t("footer.newsletter.title")}
              </h5>
              <form className="relative" onSubmit={handleSubscribe} noValidate>
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label={t("contact.form.emailLabel")}
                  aria-describedby={error ? "newsletter-error" : undefined}
                  aria-invalid={error ? true : false}
                  placeholder={t("contact.form.emailPlaceholder")}
                  className="h-12 rounded-xl border-white/20 bg-white/10 pr-12 text-primary-foreground placeholder:text-primary-foreground/70"
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isSubmitting}
                  className="absolute right-1 top-1 h-10 w-10 rounded-lg bg-accent text-accent-foreground hover:bg-accent-light"
                  aria-label={t("contact.form.sendButton")}
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
                <p
                  id="newsletter-error"
                  role="status"
                  aria-live="polite"
                  className="mt-2 text-sm text-accent-foreground/90"
                >
                  {error ?? ""}
                </p>
              </form>
            </div> */}
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="bg-neutral-800">
        <div className="container mx-auto container-padding py-10">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="font-heading font-semibold">
              {t("footer.location.title")}
            </h4>
            {activeLocation && (
              <a
                href={getGoogleMapsDirectionsUrl(
                  activeLocation.coordinates,
                  activeLocation.title,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-small text-white underline-offset-4 underline"
                aria-label={`${t("footer.location.openInGoogleMaps")} - ${activeLocation.title}`}
              >
                {t("footer.location.openInGoogleMaps")}
              </a>
            )}
          </div>

          {hasLocations ? (
            <Carousel
              className="relative"
              opts={{ align: "start", containScroll: "trimSnaps" }}
              setApi={setLocationCarouselApi}
            >
              <CarouselContent>
                {branchLocations.map((location, index) => {
                  const categoryColor =
                    LOCATION_CATEGORY_META[location.category].color;
                  const streetViewSrc =
                    location.streetViewEmbedSrc ??
                    getGoogleMapsStreetViewEmbedUrl(location.coordinates);
                  return (
                    <CarouselItem key={location.id}>
                      <div className="flex flex-col items-center gap-4">
                        <div className="group relative h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-muted shadow-soft sm:h-64 md:h-80 lg:h-[26rem] xl:h-[30rem] 2xl:h-[34rem]">
                          <iframe
                            src={streetViewSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${location.title} map`}
                            className="transition-all duration-500 ease-smooth group-hover:scale-[1.02]"
                          />
                        </div>
                        <div className="flex w-full max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-neutral-900/70 p-4 text-white shadow-soft sm:max-w-4xl sm:p-5">
                          <div className="space-y-2.5">
                            <div className="flex items-start gap-2.5">
                              <span
                                className="mt-1 h-2 w-2 rounded-full"
                                style={{ backgroundColor: categoryColor }}
                              />
                              <div>
                                <p className="text-sm font-semibold sm:text-base">
                                  {location.title}
                                </p>
                                <p className="text-xs text-white/70 sm:text-sm lg:text-xs lg:text-white/60 lg:line-clamp-1">
                                  {location.subtitle}
                                </p>
                              </div>
                            </div>
                            <p className="text-xs leading-relaxed text-white/80 sm:text-sm lg:hidden">
                              {location.address}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
                            <a
                              href={getGoogleMapsDirectionsUrl(
                                location.coordinates,
                                location.title,
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
                              aria-label={`${t("footer.location.openInGoogleMaps")} - ${location.title}`}
                            >
                              <MapPin className="h-3.5 w-3.5" />
                              {t("footer.location.openInGoogleMaps")}
                            </a>
                            <span className="text-[11px] uppercase tracking-wide text-white/60 sm:text-xs">
                              {index + 1} / {branchLocations.length}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="flex !left-3 top-1/2 z-20 -translate-y-1/2 h-12 w-12 items-center justify-center border-white/30 bg-neutral-950/85 text-white shadow-xl backdrop-blur-lg transition hover:bg-neutral-900/90 focus-visible:ring-white/50 md:!left-6 lg:!left-8" />
              <CarouselNext className="flex !right-3 top-1/2 z-20 -translate-y-1/2 h-12 w-12 items-center justify-center border-white/30 bg-neutral-950/85 text-white shadow-xl backdrop-blur-lg transition hover:bg-neutral-900/90 focus-visible:ring-white/50 md:!right-6 lg:!right-8" />
            </Carousel>
          ) : (
            <div className="group relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-muted shadow-soft sm:h-72 md:h-80 lg:h-96 xl:h-[28rem]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1757492847217!6m8!1m7!1sXc3ueHqT0GdHdX-qV0Mriw!2m2!1d-2.264455526168132!2d113.8804974210874!3f38.87230926484026!4f-18.123220054045646!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("footer.location.title")}
                className="transition-all duration-500 ease-smooth group-hover:scale-[1.02]"
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-800 border-t border-white/10">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-white/60 text-small">{t("footer.copyright")}</p>
            <div className="flex items-center gap-6">
              <span className="text-white/60 text-small">
                Made by{" "}
                <a
                  href="https://metasolusidigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent text-small transition-colors underline-offset-4"
                >
                  Meta Solusi Digital
                </a>
              </span>
              <a
                href="/privacy"
                className="text-white/60 hover:text-accent text-small transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white/60 hover:text-accent text-small transition-colors"
              >
                Terms of Service
              </a>
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-small text-white/70 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={t("common.backToTop")}
              >
                <ArrowUp className="h-4 w-4" />
                {t("common.backToTop")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
