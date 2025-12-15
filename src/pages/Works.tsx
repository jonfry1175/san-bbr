import { useEffect, useMemo, useState, memo } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { getLocalizedProjects, categories } from "@/lib/projects";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { Calendar, MapPin, User } from "lucide-react";

const meta = resolveMeta(getStaticPageMeta("works"));

const Works = memo(() => {
  const { setHero } = useHero();
  const { t, translations } = useI18n();

  type CategoryUnion = "all" | (typeof categories)[number];
  const [active, setActive] = useState<CategoryUnion>("all");
  const onTabChange = (value: string) => setActive(value as CategoryUnion);

  const localizedProjects = useMemo(
    () => getLocalizedProjects(translations),
    [translations],
  );

  const filtered = useMemo(() => {
    if (active === "all") return localizedProjects;
    return localizedProjects.filter((p) => p.category === active);
  }, [active, localizedProjects]);

  useEffect(() => {
    setHero({
      variant: "simple",
      label: t("projectsSection.label"),
      title: t("projectsSection.title"),
      description: t("projectsSection.description"),
    });
  }, [setHero, t]);

  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        { name: t("common.works"), url: meta.path },
      ]),
    [t],
  );

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        keywords={meta.keywords}
        openGraph={{
          title: meta.title,
          description: meta.description,
          url: meta.canonical,
          image: meta.image,
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: meta.title,
            description: meta.description,
            url: meta.canonical,
            image: meta.image,
          }),
          breadcrumbs,
        ].filter(Boolean)}
      />
      {/* Portfolio */}
      <main className="container mx-auto container-padding section-padding">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="heading-md">{t("projectsSection.title")}</h2>
          <Tabs
            value={active}
            onValueChange={onTabChange}
            className="w-full sm:w-auto"
          >
            <div className="w-full overflow-x-auto sm:overflow-visible">
              <TabsList className="min-w-max gap-1 sm:min-w-0 sm:gap-0">
                <TabsTrigger value="all">{t("common.all")}</TabsTrigger>
                {categories.map((categoryKey) => (
                  <TabsTrigger key={categoryKey} value={categoryKey}>
                    {translations.projectsSection.categories?.[categoryKey] ??
                      categoryKey}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, idx) => (
            <Card
              key={project.id}
              className="group card-hover overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-primary font-medium"
                  >
                    {project.categoryLabel}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="space-y-3 flex-grow">
                  <Link
                    to={`/works/${project.slug}`}
                    className="block group/title"
                  >
                    <h3 className="heading-sm group-hover/title:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-body text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>
                {/* Project value removed as requested */}
                <div className="mt-1 flex-shrink-0">
                  <div className="mt-4 pb-5 text-small">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <User className="h-4 w-4 text-accent" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <Button asChild variant="secondary" className="w-full">
                    <Link to={`/works/${project.slug}`}>
                      {t("common.viewDetails")}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-background-secondary rounded-2xl p-8 md:p-10 border border-card-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="heading-md">{t("footer.ctaLookingForPartner")}</h3>
              <p className="text-body text-muted-foreground mt-2">
                {t("footer.ctaLetsBuild")}
              </p>
            </div>
            <div className="flex md:justify-end">
              <Button
                asChild
                size="lg"
                className="bg-gradient-accent button-glow px-8"
              >
                <a href="/#contact">{t("common.contactUs")}</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
});

export default Works;
