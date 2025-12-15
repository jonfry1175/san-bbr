import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, User, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { getLocalizedProjects } from "@/lib/projects";
import { MotionSection } from "@/components/MotionSection";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { memo } from "react";

const ProjectsSection = memo(() => {
  const { t, translations } = useI18n();
  const localizedProjects = getLocalizedProjects(translations);
  const displayedProjects = localizedProjects.slice(0, 3); // limit to top projects for homepage

  const stats = [
    {
      labelKey: "aboutSection.achievements.yearsExperience",
      value: t("projectsSection.stats.yearsExperience"),
    },
    { label: t("projectsSection.stats.roadsBuilt"), value: "200+ Km" },
    {
      label: t("projectsSection.stats.sitesDeveloped"),
      value: t("projectsSection.stats.sitesDevelopedValue"),
    },
    { label: t("projectsSection.stats.clientSatisfaction"), value: "100%" },
  ];

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
    <MotionSection id="projects" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div className="inline-block mb-4" variants={item}>
            <span className="text-accent font-medium text-lg tracking-wide uppercase">
              {t("projectsSection.label")}
            </span>
          </motion.div>
          <motion.h2
            className="heading-md text-foreground mb-6 md:whitespace-nowrap"
            variants={item}
          >
            {t("projectsSection.title")}
          </motion.h2>
          <motion.p
            className="text-large text-muted-foreground"
            variants={item}
          >
            {t("projectsSection.description")}
          </motion.p>
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelKey || stat.label}
              className="text-center p-6 bg-background-secondary rounded-xl border border-card-border"
              variants={item}
              whileHover={{ y: -4 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-small text-muted-foreground">
                {stat.labelKey ? t(stat.labelKey) : stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -4, scale: prefersReduced ? 1 : 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <Card className="group card-hover bg-white border-card-border overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-primary font-medium"
                    >
                      {project.categoryLabel}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-accent text-accent-foreground font-medium"
                    >
                      {project.statusLabel}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Project Info */}
                    <div className="space-y-3">
                      <h3 className="heading-sm text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-body text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-2 text-small">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <User className="h-4 w-4 text-accent" />
                        <span>
                          {t("projectsSection.client")}: {project.client}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>
                          {t("projectsSection.location")}: {project.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>
                          {t("projectsSection.year")}: {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Project value removed as requested */}

                    {/* View Details Link */}
                    <div className="pt-2">
                      <Button
                        asChild
                        variant="ghost"
                        className="group/btn p-0 h-auto font-medium text-primary hover:text-accent w-full justify-between"
                      >
                        <Link to={`/works/${project.slug}`}>
                          <span>{t("common.viewDetails")}</span>
                          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-primary-foreground"
            variants={item}
          >
            <h3 className="heading-md mb-4">{t("projectsSection.ctaTitle")}</h3>
            <p className="text-large mb-8 max-w-2xl mx-auto opacity-90">
              {t("projectsSection.ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ y: -2, scale: prefersReduced ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-accent-foreground"
                >
                  <Link to="/contact">
                    {t("projectsSection.startProject")}
                    <ArrowRight className="ml-2 h-5 w-5" />
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
                  className="border-white/30 text-black hover:text-white  hover:bg-white/10"
                >
                  <Link to="/works">{t("projectsSection.viewAll")}</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  );
});

export default ProjectsSection;
