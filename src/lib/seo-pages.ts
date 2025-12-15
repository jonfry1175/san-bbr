import { buildCanonicalUrl, siteMetadata, toAbsoluteUrl } from "@/lib/seo";

type StaticPageKey =
  | "home"
  | "services"
  | "works"
  | "products"
  | "news"
  | "career"
  | "contact"
  | "gallery"
  | "location"
  | "aboutCompany"
  | "aboutTeam"
  | "certifications"
  | "companyAwards";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

export type ResolvedPageMeta = PageMeta & {
  canonical: string;
  image: string;
};

const defaultImage = toAbsoluteUrl("/logo.png");

export const staticPageMeta: Record<StaticPageKey, PageMeta> = {
  home: {
    title: `${siteMetadata.name} | Infrastruktur & Roadworks Kalimantan`,
    description:
      "PT. Karya Halim Sampoerna mengerjakan konstruksi jalan, earthwork, dan layanan aspal di Kalimantan Tengah dengan standar keselamatan tinggi.",
    path: "/",
    image: defaultImage,
    keywords: ["konstruksi kalimantan tengah", "aspal hotmix", "earthwork"],
  },
  services: {
    title: "Layanan Konstruksi & Infrastruktur",
    description:
      "Jelajahi layanan konstruksi PT. Karya Halim Sampoerna mulai dari earthwork, aspal hotmix, drainase, hingga pembangunan jembatan di Kalimantan Tengah.",
    path: "/services",
    image: defaultImage,
  },
  works: {
    title: "Portofolio Proyek Jalan & Infrastruktur",
    description:
      "Studi kasus proyek PT. Karya Halim Sampoerna mencakup jalan hauling, CTRB, chipseal, dan peningkatan fasilitas transportasi strategis.",
    path: "/works",
    image: defaultImage,
  },
  products: {
    title: "Peralatan & Material Konstruksi",
    description:
      "Lihat katalog produk PT. Karya Halim Sampoerna untuk kebutuhan konstruksi, peralatan berat, dan material pendukung proyek.",
    path: "/products",
    image: defaultImage,
  },
  news: {
    title: "Berita & Insight PT. Karya Halim Sampoerna",
    description:
      "Kumpulan berita perusahaan, inisiatif keselamatan, dan perkembangan proyek terkini dari PT. Karya Halim Sampoerna.",
    path: "/news",
    image: defaultImage,
  },
  career: {
    title: "Karier di PT. Karya Halim Sampoerna",
    description:
      "Bangun karier di industri konstruksi bersama PT. Karya Halim Sampoerna. Temukan peluang kerja dan budaya kerja kami.",
    path: "/career",
    image: defaultImage,
  },
  contact: {
    title: "Hubungi PT. Karya Halim Sampoerna",
    description:
      "Hubungi PT. Karya Halim Sampoerna untuk konsultasi proyek konstruksi, tender, dan kemitraan di Kalimantan Tengah.",
    path: "/contact",
    image: defaultImage,
  },
  gallery: {
    title: "Galeri Proyek dan Dokumentasi Lapangan",
    description:
      "Dokumentasi proyek PT. Karya Halim Sampoerna: foto lapangan, progres konstruksi, dan showcase portofolio.",
    path: "/gallery",
    image: defaultImage,
  },
  location: {
    title: "Lokasi & Kantor PT. Karya Halim Sampoerna",
    description:
      "Temukan lokasi kantor PT. Karya Halim Sampoerna di Palangka Raya, Kalimantan Tengah lengkap dengan panduan rute dan informasi kontak.",
    path: "/location",
    image: defaultImage,
  },
  aboutCompany: {
    title: "Tentang PT. Karya Halim Sampoerna",
    description:
      "Sejarah, visi misi, dan strategi perusahaan PT. Karya Halim Sampoerna sebagai mitra konstruksi tepercaya di Kalimantan Tengah.",
    path: "/about-us/our-company",
    image: defaultImage,
  },
  aboutTeam: {
    title: "Tim Kepemimpinan & Organisasi",
    description:
      "Kenali tim kepemimpinan PT. Karya Halim Sampoerna yang menggerakkan proyek konstruksi dan infrastruktur di Kalimantan.",
    path: "/about-us/our-team",
    image: defaultImage,
  },
  certifications: {
    title: "Sertifikasi & Kepatuhan",
    description:
      "Daftar sertifikasi PT. Karya Halim Sampoerna yang mendukung standar keselamatan, kualitas, dan tata kelola proyek.",
    path: "/about-us/certifications",
    image: defaultImage,
  },
  companyAwards: {
    title: "Penghargaan Perusahaan & Apresiasi Kinerja",
    description:
      "Galeri penghargaan PT. Karya Halim Sampoerna yang menampilkan apresiasi dari mitra, klien, dan lembaga pemerintah.",
    path: "/about-us/company-awards",
    image: defaultImage,
  },
};

export const getStaticPageMeta = (key: StaticPageKey) => staticPageMeta[key];

export const resolveMeta = (meta: PageMeta): ResolvedPageMeta => ({
  ...meta,
  canonical: buildCanonicalUrl(meta.path),
  image: meta.image ?? defaultImage,
});
