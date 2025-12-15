import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/MotionSection";
import { useI18n } from "@/lib/i18n";

import uprLogo from "@/assets/career/UPR.png";
import umprLogo from "@/assets/career/UMPR.png";
import ukprLogo from "@/assets/career/UKPR.png";
import smkn1Logo from "@/assets/career/SMK Negeri 1 Palangka Raya.png";
import smkn8Logo from "@/assets/career/⁠SMK Negeri 8 Palangka Raya.png";

const universities = [
  {
    name: "Universitas Palangka Raya",
    displayName: "Universitas Palangka Raya",
    image: uprLogo,
  },
  {
    name: "Universitas Muhammadiyah Palangka Raya",
    displayName: "Universitas Muhammadiyah Palangka Raya",
    image: umprLogo,
  },
  {
    name: "Universitas Kristen Palangka Raya",
    displayName: "Universitas Kristen Palangka Raya",
    image: ukprLogo,
  },
];

const schools = [
  {
    name: "SMK Negeri 1 Palangka Raya",
    displayName: "SMK Negeri 1 Palangka Raya",
    image: smkn1Logo,
  },
  {
    name: "SMK Negeri 8 Palangka Raya",
    displayName: "SMK Negeri 8 Palangka Raya",
    image: smkn8Logo,
  },
];

const CareerSupportedBySection = memo(() => {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <MotionSection
      id="career-supported-by"
      className="section-padding bg-background"
    >
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-up">
          {/* <span className="text-accent font-medium uppercase tracking-wide">
            {t("careerSupportedBySection.label")}
          </span> */}
          <h2 className="heading-md mt-2">
            {t("careerSupportedBySection.title")}
          </h2>
          <p className="text-large text-muted-foreground mt-3">
            {t("careerSupportedBySection.description")}
          </p>
        </div>

        {/* Universitas Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            UNIVERSITAS
          </h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {universities.map((university, idx) => (
              <motion.div
                key={`${university.name}-${idx}`}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: prefersReducedMotion ? 0 : -4,
                  scale: prefersReducedMotion ? 1 : 1.02,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full sm:w-[280px]"
                role="listitem"
              >
                <Card className="flex h-[240px] flex-col items-center justify-center border-card-border bg-white px-8 py-6 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                  <div className="flex h-32 w-32 items-center justify-center mb-4">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      width={128}
                      height={128}
                    />
                  </div>
                  <p className="text-center text-sm font-medium text-foreground leading-snug">
                    {university.displayName}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SMA/SMK Section */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">SMA/SMK</h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {schools.map((school, idx) => (
              <motion.div
                key={`${school.name}-${idx}`}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: prefersReducedMotion ? 0 : -4,
                  scale: prefersReducedMotion ? 1 : 1.02,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full sm:w-[280px]"
                role="listitem"
              >
                <Card className="flex h-[240px] flex-col items-center justify-center border-card-border bg-white px-8 py-6 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                  <div className="flex h-32 w-32 items-center justify-center mb-4">
                    <img
                      src={school.image}
                      alt={school.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      width={128}
                      height={128}
                    />
                  </div>
                  <p className="text-center text-sm font-medium text-foreground leading-snug">
                    {school.displayName}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
});

export default CareerSupportedBySection;
