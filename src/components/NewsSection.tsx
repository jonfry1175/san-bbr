import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { getLocalizedNews } from "@/lib/news";
import { MotionSection } from "@/components/MotionSection";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { memo } from "react";

const NewsSection = memo(() => {
  const { t, translations, language } = useI18n();
  const news = getLocalizedNews(translations, language);

  // Build category list with counts from current dataset
  const categoryCounts: Record<string, number> = news.reduce(
    (acc, a) => {
      acc[a.category] = (acc[a.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
  const categories = [
    { name: t("common.all"), count: news.length },
    ...Object.entries(categoryCounts).map(([name, count]) => ({ name, count })),
  ];

  const prefersReduced = useReducedMotion();
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
      id="news"
      className="section-padding bg-background-secondary"
    >
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
              {t("newsSection.label")}
            </span>
          </motion.div>
          <motion.h2
            className="heading-lg text-foreground mb-7 leading-snug"
            variants={item}
          >
            {t("newsSection.title")}
          </motion.h2>
          <motion.p
            className="text-large text-muted-foreground"
            variants={item}
          >
            {t("newsSection.description")}
          </motion.p>
        </motion.div>

        {/* News Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              whileHover={{ y: -2 }}
            >
              <Button
                variant={category.name === "All" ? "default" : "outline"}
                className={
                  category.name === "All"
                    ? "bg-primary text-primary-foreground"
                    : "border-card-border hover:bg-primary hover:text-primary-foreground"
                }
              >
                {category.name === t("common.all")
                  ? t("common.all")
                  : category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Article */}
        {news
          .filter((article) => article.featured)
          .map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Card className="mb-12 overflow-hidden bg-white border-card-border">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground font-medium">
                        {t("newsSection.featured")}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-small text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Tag className="h-4 w-4 text-accent" />
                          <span>{article.category}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span>
                            {new Date(article.date).toLocaleDateString("id-ID")}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-accent" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h3 className="heading-md text-foreground">
                        {article.title}
                      </h3>

                      <p className="text-body text-muted-foreground">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-accent" />
                          <span className="text-small text-muted-foreground">
                            {article.author}
                          </span>
                        </div>

                        <motion.div
                          whileHover={{
                            y: -2,
                            scale: prefersReduced ? 1 : 1.02,
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            asChild
                            className="bg-gradient-accent button-glow group"
                          >
                            <Link to={`/news/${article.slug}`}>
                              {t("newsSection.readMore")}
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}

        {/* Regular Articles */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {news
            .filter((article) => !article.featured)
            .map((article) => (
              <motion.div
                key={article.id}
                variants={item}
                whileHover={{ y: -4, scale: prefersReduced ? 1 : 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Card className="group card-hover bg-white border-card-border overflow-hidden h-full flex flex-col">
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-primary font-medium"
                      >
                        {article.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col h-full relative">
                    {/* Reserve space for the absolute footer so content doesn't overlap */}
                    <div className="space-y-4 pb-12">
                      {/* Article Meta */}
                      <div className="flex items-center space-x-4 text-small text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span>
                            {new Date(article.date).toLocaleDateString("id-ID")}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-accent" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="space-y-3">
                        <h3 className="heading-sm text-foreground group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-body text-muted-foreground line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* Author & Read More - positioned absolute at bottom for symmetry */}
                      <div className="absolute left-6 right-6 bottom-4 flex items-center justify-between pt-2 border-t border-card-border bg-white/0">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-accent" />
                          <span className="text-small text-muted-foreground">
                            {article.author}
                          </span>
                        </div>

                        <motion.div
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            asChild
                            variant="ghost"
                            className="group/btn p-0 h-auto font-medium text-primary hover:text-accent"
                          >
                            <Link to={`/news/${article.slug}`}>
                              {t("newsSection.readMore")}
                              <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>

        {/* View All News */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ y: -2, scale: prefersReduced ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/news">
                {t("newsSection.viewAll")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  );
});

export default NewsSection;
