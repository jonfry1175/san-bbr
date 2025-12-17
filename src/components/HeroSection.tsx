import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, CheckCircle } from "lucide-react";
// Background hero videos
// import heroVid1 from "@/assets/hero/1.mp4";
// import heroVid2 from "@/assets/hero/2.mp4";
// import heroVid3 from "@/assets/hero/3.mp4";
// import heroVid4 from "@/assets/hero/4.mp4";
// Mobile hero videos
// import mobileHeroVid1 from "@/assets/hero/mobile-video/1.mp4";
// import mobileHeroVid2 from "@/assets/hero/mobile-video/2.mp4";
// import mobileHeroVid3 from "@/assets/hero/mobile-video/3.mp4";
// import mobileHeroVid4 from "@/assets/hero/mobile-video/4.mp4";

const heroVid1 = "https://placehold.co/1920x1080/f97316/ffffff.mp4?text=Hero+Video+1";
const heroVid2 = "https://placehold.co/1920x1080/f97316/ffffff.mp4?text=Hero+Video+2";
const heroVid3 = "https://placehold.co/1920x1080/f97316/ffffff.mp4?text=Hero+Video+3";
const heroVid4 = "https://placehold.co/1920x1080/f97316/ffffff.mp4?text=Hero+Video+4";

const mobileHeroVid1 = "https://placehold.co/720x1280/f97316/ffffff.mp4?text=Mobile+Hero+1";
const mobileHeroVid2 = "https://placehold.co/720x1280/f97316/ffffff.mp4?text=Mobile+Hero+2";
const mobileHeroVid3 = "https://placehold.co/720x1280/f97316/ffffff.mp4?text=Mobile+Hero+3";
const mobileHeroVid4 = "https://placehold.co/720x1280/f97316/ffffff.mp4?text=Mobile+Hero+4";

import { useHero } from "@/hooks/use-hero";
// Import hero images for non-home pages
// import imgCareer from "@/assets/hero/images/career_11zon_16_11zon.jpeg";
// import imgContact from "@/assets/hero/images/contact us_11zon_15_11zon.jpg";
// import imgGallery from "@/assets/hero/images/hero-bg-gallery.jpg";
// import imgNews from "@/assets/hero/images/hero-bg-news.jpg";
// import imgOurCompany from "@/assets/hero/images/our_company.jpeg";
// import imgOurTeam from "@/assets/hero/images/our team_11zon_12_11zon.jpg";
// import imgOurWorks from "@/assets/hero/images/our_work.jpeg";
// import imgProduct from "@/assets/hero/images/product_11zon_13_11zon.jpg";
// import ImgServices from "@/assets/hero/images/services.jpg";
// import imgCertifiedProfessionals from "@/assets/hero-section-profesional-bersertifikat.jpg";
// import imgCompanyAwards from "@/assets/hero-section-penghargaan-kami.jpg";
// import imgInternship from "@/assets/hero/images/hero-bg-internship.jpg";

const imgCareer = "https://placehold.co/1920x600/f97316/ffffff?text=Career+Hero";
const imgContact = "https://placehold.co/1920x600/f97316/ffffff?text=Contact+Hero";
const imgGallery = "https://placehold.co/1920x600/f97316/ffffff?text=Gallery+Hero";
const imgNews = "https://placehold.co/1920x600/f97316/ffffff?text=News+Hero";
const imgOurCompany = "https://placehold.co/1920x600/f97316/ffffff?text=Our+Company+Hero";
const imgOurTeam = "https://placehold.co/1920x600/f97316/ffffff?text=Our+Team+Hero";
const imgOurWorks = "https://placehold.co/1920x600/f97316/ffffff?text=Our+Works+Hero";
const imgProduct = "https://placehold.co/1920x600/f97316/ffffff?text=Product+Hero";
const ImgServices = "https://placehold.co/1920x600/f97316/ffffff?text=Services+Hero";
const imgCertifiedProfessionals = "https://placehold.co/1920x600/f97316/ffffff?text=Certified+Hero";
const imgCompanyAwards = "https://placehold.co/1920x600/f97316/ffffff?text=Awards+Hero";
const imgInternship = "https://placehold.co/1920x600/f97316/ffffff?text=Internship+Hero";

import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { useCallback, useMemo, useRef, useState, useEffect } from "react";

// Static video arrays - memoized outside component
const DESKTOP_VIDEOS = [heroVid1, heroVid2, heroVid3, heroVid4];
const MOBILE_VIDEOS = [
  mobileHeroVid1,
  mobileHeroVid2,
  mobileHeroVid3,
  mobileHeroVid4,
];

