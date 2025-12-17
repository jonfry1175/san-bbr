import { useEffect, memo } from "react";
import CompanyIntroduction from "@/components/CompanyIntroduction";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import SEO from "@/components/SEO";

const CompanyIntroductionPage = memo(() => {
  const { setHero } = useHero();
  const { t } = useI18n();

  useEffect(() => {
    setHero({
      variant: "simple",
      label: t("aboutPage.badge"),
      title: t("aboutPage.companyIntroduction"),
      description: t("aboutPage.description"),
    });
  }, [setHero, t]);

  return (
    <>
      <SEO
        title={t("aboutPage.companyIntroduction")}
        description={t("aboutPage.description")}
      />
      <CompanyIntroduction />
    </>
  );
});

export default CompanyIntroductionPage;

