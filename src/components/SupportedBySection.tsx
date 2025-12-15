import { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/MotionSection";
import { useI18n } from "@/lib/i18n";
import { useAutoScroller } from "@/hooks/use-auto-scroller";

import abgLogo from "@/assets/supported-by/abg.png";
import trakindoLogo from "@/assets/supported-by/trakindo.png";
import uniqipLogo from "@/assets/supported-by/uniquip.png";
import wirtgenGroupLogo from "@/assets/supported-by/wirtgen-group.png";
import abbeconLogo from "@/assets/supported-by/abbecon-indonesia.png";
import pertaminaLogo from "@/assets/supported-by/pertamina-patra-niaga.png";
import karyaAspalMandiriLogo from "@/assets/supported-by/karya-aspal-mandiri.png";
import astraUdTrucksLogo from "@/assets/supported-by/astra-internasional-ud-trucks.png";
import gayaMakmurLogo from "@/assets/supported-by/gaya-makmur-tractors.png";
import bukakaLogo from "@/assets/supported-by/bukaka-teknik-utama.png";
import waagnerLogo from "@/assets/supported-by/waagner-biro-indonesia.png";
import syifaLogo from "@/assets/supported-by/syifa-berkah-makmur.png";
import MIPLogo from "@/assets/supported-by/MIP.png";

const supporters = [
  {
    name: "ABG",
    displayName: "PT. Asphalt Bangun Sarana",
    image: abgLogo,
    isNewSupporter: false,
  },
  {
    name: "Trakindo",
    displayName: "PT. Trakindo Utama",
    image: trakindoLogo,
    isNewSupporter: false,
  },
  {
    name: "Uniquip",
    displayName: "PT. United Equipment Indonesia",
    image: uniqipLogo,
    isNewSupporter: false,
  },
  {
    name: "Wirtgen Group",
    displayName: "Wirtgen Group",
    image: wirtgenGroupLogo,
    isNewSupporter: false,
  },
  // Temporary entries added per request (using ABG image as placeholder)
  {
    name: "Pertamina Parta Niaga",
    displayName: "Pertamina Parta Niaga",
    image: pertaminaLogo,
    isNewSupporter: true,
  },
  {
    name: "Karya Aspal Mandiri",
    displayName: "PT. Karya Aspal Mandiri",
    image: karyaAspalMandiriLogo,
    isNewSupporter: true,
  },
  {
    name: "Astra UD Trucks",
    displayName: "Astra International - UD Trucks",
    image: astraUdTrucksLogo,
    isNewSupporter: true,
  },
  {
    name: "Gaya Makmur Tractors",
    displayName: "PT. Gaya Makmur Tractors",
    image: gayaMakmurLogo,
    isNewSupporter: true,
  },
  {
    name: "Bukaka Teknik Utama",
    displayName: "PT. Bukaka Teknik Utama, Tbk.",
    image: bukakaLogo,
    isNewSupporter: true,
  },
  {
    name: "Waagner Biro Indonesia",
    displayName: "PT. Waagner Biro Indonesia",
    image: waagnerLogo,
    isNewSupporter: true,
  },
  {
    name: "Abbecon Indonesia",
    displayName: "CV. Abbecon Indonesia",
    image: abbeconLogo,
    isNewSupporter: true,
  },
  {
    name: "Syifa Berkah Makmur",
    displayName: "PT. Syifa Berkah Makmur",
    image: syifaLogo,
    isNewSupporter: true,
  },
  {
    name: "Martapura Intan Perkasa",
    displayName: "PT. Martapura Intan Perkasa",
    image: MIPLogo,
    isNewSupporter: true,
  },
];

const SupportedBySection = memo(() => {
  const { t } = useI18n();
  const description = t("supportedBySection.description");
  const hasDescription = description !== "supportedBySection.description";
  const prefersReducedMotion = useReducedMotion();

  const sliderContent = useMemo(() => [...supporters, ...supporters], []);

  const { containerRef, controls, sliderWidth, setIsHovering } =
    useAutoScroller({
      totalItems: supporters.length,
      itemWidth: 260,
      gap: 16,
      durationMultiplier: 5,
    });

  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  // Helper to return tailored image props (className, width, height)
  // for specific supporters that need different sizing or constraints.
  const getImageProps = (
    name: string,
    isNewSupporter: boolean,
  ): { className: string; width: number; height: number } => {
    const key = name.toLowerCase();

    if (key.includes("pertamina")) {
      return {
        className: "max-h-[110px] sm:max-h-[85px] w-[240px] object-contain",
        width: 360,
        height: 220,
      };
    }

    if (key.includes("astra")) {
      return {
        className: "max-h-[90px] sm:max-h-[270px] w-[220px] object-contain",
        width: 360,
        height: 220,
      };
    }

    if (key.includes("waagner")) {
      return {
        className: "max-h-[110px] sm:max-h-[1000px] w-[540px] object-contain",
        width: 760,
        height: 420,
      };
    }

    if (key.includes("bukaka")) {
      return {
        // Increased sizes by ~5x as requested
        className: "max-h-[600px] sm:max-h-[11000px] w-[2500px] object-contain",
        width: 1800,
        height: 1100,
      };
    }

    // Default behavior matches previous logic: new supporters get larger
    // constrained sizing; existing supporters use full available space.
    if (isNewSupporter) {
      return {
        className: "max-h-[120px] sm:max-h-[85px] w-[240px] object-contain",
        width: 360,
        height: 220,
      };
    }

    return {
      className: "max-h-full w-full object-contain",
      width: 150,
      height: 64,
    };
  };

  return (
    <MotionSection id="supported-by" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-up">
          <span className="text-accent font-medium uppercase tracking-wide">
            {t("supportedBySection.label")}
          </span>
          <h2 className="heading-md mt-2 md:whitespace-nowrap">
            {t("supportedBySection.title")}
          </h2>
          {hasDescription && (
            <p className="text-large text-muted-foreground mt-3">
              {description}
            </p>
          )}
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="mx-auto max-w-6xl overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div
              className="flex gap-4 py-2"
              drag="x"
              dragConstraints={{ left: -(sliderWidth + 16), right: 0 }}
              dragElastic={0.08}
              animate={controls}
              initial={{ x: 0 }}
            >
              {sliderContent.map((supporter, idx) => (
                <motion.div
                  key={`${supporter.name}-${idx}`}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{
                    y: prefersReducedMotion ? 0 : -4,
                    scale: prefersReducedMotion ? 1 : 1.02,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex-shrink-0 w-[240px] sm:w-[260px]"
                  role="listitem"
                >
                  <Card className="flex h-[140px] flex-col items-center justify-center border-card-border bg-white/80 px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex h-16 w-full items-center justify-center">
                      {(() => {
                        const { className, width, height } = getImageProps(
                          supporter.name,
                          !!supporter.isNewSupporter,
                        );

                        return (
                          <img
                            src={supporter.image}
                            alt={supporter.name}
                            className={className}
                            loading="lazy"
                            width={width}
                            height={height}
                          />
                        );
                      })()}
                    </div>
                    <p className="mt-3 w-full truncate text-center text-sm text-muted-foreground">
                      {supporter.displayName}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background-secondary to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background-secondary to-transparent" />
        </div>
      </div>
    </MotionSection>
  );
});

export default SupportedBySection;
