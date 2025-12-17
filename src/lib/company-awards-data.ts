import heroAwardsBackground from "@/assets/hero-section-penghargaan-kami.jpg";
import certK3Img from "@/assets/awards/cert-k3.jpg";
import certZeroLostTimeInjury2023Img from "@/assets/awards/cert-zero-lost-time-injury-2023-2.jpg";
import certZeroLostTimeInjury20233Img from "@/assets/awards/cert-zero-lost-time-injury-2023-3.jpg";
import certZeroLostTimeInjury20234Img from "@/assets/awards/cert-zero-lost-time-injury-2023-4.jpg";
import corporateSocialResponsibilityImg from "@/assets/awards/corporate-social-responsibility.jpg";
import ohsMonth2025MainImg from "@/assets/awards/kegiatan-peringatan-bulan-K3-nasional-2025.jpg";
import ohsMonth2025AppreciationImg from "@/assets/awards/kegiatan-peringatan-bulan-K3-nasional-2025(2).jpg";
import pertaminaBestEndUserAspal2022AwardImg from "@/assets/awards/pertamina-best-end-user-aspal-2022.jpg";
import pertaminaBestEndUserAspal2022CertificateImg from "@/assets/awards/pertamina-best-end-user-aspal-2022-2.jpg";
import pertaminaBestEndUserAspal2023Img from "@/assets/awards/pertamina-best-end-user-aspal-2023.jpg";
import pertaminaBestEndUserAspal2024Img from "@/assets/awards/pertamina-best-end-user-aspal-2024.jpg";
import astraPlaqueImg from "@/assets/awards/plakat-astra.jpg";
import pertaminaBestEndUserPlaque2023Img from "@/assets/awards/plakat-best-end-user-pertamina-2023.jpg";
import ohsGoldSponsorPlaqueImg from "@/assets/awards/plakat-sponsor-k3-gold.jpg";
import miningSafetyImplementationImg from "@/assets/awards/program-penilaian-implementasi-keselamatan-pertambangan.jpg";
import roadReservationProgramImg from "@/assets/awards/program-reservasi-jalan.jpg";

// const heroAwardsBackground = "https://placehold.co/1920x600/f97316/ffffff?text=Awards+Hero";
// const certK3Img = "https://placehold.co/600x800/f97316/ffffff?text=K3+Cert";
// const certZeroLostTimeInjury2023Img = "https://placehold.co/600x800/f97316/ffffff?text=Zero+LTI+2023";
// const certZeroLostTimeInjury20233Img = "https://placehold.co/600x800/f97316/ffffff?text=Zero+LTI+2023+Plaque";
// const certZeroLostTimeInjury20234Img = "https://placehold.co/600x800/f97316/ffffff?text=Zero+LTI+2023+Ceremony";
// const corporateSocialResponsibilityImg = "https://placehold.co/600x800/f97316/ffffff?text=CSR+Award";
// const ohsMonth2025MainImg = "https://placehold.co/600x800/f97316/ffffff?text=OHS+Month+2025";
// const ohsMonth2025AppreciationImg = "https://placehold.co/600x800/f97316/ffffff?text=OHS+Appreciation";
// const pertaminaBestEndUserAspal2022AwardImg = "https://placehold.co/600x800/f97316/ffffff?text=Pertamina+Award+2022";
// const pertaminaBestEndUserAspal2022CertificateImg = "https://placehold.co/600x800/f97316/ffffff?text=Pertamina+Cert+2022";
// const pertaminaBestEndUserAspal2023Img = "https://placehold.co/600x800/f97316/ffffff?text=Pertamina+Award+2023";
// const pertaminaBestEndUserAspal2024Img = "https://placehold.co/600x800/f97316/ffffff?text=Pertamina+Award+2024";
// const astraPlaqueImg = "https://placehold.co/600x800/f97316/ffffff?text=Astra+Plaque";
// const pertaminaBestEndUserPlaque2023Img = "https://placehold.co/600x800/f97316/ffffff?text=Pertamina+Plaque+2023";
// const ohsGoldSponsorPlaqueImg = "https://placehold.co/600x800/f97316/ffffff?text=OHS+Gold+Sponsor";
// const miningSafetyImplementationImg = "https://placehold.co/600x800/f97316/ffffff?text=Mining+Safety";
// const roadReservationProgramImg = "https://placehold.co/600x800/f97316/ffffff?text=Road+Reservation";

export type CertificateImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export type CertificateImageDefinition = Omit<CertificateImage, "caption"> & {
  captionKey: string;
  fallbackCaption: string;
};

