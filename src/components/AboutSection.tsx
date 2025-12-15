import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  ShieldCheck,
  Lightbulb,
  type LucideIcon,
  Truck,
  HardHat,
} from "lucide-react";
import { MotionSection } from "@/components/MotionSection";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { memo, useMemo } from "react";

type Achievement = {
  icon: LucideIcon;
  value: string;
  labelKey: string;
  descriptionKey: string;
};

type CompanyValue = {
  titleKey: string;
  descriptionKey: string;
  icon?: LucideIcon;
};

const AboutSectionComponent = () => {
  const { t } = useI18n();

  const achievements: Achievement[] = useMemo(
    () => [
      {
        icon: Calendar,
        value: "1990",
        labelKey: "aboutSection.achievements.established",
        descriptionKey: "aboutSection.achievements.establishedDesc",
      },
      {
        icon: Award,
        value: "35+",
        labelKey: "aboutSection.achievements.yearsExperience",
        descriptionKey: "aboutSection.achievements.yearsExperienceDesc",
      },
      {
        icon: CheckCircle,
        value: "111+",
        labelKey: "aboutSection.achievements.successfulProjects",
        descriptionKey: "aboutSection.achievements.successfulProjectsDesc",
      },
      {
        icon: Users,
        value: "100+",
        labelKey: "aboutSection.achievements.satisfiedClients",
        descriptionKey: "aboutSection.achievements.satisfiedClientsDesc",
      },
    ],
    [],
  );

  const values: CompanyValue[] = useMemo(
    () => [
      {
        titleKey: "aboutSection.values.integrity.title",
        descriptionKey: "aboutSection.values.integrity.description",
        icon: ShieldCheck,
      },
      {
        titleKey: "aboutSection.values.quality.title",
        descriptionKey: "aboutSection.values.quality.description",
        icon: Award,
      },
      {
        titleKey: "aboutSection.values.innovation.title",
        descriptionKey: "aboutSection.values.innovation.description",
        icon: Lightbulb,
      },
      {
        titleKey: "aboutSection.values.reliability.title",
        descriptionKey: "aboutSection.values.reliability.description",
        icon: Users,
      },
    ],
    [],
  );

  const sectionHeadingId = "about-heading";
  const valuesHeadingId = "values-heading";
  const achievementsHeadingId = "achievements-heading";

  return (
    <MotionSection
      id="about"
      aria-labelledby={sectionHeadingId}
      className="section-padding bg-background"
    >
      <div className="container mx-auto container-padding">
        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
           <div className="inline-block mb-4">
              <span className="text-accent font-medium text-lg tracking-wide uppercase">
                {t("aboutSection.label")}
              </span>
            </div>
          <h2
            id={sectionHeadingId}
            className="heading-md text-foreground mb-6"
          >
            {t("aboutSection.title")}
          </h2>
          <div className="space-y-4 text-body text-muted-foreground text-justify sm:text-center">
            <p>{t("aboutSection.description.paragraph1")}</p>
            <p>{t("aboutSection.description.paragraph2")}</p>
          </div>
        </div>

        {/* Split Cards for PT SAN and PT BBR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* PT SAN */}
          <Card className="flex flex-col h-full border-l-4 border-l-accent shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-primary">
                  {t("aboutSection.ptSan.title")}
                </CardTitle>
              </div>
              <CardDescription className="text-base">
                {t("aboutSection.ptSan.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-end pt-4">
               <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto self-start border-accent text-accent hover:bg-accent hover:text-white"
              >
                <Link to="/products">
                  {t("servicesSection.ptSan.action")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* PT BBR */}
          <Card className="flex flex-col h-full border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
             <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <HardHat className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-primary">
                  {t("aboutSection.ptBbr.title")}
                </CardTitle>
              </div>
              <CardDescription className="text-base">
                {t("aboutSection.ptBbr.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-end pt-4">
               <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto self-start border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link to="/services">
                  {t("servicesSection.ptBbr.action")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Content - Achievements */}
           <div className="space-y-8">
            <section aria-labelledby={achievementsHeadingId}>
              <h3 id={achievementsHeadingId} className="sr-only">
                Company achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {achievements.map((achievement, index) => (
                  <AchievementCard
                    key={achievement.labelKey}
                    achievement={achievement}
                    index={index}
                    t={t}
                  />
                ))}
              </div>
            </section>
          </div>

           {/* Right Content - Values */}
           <div className="space-y-8">
             <section aria-labelledby={valuesHeadingId}>
               <h3
                id={valuesHeadingId}
                className="heading-sm text-foreground mb-6 text-center lg:text-left"
              >
                {t("aboutSection.values.title")}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {values.map((value, index) => (
                  <ValueItem
                    key={value.titleKey}
                    value={value}
                    index={index}
                    t={t}
                  />
                ))}
              </div>
            </section>
           </div>
        </div>
        
         <div className="mt-12 text-center">
             <Button
                asChild
                size="lg"
                className="bg-gradient-accent button-glow text-sm sm:text-base"
              >
                <Link
                  to="/about-us/our-company"
                  aria-label="Learn more about PT SAN & PT BBR"
                >
                  {t("aboutSection.learnMore")}
                  <ArrowRight className="md:ml-2 h-5 w-5" />
                </Link>
              </Button>
         </div>

      </div>
    </MotionSection>
  );
};

const AboutSection = memo(AboutSectionComponent);
export default AboutSection;

// ----- Internal UI building blocks (kept local for scope) -----

const AchievementCard = memo(function AchievementCard({
  achievement,
  index,
  t,
}: {
  achievement: Achievement;
  index: number;
  t: (key: string) => string;
}) {
  const Icon = achievement.icon;
  return (
    <Card
      className="group card-hover bg-card border-card-border text-center transition-transform motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="mx-auto w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center motion-safe:group-hover:scale-110 motion-reduce:transform-none transition-transform duration-300">
            <Icon
              className="h-6 w-6 text-accent-foreground"
              aria-hidden="true"
            />
          </div>
          <dl>
            <div className="font-semibold text-foreground mb-1">
              <dt>{t(achievement.labelKey)}</dt>
            </div>
            <div className="text-3xl font-bold text-primary mb-2">
              <dd>{achievement.value}</dd>
            </div>
            <div className="text-small text-muted-foreground">
              <dd>{t(achievement.descriptionKey)}</dd>
            </div>
          </dl>
        </div>
      </CardContent>
    </Card>
  );
});

const ValueItem = memo(function ValueItem({
  value,
  index,
  t,
}: {
  value: CompanyValue;
  index: number;
  t: (key: string) => string;
}) {
  const Icon = value.icon;
  return (
    <Card
      className="w-full bg-card/60 backdrop-blur-[1px] border-card-border"
      style={{ animationDelay: `${index * 80}ms` }}
      aria-label={t(value.titleKey)}
    >
      <CardContent className="p-4 flex gap-4 items-start">
        {Icon ? (
          <div className="flex-none w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
        ) : null}
        <div className="flex-1">
          <h4 className="font-semibold text-primary mb-1">
            {t(value.titleKey)}
          </h4>
          <p className="text-small text-muted-foreground">
            {t(value.descriptionKey)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
});
