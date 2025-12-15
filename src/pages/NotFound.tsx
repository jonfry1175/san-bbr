import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home, Newspaper, Phone } from "lucide-react";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import SEO from "@/components/SEO";
import {
  buildCanonicalUrl,
  createBreadcrumbJsonLd,
  createWebPageJsonLd,
  siteMetadata,
} from "@/lib/seo";

const NotFound = () => {
  const location = useLocation();
  const { setHero } = useHero();
  const navigate = useNavigate();
  const { t } = useI18n();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
    setHero({
      variant: "simple",
      label: "404",
      title: t("common.pageNotFound"),
      description: t("common.pageNotFoundDescription"),
    });
  }, [location.pathname, setHero, t]);

  const pageTitle = `${t("common.pageNotFound")} | ${siteMetadata.name}`;
  const pageDescription = t("common.pageNotFoundDescription");
  const canonical = buildCanonicalUrl(location.pathname);
  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        { name: t("common.pageNotFound"), url: location.pathname },
      ]),
    [location.pathname, t],
  );

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        keywords={["404", "halaman tidak ditemukan", siteMetadata.name]}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          url: canonical,
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: pageTitle,
            description: pageDescription,
            url: canonical,
          }),
          breadcrumbs,
        ].filter(Boolean)}
      />
      <section className="section-padding bg-background-secondary">
        <div className="container mx-auto container-padding max-w-3xl">
          <Card className="overflow-hidden border-card-border">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent/20 text-accent font-semibold">
                  404
                </div>
                <h1 className="heading-md">{t("common.pageNotFound")}</h1>
                <p className="text-muted-foreground">
                  {t("common.pageNotFoundDescription")}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button asChild className="bg-accent text-accent-foreground">
                    <Link to="/">
                      <Home className="h-4 w-4 mr-2" />
                      {t("common.backToHome")}
                    </Link>
                  </Button>
                  <Button
                    onClick={() => navigate(-1)}
                    variant="outline"
                    className="border-card-border"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t("common.goBack")}
                  </Button>
                  <Button asChild variant="ghost">
                    <Link to="/news">
                      <Newspaper className="h-4 w-4 mr-2" />
                      {t("common.viewNews")}
                    </Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link to="/contact">
                      <Phone className="h-4 w-4 mr-2" />
                      {t("common.contactUs")}
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default NotFound;
