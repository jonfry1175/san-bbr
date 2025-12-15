import type { LucideIcon } from "lucide-react";
import type { TranslationResources } from "@/lib/i18n";
import {
  Truck,
  Car,
  Construction,
  Hammer,
  Building,
  Wrench,
  Landmark,
  Layers,
  Square,
  Layers3,
  Waves,
  Footprints,
  Package,
  Box,
  Droplets,
  Waypoints,
} from "lucide-react";

export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  features: string[];
  image: string; // hero/thumbnail image
  icon: LucideIcon; // lucide icon component
};

// Local service images
// import earthworkImg from "@/assets/services/earthwork.jpg";
// import upgradeUnboundImg from "@/assets/services/upgrade-unbound.png";
// import ctrbImg from "@/assets/services/ctrb.png";
// import ctrsbImg from "@/assets/services/ctsrb.png";
// import chipsealImg from "@/assets/services/chipseal.jpg";
// import aspalHotmixImg from "@/assets/services/aspal-hotmix.png";
// import bridgeConstructionAndMaintenanceImg from "@/assets/services/bridge-construction-and-maintenance.jpg";
// import soilCementBaseImg from "@/assets/services/1.jpg";
// import irrigationSystemImg from "@/assets/services/irigation-system.jpg";
// import drainageSystemConstructionImg from "@/assets/services/drainage-system-construction.jpg";
// import pedestrianFacilityImg from "@/assets/services/pedestrian-facility.jpg";
// import roadMedianConstructionImg from "@/assets/services/road-median-construction.jpg";
// import hardeningConcreteImg from "@/assets/services/hardening-concrete.jpg";
// import roadOverlayMethodImg from "@/assets/services/road-overlay-method.jpg";
// import boxCulvertConstructionImg from "@/assets/services/box-culvert-construction.jpg";
// import uDitchConstructionImg from "@/assets/services/u-ditch-construction.jpg";
// import pengerasanBetonImg from "@/assets/services/pengerasan-beton.jpg";

const earthworkImg = "https://placehold.co/800x600/10b981/ffffff?text=Earthwork";
const upgradeUnboundImg = "https://placehold.co/800x600/10b981/ffffff?text=Upgrade+Unbound";
const ctrbImg = "https://placehold.co/800x600/10b981/ffffff?text=CTRB";
const ctrsbImg = "https://placehold.co/800x600/10b981/ffffff?text=CTRSB";
const chipsealImg = "https://placehold.co/800x600/10b981/ffffff?text=Chipseal";
const aspalHotmixImg = "https://placehold.co/800x600/10b981/ffffff?text=Aspal+Hotmix";
const bridgeConstructionAndMaintenanceImg = "https://placehold.co/800x600/10b981/ffffff?text=Bridge+Construction";
const soilCementBaseImg = "https://placehold.co/800x600/10b981/ffffff?text=Soil+Cement+Base";
const irrigationSystemImg = "https://placehold.co/800x600/10b981/ffffff?text=Irrigation+System";
const drainageSystemConstructionImg = "https://placehold.co/800x600/10b981/ffffff?text=Drainage+System";
const pedestrianFacilityImg = "https://placehold.co/800x600/10b981/ffffff?text=Pedestrian+Facility";
const roadMedianConstructionImg = "https://placehold.co/800x600/10b981/ffffff?text=Road+Median";
const hardeningConcreteImg = "https://placehold.co/800x600/10b981/ffffff?text=Hardening+Concrete";
const roadOverlayMethodImg = "https://placehold.co/800x600/10b981/ffffff?text=Road+Overlay";
const boxCulvertConstructionImg = "https://placehold.co/800x600/10b981/ffffff?text=Box+Culvert";
const uDitchConstructionImg = "https://placehold.co/800x600/10b981/ffffff?text=U-Ditch";
const pengerasanBetonImg = "https://placehold.co/800x600/10b981/ffffff?text=Concrete+Pavement";

