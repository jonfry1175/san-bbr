import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Target,
  Lightbulb,
  Shield,
  Users,
  Award,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import teamImage from "@/assets/our-company.jpg";

const CompanyIntroduction = () => {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="company-introduction"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          custom={0}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium mb-4">
            <Building2 className="h-4 w-4" />
            {t("aboutPage.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Traktor Utama <span className="text-yellow-500">Nusantara</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("aboutPage.description")}
          </p>
        </motion.div>

        {/* Company Overview */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            <motion.div
              variants={cardVariant}
              className="flex order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-center w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("aboutPage.ourStory")}
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>{t("aboutPage.storyText1")}</p>
                  <p>{t("aboutPage.storyText2")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariant}
              className="flex order-1 lg:order-2"
            >
              <div className="relative w-full h-64 sm:h-80 lg:min-h-[450px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={teamImage}
                  alt="Traktor Utama Nusantara Team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={cardVariant}>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t("about.ourVision")}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("career.visionText")}
                </p>
              </div>
            </motion.div>

            <motion.div variants={cardVariant}>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t("about.ourMission")}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("career.missionText")}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={cardVariant} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("aboutPage.whyChooseTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("aboutPage.whyChooseDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={cardVariant} className="group">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                  <Shield className="h-6 w-6 text-yellow-600" />
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("aboutPage.comprehensiveWarranty")}
                </h4>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{t("aboutPage.lightingTowerWarranty")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{t("aboutPage.excavatorWarranty")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{t("aboutPage.dumpTruckWarranty")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{t("aboutPage.factorySupport")}</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={cardVariant} className="group">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("aboutPage.expertSupport")}
                </h4>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{t("aboutPage.dedicatedSupport")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{t("aboutPage.sparePartsAvailability")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{t("aboutPage.branchSupport")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{t("aboutPage.lifetimePerformance")}</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={cardVariant} className="group">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("aboutPage.provenTrackRecord")}
                </h4>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{t("aboutPage.globalDeployment")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{t("aboutPage.strongPresence")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{t("aboutPage.extensiveNetwork")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{t("aboutPage.trustedCompanies")}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;

