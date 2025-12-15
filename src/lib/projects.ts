import type { TranslationResources } from "@/lib/i18n";
export type Project = {
  id: string;
  slug: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: "Road Construction" | "Aspal Hotmix" | "Earthwork";
  status: "Completed" | "Ongoing";
  description: string;
  image: string;
  relatedImages?: string[];
};

// Local images for our works
// import fwdImg from "@/assets/our-works/falling-weigh-deflectometer.jpg";
// import ctrbImg from "@/assets/our-works/ctrb.png";
// import chipsealImg from "@/assets/our-works/chipseal.jpg";
// import haulingRoadImg from "@/assets/our-works/hauling-road-tambang-kalimantan.jpg";
// import earthworkLoopingImg from "@/assets/our-works/pekerjaan-earthwork-looping-cp2a.jpg";
// import patokHaulingImg from "@/assets/our-works/pemasangan-patok-jalan-hauling.jpg";
// import lpaDumpingImg from "@/assets/our-works/lapis-pondasi-atas-lpa-lokasi-dumping-km-17.jpg";
// import konstruksiHaulingRadImg from "@/assets/our-works/jasa-konstruksi-hauling-road.jpg";
// import earthworkLoopingCp2bImg from "@/assets/our-works/pekerjaan-earthwork-looping-cp2b.jpg";
// import preventifJalanKosonganImg from "@/assets/our-works/preventif-jalan-kosongan.jpg";
// import earthworkCheckoutBunatiImg from "@/assets/our-works/pekerjaan-earthwork-check-out-point-port-bunati.jpg";
// import maintenanceCsHaulingImg from "@/assets/our-works/maintenance-cs-hauling-road.jpg";
// import rambuReflektroizedImg from "@/assets/our-works/rambu-reflektroized.jpg";
// import restAreaImg from "@/assets/our-works/konstruksi-rest-area-km-1-5-kosongan-dan-16-5-muatan.jpg";
// import solarStudLightImg from "@/assets/our-works/solar-stud-light-dan-glass-stud-road.jpg";
// import solarStudLightImg1 from "@/assets/our-works/solar-stud-light-dan-glass-stud-road-1.jpg";
// import solarStudLightImg2 from "@/assets/our-works/solar-stud-light-dan-glass-stud-road-2.jpg";
// import solarStudLightImg3 from "@/assets/our-works/solar-stud-light-dan-glass-stud-road-3.jpg";
// import solarStudLightImg4 from "@/assets/our-works/solar-stud-light-dan-glass-stud-road-4.jpg";
// import maintenanceChipsealImg from "@/assets/our-works/maintenance-chipseal-hauling.jpg";
// import pelebaranKm14Img from "@/assets/our-works/pelebaran-km-14.jpg";
// import persiapanNorthStockpileImg from "@/assets/our-works/pekerjaan-persiapan-north-stockpile.jpg";
// import pelebaranKm12Img from "@/assets/our-works/pekerjaan-pelebaran-km-12.jpg";
// import peningkatanAntrianTrukImg from "@/assets/our-works/peningkatan-jalan-hauling-antrian-truck-hauling.jpg";
// import upgradeHaulingRoadImg from "@/assets/our-works/upgrade-hauling-road.jpg";
// import konstruksiLoopingCp9Img from "@/assets/our-works/konstruksi-jalan-looping-cp-9.jpg";
// import chipsealRestAreaImg from "@/assets/our-works/pekerjaan-chipseal-rest-area-km-1-5-kosongan-dan-km-16-5.jpg";
// import additionalWorkKm12Img from "@/assets/our-works/additional-work-pelebaran-km-12.jpg";
// import pavementAviaryImg from "@/assets/our-works/pavement-akses-jalan-aviary.jpg";
// import peningkatan10HaBunatiImg from "@/assets/our-works/peningkatan-10-ha-bunati.jpg";
// import maintenanceRoadBunatiImg from "@/assets/our-works/maintenance-road-bunati.jpg";
// import maintenanceJalanCp5Img from "@/assets/our-works/maintenance-jalan-cp-5.jpg";
// import northDrainageWorkImg from "@/assets/our-works/pekerjaan-north-drainage-work.jpg";
// import earthworkLoopingCp7Img from "@/assets/our-works/pekerjaan-earthwork-jalan-looping-cp7.jpg";
// import accessChargingStationTempImg from "@/assets/our-works/access-charging-station-temporary.jpg";
// import aksesChargingStationImg from "@/assets/our-works/akses-jalan-ke-charging-station.jpg";
// import jalanHaulingPitKgbKguImg from "@/assets/our-works/jalan-hauling-pit-kgb-dan-kgu.jpg";
// import chipsealRestAreaKm1Km4Img from "@/assets/our-works/chipseal-di-rest-area-km-1-dan-km-4-muatan.jpg";
// import pavementPreservationJalurMuatanImg from "@/assets/our-works/pavement-preservation-jalur-muatan.jpg";
// import doubleChipsealRestAreaImg from "@/assets/our-works/pelapisan-double-chipseal-rest-area.jpg";
// import doubleChipsealKosonganKm1Img from "@/assets/our-works/lapisan-double-chipseal-kosongan-km-1.jpg";
// import peningkatanAreaKosonganImg from "@/assets/our-works/peningkatan-area-kosongan.jpg";
// import peningkatanAksesLoopingNorthStockpileImg from "@/assets/our-works/peningkatan-jalan-hauling-akses-looping-north-stockpile-jalur-kosongan.jpg";
// import chipsealRestAreaKm1Km42025Img from "@/assets/our-works/pekerjaan-chipseal-di-rest-area-km-1-dan-km-4.jpg";
// import aksesChargingStationBibImg from "@/assets/our-works/pekerjaan-akses-charging-station-bib.jpg";
// import stabilisasiParkirChargingStationBibImg from "@/assets/our-works/pekerjaan-stabilisasi-area-parkir-charging-station-bib.jpg";

