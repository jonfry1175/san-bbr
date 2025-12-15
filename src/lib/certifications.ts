// import antiBriberyManagementImg from "@/assets/certificates/sistem-manajemen-anti-penyuapan-pt-khs-2023-2026.jpg";
// import ohsManagementImg from "@/assets/certificates/sistem-manajemen-k3-pt-khs-2023-2026.jpg";
// import environmentManagementImg from "@/assets/certificates/sistem-manajemen-lingkungan-pt-khs-2023-2026.jpg";
// import qualityManagementImg from "@/assets/certificates/sistem-manajemen-mutu-pt-khs-2023-2026.jpg";

const antiBriberyManagementImg = "https://placehold.co/600x800/10b981/ffffff?text=Anti-Bribery+Cert";
const ohsManagementImg = "https://placehold.co/600x800/10b981/ffffff?text=OHS+Management+Cert";
const environmentManagementImg = "https://placehold.co/600x800/10b981/ffffff?text=Environment+Cert";
const qualityManagementImg = "https://placehold.co/600x800/10b981/ffffff?text=Quality+Management+Cert";

export type CertificateImageDefinition = {
  id: string;
  src: string;
  alt: string;
  captionKey: string;
  fallbackCaption: string;
};

export const certificateImageDefinitions: CertificateImageDefinition[] = [
  {
    id: "cert-anti-bribery",
    src: antiBriberyManagementImg,
    alt: "Sertifikat Sistem Manajemen Anti Penyuapan PT. Karya Halim Sampoerna 2023-2026",
    captionKey:
      "aboutPages.certificationGallery.captions.antiBriberyManagementSystem",
    fallbackCaption:
      "Sertifikat Sistem Manajemen Anti Penyuapan PT. Karya Halim Sampoerna periode 2023-2026.",
  },
  {
    id: "cert-ohs",
    src: ohsManagementImg,
    alt: "Sertifikat Sistem Manajemen K3 PT. Karya Halim Sampoerna 2023-2026",
    captionKey: "aboutPages.certificationGallery.captions.ohsManagementSystem",
    fallbackCaption:
      "Sertifikat Sistem Manajemen Keselamatan dan Kesehatan Kerja PT. Karya Halim Sampoerna periode 2023-2026.",
  },
  {
    id: "cert-environment",
    src: environmentManagementImg,
    alt: "Sertifikat Sistem Manajemen Lingkungan PT. Karya Halim Sampoerna 2023-2026",
    captionKey:
      "aboutPages.certificationGallery.captions.environmentManagementSystem",
    fallbackCaption:
      "Sertifikat Sistem Manajemen Lingkungan PT. Karya Halim Sampoerna periode 2023-2026.",
  },
  {
    id: "cert-quality",
    src: qualityManagementImg,
    alt: "Sertifikat Sistem Manajemen Mutu PT. Karya Halim Sampoerna 2023-2026",
    captionKey:
      "aboutPages.certificationGallery.captions.qualityManagementSystem",
    fallbackCaption:
      "Sertifikat Sistem Manajemen Mutu PT. Karya Halim Sampoerna periode 2023-2026.",
  },
];

export const CERTIFICATE_COUNT = certificateImageDefinitions.length;
