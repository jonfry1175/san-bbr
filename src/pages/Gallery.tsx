import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
  useCallback,
  memo,
} from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useHero } from "@/hooks/use-hero";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { GalleryImageCard } from "@/components/GalleryImageCard";
import {
  Filter,
  Grid,
  List,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SEO from "@/components/SEO";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { heavyEquipment, miningConstruction, type ImgItem } from "@/lib/gallery-data";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";

const featuredAd = heavyEquipment[0].src;
const featuredBorneo = miningConstruction[0].src;
const featuredKalimantan = heavyEquipment[1].src;
const featuredCement = miningConstruction[1].src;

const meta = resolveMeta(getStaticPageMeta("gallery"));

const GallerySection = React.memo(
  ({
    label,
    title,
    items,
  }: {
    label: string;
    title: string;
    items: ImgItem[];
  }) => {
    const prefersReduced = useReducedMotion();
    const { translations } = useI18n();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout>();

    const container = useMemo<Variants>(
      () => ({
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
      }),
      []
    );
    const item = useMemo<Variants>(
      () => ({
        hidden: { y: 24, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 180, damping: 20 },
        },
      }),
      []
    );

    const cardWidth = 320; // Card width + gap
    const maxIndex = Math.max(0, items.length - Math.floor(1200 / cardWidth)); // Approximate visible cards

    const scrollToIndex = useCallback(
      (index: number) => {
        if (scrollContainerRef.current) {
          const scrollLeft = index * cardWidth;
          scrollContainerRef.current.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
          });
          setCurrentIndex(index);
        }
      },
      [cardWidth]
    );

    const nextSlide = useCallback(() => {
      const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      scrollToIndex(nextIndex);
    }, [currentIndex, maxIndex, scrollToIndex]);

    const prevSlide = useCallback(() => {
      const prevIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      scrollToIndex(prevIndex);
    }, [currentIndex, maxIndex, scrollToIndex]);

    // Auto-play functionality
    useEffect(() => {
      if (isAutoPlaying && !prefersReduced && items.length > 3) {
        intervalRef.current = setInterval(nextSlide, 4000);
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [isAutoPlaying, nextSlide, prefersReduced, items.length]);

    const toggleAutoPlay = () => {
      setIsAutoPlaying(!isAutoPlaying);
    };

    return (
      <section className="mt-16 content-visibility-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-primary/80 uppercase tracking-wider">
                {label}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
                {title}
              </h3>
            </div>

            {/* Auto-play controls */}
            {items.length > 3 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={translations.gallery.autoplay.prevAria}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={toggleAutoPlay}
                  className={`p-2 rounded-full border border-border transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    isAutoPlaying
                      ? "bg-primary text-primary-foreground"
                      : "bg-card hover:bg-primary hover:text-primary-foreground"
                  }`}
                  aria-label={
                    isAutoPlaying
                      ? translations.gallery.autoplay.pause
                      : translations.gallery.autoplay.play
                  }
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={translations.gallery.autoplay.nextAria}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          <p className="text-muted-foreground text-sm max-w-2xl">
            {translations.gallery.description}
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Gradient fade indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 py-6 px-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent scroll-smooth snap-x snap-mandatory hover:scrollbar-thumb-primary/40 transition-all"
            tabIndex={0}
            aria-label={translations.gallery.ariaGalleryNavigation.replace(
              "{title}",
              title
            )}
            onKeyDown={(e) => {
              const container = e.currentTarget;

              if (e.key === "ArrowLeft") {
                e.preventDefault();
                prevSlide();
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                nextSlide();
              }
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {items.map((it, index) => (
              <motion.div
                key={it.id}
                className="flex-shrink-0 w-80 snap-start group"
                variants={item}
                whileHover={prefersReduced ? {} : { y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 25 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-2xl group">
                      <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group-hover:border-primary/30">
                        {/* Enhanced card styling */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <GalleryImageCard src={it.src} alt={it.alt} />

                        {/* Improved overlay with project info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white text-sm font-medium">
                            {translations.gallery.overlay.photoPrefix}{" "}
                            {index + 1} - {title.split(" ").slice(-2).join(" ")}
                          </p>
                          <p className="text-white/80 text-xs mt-1">
                            {translations.gallery.overlay.clickToView}
                          </p>
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
                        src={it.src}
                        alt={it.alt}
                        className="w-full h-auto max-h-[90vh] object-contain"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h4 className="text-white text-lg font-semibold">
                          {it.alt}
                        </h4>
                        <p className="text-white/80 text-sm mt-1">
                          {translations.gallery.modal.companyName}
                        </p>
                      </div>
                    </motion.div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }
);

// Filtered grid view component
const FilteredGalleryGrid = React.memo(
  ({ items, activeFilter }: { items: ImgItem[]; activeFilter: string }) => {
    const { translations } = useI18n();
    const prefersReduced = useReducedMotion();
    const container = useMemo<Variants>(
      () => ({
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
      }),
      []
    );
    const item = useMemo<Variants>(
      () => ({
        hidden: { y: 24, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 180, damping: 20 },
        },
      }),
      []
    );

    const getCategoryTitle = (filter: string) => {
      switch (filter) {
        case "heavyEquipment":
          return translations.gallery.category.heavyEquipment.title;
        case "miningConstruction":
          return translations.gallery.category.miningConstruction.title;
        default:
          return translations.gallery.category.allTitle;
      }
    };

    const getCategoryDescription = (filter: string) => {
      switch (filter) {
        case "heavyEquipment":
          return translations.gallery.category.heavyEquipment.description;
        case "miningConstruction":
          return translations.gallery.category.miningConstruction.description;
        default:
          return translations.gallery.category.allDescription;
      }
    };

    return (
      <section className="content-visibility-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {getCategoryTitle(activeFilter)}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                {getCategoryDescription(activeFilter)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-sm text-muted-foreground">
              {translations.gallery.showingLabel}
            </span>
            <Badge variant="secondary">
              {items.length} {translations.gallery.photosNoun}
            </Badge>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((it, index) => (
            <motion.div
              key={it.id}
              className="group"
              variants={item}
              whileHover={prefersReduced ? {} : { y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-2xl group">
                    <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group-hover:border-primary/30">
                      {/* Project indicator */}
                      <div className="absolute top-3 left-3 z-10">
                        <Badge
                          variant={
                            it.project === "heavyEquipment"
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {it.project === "heavyEquipment"
                            ? translations.gallery.category.heavyEquipment.badge
                            : translations.gallery.category.miningConstruction.badge}
                        </Badge>
                      </div>

                      {/* Enhanced card styling */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <GalleryImageCard src={it.src} alt={it.alt} />

                      {/* Improved overlay with project info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium">
                          {translations.gallery.overlay.photoPrefix} {index + 1}{" "}
                          - {translations.gallery.overlay.projectLabelPrefix}{" "}
                          {it.project === "heavyEquipment"
                            ? translations.gallery.category.heavyEquipment.badge
                            : translations.gallery.category.miningConstruction.badge}
                        </p>
                        <p className="text-white/80 text-xs mt-1">
                          {translations.gallery.overlay.clickToView}
                        </p>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-7xl p-0 overflow-hidden border-0 bg-black/95 backdrop-blur-sm">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative"
                  >
                    <img
                      src={it.src}
                      alt={it.alt}
                      className="w-full h-auto max-h-[90vh] object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge
                          variant={
                            it.project === "heavyEquipment"
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {it.project === "heavyEquipment"
                            ? translations.gallery.category.heavyEquipment.badge
                            : translations.gallery.category.miningConstruction.badge}
                        </Badge>
                      </div>
                      <h4 className="text-white text-lg font-semibold">
                        {it.alt}
                      </h4>
                      <p className="text-white/80 text-sm mt-1">
                        {translations.gallery.modal.companyName}
                      </p>
                    </div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {items.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-muted-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              {translations.gallery.emptyState.title}
            </h4>
            <p className="text-muted-foreground">
              {translations.gallery.emptyState.description}
            </p>
          </motion.div>
        )}
      </section>
    );
  }
);

const Gallery = () => {
  const { setHero } = useHero();
  const { translations, t } = useI18n();
  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        { name: t("common.gallery"), url: meta.path },
      ]),
    [t]
  );
  const [activeFilter, setActiveFilter] = useState<
    "all" | "heavyEquipment" | "miningConstruction"
  >("all");
  const [viewMode, setViewMode] = useState<"sections" | "grid">("sections");

  const allItems = useMemo(() => [...heavyEquipment, ...miningConstruction], []);
  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return allItems;
    return allItems.filter((item) => item.project === activeFilter);
  }, [allItems, activeFilter]);

  const heavyEquipmentCount = heavyEquipment.length;
  const miningConstructionCount = miningConstruction.length;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case "1":
            event.preventDefault();
            setActiveFilter("all");
            break;
          case "2":
            event.preventDefault();
            setActiveFilter("heavyEquipment");
            break;
          case "3":
            event.preventDefault();
            setActiveFilter("miningConstruction");
            break;
          case "g":
            event.preventDefault();
            setViewMode((prev) => (prev === "grid" ? "sections" : "grid"));
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setHero({
      variant: "simple",
      label: translations.gallery.label,
      title: translations.gallery.title,
      description: translations.gallery.description,
    });
  }, [
    setHero,
    translations.gallery.label,
    translations.gallery.title,
    translations.gallery.description,
  ]);

  const localizedTitle = translations.gallery.title || meta.title;
  const localizedDescription =
    translations.gallery.description || meta.description;
  const jsonLd = [
    createWebPageJsonLd({
      name: localizedTitle,
      description: localizedDescription,
      url: meta.canonical,
      image: meta.image,
    }),
    breadcrumbs,
  ].filter(Boolean);

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
        jsonLd={jsonLd}
      />
      <main className="min-h-screen bg-gradient-to-br from-background via-background-secondary to-background">
        <div className="container mx-auto container-padding section-padding">
          {/* Enhanced header section */}
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              {translations.gallery.label}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {translations.gallery.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {translations.gallery.description}
            </p>

            {/* Keyboard shortcuts hint */}
            <div className="mt-6 text-xs text-muted-foreground bg-muted/30 rounded-lg px-4 py-2 inline-block">
              {translations.gallery.ui?.keyboardHint}
            </div>
          </motion.div>

          {/* Stats section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl font-bold text-primary mb-2">
                {allItems.length}+
              </div>
              <div className="text-sm text-muted-foreground">
                {translations.gallery.stats?.projectDocs}
              </div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">
                {translations.gallery.stats?.projectCategories}
              </div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                {translations.gallery.stats?.qualityAssured}
              </div>
            </div>
          </motion.div>

          {/* Filter and View Controls */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">
                  {translations.gallery.ui?.filterBy}
                </span>
              </div>
              <div
                className="flex w-full flex-wrap gap-2 sm:w-auto"
                role="group"
                aria-label={translations.gallery.ui?.filterBy}
              >
                <Badge
                  variant={activeFilter === "all" ? "default" : "outline"}
                  className="cursor-pointer transition-all hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  onClick={() => setActiveFilter("all")}
                  onKeyDown={(e) => e.key === "Enter" && setActiveFilter("all")}
                  tabIndex={0}
                  role="button"
                  aria-pressed={activeFilter === "all"}
                  aria-label={`${translations.gallery.ui?.filterBy} ${translations.gallery.category.allTitle}, ${allItems.length} ${translations.gallery.photosNoun}`}
                >
                  {translations.gallery.category.allTitle} ({allItems.length})
                </Badge>
                <Badge
                  variant={activeFilter === "heavyEquipment" ? "default" : "outline"}
                  className="cursor-pointer transition-all hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  onClick={() => setActiveFilter("heavyEquipment")}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setActiveFilter("heavyEquipment")
                  }
                  tabIndex={0}
                  role="button"
                  aria-pressed={activeFilter === "heavyEquipment"}
                  aria-label={`${translations.gallery.ui?.filterBy} ${translations.gallery.category.heavyEquipment.title}, ${heavyEquipmentCount} ${translations.gallery.photosNoun}`}
                >
                  {translations.gallery.category.heavyEquipment.badge} ({heavyEquipmentCount})
                </Badge>
                <Badge
                  variant={
                    activeFilter === "miningConstruction" ? "default" : "outline"
                  }
                  className="cursor-pointer transition-all hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  onClick={() => setActiveFilter("miningConstruction")}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setActiveFilter("miningConstruction")
                  }
                  tabIndex={0}
                  role="button"
                  aria-pressed={activeFilter === "miningConstruction"}
                  aria-label={`${translations.gallery.ui?.filterBy} ${translations.gallery.category.miningConstruction.title}, ${miningConstructionCount} ${translations.gallery.photosNoun}`}
                >
                  {translations.gallery.category.miningConstruction.badge} (
                  {miningConstructionCount})
                </Badge>
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-2">
              <span className="text-sm text-muted-foreground">
                {translations.gallery.ui?.viewLabel}
              </span>
              <div
                className="flex rounded-lg border border-border bg-background"
                role="group"
                aria-label={translations.gallery.ui?.viewLabel}
              >
                <button
                  onClick={() => setViewMode("sections")}
                  className={`p-2 rounded-l-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    viewMode === "sections"
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                  aria-pressed={viewMode === "sections"}
                  aria-label={translations.gallery.ui?.byCategoryAria}
                >
                  <List className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-r-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    viewMode === "grid"
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                  aria-pressed={viewMode === "grid"}
                  aria-label={translations.gallery.ui?.gridAria}
                >
                  <Grid className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Conditional rendering based on view mode and filter */}
          {viewMode === "sections" && activeFilter === "all" ? (
            <div className="space-y-20">
              <GallerySection
                label={translations.gallery.modal.companyName}
                title={translations.gallery.category.heavyEquipment.title}
                items={heavyEquipment}
              />
              <GallerySection
                label={translations.gallery.modal.companyName}
                title={translations.gallery.category.miningConstruction.title}
                items={miningConstruction}
              />
            </div>
          ) : (
            <FilteredGalleryGrid
              items={filteredItems}
              activeFilter={activeFilter}
            />
          )}

          {/* Enhanced CTA section with project imagery */}
          <motion.div
            className="mt-24 relative overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl"></div>
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {translations.gallery.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {translations.gallery.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 shadow-lg hover:shadow-xl transition-all"
                    >
                      <a href="/#contact">{translations.common.contactUs}</a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-primary/20 hover:bg-primary/5 px-8"
                    >
                      <a href="/works">
                        {translations.projectsSection.viewAll}
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project showcase images */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Featured project images */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg group relative">
                        <img
                          src={featuredAd}
                          alt="Featured Heavy Equipment"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg group relative">
                        <img
                          src={featuredBorneo}
                          alt="Featured Mining Project"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-4 mt-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg group relative">
                        <img
                          src={featuredKalimantan}
                          alt="Featured Heavy Equipment 2"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg group relative">
                        <img
                          src={featuredCement}
                          alt="Featured Construction Project"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating stats overlay */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        111+
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {translations.gallery.stats?.completedProjects}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Gallery;
