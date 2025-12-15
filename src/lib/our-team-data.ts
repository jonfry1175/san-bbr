import {
  Compass,
  Coins,
  User,
  HardHat,
  Megaphone,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { CERTIFICATE_COUNT } from "@/lib/certifications";

export const principles = [
  {
    title: "Kepemimpinan Lapangan",
    description:
      "Setiap pemimpin aktif mendampingi tim proyek untuk memastikan standar keselamatan terpenuhi di lapangan.",
  },
  {
    title: "Kolaborasi Multidisiplin",
    description:
      "Tim kami terdiri dari ahli sipil, manajemen proyek, dan keuangan yang bergerak sebagai satu kesatuan.",
  },
  {
    title: "Keunggulan Berkelanjutan",
    description:
      "Investasi berkelanjutan pada pelatihan dan teknologi memastikan hasil proyek tetap kompetitif.",
  },
];

export type TeamStat = {
  label: string;
  value: string;
  cta?: {
    href: string;
    label: string;
  };
};

export const stats: TeamStat[] = [
  {
    label: "Profesional Bersertifikat",
    value: `${CERTIFICATE_COUNT}`,
    cta: {
      href: "/about-us/certifications",
      label: "Lihat selengkapnya ->",
    },
  },
  { label: "Jam Pelatihan Tahunan", value: "1.200" },
];

export const leadershipHierarchy = [
  {
    title: "Pemegang Saham",
    description:
      "Menetapkan visi jangka panjang serta prinsip tata kelola yang menjadi acuan seluruh organisasi.",
    icon: User,
  },
  {
    title: "Komisaris",
    description:
      "Melakukan pengawasan strategis dan memastikan prinsip good corporate governance diterapkan konsisten.",
    icon: ShieldCheck,
  },
  {
    title: "Direktur Utama",
    description:
      "Mengkoordinasikan pelaksanaan proyek, menggerakkan kolaborasi antar divisi, dan menjaga kinerja operasional.",
    icon: Compass,
  },
];

export const organizationDivisions = [
  {
    name: "Divisi Keuangan",
    focus:
      "Perencanaan anggaran, analisis biaya, dan tata kelola arus kas setiap proyek.",
    icon: Coins,
  },
  {
    name: "Divisi Operasional",
    focus:
      "Pengendalian mutu konstruksi, keselamatan kerja, dan ketepatan jadwal lapangan.",
    icon: HardHat,
  },
  {
    name: "Divisi Logistik",
    focus:
      "Pengadaan material, penjadwalan pengiriman, serta koordinasi supply chain lokal.",
    icon: Truck,
  },
  {
    name: "Divisi Pemasaran",
    focus:
      "Pengembangan kemitraan strategis, tender proyek baru, dan komunikasi brand.",
    icon: Megaphone,
  },
  {
    name: "Divisi Peralatan & Pemeliharaan",
    focus:
      "Kesiapan armada alat berat dan perawatan preventif agar proyek berjalan tanpa hambatan.",
    icon: Wrench,
  },
];