const fwdImg = "https://placehold.co/800x600/10b981/ffffff?text=FWD";
const ctrbImg = "https://placehold.co/800x600/10b981/ffffff?text=CTRB";
const chipsealImg = "https://placehold.co/800x600/10b981/ffffff?text=Chipseal";
const haulingRoadImg = "https://placehold.co/800x600/10b981/ffffff?text=Hauling+Road";
const earthworkLoopingImg = "https://placehold.co/800x600/10b981/ffffff?text=Earthwork+Looping";
const patokHaulingImg = "https://placehold.co/800x600/10b981/ffffff?text=Patok+Hauling";
const lpaDumpingImg = "https://placehold.co/800x600/10b981/ffffff?text=LPA+Dumping";
const konstruksiHaulingRadImg = "https://placehold.co/800x600/10b981/ffffff?text=Konstruksi+Hauling";
const earthworkLoopingCp2bImg = "https://placehold.co/800x600/10b981/ffffff?text=Earthwork+Looping+CP2B";
const preventifJalanKosonganImg = "https://placehold.co/800x600/10b981/ffffff?text=Preventif+Jalan";
const earthworkCheckoutBunatiImg = "https://placehold.co/800x600/10b981/ffffff?text=Earthwork+Checkout";
const maintenanceCsHaulingImg = "https://placehold.co/800x600/10b981/ffffff?text=Maintenance+Hauling";
const rambuReflektroizedImg = "https://placehold.co/800x600/10b981/ffffff?text=Rambu";
const restAreaImg = "https://placehold.co/800x600/10b981/ffffff?text=Rest+Area";
const solarStudLightImg = "https://placehold.co/800x600/10b981/ffffff?text=Solar+Stud";
const solarStudLightImg1 = "https://placehold.co/800x600/10b981/ffffff?text=Solar+Stud+1";
const solarStudLightImg2 = "https://placehold.co/800x600/10b981/ffffff?text=Solar+Stud+2";
const solarStudLightImg3 = "https://placehold.co/800x600/10b981/ffffff?text=Solar+Stud+3";
const solarStudLightImg4 = "https://placehold.co/800x600/10b981/ffffff?text=Solar+Stud+4";
const maintenanceChipsealImg = "https://placehold.co/800x600/10b981/ffffff?text=Maintenance+Chipseal";
const pelebaranKm14Img = "https://placehold.co/800x600/10b981/ffffff?text=Pelebaran+KM14";
const persiapanNorthStockpileImg = "https://placehold.co/800x600/10b981/ffffff?text=Persiapan+Stockpile";
const pelebaranKm12Img = "https://placehold.co/800x600/10b981/ffffff?text=Pelebaran+KM12";
const peningkatanAntrianTrukImg = "https://placehold.co/800x600/10b981/ffffff?text=Peningkatan+Antrian";
const upgradeHaulingRoadImg = "https://placehold.co/800x600/10b981/ffffff?text=Upgrade+Hauling";
const konstruksiLoopingCp9Img = "https://placehold.co/800x600/10b981/ffffff?text=Konstruksi+Looping";
const chipsealRestAreaImg = "https://placehold.co/800x600/10b981/ffffff?text=Chipseal+Rest+Area";
const additionalWorkKm12Img = "https://placehold.co/800x600/10b981/ffffff?text=Additional+Work";
const pavementAviaryImg = "https://placehold.co/800x600/10b981/ffffff?text=Pavement+Aviary";
const peningkatan10HaBunatiImg = "https://placehold.co/800x600/10b981/ffffff?text=Peningkatan+Bunati";
const maintenanceRoadBunatiImg = "https://placehold.co/800x600/10b981/ffffff?text=Maintenance+Road+Bunati";
const maintenanceJalanCp5Img = "https://placehold.co/800x600/10b981/ffffff?text=Maintenance+Jalan+CP5";
const northDrainageWorkImg = "https://placehold.co/800x600/10b981/ffffff?text=Drainage+Work";
const earthworkLoopingCp7Img = "https://placehold.co/800x600/10b981/ffffff?text=Earthwork+Looping+CP7";
const accessChargingStationTempImg = "https://placehold.co/800x600/10b981/ffffff?text=Access+Charging+Temp";
const aksesChargingStationImg = "https://placehold.co/800x600/10b981/ffffff?text=Access+Charging";
const jalanHaulingPitKgbKguImg = "https://placehold.co/800x600/10b981/ffffff?text=Hauling+Pit";
const chipsealRestAreaKm1Km4Img = "https://placehold.co/800x600/10b981/ffffff?text=Chipseal+Rest+Area+KM1";
const pavementPreservationJalurMuatanImg = "https://placehold.co/800x600/10b981/ffffff?text=Pavement+Preservation";
const doubleChipsealRestAreaImg = "https://placehold.co/800x600/10b981/ffffff?text=Double+Chipseal";
const doubleChipsealKosonganKm1Img = "https://placehold.co/800x600/10b981/ffffff?text=Double+Chipseal+KM1";
const peningkatanAreaKosonganImg = "https://placehold.co/800x600/10b981/ffffff?text=Peningkatan+Area";
const peningkatanAksesLoopingNorthStockpileImg = "https://placehold.co/800x600/10b981/ffffff?text=Peningkatan+Akses";
const chipsealRestAreaKm1Km42025Img = "https://placehold.co/800x600/10b981/ffffff?text=Chipseal+2025";
const aksesChargingStationBibImg = "https://placehold.co/800x600/10b981/ffffff?text=Access+Charging+BIB";
const stabilisasiParkirChargingStationBibImg = "https://placehold.co/800x600/10b981/ffffff?text=Stabilisasi+Parkir";

