import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import suhermanImage from "@/assets/bod/suherman-director.png";
import bisterImage from "@/assets/bod/bister-panjaitan-comissioner.png";

const CompanyLeadership = () => {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
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

  const leaders = [
    {
      id: "suherman",
      name: "Suherman",
      position: t("leaders.suherman.position"),
      image: suhermanImage,
      slug: "suherman",
    },
    {
      id: "bister-panjaitan",
      name: "Bister Panjaitan",
      position: t("leaders.bisterPanjaitan.position"),
      image: bisterImage,
      slug: "bister-panjaitan",
    },
  ];

  return (
    <section
      id="company-leadership"
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
            <Users className="h-4 w-4" />
            {t("aboutPage.companyLeadership")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("aboutPage.ourLeadershipTitle")}
          </h2>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.id}
              variants={cardVariant}
              className="group"
            >
              <Link
                to={`/about-us/company-leadership/${leader.slug}`}
                className="block bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Leader Image */}
                <div className="relative h-80 lg:h-96 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={leader.image}
                    alt={`${leader.name} - ${leader.position}`}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>

                  {/* Position Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {leader.position}
                    </span>
                  </div>

                  {/* View Profile Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      {t("aboutPage.viewProfile")}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Leader Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 font-medium mb-4">
                    {leader.position}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {t("aboutPage.viewProfileDesc")}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyLeadership;

