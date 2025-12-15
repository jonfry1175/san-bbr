import { memo, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/MotionSection";
import { motion, useReducedMotion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useI18n } from "@/lib/i18n";
import { useAutoScroller } from "@/hooks/use-auto-scroller";

// Referenced structure from metasolusidigital-web/clients.tsx and adapted here
// to use local assets and Vite image imports.
import kementerianPU from "@/assets/clients/kementerian-pekerjaan-umum.png";
import adaro from "@/assets/clients/adaro-energy.png";
import borneoIndobara from "@/assets/clients/borneo-indobara.png";
import goldenEnergyMines from "@/assets/clients/golden-energy-mines.png";
import dpuprLogo from "@/assets/dpupr1.png";

type Client = {
  id: number;
  name: string;
  image: string;
  alt?: string;
  description?: string;
  link?: string;
};

const clients: Client[] = [
  {
    id: 1,
    name: "Kementerian Pekerjaan Umum",
    image: kementerianPU,
    description:
      "Kemitraan pada preservasi jalan nasional dan jaringan irigasi strategis yang ditangani Kementerian PUPR.",
  },
  {
    id: 2,
    name: "PT. Adaro Energy Indonesia, Tbk",
    image: adaro,
    description:
      "Kolaborasi peningkatan infrastuktur penunjang jalan tambang di PT. Adaro Energy Tbk. Termasuk jalur logistik dan operasional di PT. Adaro Energy site Tanjung Tabalong, Kalimantan Selatan",
  },
  {
    id: 3,
    name: "PT. Borneo Indobara (BIB)",
    image: borneoIndobara,
    description:
      "Dukungan pembangunan dan pemeliharaan jalan operasional tambang beserta fasilitas penimbunan batu bara pada PT. Borneo Indobara di site Tanah Bumbu, Kalimantan Selatan.",
  },
  {
    id: 4,
    name: "PT. Golden Energy Mines, Tbk",
    image: goldenEnergyMines,
    description:
      "Pengaspalan dan penguatan hardstand rantai pasok tambang Golden Energy Mines di berbagai site Kalimantan.",
  },
];

const ClientsScroller = memo(() => {
  const prefersReduced = useReducedMotion();
  const [selected, setSelected] = useState<Client | null>(null);
  const [open, setOpen] = useState(false);

  const sliderContent = useMemo(() => [...clients, ...clients], []);

  const { containerRef, controls, sliderWidth, setIsHovering } =
    useAutoScroller({
      totalItems: clients.length,
      itemWidth: 260,
      gap: 16,
      durationMultiplier: 5,
    });

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const handleOpen = (c: Client) => {
    setSelected(c);
    setOpen(true);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={(v) => setOpen(v)}>
        <DialogContent className="sm:max-w-xl">
          {selected && (
            <div className="space-y-4">
              <DialogHeader>
                <DialogTitle>{selected.name}</DialogTitle>
                {selected.description && (
                  <DialogDescription>{selected.description}</DialogDescription>
                )}
              </DialogHeader>
              <div className="rounded-lg border bg-card p-4 grid grid-cols-1 gap-4">
                <div className="flex flex-col items-center justify-center gap-2">
                  <img
                    src={selected.image}
                    alt={selected.alt ?? selected.name}
                    className="h-20 object-contain mt-10"
                    width="200"
                    height="80"
                  />

                  {/* DPU PR logo for id 1 */}
                  {selected.id === 1 && (
                    <img
                      src={dpuprLogo}
                      alt="Dinas PUPR Kalimantan Tengah"
                      className="w-[380px] h-auto object-contain"
                      width="380"
                      height="100"
                    />
                  )}
                </div>
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline text-sm justify-self-center"
                  >
                    Kunjungi situs
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="relative">
        <div
          ref={containerRef}
          className="mx-auto max-w-6xl overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            className="flex gap-4 py-2"
            drag="x"
            dragConstraints={{ left: -(sliderWidth + 16), right: 0 }}
            dragElastic={0.08}
            animate={controls}
            initial={{ x: 0 }}
          >
            {sliderContent.map((c, idx) => (
              <motion.div
                key={`${c.id}-${idx}`}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: prefersReduced ? 0 : -4,
                  scale: prefersReduced ? 1 : 1.02,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex-shrink-0 w-[240px] sm:w-[260px]"
                role="listitem"
              >
                <button
                  type="button"
                  onClick={() => handleOpen(c)}
                  className="w-full text-left"
                >
                  <Card className="px-6 py-4 bg-white/90 border-card-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-center h-12">
                      <img
                        src={c.image}
                        alt={c.alt ?? c.name}
                        className="max-h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                      {c.name}
                    </p>
                  </Card>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background-secondary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background-secondary to-transparent" />
      </div>
    </>
  );
});

const ClientsSection = memo(() => {
  const { t } = useI18n();

  return (
    <MotionSection
      id="clients"
      className="section-padding bg-background-secondary"
    >
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-up">
          <span className="text-accent font-medium uppercase tracking-wide">
            {t("clientsSection.label")}
          </span>
          <h2 className="heading-md mt-2 md:whitespace-nowrap">
            {t("clientsSection.title")}
          </h2>
          <p className="text-large text-muted-foreground mt-3">
            {t("clientsSection.description")}
          </p>
        </div>

        {/* Centered, animated scroller of clients */}
        <div className="mx-auto max-w-6xl">
          <ClientsScroller />
        </div>
      </div>
    </MotionSection>
  );
});

export default ClientsSection;