export const services: Service[] = [
  {
    id: "eatwork",
    slug: "eatwork",
    title: "Earthwork",
    description:
      "Pekerjaan tanah menyeluruh meliputi site clearing, cut & fill, perataan (grading), dan pemadatan untuk pondasi konstruksi yang kokoh.",
    features: [
      "Site clearing & stripping",
      "Cut, fill & grading",
      "Compaction & drainage",
    ],
    image: earthworkImg,
    icon: Construction,
  },
  {
    id: "upgrade-unbound",
    slug: "upgrade-unbound",
    title: "Upgrade Unbound",
    description:
      "Peningkatan lapisan pondasi agregat (unbound) melalui perbaikan material, geometri, serta pemadatan untuk meningkatkan daya dukung jalan.",
    features: [
      "Reprofiling & reshaping",
      "Material improvement",
      "Compaction quality control",
    ],
    image: upgradeUnboundImg,
    icon: Wrench,
  },
  {
    id: "ctrb",
    slug: "ctrb",
    title: "Cement Treated Recycling Base (CTRB)",
    description:
      "Stabilisasi material eksisting dengan semen/chemical untuk membentuk lapis pondasi daur ulang yang lebih kuat dan awet.",
    features: [
      "In-place recycling",
      "Semen/chemical stabilization",
      "Faster reopening",
    ],
    image: ctrbImg,
    icon: Building,
  },
  {
    id: "ctrsb",
    slug: "ctrsb",
    title: "Cement Treated Recycling Sub Base (CTRSB)",
    description:
      "Perkuatan lapis pondasi bawah melalui stabilisasi semen untuk meningkatkan modulus dan memperpanjang umur layan perkerasan.",
    features: [
      "Subbase improvement",
      "Strength & stiffness gain",
      "Optimized mix design",
    ],
    image: ctrsbImg,
    icon: Hammer,
  },
  {
    id: "chipseal",
    slug: "chipseal",
    title: "Chipseal",
    description:
      "Pelapisan permukaan jalan dengan agregat dan binder untuk proteksi, skid resistance, dan ketahanan terhadap cuaca.",
    features: [
      "Single/Double chipseal",
      "Binder modifikasi",
      "Quick turnaround",
    ],
    image: chipsealImg,
    icon: Car,
  },
  {
    id: "aspal-hotmix-modifikasi-coldmix",
    slug: "aspal-hotmix-modifikasi-coldmix",
    title: "Aspal Hotmix, Modifikasi, Cold Mix",
    description:
      "Layanan pengerasan aspal lengkap: hotmix untuk kinerja tinggi, aspal modifikasi untuk daya tahan ekstra, serta cold mix untuk perbaikan cepat.",
    features: [
      "HMA & SMA",
      "Aspal modifikasi (PG/Polymer)",
      "Cold mix patching",
    ],
    image: aspalHotmixImg,
    icon: Truck,
  },
  {
    id: "bridge-construction-maintenance",
    slug: "bridge-construction-maintenance",
    title: "Bridge Construction & Maintenance",
    description:
      "Konstruksi jembatan baru serta pemeliharaan menyeluruh untuk memastikan keselamatan, kelayakan struktur, dan umur layan jangka panjang.",
    features: [
      "Superstructure & substructure works",
      "Structural inspection & rehabilitation",
      "Traffic management & safety measures",
    ],
    image: bridgeConstructionAndMaintenanceImg,
    icon: Landmark,
  },
  {
    id: "soil-cement-base",
    slug: "soil-cement-base",
    title: "Soil-cement Base",
    description:
      "Perkuatan pondasi tanah dengan campuran tanah dan semen untuk meningkatkan kapasitas dukung dan ketahanan deformasi perkerasan.",
    features: [
      "In-situ mixing & stabilization",
      "Moisture & density control",
      "Curing & quality assurance",
    ],
    image: soilCementBaseImg,
    icon: Layers,
  },
  {
    id: "rigid-pavement",
    slug: "rigid-pavement",
    title: "Rigid Pavement",
    description:
      "Konstruksi pengerasan beton bertulang maupun tanpa tulangan untuk daya tahan beban lalu lintas tinggi dan perawatan minimal.",
    features: [
      "Design & mix optimization",
      "Slipform paving & panel placement",
      "Joint sealing & curing",
    ],
    image: pengerasanBetonImg,
    icon: Square,
  },
  {
    id: "overlay-road-method",
    slug: "overlay-road-method",
    title: "Overlay Road Method",
    description:
      "Metode overlay pengerasan jalan untuk memulihkan kinerja permukaan jalan melalui pelapisan ulang aspal atau beton sesuai kebutuhan struktur.",
    features: [
      "Condition survey & design",
      "Surface preparation & milling",
      "Overlay placement & finishing",
    ],
    image: roadOverlayMethodImg,
    icon: Layers3,
  },
  {
    id: "irrigation-system",
    slug: "irrigation-system",
    title: "Irrigation System",
    description:
      "Pembangunan dan rehabilitasi jaringan irigasi untuk distribusi air yang efisien pada lahan pertanian dan infrastruktur pendukung.",
    features: [
      "Canal & intake construction",
      "Flow control structures",
      "Operation & maintenance planning",
    ],
    image: irrigationSystemImg,
    icon: Waves,
  },
  {
    id: "pedestrian-construction-needs",
    slug: "pedestrian-construction-needs",
    title: "Pedestrian Construction Needs",
    description:
      "Penyediaan fasilitas pedestrian komprehensif seperti trotoar, ramp akses, dan elemen keselamatan untuk pengguna jalan.",
    features: [
      "Sidewalk & ramp execution",
      "Accessibility & safety design",
      "Street furniture integration",
    ],
    image: pedestrianFacilityImg,
    icon: Footprints,
  },
  {
    id: "u-ditch-construction",
    slug: "u-ditch-construction",
    title: "U-Ditch Construction",
    description:
      "Instalasi saluran U-ditch pracetak untuk sistem drainase terbuka yang rapi, cepat, dan mudah dipelihara.",
    features: [
      "Precast fabrication coordination",
      "Excavation & bedding preparation",
      "Joint sealing & finishing",
    ],
    image: uDitchConstructionImg,
    icon: Package,
  },
  {
    id: "box-culvert-construction",
    slug: "box-culvert-construction",
    title: "Box Culvert Construction",
    description:
      "Pembangunan box culvert pracetak maupun cast-in-place untuk kebutuhan penyaluran air bawah tanah dan penyeberangan jalan.",
    features: [
      "Hydraulic design & sizing",
      "Foundation & bedding works",
      "Segment installation & grouting",
    ],
    image: boxCulvertConstructionImg,
    icon: Box,
  },
  {
    id: "drain-system-constructions",
    slug: "drain-system-constructions",
    title: "Drain System Constructions",
    description:
      "Perencanaan dan pembangunan sistem drainase permukaan dan bawah tanah untuk mengendalikan aliran air dan mencegah genangan.",
    features: [
      "Survey & hydraulic assessment",
      "Closed & open drain execution",
      "Maintenance access solutions",
    ],
    image: drainageSystemConstructionImg,
    icon: Droplets,
  },
  {
    id: "road-median-construction",
    slug: "road-median-construction",
    title: "Road Median Construction",
    description:
      "Konstruksi median jalan lengkap dengan perlengkapan keselamatan, drainase, dan lanskap untuk memisahkan arus lalu lintas.",
    features: [
      "Geometric design & surveying",
      "Barrier & curb installation",
      "Lighting & landscaping integration",
    ],
    image: roadMedianConstructionImg,
    icon: Waypoints,
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

// Localized helpers
export const getLocalizedServices = (translations: TranslationResources) => {
  return services.map((svc) => ({
    ...svc,
    title: translations.services?.[svc.slug]?.title?.trim() || svc.title,
    description:
      translations.services?.[svc.slug]?.description?.trim() || svc.description,
    features: translations.services?.[svc.slug]?.features?.length
      ? translations.services[svc.slug].features
      : svc.features,
  }));
};

export const getLocalizedServiceBySlug = (
  slug: string,
  translations: TranslationResources,
) => {
  const base = getServiceBySlug(slug);
  if (!base) return undefined;
  const tSvc = translations.services?.[slug];
  if (!tSvc) return base;
  return {
    ...base,
    title: tSvc.title?.trim() || base.title,
    description: tSvc.description?.trim() || base.description,
    features: tSvc.features?.length ? tSvc.features : base.features,
  } as Service;
};