// removed image imports for deleted Pemerintah Daerah projects

export const categories = [
  "Road Construction",
  "Aspal Hotmix",
  "Earthwork",
] as const;

export const projects: Project[] = [
  {
    id: "1",
    slug: "pengujian-falling-weight-deflectometer-fwd",
    title: "Pengujian Falling Weight Deflectometer (FWD)",
    client: "PT. Adaro Indonesia, Tbk.",
    location: "Jalan Hauling — Kalimantan",
    year: "2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Pengujian struktural pengerasan jalan hauling menggunakan FWD untuk menilai sisa umur layan dan menyusun rekomendasi penanganan. Dikerjakan pada koridor berproduksi tinggi (±54 juta ton/tahun) milik PT. Adaro Indonesia, Tbk.",
    image: fwdImg,
    relatedImages: [fwdImg, ctrbImg],
  },
  {
    id: "2",
    slug: "cement-treated-recycling-base-ctrb",
    title: "Cement Treated Recycling Base (CTRB)",
    client: "Berbagai Klien",
    location: "Jaringan Jalan Hauling — Kalimantan",
    year: "2017–2020",
    category: "Road Construction",
    status: "Completed",
    description:
      "Perbaikan struktur pengerasan jalan dengan memanfaatkan material eksisting yang distabilisasi semen/chemical untuk kekuatan dan umur layan lebih panjang. Cakupan pekerjaan ±25 km dari total 68 km jaringan hauling, dilaksanakan bertahap pada 2017–2020.",
    image: ctrbImg,
    relatedImages: [ctrbImg, chipsealImg],
  },
  {
    id: "3",
    slug: "upgrading-jalan-hauling-pt-borneo-indobara",
    title: "Upgrading Jalan Hauling PT. Borneo Indobara",
    client: "PT. Borneo Indobara",
    location: "Kalimantan Selatan",
    year: "2021–2023",
    category: "Aspal Hotmix",
    status: "Completed",
    description:
      "Peningkatan lapis permukaan jalan hauling dengan chipseal menggunakan aspal modifikasi PG 70 (PT. ABS) sepanjang ±20 km. Peningkatan kualitas permukaan turut mendukung kenaikan produksi dari 28 juta ton (2019) menjadi 48,6 juta ton (2024). Durasi pekerjaan 16 bulan.",
    image: chipsealImg,
    relatedImages: [chipsealImg, ctrbImg],
  },
  // removed project: peningkatan-jalan-mantangai-timpah-paket-1 (client: Pemerintah Daerah)
  {
    id: "5",
    slug: "hauling-road-2021-2024",
    title: "Pembuatan Hauling Road",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Ongoing",
    description:
      "Proyek pembangunan dan pemeliharaan jalan angkut (hauling road) untuk mendukung operasional pertambangan.",
    image: haulingRoadImg,
    relatedImages: [haulingRoadImg, ctrbImg],
  },
  {
    id: "6",
    slug: "earthwork-looping-cp2a",
    title: "Pekerjaan Earthwork Looping CP2A",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Earthwork",
    status: "Completed",
    description:
      "Proyek pekerjaan tanah (earthwork) untuk pembangunan jalan lingkar (looping road) di area CP2A.",
    image: earthworkLoopingImg,
    relatedImages: [earthworkLoopingImg, fwdImg],
  },
  {
    id: "7",
    slug: "pemasangan-patok-jalan-hauling",
    title: "Pemasangan Patok Jalan Hauling",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Pemasangan patok sebagai penanda dan referensi geometri di sepanjang jalan angkut tambang.",
    image: patokHaulingImg,
    relatedImages: [patokHaulingImg, chipsealImg],
  },
  {
    id: "8",
    slug: "lpa-dumping-km-17",
    title: "Lapis Pondasi Atas (LPA) Lokasi Dumping KM 17",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Pekerjaan lapis pondasi atas (LPA) di area dumping KM 17 untuk meningkatkan daya dukung dan stabilitas.",
    image: lpaDumpingImg,
    relatedImages: [lpaDumpingImg, ctrbImg],
  },
  {
    id: "9",
    slug: "jasa-konstruksi-hauling-rad",
    title: "Konstruksi Hauling Road",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Ongoing",
    description:
      "Penyediaan jasa konstruksi komprehensif untuk jalan angkut (hauling road).",
    image: konstruksiHaulingRadImg,
    relatedImages: [konstruksiHaulingRadImg, fwdImg],
  },
  {
    id: "10",
    slug: "earthwork-looping-cp2b",
    title: "Pekerjaan Earthwork Looping CP2B",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Earthwork",
    status: "Completed",
    description:
      "Proyek pekerjaan tanah (earthwork) untuk pembangunan jalan lingkar (looping road) di area CP2B.",
    image: earthworkLoopingCp2bImg,
    relatedImages: [earthworkLoopingCp2bImg, chipsealImg],
  },
  {
    id: "11",
    slug: "preventif-jalan-kosongan",
    title: "Preventif Jalan Kosongan",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Pekerjaan pemeliharaan preventif pada jalan kosongan untuk menjaga kondisi jalan.",
    image: preventifJalanKosonganImg,
    relatedImages: [preventifJalanKosonganImg, ctrbImg],
  },
  {
    id: "12",
    slug: "earthwork-checkout-bunati",
    title: "Pekerjaan Earthwork Check Out Point Port Bunati",
    client: "Perusahaan Tambang",
    location: "Pelabuhan Bunati",
    year: "2021-2024",
    category: "Earthwork",
    status: "Completed",
    description:
      "Pekerjaan tanah untuk area check out point di Pelabuhan Bunati.",
    image: earthworkCheckoutBunatiImg,
    relatedImages: [earthworkCheckoutBunatiImg, fwdImg],
  },
  {
    id: "13",
    slug: "maintenance-cs-hauling-road",
    title: "Maintenance CS Hauling Road",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Ongoing",
    description:
      "Pemeliharaan rutin pada lapisan permukaan Chipseal di jalan angkut.",
    image: maintenanceCsHaulingImg,
    relatedImages: [maintenanceCsHaulingImg, chipsealImg],
  },
  // removed project: pemasangan-gorong-gorong (client: Pemerintah Daerah)
  {
    id: "15",
    slug: "rambu-reflektroized",
    title: "Rambu Reflektroized",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Pemasangan rambu lalu lintas dengan bahan reflektif untuk meningkatkan visibilitas.",
    image: rambuReflektroizedImg,
    relatedImages: [rambuReflektroizedImg, fwdImg],
  },
  // removed project: pemasangan-culvert-100-cm (client: Pemerintah Daerah)
  {
    id: "17",
    slug: "solar-stud-light-glass-stud-road",
    title: "Solar Stud Light dan Glass Stud Road",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Pemasangan paku jalan tenaga surya dan paku kaca untuk meningkatkan visibilitas.",
    image: solarStudLightImg1,
    relatedImages: [
      solarStudLightImg1,
      solarStudLightImg2,
      solarStudLightImg3,
      solarStudLightImg4,
    ],
  },
  {
    id: "18",
    slug: "konstruksi-rest-area-km-1-5-dan-16-5",
    title: "Konstruksi Rest Area KM 1,5 Kosongan dan 16,5 Muatan",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Earthwork",
    status: "Completed",
    description:
      "Pembangunan fasilitas rest area di KM 1,5 (jalur kosongan) dan KM 16,5 (jalur muatan).",
    image: restAreaImg,
    relatedImages: [restAreaImg, fwdImg],
  },
  {
    id: "19",
    slug: "maintenance-chipseal-hauling",
    title: "Maintenance Chipseal Hauling",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Ongoing",
    description:
      "Pekerjaan pemeliharaan rutin pada permukaan jalan angkut yang menggunakan lapisan chipseal.",
    image: maintenanceChipsealImg,
    relatedImages: [maintenanceChipsealImg, chipsealImg],
  },
  {
    id: "20",
    slug: "pelebaran-km-14",
    title: "Pelebaran KM 14",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Proyek pelebaran jalan di KM 14 untuk meningkatkan kapasitas jalan.",
    image: pelebaranKm14Img,
    relatedImages: [pelebaranKm14Img, ctrbImg],
  },
  {
    id: "21",
    slug: "persiapan-north-stockpile",
    title: "Pekerjaan Persiapan North Stockpile",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Earthwork",
    status: "Completed",
    description:
      "Pekerjaan tanah dan persiapan lahan untuk area stockpile utara.",
    image: persiapanNorthStockpileImg,
    relatedImages: [persiapanNorthStockpileImg, fwdImg],
  },
  {
    id: "22",
    slug: "pelebaran-km-12",
    title: "Pekerjaan Pelebaran KM 12",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Proyek pelebaran jalan di KM 12 untuk mengakomodasi peningkatan volume lalu lintas.",
    image: pelebaranKm12Img,
    relatedImages: [pelebaranKm12Img, chipsealImg],
  },
  {
    id: "23",
    slug: "peningkatan-antrian-truck-hauling",
    title: "Peningkatan Jalan Hauling - Antrian Truck Hauling",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Peningkatan kapasitas dan manajemen area antrian truk di jalan hauling.",
    image: peningkatanAntrianTrukImg,
    relatedImages: [peningkatanAntrianTrukImg, ctrbImg],
  },
  {
    id: "24",
    slug: "upgrade-hauling-road",
    title: "Upgrade Hauling Road",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Ongoing",
    description: "Proyek peningkatan komprehensif pada jalan hauling.",
    image: upgradeHaulingRoadImg,
    relatedImages: [upgradeHaulingRoadImg, fwdImg],
  },
  {
    id: "25",
    slug: "konstruksi-jalan-looping-cp9",
    title: "Konstruksi Jalan Looping CP 9",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Pembangunan jalan lingkar (looping road) baru di Check Point 9.",
    image: konstruksiLoopingCp9Img,
    relatedImages: [konstruksiLoopingCp9Img, chipsealImg],
  },
  // removed project: perawatan-jembatan-martani (client: Pemerintah Daerah)
  {
    id: "27",
    slug: "chipseal-rest-area-km-1-5-dan-16-5",
    title: "Pekerjaan Chipseal Rest Area KM 1,5 Kosongan & KM 16,5",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Aspal Hotmix",
    status: "Completed",
    description:
      "Aplikasi lapisan chipseal di rest area untuk meningkatkan kualitas permukaan.",
    image: chipsealRestAreaImg,
    relatedImages: [chipsealRestAreaImg, fwdImg],
  },
  {
    id: "28",
    slug: "additional-work-pelebaran-km-12",
    title: "Additonal Work Pelebaran KM 12",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description: "Pekerjaan tambahan pada proyek pelebaran KM 12.",
    image: additionalWorkKm12Img,
    relatedImages: [additionalWorkKm12Img, chipsealImg],
  },
  {
    id: "29",
    slug: "pavement-akses-jalan-aviary",
    title: "Pavement Akses Jalan Aviary",
    client: "Swasta",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Aspal Hotmix",
    status: "Completed",
    description: "Pengaspalan jalan akses menuju Aviary.",
    image: pavementAviaryImg,
    relatedImages: [pavementAviaryImg, ctrbImg],
  },
  {
    id: "30",
    slug: "peningkatan-10-ha-bunati",
    title: "Peningkatan 10 HA Bunati",
    client: "Perusahaan Pelabuhan",
    location: "Bunati",
    year: "2021-2024",
    category: "Earthwork",
    status: "Completed",
    description:
      "Proyek peningkatan dan persiapan lahan seluas 10 hektar di area Bunati.",
    image: peningkatan10HaBunatiImg,
    relatedImages: [peningkatan10HaBunatiImg, fwdImg],
  },
  {
    id: "31",
    slug: "maintenance-road-bunati",
    title: "Maintenance Road Bunati",
    client: "Perusahaan Pelabuhan",
    location: "Bunati",
    year: "2021-2024",
    category: "Road Construction",
    status: "Ongoing",
    description: "Pekerjaan pemeliharaan jalan rutin di area Bunati.",
    image: maintenanceRoadBunatiImg,
    relatedImages: [maintenanceRoadBunatiImg, chipsealImg],
  },
  {
    id: "32",
    slug: "maintenance-jalan-cp5",
    title: "Maintenance Jalan CP 5",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Ongoing",
    description: "Pemeliharaan rutin jalan di area Check Point 5.",
    image: maintenanceJalanCp5Img,
    relatedImages: [maintenanceJalanCp5Img, ctrbImg],
  },
  {
    id: "33",
    slug: "north-drainage-work",
    title: "Pekerjaan North Drainage Work",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Earthwork",
    status: "Completed",
    description: "Proyek pekerjaan sistem drainase di area utara.",
    image: northDrainageWorkImg,
    relatedImages: [northDrainageWorkImg, fwdImg],
  },
  {
    id: "34",
    slug: "earthwork-jalan-looping-cp7",
    title: "Pekerjaan Earthwork Jalan Looping CP7",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Earthwork",
    status: "Completed",
    description:
      "Pekerjaan tanah untuk pembangunan jalan lingkar (looping road) di Check Point 7.",
    image: earthworkLoopingCp7Img,
    relatedImages: [earthworkLoopingCp7Img, chipsealImg],
  },
  {
    id: "35",
    slug: "access-charging-station-temporary",
    title: "Access Charging Station Temporary",
    client: "Swasta",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Pembangunan akses jalan sementara menuju stasiun pengisian daya.",
    image: accessChargingStationTempImg,
    relatedImages: [accessChargingStationTempImg, ctrbImg],
  },
  {
    id: "36",
    slug: "akses-jalan-ke-charging-station",
    title: "Akses Jalan Ke Charging Station",
    client: "Swasta",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Pembangunan jalan akses permanen menuju stasiun pengisian daya.",
    image: aksesChargingStationImg,
    relatedImages: [aksesChargingStationImg, fwdImg],
  },
  {
    id: "37",
    slug: "jalan-hauling-pit-kgb-kgu",
    title: "Jalan Hauling Pit KGB dan KGU",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Completed",
    description:
      "Pembangunan jalan angkut khusus untuk melayani area pit KGB dan KGU.",
    image: jalanHaulingPitKgbKguImg,
    relatedImages: [jalanHaulingPitKgbKguImg, chipsealImg],
  },
  {
    id: "38",
    slug: "chipseal-rest-area-km-1-dan-4",
    title: "Chipseal di Rest Area KM 1 dan KM 4 Muatan",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Aspal Hotmix",
    status: "Completed",
    description: "Aplikasi chipseal di rest area KM 1 dan KM 4 (jalur muatan).",
    image: chipsealRestAreaKm1Km4Img,
    relatedImages: [chipsealRestAreaKm1Km4Img, ctrbImg],
  },
  {
    id: "39",
    slug: "pavement-preservation-jalur-muatan",
    title: "Pavement Preservation Jalur Muatan",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Road Construction",
    status: "Ongoing",
    description: "Program preservasi perkerasan pada jalur muatan.",
    image: pavementPreservationJalurMuatanImg,
    relatedImages: [pavementPreservationJalurMuatanImg, fwdImg],
  },
  {
    id: "40",
    slug: "double-chipseal-rest-area",
    title: "Pelapisan Double Chipseal Rest Area",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Aspal Hotmix",
    status: "Completed",
    description: "Aplikasi lapisan double chipseal di rest area.",
    image: doubleChipsealRestAreaImg,
    relatedImages: [doubleChipsealRestAreaImg, chipsealImg],
  },
  {
    id: "41",
    slug: "double-chipseal-kosongan-km-1",
    title: "Lapisan Double CHIPSEAL Kosongan KM 1",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Aspal Hotmix",
    status: "Completed",
    description: "Aplikasi lapisan double chipseal di KM 1 jalur kosongan.",
    image: doubleChipsealKosonganKm1Img,
    relatedImages: [doubleChipsealKosonganKm1Img, ctrbImg],
  },
  {
    id: "42",
    slug: "peningkatan-area-kosongan",
    title: "Peningkatan Area Kosongan",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2021-2024",
    category: "Earthwork",
    status: "Completed",
    description: "Proyek peningkatan dan penataan area jalur kosongan.",
    image: peningkatanAreaKosonganImg,
    relatedImages: [peningkatanAreaKosonganImg, fwdImg],
  },
  // removed project: penanganan-long-segmen-sei-asem-batas-kalsel (client: Pemerintah Daerah)
  // removed project: palingkau-seberang-batas-kalsel-dak (client: Pemerintah Daerah)
  {
    id: "45",
    slug: "peningkatan-akses-looping-north-stockpile",
    title:
      "Peningkatan Jalan Hauling Akses Looping North Stockpile Jalur Kosongan",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2025",
    category: "Road Construction",
    status: "Ongoing",
    description:
      "Peningkatan jalan angkut pada akses menuju looping North Stockpile di jalur kosongan.",
    image: peningkatanAksesLoopingNorthStockpileImg,
    relatedImages: [peningkatanAksesLoopingNorthStockpileImg, fwdImg],
  },
  {
    id: "46",
    slug: "chipseal-rest-area-km-1-dan-4-2025",
    title: "Pekerjaan Chipseal di Rest Area KM 1 dan KM 4",
    client: "Perusahaan Tambang",
    location: "Kalimantan",
    year: "2025",
    category: "Aspal Hotmix",
    status: "Ongoing",
    description:
      "Pekerjaan pelapisan chipseal di rest area KM 1 dan KM 4 pada tahun 2025.",
    image: chipsealRestAreaKm1Km42025Img,
    relatedImages: [chipsealRestAreaKm1Km42025Img, chipsealImg],
  },
  {
    id: "47",
    slug: "akses-charging-station-bib",
    title: "Pekerjaan Akses Charging Station BIB",
    client: "PT. Borneo Indobara",
    location: "Kalimantan",
    year: "2025",
    category: "Road Construction",
    status: "Ongoing",
    description:
      "Pembangunan jalan akses menuju stasiun pengisian daya di area BIB.",
    image: aksesChargingStationBibImg,
    relatedImages: [aksesChargingStationBibImg, ctrbImg],
  },
  {
    id: "48",
    slug: "stabilisasi-parkir-charging-station-bib",
    title: "Pekerjaan Stabilisasi Area Parkir Charging Station BIB",
    client: "PT. Borneo Indobara",
    location: "Kalimantan",
    year: "2025",
    category: "Earthwork",
    status: "Ongoing",
    description:
      "Pekerjaan stabilisasi tanah pada area parkir stasiun pengisian daya BIB.",
    image: stabilisasiParkirChargingStationBibImg,
    relatedImages: [stabilisasiParkirChargingStationBibImg, fwdImg],
  },
  // removed project: pelebaran-peningkatan-jalan-bayah-atu-bib (client: Pemerintah Daerah)
];

type ProjectTranslationOverride = {
  title?: string;
  client?: string;
  location?: string;
  year?: string;
  category?: string;
  status?: string;
  description?: string;
};

export type LocalizedProject = Project & {
  categoryLabel: string;
  statusLabel: string;
};

/**
 * Localize project content using available translations.
 * Falls back to original values if specific keys aren't found.
 */
export const getLocalizedProjects = (
  translations: TranslationResources,
): LocalizedProject[] => {
  const overrides = translations.projectsData ?? {};
  const categoryLabels = translations.projectsSection.categories ?? {};
  const statusLabels = translations.projectsSection.statuses ?? {};

  return projects.map((project) => {
    const projectOverride =
      overrides[project.slug] ?? ({} as ProjectTranslationOverride);

    return {
      ...project,
      title: projectOverride.title ?? project.title,
      client: projectOverride.client ?? project.client,
      location: projectOverride.location ?? project.location,
      year: projectOverride.year ?? project.year,
      description: projectOverride.description ?? project.description,
      categoryLabel:
        projectOverride.category ??
        categoryLabels[project.category] ??
        project.category,
      statusLabel:
        projectOverride.status ??
        statusLabels[project.status] ??
        project.status,
    };
  });
};
