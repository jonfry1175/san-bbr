import { Card, CardContent } from "@/components/ui/card";
import { MotionSection } from "@/components/MotionSection";
import { Check, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { memo } from "react";

const VisionMissionSection = memo(() => {
  const { t, translations } = useI18n();

  return (
    <MotionSection id="vision-mission" className="section-padding relative">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/0" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[420px] w-[80%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto container-padding">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-card-border bg-background px-3 py-1 text-xs font-medium tracking-wide text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("visionMission.label")}
          </span>
          <h2 className="heading-lg mt-3">{t("visionMission.title")}</h2>
          <p className="text-body text-muted-foreground mt-2 italic">
            {t("visionMission.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Vision */}
          <Card className="group bg-background/80 backdrop-blur border-card-border transition-shadow hover:shadow-lg ring-1 ring-transparent hover:ring-primary/10">
            <CardContent className="p-6 md:p-8 h-full">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-sm bg-accent text-accent-foreground shadow-sm">
                  <Target className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-sm">
                    {t("visionMission.vision.title")}
                  </h3>
                  <p className="text-body text-muted-foreground mt-2 text-justify ">
                    {t("visionMission.vision.content")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="group bg-primary/5 border-card-border transition-shadow hover:shadow-lg ring-1 ring-transparent hover:ring-primary/10">
            <CardContent className="p-6 md:p-8 h-full">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                  <Rocket className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-sm">
                    {t("visionMission.mission.title")}
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {(translations.visionMission.mission.points || []).map(
                      (point, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm">
                            <Check className="h-4 w-4" />
                          </span>
                          <span className="text-body text-muted-foreground">
                            {point}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MotionSection>
  );
});

export default VisionMissionSection;
