import {
  Calendar,
  Clock,
  User,
  Share2,
  Link as LinkIcon,
  ArrowLeft,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { getArticleBySlug, getLocalizedNews, newsArticles } from "@/lib/news";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import {
  buildCanonicalUrl,
  createBreadcrumbJsonLd,
  createNewsArticleJsonLd,
  createWebPageJsonLd,
} from "@/lib/seo";

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { setHero } = useHero();
  const { toast } = useToast();
  const location = useLocation();
  const { t, translations, language } = useI18n();
  const localized = useMemo(
    () => getLocalizedNews(translations, language),
    [translations, language],
  );
  const article = useMemo(
    () => (slug ? localized.find((a) => a.slug === slug) : undefined),
    [slug, localized],
  );
  const others = useMemo(
    () => localized.filter((a) => a.slug !== slug).slice(0, 2),
    [slug, localized],
  );
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [readProgress, setReadProgress] = useState(0);

  const { prevArticle, nextArticle } = useMemo(() => {
    if (!article) return { prevArticle: undefined, nextArticle: undefined };
    const idx = newsArticles.findIndex((a) => a.slug === article.slug);
    return {
      prevArticle: idx > 0 ? newsArticles[idx - 1] : undefined,
      nextArticle:
        idx < newsArticles.length - 1 ? newsArticles[idx + 1] : undefined,
    };
  }, [article]);

  // t already obtained above

  useEffect(() => {
    if (article) {
      const dateStr = new Date(article.date).toLocaleDateString("id-ID");
      setHero({
        variant: "simple",
        label: t("newsSection.label"),
        title: article.title,
        description: `${article.author} • ${dateStr} • ${article.readTime}`,
      });
    }
  }, [article, setHero, t]);

  // Reading progress based on article content scroll
  useEffect(() => {
    const handler = () => {
      const el = contentRef.current;
      if (!el) return;
      const viewportH =
        window.innerHeight || document.documentElement.clientHeight;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + scrollY; // top of content relative to document
      const elementHeight = el.offsetHeight;
      const totalScrollable = Math.max(elementHeight - viewportH, 0);
      const current = scrollY - elementTop;
      const progress =
        totalScrollable > 0
          ? Math.min(Math.max((current / totalScrollable) * 100, 0), 100)
          : 0;
      setReadProgress(Number.isFinite(progress) ? progress : 0);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const canonical = buildCanonicalUrl(`/news/${article.slug}`);
  const seoTitle = `${article.title} | ${t("newsSection.label")}`;
  const seoDescription = article.excerpt;
  const primaryImage = article.image || article.contentImages?.[0];
  const keywords = [article.category, article.author].filter(
    (value): value is string => Boolean(value?.trim?.()),
  );
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: t("common.home"), url: "/" },
    { name: t("common.news"), url: "/news" },
    { name: article.title, url: `/news/${article.slug}` },
  ]);
  const jsonLd = [
    createWebPageJsonLd({
      name: article.title,
      description: seoDescription,
      url: canonical,
      image: primaryImage,
    }),
    createNewsArticleJsonLd(article),
    breadcrumbs,
  ].filter(Boolean);

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        keywords={keywords}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          url: canonical,
          image: primaryImage,
          type: "article",
        }}
        jsonLd={jsonLd}
      />
      {/* Main Content */}
      <main className="section-padding">
        <div className="container mx-auto container-padding max-w-5xl">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">{t("common.home")}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/news">{t("newsSection.label")}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-muted-foreground">
                  {article.category}
                </span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Cover image + meta */}
          <Card className="overflow-hidden mb-8 border-card-border">
            <div className="relative h-64 md:h-80 lg:h-96">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10" />
              <div className="absolute top-4 left-4">
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-primary font-medium"
                >
                  <Tag className="h-3.5 w-3.5 mr-1" /> {article.category}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6 md:p-8">
              <h1 className="heading-lg">{article.title}</h1>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <User className="h-4 w-4 text-accent" />
                  {article.author}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-accent" />
                  {new Date(article.date).toLocaleDateString("id-ID")}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4 text-accent" />
                  {article.readTime}
                </span>
              </div>

              {/* Intro/Excerpt for better context */}
              {article.excerpt && (
                <p className="mt-4 text-base md:text-lg text-muted-foreground/90 leading-relaxed">
                  {article.excerpt}
                </p>
              )}

              {/* Share actions */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <div className="flex items-center text-sm text-muted-foreground mr-2">
                  <Share2 className="h-4 w-4 mr-1 text-accent" />{" "}
                  {t("newsSection.detail.shareLabel")}
                </div>
                {/* Native share on mobile */}
                <Button
                  variant="default"
                  size="sm"
                  className="md:hidden"
                  onClick={async () => {
                    try {
                      if (navigator.share) {
                        await navigator.share({
                          title: article.title,
                          text: article.excerpt,
                          url: window.location.href,
                        });
                        return;
                      }
                    } catch (_) {
                      // Swallow share errors (e.g., user cancels) intentionally
                    }
                  }}
                >
                  {t("newsSection.detail.shareButton")}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const url = window.location.origin + location.pathname;
                    navigator.clipboard.writeText(url).then(() =>
                      toast({
                        title: t("newsSection.detail.copyLinkTitle"),
                        description: t(
                          "newsSection.detail.copyLinkDescription",
                        ),
                      }),
                    );
                  }}
                >
                  <LinkIcon className="h-4 w-4 mr-2" />{" "}
                  {t("newsSection.detail.copyLinkButton")}
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="hover:text-white hover:bg-primary"
                >
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("newsSection.detail.linkedIn")}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="hover:text-white hover:bg-primary"
                >
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(article.title + " " + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("newsSection.detail.whatsapp")}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="hover:text-white hover:bg-primary"
                >
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("newsSection.detail.twitter")}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Reading progress */}
          <div className="sticky top-16 md:top-20 z-40 mb-4">
            <Progress value={readProgress} className="h-1" />
          </div>

          {/* Article body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <Card className="border-card-border">
                <CardContent className="p-6 md:p-8">
                  <div
                    ref={contentRef}
                    className="prose prose-lg dark:prose-invert max-w-none"
                  >
                    {(
                      article.content ?? [
                        t("newsSection.detail.contentMissing.description"),
                      ]
                    ).map((p, idx) => (
                      <p
                        key={idx}
                        className={
                          idx === 0
                            ? "first-letter:text-5xl first-letter:font-semibold first-letter:float-left first-letter:mr-2 first-letter:leading-[0.85]"
                            : undefined
                        }
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button
                      asChild
                      variant="ghost"
                      className="text-primary hover:text-accent p-0 h-auto"
                    >
                      <Link to="/news" className="inline-flex items-center">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        {t("newsSection.detail.backToNews")}
                      </Link>
                    </Button>
                  </div>

                  {/* Prev / Next navigation for better flow */}
                  {(prevArticle || nextArticle) && (
                    <div className="mt-10">
                      <Separator className="mb-6" />
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          {prevArticle && (
                            <Link
                              to={`/news/${prevArticle.slug}`}
                              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ChevronLeft className="h-4 w-4" />
                              <span className="truncate max-w-[18rem] group-hover:underline">
                                {prevArticle.title}
                              </span>
                            </Link>
                          )}
                        </div>
                        <div className="flex-1 text-right">
                          {nextArticle && (
                            <Link
                              to={`/news/${nextArticle.slug}`}
                              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <span className="truncate max-w-[18rem] group-hover:underline">
                                {nextArticle.title}
                              </span>
                              <ChevronRight className="h-4 w-4" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Side panel: About author and quick meta */}
            <div className="lg:col-span-4">
              <Card className="border-card-border sticky top-28">
                <CardContent className="p-6 space-y-4">
                  <h4 className="heading-sm">
                    {t("newsSection.detail.summaryTitle")}
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-accent" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>
                        {new Date(article.date).toLocaleDateString("id-ID")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t("newsSection.detail.categoryLabel")}
                    </p>
                    <Badge className="mt-2 bg-accent text-accent-foreground">
                      {article.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* More articles */}
          {others.length > 0 && (
            <div className="mt-12">
              <h3 className="heading-md mb-4">
                {t("newsSection.detail.moreArticles")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {others.map((it) => (
                  <Card
                    key={it.id}
                    className="group overflow-hidden border-card-border"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={it.image}
                        alt={it.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-primary"
                        >
                          {it.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <Link to={`/news/${it.slug}`} className="block">
                        <h4 className="heading-sm mb-2 group-hover:text-primary transition-colors">
                          {it.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {it.excerpt}
                        </p>
                      </Link>
                      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-accent" />
                          {new Date(it.date).toLocaleDateString("id-ID")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-accent" />
                          {it.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default NewsDetail;
