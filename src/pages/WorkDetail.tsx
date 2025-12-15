import { useEffect, useMemo, memo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getLocalizedProjects } from "@/lib/projects";
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
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  MapPin,
  User,
  CheckCircle2,
  Tag,
  ArrowLeft,
} from "lucide-react";
import {
  buildCanonicalUrl,
  createBreadcrumbJsonLd,
  createProjectJsonLd,
  createWebPageJsonLd,
} from "@/lib/seo";

const WorkDetail = memo(() => {
  const { slug } = useParams();
  const { setHero } = useHero();
  const { t, translations } = useI18n();

  const localizedProjects = useMemo(
    () => getLocalizedProjects(translations),
    [translations],
  );

  const project = useMemo(
    () => localizedProjects.find((p) => p.slug === slug),
    [localizedProjects, slug],
  );

  useEffect(() => {
    if (project) {
      setHero({
        variant: "simple",
        label: t("projectsSection.label"),
        title: project.title,
        description: `${project.location} • ${project.year}`,
      });
    }
  }, [project, setHero, t]);

  if (!project) {
    return <Navigate to="/works" replace />;
  }

  const canonical = buildCanonicalUrl(`/works/${project.slug}`);
  const seoTitle = `${project.title} | ${t("projectsSection.label")}`;
  const seoDescription = project.description;
  const keywords = [project.category, project.location, project.client].filter(
    (value): value is string => Boolean(value?.trim?.()),
  );
  const breadcrumbs = createBreadcrumbJsonLd([
    { name: t("common.home"), url: "/" },
    { name: t("common.works"), url: "/works" },
    { name: project.title, url: `/works/${project.slug}` },
  ]);

  return (
    <main className="container mx-auto container-padding section-padding">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        keywords={keywords}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          url: canonical,
          image: project.image,
          type: "article",
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: project.title,
            description: seoDescription,
            url: canonical,
            image: project.image,
          }),
          createProjectJsonLd(project),
          breadcrumbs,
        ].filter(Boolean)}
      />
      {/* Breadcrumbs */}
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">{t("common.home")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/works">{t("common.works")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cover image with meta overlay */}
          <Card className="overflow-hidden border-card-border">
            <div className="relative aspect-[16/9]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-white/90 text-primary font-medium"
                >
                  <Tag className="h-3.5 w-3.5 mr-1" /> {project.categoryLabel}
                </Badge>
                <Badge className="bg-accent text-accent-foreground">
                  {project.statusLabel}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h2 className="heading-sm mb-3">{t("common.projectOverview")}</h2>
              <p className="text-body text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
          </Card>

          {/* Related Images */}
          {project.relatedImages && project.relatedImages.length > 0 && (
            <Card className="border-card-border">
              <CardContent className="p-6">
                <h3 className="heading-sm mb-4">Related Images</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.relatedImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-xl border border-card-border bg-muted"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={src}
                          alt={`${project.title} ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 lg:space-y-6 lg:sticky lg:top-28 h-fit">
          <Card className="border-card-border">
            <CardContent className="p-6">
              <h3 className="heading-sm mb-4">{t("common.keyDetails")}</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  <span className="text-foreground font-medium">
                    {t("common.client")}:
                  </span>
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-foreground font-medium">
                    {t("common.location")}:
                  </span>
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span className="text-foreground font-medium">
                    {t("common.year")}:
                  </span>
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span className="text-foreground font-medium">
                    {t("common.status")}:
                  </span>
                  <span>{project.statusLabel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-accent" />
                  <span className="text-foreground font-medium">
                    {t("common.category")}:
                  </span>
                  <span>{project.categoryLabel}</span>
                </div>
              </div>
              <Separator className="my-6" />
              <Button
                asChild
                variant="ghost"
                className="text-primary hover:text-accent p-0 h-auto"
              >
                <Link to="/works" className="inline-flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t("common.goBack")}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
});

export default WorkDetail;
