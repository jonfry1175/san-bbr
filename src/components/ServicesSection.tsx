import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Truck, HardHat } from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { memo } from "react";

type ServicesSectionProps = {
  limit?: number; // Kept for compatibility, though we are changing the layout
};

const ServicesSection = memo(({ limit }: ServicesSectionProps) => {
  const { t } = useI18n();
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

        {/* Split Services Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* PT SINERGY AGTER NUSANTARA - Rental */}
          <motion.div variants={item} className="h-full">
            <Card className="flex flex-col h-full hover:shadow-lg transition-all border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Truck className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl text-primary">
                    {t("servicesSection.ptSan.title")}
                  </CardTitle>
                </div>
                <CardDescription className="text-base pt-2">
                  {t("servicesSection.ptSan.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end pt-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-accent text-white button-glow"
                >
                  <Link to="/products/rental-alat-berat">
                    {t("servicesSection.ptSan.action")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* PT BUMI BLAMBANGAN RESOURCES - Construction */}
          <motion.div variants={item} className="h-full">
            <Card className="flex flex-col h-full hover:shadow-lg transition-all border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <HardHat className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">
                    {t("servicesSection.ptBbr.title")}
                  </CardTitle>
                </div>
                <CardDescription className="text-base pt-2">
                  {t("servicesSection.ptBbr.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end pt-4">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link to="/products/jasa-konstruksi-tambang">
                    {t("servicesSection.ptBbr.action")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-soft border border-card-border max-w-4xl mx-auto"
            variants={item}
          >
            <h3 className="heading-md text-foreground mb-4">
              {t("servicesSection.ctaTitle")}
            </h3>
            <p className="text-large text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("servicesSection.ctaDescription")}
            </p>
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
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  );
});

export default ServicesSection;
