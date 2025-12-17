import { MotionSection } from "@/components/MotionSection";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  BadgeCheck,
  Lightbulb,
  ShieldCheck,
  Users,
  HeartHandshake,
  Cog,
  Truck,
  HardHat,
} from "lucide-react";
// import logo from "@/assets/logo-san-full.jpeg";
const logo = "https://placehold.co/500x500/e2e8f0/1e293b?text=Company+Logo";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import React, { memo } from "react";

const CompanyStrategySectionComponent = () => {
  const { t } = useI18n();

  // Words to highlight (both English and Indonesian). Only these exact words will be bolded.
  const highlightTargets = [
    // English
    "Synergy",
    "Integrity",
    "Protection",
    "Trust",
    "Dedication",
    "Excellence",
    // Indonesian
    "Sinergi",
    "Integritas",
    "Perlindungan",
    "Amanah",
    "Dedikasi",
    "Unggul",
  ];

  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const renderWithHighlights = (text: string | undefined) => {
    if (!text) return text;
    const pattern = new RegExp(
      `\\b(${highlightTargets.map(escapeRegExp).join("|")})\\b`,
      "g"
    );
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    // eslint-disable-next-line no-cond-assign
    while ((match = pattern.exec(text)) !== null) {
      const idx = match.index;
      if (idx > lastIndex) parts.push(text.slice(lastIndex, idx));
      parts.push(
        <strong key={`${idx}-${match[0]}`} className="font-semibold">
          {match[0]}
        </strong>
      );
      lastIndex = idx + match[0].length;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts.length > 0 ? parts : text;
  };

  const sipadu = [
    {
      icon: Users,
      titleKey: "companyStrategy.sipadu.sinergi.title",
      descKey: "companyStrategy.sipadu.sinergi.description",
    },
    {
      icon: ShieldCheck,
      titleKey: "companyStrategy.sipadu.integritas.title",
      descKey: "companyStrategy.sipadu.integritas.description",
    },
    {
      icon: BadgeCheck,
      titleKey: "companyStrategy.sipadu.perlindungan.title",
      descKey: "companyStrategy.sipadu.perlindungan.description",
    },
    {
      icon: HeartHandshake,
      titleKey: "companyStrategy.sipadu.amanah.title",
      descKey: "companyStrategy.sipadu.amanah.description",
    },
    {
      icon: Lightbulb,
      titleKey: "companyStrategy.sipadu.dedikasi.title",
      descKey: "companyStrategy.sipadu.dedikasi.description",
    },
    {
      icon: Cog,
      titleKey: "companyStrategy.sipadu.unggul.title",
      descKey: "companyStrategy.sipadu.unggul.description",
    },
  ];

  // Data for the "Makna Perusahaan" section with color swatches
  const logoMeaning = [
    {
      titleKey: "companyStrategy.logoMeaning.items.redColor.title",
      descKey: "companyStrategy.logoMeaning.items.redColor.description",
      swatch: "bg-red-500 ring-red-500/30",
    },
    {
      titleKey: "companyStrategy.logoMeaning.items.redCube.title",
      descKey: "companyStrategy.logoMeaning.items.redCube.description",
      swatch: "bg-red-500 ring-red-500/30",
    },
    {
      titleKey: "companyStrategy.logoMeaning.items.whiteCenter.title",
      descKey: "companyStrategy.logoMeaning.items.whiteCenter.description",
      swatch: "bg-white ring-slate-300",
    },
    {
      titleKey: "companyStrategy.logoMeaning.items.blackLines.title",
      descKey: "companyStrategy.logoMeaning.items.blackLines.description",
      swatch: "bg-black ring-black/40",
    },
  ] as const;

  return (
    <section
      id="company-strategy"
      className="bg-background pt-8 pb-8 md:pt-12 md:pb-12 lg:pt-16 lg:pb-16"
    >
      <div className="container mx-auto container-padding">
        {/* Heading */}
        <div className="mb-8 md:mb-10 text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-card-border bg-background px-3 py-1 text-xs font-medium tracking-wide text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("companyStrategy.label")}
          </span>
          <h2 className="heading-lg mt-2">{t("companyStrategy.title")}</h2>
          <p className="text-body text-muted-foreground mt-1.5 max-w-3xl mx-auto">
            {renderWithHighlights(t("companyStrategy.description"))}
          </p>
        </div>

        {/* Split Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* PT SINERGY AGTER NUSANTARA */}
          <Card className="border-card-border shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Truck className="w-5 h-5 text-accent" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {t("companyStrategy.ptSan.title")}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-muted-foreground">
                {t("companyStrategy.ptSan.description")}
              </CardDescription>
            </CardContent>
          </Card>

          {/* PT BUMI BLAMBANGAN RESOURCES */}
          <Card className="border-card-border shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <HardHat className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {t("companyStrategy.ptBbr.title")}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-muted-foreground">
                {t("companyStrategy.ptBbr.description")}
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* SIPADU grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16">
          {sipadu.map((item) => (
            <Card
              key={item.titleKey}
              className="group border-card-border hover:shadow-lg transition-shadow h-full"
            >
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {renderWithHighlights(t(item.descKey))}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logo meaning (Makna Perusahaan) */}
        <div className="mt-8 md:mt-12 lg:mt-16 relative">
          {/* Subtle blueprint background for visual depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-10"
          >
            <img
              src="/placeholder.svg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* Equal-height wrapper */}
          <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-12">
            {/* Logo */}
            <div className="flex-1 flex items-center justify-center lg:justify-start animate-fade-up">
              <div className="w-full max-w-md md:max-w-lg lg:max-w-[38rem] xl:max-w-[44rem] aspect-square bg-white">
                <img
                  src={logo}
                  alt="Logo Perusahaan PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Meaning copy with styled list */}
            <div className="flex-1 text-left flex flex-col justify-center py-4 md:py-6 lg:py-8 animate-fade-up">
              <span className="text-accent font-medium tracking-wide uppercase text-sm">
                {t("companyStrategy.logoMeaning.title")}
              </span>
              <h2 className="heading-lg md:leading-tight mt-2 mb-6">
                {t("companyStrategy.logoMeaning.companyName")}
              </h2>

              <ul className="space-y-3">
                {logoMeaning.map((item) => (
                  <li
                    key={item.titleKey}
                    className="flex items-start gap-3 animate-fade-up"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "mt-2 h-2 w-2 shrink-0 rounded-full ring-2",
                        item.swatch
                      )}
                    />
                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                      <span className="font-semibold text-gray-900">
                        {t(item.titleKey)} :
                      </span>
                      <span className="ml-1">
                        {renderWithHighlights(t(item.descKey))}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CompanyStrategySection = memo(CompanyStrategySectionComponent);
export default CompanyStrategySection;