export const certificateImageDefinitions: CertificateImageDefinition[] = [
  {
    id: "event-ohs-month-2025-main",
    src: ohsMonth2025MainImg,
    alt: "Kegiatan utama Bulan K3 Nasional 2025",
    captionKey:
      "aboutPages.companyAwardsGallery.captions.ohsMonth2025MainSession",
    fallbackCaption:
      "Momen edukasi keselamatan kerja yang melibatkan tim internal dan mitra strategis.",
  },
  {
    id: "plaque-astra",
    src: astraPlaqueImg,
    alt: "Plakat apresiasi Astra untuk PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES",
    captionKey: "aboutPages.companyAwardsGallery.captions.astraPlaque",
    fallbackCaption:
      "Plakat penghargaan Astra yang diberikan kepada PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES.",
  },
  {
    id: "plaque-pertamina-best-end-user-2023",
    src: pertaminaBestEndUserPlaque2023Img,
    alt: "Plakat Best End User Pertamina 2023",
    captionKey:
      "aboutPages.companyAwardsGallery.captions.pertaminaBestEndUserPlaque2023",
    fallbackCaption:
      "Plakat Best End User Pertamina 2023 yang diraih PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES.",
  },
  {
    id: "plaque-ohs-gold-sponsor",
    src: ohsGoldSponsorPlaqueImg,
    alt: "Plakat Sponsor Gold Bulan K3",
    captionKey: "aboutPages.companyAwardsGallery.captions.ohsGoldSponsorPlaque",
    fallbackCaption:
      "Penghargaan Sponsor Gold Bulan K3 Nasional untuk PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES.",
  },
  {
    id: "program-mining-safety",
    src: miningSafetyImplementationImg,
    alt: "Program Penilaian Implementasi Keselamatan Pertambangan",
    captionKey:
      "aboutPages.companyAwardsGallery.captions.miningSafetyImplementation",
    fallbackCaption:
      "Sertifikat kepatuhan terhadap standar keselamatan dan operasional industri pertambangan nasional.",
  },
  {
    id: "program-road-reservation",
    src: roadReservationProgramImg,
    alt: "Piagam Program Reservasi Jalan",
    captionKey:
      "aboutPages.companyAwardsGallery.captions.roadReservationProgram",
    fallbackCaption:
      "Penghargaan pemerintah daerah atas perencanaan dan eksekusi proyek pemeliharaan jalan yang efektif.",
  },
  {
    id: "event-ohs-month-2025-appreciation",
    src: ohsMonth2025AppreciationImg,
    alt: "Sesi apresiasi Bulan K3 Nasional 2025",
    captionKey:
      "aboutPages.companyAwardsGallery.captions.ohsMonth2025Appreciation",
    fallbackCaption:
      "Dokumentasi penyerahan apresiasi kepada unit yang berhasil menerapkan budaya K3 secara unggul.",
  },
  {
    id: "cert-pertamina-best-end-user-aspal-2022-award",
    src: pertaminaBestEndUserAspal2022AwardImg,
    alt: "Penghargaan Pertamina Best End User Aspal 2022",
    captionKey:
      "aboutPages.companyAwardsGallery.captions.pertaminaBestEndUserAspal2022Award",
    fallbackCaption:
      "Anugerah atas performa penggunaan aspal Pertamina yang memenuhi standar mutu nasional.",
  },
  {
    id: "cert-k3",
    src: certK3Img,
    alt: "Sertifikat Sistem Manajemen K3 PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES",
    captionKey: "aboutPages.companyAwardsGallery.captions.certK3",
    fallbackCaption:
      "Sertifikat Sistem Manajemen Keselamatan dan Kesehatan Kerja PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES.",
  },
  {
    id: "cert-zero-lti-2023",
    src: certZeroLostTimeInjury2023Img,
    alt: "Piagam Zero Lost Time Injury 2023 PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES",
    captionKey:
      "aboutPages.companyAwardsGallery.captions.zeroLostTimeInjury2023Certificate",
    fallbackCaption:
      "Piagam Zero Lost Time Injury 2023 yang menegaskan kinerja keselamatan kerja PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES.",
  },
  {
    id: "cert-zero-lti-2023-plaque",
    src: certZeroLostTimeInjury20233Img,
    alt: "Plakat Zero Lost Time Injury 2023 PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES",
    captionKey:
      "aboutPages.companyAwardsGallery.captions.zeroLostTimeInjury2023Plaque",
    fallbackCaption:
      "Plakat Zero Lost Time Injury 2023 sebagai simbol konsistensi penerapan K3.",
  },
  {
    id: "cert-zero-lti-2023-ceremony",
    src: certZeroLostTimeInjury20234Img,
    alt: "Seremoni Zero Lost Time Injury 2023 bersama pemangku kepentingan",
    captionKey:
      "aboutPages.companyAwardsGallery.captions.zeroLostTimeInjury2023Ceremony",
    fallbackCaption:
      "Seremoni Zero Lost Time Injury 2023 yang menegaskan kolaborasi keselamatan kerja.",
  },
  {
    id: "cert-csr-recognition",
    src: corporateSocialResponsibilityImg,
    alt: "Penghargaan Corporate Social Responsibility PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES",
    captionKey: "aboutPages.companyAwardsGallery.captions.csrRecognition",
    fallbackCaption:
      "Pengakuan atas kontribusi perusahaan dalam program tanggung jawab sosial yang konsisten dan berdampak.",
  },
  {
    id: "cert-pertamina-best-end-user-aspal-2022-certificate",
    src: pertaminaBestEndUserAspal2022CertificateImg,
    alt: "Piagam Pertamina Best End User Aspal 2022",
    captionKey:
      "aboutPages.companyAwardsGallery.captions.pertaminaBestEndUserAspal2022Certificate",
    fallbackCaption:
      "Piagam resmi dari Pertamina atas kepuasan pelanggan dan kualitas implementasi aspal di lapangan.",
  },
  {
    id: "cert-pertamina-best-end-user-aspal-2023",
    src: pertaminaBestEndUserAspal2023Img,
    alt: "Penghargaan Pertamina Best End User Aspal 2023",
    captionKey:
      "aboutPages.companyAwardsGallery.captions.pertaminaBestEndUserAspal2023",
    fallbackCaption:
      "Apresiasi lanjutan atas komitmen keberlanjutan dan mutu pengerjaan infrastruktur jalan.",
  },
  {
    id: "cert-pertamina-best-end-user-aspal-2024",
    src: pertaminaBestEndUserAspal2024Img,
    alt: "Penghargaan Pertamina Best End User Aspal 2024",
    captionKey:
      "aboutPages.companyAwardsGallery.captions.pertaminaBestEndUserAspal2024",
    fallbackCaption:
      "Pengakuan terbaru Pertamina terhadap inovasi dan keandalan proyek-proyek perusahaan.",
  },
];
