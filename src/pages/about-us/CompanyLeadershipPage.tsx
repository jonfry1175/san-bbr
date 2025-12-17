import { useEffect, memo } from "react";
import CompanyLeadership from "@/components/CompanyLeadership";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import SEO from "@/components/SEO";

const CompanyLeadershipPage = memo(() => {
  const { setHero } = useHero();
  const { t } = useI18n();

  useEffect(() => {
    setHero({
      variant: "simple",
      label: t("aboutPage.companyLeadership"),
      title: t("aboutPage.companyLeadership"),
      description: t("aboutPage.leadershipHeroDesc"),
    });
  }, [setHero, t]);

  return (
    <>
      <SEO
        title={t("aboutPage.companyLeadership")}
        description={t("aboutPage.leadershipHeroDesc")}
      />
      <CompanyLeadership />
    </>
  );
});

export default CompanyLeadershipPage;

