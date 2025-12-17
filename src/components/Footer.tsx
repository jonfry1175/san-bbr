import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
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
// Logo from public folder for better static asset handling
const companyLogo = "/logo.png";
import { Link } from "react-router-dom";

import { useI18n } from "@/lib/i18n";
import {
  branchLocations,
  getGoogleMapsDirectionsUrl,
  getGoogleMapsEmbedUrl,
  getGoogleMapsStreetViewEmbedUrl,
  LOCATION_CATEGORY_META,
} from "@/lib/locations";

const Footer = () => {
  // Newsletter form state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { t } = useI18n();
  const quickLinks = [
    {
      name: t("footer.quickLinks.aboutUs"),
      href: "/about-us/company-introduction",
    },
    {
      name: t("footer.quickLinks.ourTeam"),
      href: "/about-us/company-leadership",
    },
    { name: t("footer.quickLinks.services"), href: "/services" },
    { name: t("footer.quickLinks.projects"), href: "/works" },
    { name: t("footer.quickLinks.news"), href: "/news" },
    { name: t("footer.quickLinks.career"), href: "/career" },
    { name: t("footer.quickLinks.location"), href: "/location" },
    { name: t("footer.quickLinks.contact"), href: "/contact" },
  ];

  const featuredServices = [
    {
      id: "rental-alat-berat",
      name: "Rental Alat Berat (PT SINERGY AGTER NUSANTARA)",
    },
    {
      id: "jasa-konstruksi-tambang",
      name: "Jasa Konstruksi Tambang (PT BUMI BLAMBANGAN RESOURCES)",
    },
  ];
  const contactEmails = [PRIMARY_EMAIL, HIRING_ALIAS_EMAIL];
  const mailtoAll = `mailto:${contactEmails.join(",")}`;

  // Only show Head Office Bogor in footer
  const footerLocations = branchLocations.filter(
    (loc) => loc.id === "head-office-bogor"
  );

  const hasLocations = footerLocations.length > 0;
  const activeLocation = hasLocations ? footerLocations[0] : null;

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
    <footer className="relative overflow-hidden bg-neutral-900 text-white pt-16">
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto container-padding pb-16 relative z-10">
        {/* CTA band */}
        <div className="mb-16 rounded-3xl bg-gradient-to-r from-neutral-800 to-neutral-900 border border-white/5 p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -right-20 -top-20 h-64 w-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-500" />

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center relative z-10">
            <div className="max-w-2xl">
              <p className="text-accent font-medium uppercase tracking-wider text-sm mb-2">
                {t("footer.ctaLookingForPartner")}
              </p>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                {t("footer.ctaLetsBuild")}
              </h3>
            </div>
            <div className="flex-shrink-0">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-white font-semibold px-8 h-14 rounded-xl text-base shadow-lg shadow-accent/20 transition-all hover:scale-105 hover:shadow-accent/40"
                asChild
              >
                <a href="/services" aria-label={t("servicesSection.viewAll")}>
                  {t("servicesSection.viewAll")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Company Info - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="block">
              <img
                src={companyLogo}
                alt="PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES"
                className="h-16 w-auto mb-6 opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-neutral-400 leading-relaxed max-w-sm text-base">
              {t("footer.company.description")}
            </p>

            {/* Social Media Placeholders - Ready to be enabled */}
            {/* <div className="pt-4 flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white transition-all hover:-translate-y-1">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links - Spans 2 columns */}
          <nav className="lg:col-span-2" aria-label="Footer Quick Links">
            <h4 className="font-heading font-bold text-lg mb-6 text-white inline-block relative after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-accent after:rounded-full">
              {t("footer.quickLinks.title")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-neutral-400 hover:text-accent transition-colors py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services - Spans 3 columns */}
          <nav className="lg:col-span-3" aria-label="Footer Services Nav">
            <h4 className="font-heading font-bold text-lg mb-6 text-white inline-block relative after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-accent after:rounded-full">
              {t("footer.services.title")}
            </h4>
            <ul className="space-y-3">
              {featuredServices.map((svc) => (
                <li key={svc.id}>
                  <Link
                    to="/services"
                    className="group block text-neutral-400 hover:text-white transition-colors py-1"
                  >
                    <span className="group-hover:text-accent transition-colors duration-300">
                      {svc.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center text-accent hover:text-accent-light font-medium group text-sm"
                >
                  {t("servicesSection.viewAll")}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-lg mb-6 text-white inline-block relative after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-accent after:rounded-full">
              {t("footer.contact.title")}
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-neutral-400 leading-relaxed text-sm">
                    Podomoro Golf View Ruko Podomoro City,
                    <br />
                    Jl. Blk. B2 No.20, Bojong Nangka, Cimanggis,
                    <br />
                    Bogor Regency, West Java 16953
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {contactEmails.map((contactEmail, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-neutral-400 hover:text-white transition-colors text-sm break-all"
                    >
                      {contactEmail}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="bg-neutral-900 border-t border-white/5">
        <div className="container mx-auto container-padding py-16">
          <div className="mb-8 flex items-center justify-between">
            <h4 className="font-heading font-bold text-lg text-white inline-block relative after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-accent after:rounded-full">
              {t("footer.location.title")}
            </h4>
            {activeLocation && (
              <a
                href={getGoogleMapsDirectionsUrl(
                  activeLocation.coordinates,
                  activeLocation.title
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-white transition-colors underline-offset-4 hover:underline font-medium"
                aria-label={`${t("footer.location.openInGoogleMaps")} - ${activeLocation.title}`}
              >
                {t("footer.location.openInGoogleMaps")}
              </a>
            )}
          </div>

          {hasLocations && footerLocations.length > 0 ? (
            <div className="flex flex-col items-center gap-4">
              {footerLocations.map((location) => {
                const categoryColor =
                  LOCATION_CATEGORY_META[location.category].color;
                // Use Google Maps embed (not Street View) for Head Office Bogor
                // since Street View is not available for this location
                const mapSrc =
                  location.streetViewEmbedSrc ??
                  getGoogleMapsEmbedUrl(location.coordinates, location.address);
                return (
                  <div key={location.id} className="w-full">
                    <div className="flex flex-col items-center gap-4">
                      <div className="group relative h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-muted shadow-soft sm:h-64 md:h-80 lg:h-[26rem] xl:h-[30rem] 2xl:h-[34rem]">
                        <iframe
                          src={mapSrc}
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
                              location.title
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
                            aria-label={`${t("footer.location.openInGoogleMaps")} - ${location.title}`}
                          >
                            <MapPin className="h-3.5 w-3.5" />
                            {t("footer.location.openInGoogleMaps")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
      <div className="bg-neutral-950 border-t border-white/5">
        <div className="container mx-auto container-padding py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-neutral-500 text-sm">{t("footer.copyright")}</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              <span className="text-neutral-500 text-sm">
                Made by{" "}
                <a
                  href="https://metasolusidigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-accent transition-colors underline-offset-4 hover:underline"
                >
                  Meta Solusi Digital
                </a>
              </span>
              <a
                href="/privacy"
                className="text-neutral-500 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-neutral-500 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 hover:bg-accent hover:text-white transition-all hover:-translate-y-1"
                aria-label={t("common.backToTop")}
              >
                <ArrowUp className="h-3 w-3" />
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
