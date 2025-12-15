import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "@/lib/services";
import { useI18n } from "@/lib/i18n";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

type ServicesSectionProps = {
  // Initial mobile limit to pre-render to the DOM before hydration.
  // On >= md screens it will automatically expand to show all.
  limit?: number; // when provided, used as mobile initial limit; default 3
};

const ServicesSection = memo(({ limit }: ServicesSectionProps) => {
  const { t } = useI18n();
  // services data imported from @/lib/services
  // Pre-render 3 items for mobile, then expand to all on desktop after mount.
  const [renderLimit, setRenderLimit] = useState<number | undefined>(
    typeof limit === "number" ? limit : 3
  );
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const hasAutoLoadedRef = useRef(false);

  useEffect(() => {
    // Match Tailwind md breakpoint (min-width: 768px)
    const mq = window.matchMedia("(min-width: 768px)");
    const setByMatches = (matches: boolean) =>
      setRenderLimit(
        matches ? undefined : typeof limit === "number" ? limit : 3
      );

    // Set immediately on mount
    setByMatches(mq.matches);

    // Listen for changes (modern browsers)
    const onChange = (e: MediaQueryListEvent) => setByMatches(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [limit]);

  const isDesktop = renderLimit === undefined;

  const loadMore = useCallback(() => {
    setRenderLimit((prev) => {
      if (prev === undefined) return prev; // desktop
      if (prev >= services.length) return prev;
      return Math.min(prev + 3, services.length);
    });
  }, []);

  // Automatically load the next chunk once after first successful render on mobile
  useEffect(() => {
    if (isDesktop) return; // desktop shows all
    const initial = typeof limit === "number" ? limit : 3;
    if (renderLimit !== initial) return;
    if (hasAutoLoadedRef.current) return;
    hasAutoLoadedRef.current = true;

    // Type-safe requestIdleCallback handling
    type RequestIdleCallbackHandle = number;
    type RequestIdleCallbackOptions = {
      timeout?: number;
    };
    type RequestIdleCallback = (
      callback: () => void,
      options?: RequestIdleCallbackOptions
    ) => RequestIdleCallbackHandle;
    type CancelIdleCallback = (handle: RequestIdleCallbackHandle) => void;

    const requestIdleCallback = (
      window as Window & { requestIdleCallback?: RequestIdleCallback }
    ).requestIdleCallback;
    const cancelIdleCallback = (
      window as Window & { cancelIdleCallback?: CancelIdleCallback }
    ).cancelIdleCallback;

    const id = requestIdleCallback
      ? // Prefer idle time when available
        requestIdleCallback(() => loadMore(), { timeout: 800 })
      : window.setTimeout(loadMore, 400);

    return () => {
      if (cancelIdleCallback && typeof id === "number") {
        cancelIdleCallback(id);
      } else {
        clearTimeout(id as number);
      }
    };
  }, [isDesktop, limit, loadMore, renderLimit]);

  // IntersectionObserver to progressively load more when user scrolls near the end
  useEffect(() => {
    if (isDesktop) return;
    if (!sentinelRef.current) return;
    const el = sentinelRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          loadMore();
        }
      },
      { root: null, rootMargin: "100px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [isDesktop, loadMore, sentinelRef]);

  const prefersReduced = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
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

  // Memoize the services slice to avoid recalculating on every render
  const visibleServices = useMemo(
    () =>
      renderLimit && renderLimit > 0
        ? services.slice(0, renderLimit)
        : services,
    [renderLimit]
  );

  return (
    <MotionSection
      id="services"
      className="bg-background-secondary pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20"
    >
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="inline-block mb-4" variants={item}>
            <span className="text-accent font-medium text-lg tracking-wide uppercase">
              {t("servicesSection.label")}
            </span>
          </motion.div>
          <motion.h2
            className="heading-md text-foreground mb-6 md:whitespace-nowrap"
            variants={item}
          >
            {t("servicesSection.title")}
          </motion.h2>
          <motion.p
            className="text-large text-muted-foreground"
            variants={item}
          >
            {t("servicesSection.description")}
          </motion.p>
        </motion.div>

        {/* Sentinel for incremental loading on mobile */}
        {renderLimit && renderLimit < services.length ? (
          <div ref={sentinelRef} aria-hidden className="h-4" />
        ) : null}

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {visibleServices.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              prefersReduced={prefersReduced}
              itemVariants={item}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-soft border border-card-border"
            variants={item}
          >
            <h3 className="heading-md text-foreground mb-4">
              {t("servicesSection.ctaTitle")}
            </h3>
            <p className="text-large text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("servicesSection.ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ y: -2, scale: prefersReduced ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-accent button-glow"
                >
                  <Link to="/contact">
                    {t("servicesSection.ctaRequestQuote")}
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -2, scale: prefersReduced ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link to="/services">{t("servicesSection.viewAll")}</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  );
});

// Memoized ServiceCard component for better performance
type ItemVariants = {
  hidden: { y: number; opacity: number };
  show: {
    y: number;
    opacity: number;
    transition: { type: string; stiffness: number; damping: number };
  };
};

const ServiceCard = memo(
  ({
    service,
    prefersReduced,
    itemVariants,
  }: {
    service: (typeof services)[number];
    prefersReduced: boolean;
    itemVariants: ItemVariants;
  }) => {
    const { t } = useI18n();
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -4, scale: prefersReduced ? 1 : 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="h-full"
        viewport={{ once: true, amount: 0.2 }}
        initial="hidden"
        whileInView="show"
        style={{ willChange: "transform" }}
      >
        <Card className="group card-hover bg-white border-card-border overflow-hidden h-full flex flex-col">
          {/* Image header */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Link
              to={`/services/${service.slug}`}
              className="block h-full"
              aria-label={`${t(`services.${service.slug}.title`)} - ${t("servicesSection.learnMore")}`}
            >
              <img
                src={service.image}
                alt={t(`services.${service.slug}.title`) || service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                fetchPriority={
                  service.slug === services[0]?.slug ? "high" : "auto"
                }
              />
            </Link>
          </div>
          <CardContent className="p-8 flex-1 flex flex-col">
            <div className="flex-1 flex flex-col gap-4">
              {/* Content */}
              <Link to={`/services/${service.slug}`} className="block">
                <h3 className="heading-sm text-foreground group-hover:text-primary transition-colors">
                  {t(`services.${service.slug}.title`)}
                </h3>
              </Link>
              <p className="text-body text-muted-foreground">
                {t(`services.${service.slug}.description`)}
              </p>

              {/* Features */}
              <ul className="space-y-2 mt-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-small text-muted-foreground">
                      {t(`services.${service.slug}.features.${i}`) || feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More Link */}
            <div className="pt-6">
              <motion.div whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  variant="ghost"
                  className="group/btn p-0 h-auto font-medium text-primary hover:text-accent"
                >
                  <Link to={`/services/${service.slug}`}>
                    {t("servicesSection.learnMore")}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

export default ServicesSection;
