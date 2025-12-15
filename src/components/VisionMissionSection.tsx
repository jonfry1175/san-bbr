import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionSection } from "@/components/MotionSection";
import { Check, Target, Rocket, Truck, HardHat } from "lucide-react";
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

        {/* Vision & Mission Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* PT SAN */}
          <div className="space-y-6">
             <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">PT SAN</h3>
             </div>
             
             {/* Vision */}
             <Card className="group bg-background/80 backdrop-blur border-card-border hover:border-accent/50 transition-all h-auto">
                <CardHeader>
                   <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="w-5 h-5 text-accent" />
                      {t("visionMission.ptSan.vision.title")}
                   </CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-muted-foreground text-sm sm:text-base">
                      {t("visionMission.ptSan.vision.content")}
                   </p>
                </CardContent>
             </Card>

             {/* Mission */}
             <Card className="group bg-background/80 backdrop-blur border-card-border hover:border-accent/50 transition-all h-auto">
                <CardHeader>
                   <CardTitle className="text-lg flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-accent" />
                      {t("visionMission.ptSan.mission.title")}
                   </CardTitle>
                </CardHeader>
                <CardContent>
                   <ul className="space-y-2">
                      {(translations.visionMission.ptSan.mission.points || []).map((point, i) => (
                         <li key={i} className="flex gap-3 text-sm sm:text-base text-muted-foreground">
                            <Check className="w-4 h-4 text-accent mt-1 shrink-0" />
                            <span>{point}</span>
                         </li>
                      ))}
                   </ul>
                </CardContent>
             </Card>
          </div>

          {/* PT BBR */}
          <div className="space-y-6">
             <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <HardHat className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">PT BBR</h3>
             </div>
             
             {/* Vision */}
             <Card className="group bg-background/80 backdrop-blur border-card-border hover:border-primary/50 transition-all h-auto">
                <CardHeader>
                   <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      {t("visionMission.ptBbr.vision.title")}
                   </CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-muted-foreground text-sm sm:text-base">
                      {t("visionMission.ptBbr.vision.content")}
                   </p>
                </CardContent>
             </Card>

             {/* Mission */}
             <Card className="group bg-background/80 backdrop-blur border-card-border hover:border-primary/50 transition-all h-auto">
                <CardHeader>
                   <CardTitle className="text-lg flex items-center gap-2">
                      <Rocket className="w-5 h-5 text-primary" />
                      {t("visionMission.ptBbr.mission.title")}
                   </CardTitle>
                </CardHeader>
                <CardContent>
                   <ul className="space-y-2">
                      {(translations.visionMission.ptBbr.mission.points || []).map((point, i) => (
                         <li key={i} className="flex gap-3 text-sm sm:text-base text-muted-foreground">
                            <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <span>{point}</span>
                         </li>
                      ))}
                   </ul>
                </CardContent>
             </Card>
          </div>

        </div>
      </div>
    </MotionSection>
  );
});

export default VisionMissionSection;