const HeroSection = () => {
  const { hero } = useHero();
  const { t, translations } = useI18n();
  const location = useLocation();

  // Detect mobile device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", checkMobile);

    return () => mediaQuery.removeEventListener("change", checkMobile);
  }, []);

  // Memoize videos array based on mobile state
  const videos = useMemo(
    () => (isMobile ? MOBILE_VIDEOS : DESKTOP_VIDEOS),
    [isMobile]
  );

  const [activeSlide, setActiveSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [locationImage, setLocationImage] = useState<string | undefined>(
    undefined
  );

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos.length]);

  // Memoize stats array
  const stats = useMemo(
    () => [
      {
        icon: Award,
        value: 35,
        label: t("aboutSection.achievements.yearsExperience"),
      },
      {
        icon: CheckCircle,
        value: 111,
        label: t("aboutSection.achievements.successfulProjects"),
      },
      {
        icon: Users,
        value: 100,
        label: t("aboutSection.achievements.satisfiedClients"),
      },
    ],
    [t]
  );

  const sectionRef = useRef<HTMLElement | null>(null);

  // Auto-rotate background videos - increased to 5s for better performance
  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [videos.length]);

  // Control video playback
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeSlide) {
        video.play().catch(() => {
          // Ignore play errors (e.g., autoplay blocked)
        });
      } else {
        video.pause();
      }
    });
  }, [activeSlide]);

  const formattedHeroTitle = useMemo(() => {
    if (!hero.title) return null;
    const commaIndex = hero.title.indexOf(",");
    if (commaIndex === -1) {
      return hero.title;
    }

    const firstPart = hero.title.slice(0, commaIndex + 1).trim();
    const remainder = hero.title.slice(commaIndex + 1).trim();
    const baseTitleClass = "inline-flex flex-col gap-y-2 md:gap-y-3";

    if (remainder === "Menghasilkan Kualitas") {
      return (
        <span className={baseTitleClass}>
          <span>{firstPart}</span>
          <span className="inline-flex flex-col gap-y-2 md:gap-y-3">
            <span>Menghasilkan</span>
            <span>Kualitas</span>
          </span>
        </span>
      );
    }

    return (
      <span className={baseTitleClass}>
        <span>{firstPart}</span>
        <span>{remainder}</span>
      </span>
    );
  }, [hero.title]);

  const normalizeHeroKey = useCallback((label: string) => {
    return label.toLowerCase().replace(/\s+/g, " ").trim();
  }, []);

  // Lazy load location image only when needed (for video poster on home page or location page background)
  useEffect(() => {
    const normalizedLabel = hero.label ? normalizeHeroKey(hero.label) : "";
    const needsLocationImage =
      hero.variant === "home" || // For video poster
      normalizedLabel === "lokasi" ||
      normalizedLabel === "location";

    if (needsLocationImage && !locationImage) {
      // import("@/assets/hero/images/location.jpg").then((module) => {
      //   setLocationImage(module.default);
      // });
      setLocationImage("https://placehold.co/1920x600/f97316/ffffff?text=Location+Hero");
    } else if (!needsLocationImage && locationImage) {
      setLocationImage(undefined);
    }
  }, [hero.variant, hero.label, locationImage, normalizeHeroKey]);

  // Map hero.label to image asset (normalized for translated labels)
  const heroImageMap = useMemo(
    () =>
      new Map<string, string>([
        ["karir", imgCareer],
        ["career", imgCareer],
        ["kontak", imgContact],
        ["contact", imgContact],
        ["galeri", imgGallery],
        ["gallery", imgGallery],
        ["berita", imgNews],
        ["news", imgNews],
        ["latest news", imgNews],
        ["berita terkini", imgNews],
        ["tentang kami", imgOurCompany],
        ["about us", imgOurCompany],
        ["tim kami", imgOurTeam],
        ["our team", imgOurTeam],
        ["portofolio", imgOurWorks],
        ["portofolio kami", imgOurWorks],
        ["our portfolio", imgOurWorks],
        ["produk", imgProduct],
        ["products", imgProduct],
        ["layanan", ImgServices],
        ["layanan kami", ImgServices],
        ["services", ImgServices],
        ["our services", ImgServices],
        // Location image is lazy loaded - will be handled separately
        ["magang", imgInternship],
        ["internship", imgInternship],
        ["program magang", imgInternship],
        ["internship programs", imgInternship],
        ["profesional bersertifikat", imgCertifiedProfessionals],
        ["certified professionals", imgCertifiedProfessionals],
        ["penghargaan kami", imgCompanyAwards],
        ["our awards", imgCompanyAwards],
      ]),
    []
  );

  const defaultHeroImage =
    heroImageMap.get(normalizeHeroKey("Tentang Kami")) ||
    "https://placehold.co/1920x600/f97316/ffffff?text=Default+Hero";

  // Pick image by label, fallback to company/about, then Unsplash
  // Handle location image separately since it's lazy loaded
  const normalizedLabel = hero.label ? normalizeHeroKey(hero.label) : "";
  const isLocationPage =
    normalizedLabel === "lokasi" || normalizedLabel === "location";

  const heroImage =
    hero.backgroundImage ??
    (isLocationPage && locationImage
      ? locationImage
      : hero.label
        ? heroImageMap.get(normalizeHeroKey(hero.label)) || defaultHeroImage
        : defaultHeroImage);

  // If the hero image is the certified professionals asset, slightly zoom out
  const isCertifiedImage = heroImage === imgCertifiedProfessionals;

  const isOurTeamRoute = location.pathname.startsWith("/about-us/our-team");
  const isCareerRoute = location.pathname.startsWith("/career");

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`relative flex items-center overflow-hidden ${
        hero.variant === "home"
          ? "min-h-[100svh] sm:h-[calc(100vh-5rem)]"
          : "min-h-[50vh]"
      }`}
    >
      {/* Background: Video for home, Unsplash image for others */}
      {hero.variant === "home" ? (
        <div
          aria-hidden
          className="absolute inset-0 select-none pointer-events-none"
        >
          {/* Only render active video + next video for performance */}
          {videos.map((video, idx) => {
            const nextSlide = (activeSlide + 1) % videos.length;
            const shouldRender = idx === activeSlide || idx === nextSlide;

            if (!shouldRender) return null;

            return (
              <video
                key={idx}
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  idx === activeSlide
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
                muted
                loop
                playsInline
                preload={idx === activeSlide ? "auto" : "metadata"}
                {...(locationImage && { poster: locationImage })}
                {...(idx === 0 && { fetchPriority: "high" as const })}
                onLoadedData={() => {
                  if (idx === activeSlide) {
                    videoRefs.current[idx]?.play().catch(() => {
                      // Ignore play errors
                    });
                  }
                }}
              >
                <source src={video} type="video/mp4" />
              </video>
            );
          })}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 select-none pointer-events-none"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: isCertifiedImage ? "85%" : "cover",
            backgroundPosition: isCareerRoute
              ? "center 45%"
              : isOurTeamRoute
                ? "center 35%"
                : "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding h-full flex items-center">
        {hero.variant === "home" ? (
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex h-full flex-col justify-center lg:pl-6 xl:pl-12">
              <div className="text-white flex flex-col gap-6 sm:gap-8 md:gap-10 pt-8 sm:pt-12 lg:pt-12 max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-wide md:tracking-wider leading-tight md:leading-[1.1]">
                    {t("visionMission.subtitle")
                      .replace("Work with ", "")
                      .replace(",", ",")}
                  </h1>

                  <p
                    className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl xl:max-w-2xl leading-relaxed"
                    // hero description may include simple <em> tags from translations
                    dangerouslySetInnerHTML={{
                      __html: String(
                        t("aboutPages.ourCompany.hero.description")
                      ),
                    }}
                  />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl button-glow group"
                  >
                    <Link to="/products" className="inline-flex items-center">
                      {t("header.productLinks.rentalAlatBerat")}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-white/30 text-black hover:text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl backdrop-blur-sm group"
                  >
                    <Link to="/services" className="inline-flex items-center">
                      {t("header.productLinks.jasaKonstruksi")}
                    </Link>
                  </Button>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-2">
                  {stats.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="text-center group">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="p-2 sm:p-3 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-accent/20 transition-colors">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                            {value}+
                          </div>
                          <div className="text-white/80 text-xs sm:text-sm">
                            {label}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Additional Info Card */}
            {/* Commented out for performance */}
          </div>
        ) : (
          // Enhanced simple variant with CTAs only (no info card)
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center py-12 sm:py-14 md:py-20">
            {/* Left Content */}
            <div className="text-white space-y-4 sm:space-y-6">
              {hero.label && (
                <p className="uppercase tracking-wider text-accent font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  {hero.label}
                </p>
              )}
              {hero.title && (
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-wide md:tracking-wider leading-tight md:leading-[1.1]">
                  {formattedHeroTitle}
                </h1>
              )}
              <p
                className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl"
                // hero.description may include simple <em> tags
                dangerouslySetInnerHTML={{
                  __html: String(
                    hero.description ??
                      t("aboutPages.ourCompany.hero.description")
                  ),
                }}
              />

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl button-glow group"
                >
                  <Link to="/products">
                    {t("header.productLinks.rentalAlatBerat")}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/30 text-black hover:text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl backdrop-blur-sm group"
                >
                  <Link to="/services" className="inline-flex items-center">
                    {t("header.productLinks.jasaKonstruksi")}
                  </Link>
                </Button>
              </div>
            </div>
            {/* No right content on non-home hero */}
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hidden sm:block">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm">{t("ctaSection.readyToStart")}</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Slide Indicators (only on main page) */}
      {hero.variant === "home" && (
        <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-10 flex justify-end gap-2">
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeSlide
                  ? "bg-accent w-8"
                  : "bg-white/50 hover:bg-white/80 w-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
