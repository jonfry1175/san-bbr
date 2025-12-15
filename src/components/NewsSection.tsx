import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Search,
  Filter,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getLocalizedNews } from "@/lib/news";
import { MotionSection } from "@/components/MotionSection";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { memo, useState, useMemo } from "react";

const NewsSection = memo(() => {
  const { t, translations, language } = useI18n();
  const news = getLocalizedNews(translations, language);
  const location = useLocation();
  const isNewsPage = location.pathname === "/news";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Calculate categories dynamically from the full dataset
  const categories = useMemo(() => {
    const counts: Record<string, number> = news.reduce(
      (acc, a) => {
        acc[a.category] = (acc[a.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    return [
      { name: "All", label: t("common.all"), count: news.length },
      ...Object.entries(counts).map(([name, count]) => ({
        name,
        label: name,
        count,
      })),
    ];
  }, [news, t]);

  // Filter news based on search and category
  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [news, selectedCategory, searchQuery]);

  // Split into featured and regular, but only from the filtered results
  const featuredArticle = filteredNews.find((a) => a.featured);
  // If featured is found, filter it out from regular list. Otherwise show all in regular list.
  const regularArticles = filteredNews.filter(
    (a) => a.id !== featuredArticle?.id
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <MotionSection
      id="news"
      className="section-padding bg-gradient-to-b from-background-secondary/50 to-background"
    >
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="inline-block mb-4" variants={item}>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase bg-accent/10 px-4 py-1.5 rounded-full">
              {t("newsSection.label")}
            </span>
          </motion.div>
          <motion.h2
            className="heading-lg text-foreground mb-6"
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

        {/* Controls: Search and Categories */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={
                  selectedCategory === category.name ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.name)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-background border-card-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
                <span
                  className={`ml-2 text-xs py-0.5 px-1.5 rounded-full ${
                    selectedCategory === category.name
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {category.count}
                </span>
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full max-w-xs group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              placeholder={t("common.search") || "Search news..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-background border-card-border focus:ring-2 focus:ring-primary/20 transition-all rounded-full"
            />
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {filteredNews.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter.
              </p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 text-primary"
              >
                Clear all filters
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {/* Featured Article */}
              {featuredArticle && (
                <motion.div variants={item} className="mb-12">
                  <div className="group relative overflow-hidden rounded-3xl bg-card border border-card-border shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      {/* Image Side */}
                      <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[500px] overflow-hidden">
                        <div className="absolute inset-0 bg-muted/20 animate-pulse" />
                        <img
                          src={featuredArticle.image}
                          alt={featuredArticle.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60 opacity-60" />

                        <div className="absolute top-6 left-6 z-10">
                          <Badge className="bg-accent text-accent-foreground border-none px-3 py-1 text-sm font-medium shadow-lg backdrop-blur-md">
                            {t("newsSection.featured")}
                          </Badge>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center relative bg-card lg:bg-transparent">
                        <div className="lg:absolute lg:inset-0 lg:bg-gradient-to-l lg:from-card lg:via-card lg:to-transparent z-0" />

                        <div className="relative z-10 space-y-6">
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <Badge
                              variant="outline"
                              className="border-accent/50 text-accent bg-accent/5"
                            >
                              {featuredArticle.category}
                            </Badge>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(
                                  featuredArticle.date
                                ).toLocaleDateString("id-ID", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                          </div>

                          <h3 className="heading-md lg:text-4xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                            {featuredArticle.title}
                          </h3>

                          <p className="text-body-lg text-muted-foreground line-clamp-3 lg:line-clamp-4">
                            {featuredArticle.excerpt}
                          </p>

                          <div className="pt-6 flex items-center justify-between border-t border-border">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <User className="h-5 w-5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium text-foreground">
                                  {featuredArticle.author}
                                </span>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3" />
                                  <span>{featuredArticle.readTime}</span>
                                </div>
                              </div>
                            </div>

                            <Button
                              asChild
                              size="lg"
                              className="rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                            >
                              <Link to={`/news/${featuredArticle.slug}`}>
                                {t("newsSection.readMore")}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Grid Layout for Other Articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularArticles.map((article) => (
                  <motion.div
                    key={article.id}
                    variants={item}
                    layoutId={`article-${article.id}`}
                  >
                    <Link
                      to={`/news/${article.slug}`}
                      className="group h-full block"
                    >
                      <Card className="h-full overflow-hidden border-transparent bg-card hover:bg-card/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                          <Badge className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground hover:bg-background">
                            {article.category}
                          </Badge>
                        </div>

                        {/* Content */}
                        <CardContent className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>
                                {new Date(article.date).toLocaleDateString(
                                  "id-ID"
                                )}
                              </span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-border" />
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>

                          <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                            {article.excerpt}
                          </p>

                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                              {t("newsSection.readMore")}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transform group-hover:translate-x-1 transition-transform">
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Button - Only on Homepage */}
        {!isNewsPage && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
              >
                <Link to="/news">
                  {t("newsSection.viewAll")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </MotionSection>
  );
});

export default NewsSection;
