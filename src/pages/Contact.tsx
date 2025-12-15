import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PRIMARY_EMAIL, SECONDARY_EMAIL, ALL_EMAILS } from "@/lib/email-config";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SEO from "@/components/SEO";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useMemo, useState } from "react";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import {
  createBreadcrumbJsonLd,
  createContactPageJsonLd,
  createWebPageJsonLd,
} from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import {
  branchLocations,
  getGoogleMapsDirectionsUrl,
  getGoogleMapsStreetViewEmbedUrl,
  LOCATION_CATEGORY_META,
} from "@/lib/locations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const meta = resolveMeta(getStaticPageMeta("contact"));

// We'll build the schema inside the component to allow translated messages
type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { setHero } = useHero();
  const { translations, t } = useI18n();
  const [locationCarouselApi, setLocationCarouselApi] =
    useState<CarouselApi | null>(null);
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);

  const contactSchema = z.object({
    name: z
      .string()
      .min(2, { message: translations.contact.validation.nameRequired }),
    email: z
      .string()
      .email({ message: translations.contact.validation.emailInvalid }),
    subject: z
      .string()
      .min(3, { message: translations.contact.validation.subjectRequired }),
    message: z
      .string()
      .min(10, { message: translations.contact.validation.messageMin }),
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (values: ContactFormValues) => {
    // In a real app, send to API here - would send to both email addresses
    // For now, display a success toast
    toast.success(translations.contact.toast.success);
    // eslint-disable-next-line no-console
    console.log("Contact form submission to both emails:", {
      ...values,
      recipients: emails,
    });
    form.reset();
  };

  const mail = PRIMARY_EMAIL;
  const mailSecondary = SECONDARY_EMAIL;
  const emails = [...ALL_EMAILS];
  const address =
    "Jalan Mahir Mahar no. 88, Km. 4.6, Kel. Menteng, Kec. Jekan Raya, Kota Palangka Raya, Kalimantan Tengah, Provinsi Kalimantan Tengah.";
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!4v1757492847217!6m8!1m7!1sXc3ueHqT0GdHdX-qV0Mriw!2m2!1d-2.264455526168132!2d113.8804974210874!3f38.87230926484026!4f-18.123220054045646!5f0.7820865974627469";
  const hasLocations = branchLocations.length > 0;
  const fallbackCoordinates: [number, number] = branchLocations[0]
    ?.coordinates ?? [113.8804974210874, -2.264455526168132];
  const activeLocation = hasLocations
    ? branchLocations[Math.min(activeLocationIndex, branchLocations.length - 1)]
    : null;
  const directionsUrl = activeLocation
    ? getGoogleMapsDirectionsUrl(
        activeLocation.coordinates,
        activeLocation.title,
      )
    : getGoogleMapsDirectionsUrl(
        fallbackCoordinates,
        translations.footer.location.title,
      );
  const secondaryEmailLine = t("contact.details.secondaryEmailLine", {
    email: mailSecondary,
  });
  const secondaryEmailHasLink = secondaryEmailLine.includes(mailSecondary);
  const [secondaryEmailPrefix, ...secondaryEmailSuffixParts] =
    secondaryEmailHasLink
      ? secondaryEmailLine.split(mailSecondary)
      : [secondaryEmailLine];
  const secondaryEmailSuffix = secondaryEmailSuffixParts.join(mailSecondary);
  useEffect(() => {
    setHero({
      variant: "simple",
      label: translations.contact.hero.label,
      title: translations.contact.hero.title,
      description: translations.contact.hero.description,
    });
  }, [setHero, translations]);

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

  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        { name: t("common.contact"), url: meta.path },
      ]),
    [t],
  );

  return (
    <>
      <SEO
        title={translations.contact.hero.title || meta.title}
        description={translations.contact.hero.description || meta.description}
        canonical={meta.canonical}
        keywords={meta.keywords}
        openGraph={{
          title: translations.contact.hero.title || meta.title,
          description:
            translations.contact.hero.description || meta.description,
          url: meta.canonical,
          image: meta.image,
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: translations.contact.hero.title || meta.title,
            description:
              translations.contact.hero.description || meta.description,
            url: meta.canonical,
            image: meta.image,
          }),
          createContactPageJsonLd(),
          breadcrumbs,
        ].filter(Boolean)}
      />
      {/* Contact content */}
      <main className="container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <Card className="card-hover">
            <CardContent className="p-6 md:p-8">
              <h2 className="heading-md mb-2">
                {translations.contact.form.title}
              </h2>
              <p className="text-body text-muted-foreground mb-6">
                {translations.contact.form.description}
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {translations.contact.form.nameLabel}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              translations.contact.form.namePlaceholder
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {translations.contact.form.emailLabel}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={
                              translations.contact.form.emailPlaceholder
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {translations.contact.form.subjectLabel}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              translations.contact.form.subjectPlaceholder
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {translations.contact.form.messageLabel}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={6}
                            placeholder={
                              translations.contact.form.messagePlaceholder
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-gradient-accent button-glow px-8"
                    >
                      {translations.contact.form.sendButton}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Details + Map */}
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6 md:p-8">
                <h2 className="heading-md mb-4">
                  {translations.contact.details.title}
                </h2>
                <div className="space-y-4 text-body">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold">
                        {translations.contact.details.addressLabel}
                      </div>
                      <div className="text-muted-foreground">{address}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-semibold">
                        {translations.contact.details.emailLabel}
                      </div>
                      <a
                        href={`mailto:${mail}`}
                        className="text-primary hover:underline text-sm"
                      >
                        {mail}
                      </a>
                      {secondaryEmailLine && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {secondaryEmailHasLink ? (
                            <>
                              {/* {secondaryEmailPrefix} */}
                              <a
                                href={`mailto:${mailSecondary}`}
                                className="text-primary hover:underline"
                              >
                                {mailSecondary}
                              </a>
                              {/* {secondaryEmailSuffix} */}
                            </>
                          ) : (
                            secondaryEmailLine
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4 rounded-2xl border border-border bg-card p-4 shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {translations.footer.location.title}
                </h3>
                {activeLocation && (
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline focus-visible:outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-primary"
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
                          <div className="flex flex-col gap-4">
                            <div className="group relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-lg sm:h-64">
                              <iframe
                                src={streetViewSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`${location.title} map`}
                                className="h-full w-full transition-transform duration-500 ease-smooth group-hover:scale-[1.02]"
                              />
                            </div>
                            <div className="flex w-full flex-col gap-3 rounded-2xl border border-border bg-background/80 p-4 shadow-sm">
                              <div className="space-y-2">
                                <div className="flex items-start gap-2.5">
                                  <span
                                    className="mt-1 h-2 w-2 rounded-full"
                                    style={{ backgroundColor: categoryColor }}
                                  />
                                  <div>
                                    <p className="text-sm font-semibold text-foreground sm:text-base">
                                      {location.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground sm:text-sm">
                                      {location.subtitle}
                                    </p>
                                  </div>
                                </div>
                                <p className="hidden text-sm leading-relaxed text-muted-foreground sm:block">
                                  {location.address}
                                </p>
                              </div>
                              <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-sm">
                                <a
                                  href={getGoogleMapsDirectionsUrl(
                                    location.coordinates,
                                    location.title,
                                  )}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 font-semibold text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline focus-visible:outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                  <MapPin className="h-4 w-4" />
                                  {t("footer.location.openInGoogleMaps")}
                                </a>
                                <span className="text-[11px] uppercase tracking-wide text-muted-foreground/70 sm:text-xs">
                                  {index + 1} / {branchLocations.length}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="flex !left-3 top-1/2 z-10 -translate-y-1/2 h-10 w-10 items-center justify-center border border-border bg-background/90 text-foreground shadow-lg backdrop-blur-sm transition hover:bg-background focus-visible:ring-2 focus-visible:ring-primary sm:!left-4" />
                  <CarouselNext className="flex !right-3 top-1/2 z-10 -translate-y-1/2 h-10 w-10 items-center justify-center border border-border bg-background/90 text-foreground shadow-lg backdrop-blur-sm transition hover:bg-background focus-visible:ring-2 focus-visible:ring-primary sm:!right-4" />
                </Carousel>
              ) : (
                <div className="group relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-lg sm:h-64">
                  <iframe
                    title={translations.footer.location.title}
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full transition-transform duration-500 ease-smooth group-hover:scale-[1.02]"
                  />
                </div>
              )}
            </div>

            <div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-accent transition-colors hover:text-accent-light focus-visible:outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-accent/30 group"
              >
                {translations.contact.details.getDirections}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
