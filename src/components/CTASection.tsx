import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRIMARY_EMAIL, SECONDARY_EMAIL } from "@/lib/email-config";
import {
  Phone,
  Mail,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
// Use React Router's navigate for SPA navigation
import { useNavigate } from "react-router-dom";
import { memo } from "react";

const CTASection = memo(() => {
  const { t, translations } = useI18n();
  const navigate = useNavigate();

  const prefersReduced = useReducedMotion();
  const hoursInfo = translations.ctaSection.contactInfo.hours;
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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
      id="contact"
      className="section-padding bg-gradient-hero text-primary-foreground relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"
          animate={prefersReduced ? {} : { y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light rounded-full blur-3xl"
          animate={prefersReduced ? {} : { y: [0, 14, 0], x: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Content */}
          <motion.div className="space-y-6 sm:space-y-8" variants={item}>
            <div>
              <motion.div className="inline-block mb-3 sm:mb-4" variants={item}>
                <span className="text-accent font-medium text-sm sm:text-base lg:text-lg tracking-wide uppercase">
                  {t("ctaSection.readyToStart")}
                </span>
              </motion.div>
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6"
                variants={item}
              >
                {t("ctaSection.title")}
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base lg:text-lg opacity-90 mb-6 sm:mb-8"
                variants={item}
              >
                {t("ctaSection.description")}
              </motion.p>
            </div>

            {/* Benefits List */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3"
              variants={container}
            >
              {translations.ctaSection.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-2 sm:space-x-3"
                  variants={item}
                  whileHover={{ x: 2 }}
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-primary-foreground/90">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <motion.div
                whileHover={{ y: -2, scale: prefersReduced ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* <Button
                  size="lg"
                  variant="accent"
                  className="bg-accent hover:bg-accent-light text-accent-foreground shadow-glow"
                >
                  {t("ctaSection.getQuote")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button> */}
              </motion.div>
              <motion.div
                whileHover={{ y: -2, scale: prefersReduced ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/30 text-black hover:text-white hover:bg-white/10 backdrop-blur-sm text-sm sm:text-base"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {t("ctaSection.contactUs")}
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Contact Cards */}
          <motion.div className="space-y-4 sm:space-y-6" variants={container}>
            {/* Contact Card */}
            {/* <motion.div
              variants={item}
              whileHover={{ y: -4, scale: prefersReduced ? 1 : 1.01 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-accent rounded-xl">
                        <Phone className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {t("ctaSection.contactInfo.phone")}
                        </h3>
                        <p className="text-white/80">
                          Get instant consultation
                        </p>
                      </div>
                    </div>
                    <div className="pl-12">
                      <a
                        href="tel:+62xxx"
                        className="text-accent font-semibold text-lg hover:text-accent-light transition-colors"
                      >
                        +62 xxx-xxxx-xxxx
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div> */}

            {/* Email Card */}
            <motion.div
              variants={item}
              whileHover={{ y: -4, scale: prefersReduced ? 1 : 1.01 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 sm:p-3 bg-accent rounded-xl flex-shrink-0">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-sm sm:text-base mb-2">
                          {t("ctaSection.contactInfo.email")}
                        </h3>
                        <div className="space-y-1.5">
                          <a
                            href={`mailto:${PRIMARY_EMAIL}`}
                            className="block text-white/60 text-xs sm:text-sm font-semibold hover:text-white/95 transition-colors break-all"
                          >
                            {PRIMARY_EMAIL}
                          </a>
                          <a
                            href={`mailto:${SECONDARY_EMAIL}`}
                            className="block text-white/60 text-xs sm:text-sm font-semibold hover:text-white/95 transition-colors break-all"
                          >
                            {SECONDARY_EMAIL}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              variants={item}
              whileHover={{ y: -4, scale: prefersReduced ? 1 : 1.01 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 sm:p-3 bg-accent rounded-xl flex-shrink-0">
                        <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-sm sm:text-base">
                          {t("ctaSection.contactInfo.hours.title")}
                        </h3>
                        <p className="text-white/80 text-xs sm:text-sm mt-1">
                          {t("ctaSection.contactInfo.hours.description")}
                        </p>
                      </div>
                    </div>
                    <div className="pl-0 sm:pl-12 space-y-2 text-xs sm:text-sm">
                      {hoursInfo.schedule.map(
                        ({ day, time, status }, index) => (
                          <div
                            className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2"
                            key={`${day}-${index}`}
                          >
                            <span className="font-medium text-primary-foreground/90">
                              {day}
                            </span>
                            <span
                              className={
                                status === "closed"
                                  ? "text-accent font-semibold text-sm sm:text-base"
                                  : "text-white/70"
                              }
                            >
                              {time}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              variants={item}
              whileHover={{ y: -4, scale: prefersReduced ? 1 : 1.01 }}
            >
              <Card className="bg-accent text-accent-foreground border-0">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" />
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base">
                        Trusted Since 1990
                      </h3>
                      <p className="text-accent-foreground/80 text-xs sm:text-sm">
                        30+ years of construction excellence
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  );
});

export default CTASection;
