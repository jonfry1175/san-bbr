export type ImgItem = {
  id: string;
  src: string;
  alt: string;
  project: string;
};

// Static imports for local gallery assets. Vite will return the resolved URL string for each import.
// import kal1 from "../assets/our-works/gallery/kal-1.jpg";
// import kal2 from "../assets/our-works/gallery/kal-2.jpg";
// import kal3 from "../assets/our-works/gallery/kal-3.jpg";
// import kal4 from "../assets/our-works/gallery/kal-4.jpg";
// import kal5 from "../assets/our-works/gallery/kal-5.jpg";
// import kal6 from "../assets/our-works/gallery/kal-6.jpg";
// import kal7 from "../assets/our-works/gallery/kal-7.jpg";
// import kal8 from "../assets/our-works/gallery/kal-8.jpg";
// import kal9 from "../assets/our-works/gallery/kal-9.jpg";

// import bor1 from "../assets/our-works/gallery/bor-1.jpg";
// import bor2 from "../assets/our-works/gallery/bor-2.jpg";
// import bor3 from "../assets/our-works/gallery/bor-3.jpg";
// import bor4 from "../assets/our-works/gallery/bor-4.jpg";
// import bor5 from "../assets/our-works/gallery/bor-5.jpg";
// import bor6 from "../assets/our-works/gallery/bor-6.jpg";
// import bor7 from "../assets/our-works/gallery/bor-7.jpg";
// import bor8 from "../assets/our-works/gallery/bor-8.jpg";
// import bor9 from "../assets/our-works/gallery/bor-9.jpg";

// import ad1 from "../assets/our-works/gallery/ad-1.jpg";
// import ad2 from "../assets/our-works/gallery/ad-2.jpg";
// import ad3 from "../assets/our-works/gallery/ad-3.jpg";
// import ad4 from "../assets/our-works/gallery/ad-4.jpg";
// import ad5 from "../assets/our-works/gallery/ad-5.jpg";
// import ad6 from "../assets/our-works/gallery/ad-6.jpg";
// import ad7 from "../assets/our-works/gallery/ad-7.jpg";
// import ad9 from "../assets/our-works/gallery/ad-9.jpg";

const kal1 = "https://placehold.co/800x600/f97316/ffffff?text=Kalimantan+1";
const kal2 = "https://placehold.co/800x600/f97316/ffffff?text=Kalimantan+2";
const kal3 = "https://placehold.co/800x600/f97316/ffffff?text=Kalimantan+3";
const kal4 = "https://placehold.co/800x600/f97316/ffffff?text=Kalimantan+4";
const kal5 = "https://placehold.co/800x600/f97316/ffffff?text=Kalimantan+5";
const kal6 = "https://placehold.co/800x600/f97316/ffffff?text=Kalimantan+6";
const kal7 = "https://placehold.co/800x600/f97316/ffffff?text=Kalimantan+7";
const kal8 = "https://placehold.co/800x600/f97316/ffffff?text=Kalimantan+8";
const kal9 = "https://placehold.co/800x600/f97316/ffffff?text=Kalimantan+9";

const bor1 = "https://placehold.co/800x600/f97316/ffffff?text=Borneo+1";
const bor2 = "https://placehold.co/800x600/f97316/ffffff?text=Borneo+2";
const bor3 = "https://placehold.co/800x600/f97316/ffffff?text=Borneo+3";
const bor4 = "https://placehold.co/800x600/f97316/ffffff?text=Borneo+4";
const bor5 = "https://placehold.co/800x600/f97316/ffffff?text=Borneo+5";
const bor6 = "https://placehold.co/800x600/f97316/ffffff?text=Borneo+6";
const bor7 = "https://placehold.co/800x600/f97316/ffffff?text=Borneo+7";
const bor8 = "https://placehold.co/800x600/f97316/ffffff?text=Borneo+8";
const bor9 = "https://placehold.co/800x600/f97316/ffffff?text=Borneo+9";

const ad1 = "https://placehold.co/800x600/f97316/ffffff?text=Adaro+1";
const ad2 = "https://placehold.co/800x600/f97316/ffffff?text=Adaro+2";
const ad3 = "https://placehold.co/800x600/f97316/ffffff?text=Adaro+3";
const ad4 = "https://placehold.co/800x600/f97316/ffffff?text=Adaro+4";
const ad5 = "https://placehold.co/800x600/f97316/ffffff?text=Adaro+5";
const ad6 = "https://placehold.co/800x600/f97316/ffffff?text=Adaro+6";
const ad7 = "https://placehold.co/800x600/f97316/ffffff?text=Adaro+7";
const ad9 = "https://placehold.co/800x600/f97316/ffffff?text=Adaro+9";

export const kalimantan: ImgItem[] = [
  {
    id: "kal-1",
    src: kal1,
    alt: "Government Project - Central Kalimantan 1",
    project: "kalimantan",
  },
  {
    id: "kal-2",
    src: kal2,
    alt: "Government Project - Central Kalimantan 2",
    project: "kalimantan",
  },
  {
    id: "kal-3",
    src: kal3,
    alt: "Government Project - Central Kalimantan 3",
    project: "kalimantan",
  },
  {
    id: "kal-4",
    src: kal4,
    alt: "Government Project - Central Kalimantan 4",
    project: "kalimantan",
  },
  {
    id: "kal-5",
    src: kal5,
    alt: "Government Project - Central Kalimantan 5",
    project: "kalimantan",
  },
  {
    id: "kal-6",
    src: kal6,
    alt: "Government Project - Central Kalimantan 6",
    project: "kalimantan",
  },
  {
    id: "kal-7",
    src: kal7,
    alt: "Government Project - Central Kalimantan 7",
    project: "kalimantan",
  },
  {
    id: "kal-8",
    src: kal8,
    alt: "Government Project - Central Kalimantan 8",
    project: "kalimantan",
  },
  {
    id: "kal-9",
    src: kal9,
    alt: "Government Project - Central Kalimantan 9",
    project: "kalimantan",
  },
];

export const borneo: ImgItem[] = [
  {
    id: "bor-1",
    src: bor1,
    alt: "Site PT. Borneo Indobara 1",
    project: "borneo",
  },
  {
    id: "bor-2",
    src: bor2,
    alt: "Site PT. Borneo Indobara 2",
    project: "borneo",
  },
  {
    id: "bor-3",
    src: bor3,
    alt: "Site PT. Borneo Indobara 3",
    project: "borneo",
  },
  {
    id: "bor-4",
    src: bor4,
    alt: "Site PT. Borneo Indobara 4",
    project: "borneo",
  },
  {
    id: "bor-5",
    src: bor5,
    alt: "Site PT. Borneo Indobara 5",
    project: "borneo",
  },
  {
    id: "bor-6",
    src: bor6,
    alt: "Site PT. Borneo Indobara 6",
    project: "borneo",
  },
  {
    id: "bor-7",
    src: bor7,
    alt: "Site PT. Borneo Indobara 7",
    project: "borneo",
  },
  {
    id: "bor-8",
    src: bor8,
    alt: "Site PT. Borneo Indobara 8",
    project: "borneo",
  },
  {
    id: "bor-9",
    src: bor9,
    alt: "Site PT. Borneo Indobara 9",
    project: "borneo",
  },
];

export const adaro: ImgItem[] = [
  {
    id: "ad-1",
    src: ad1,
    alt: "Site PT. Adaro Indonesia 1",
    project: "adaro",
  },
  {
    id: "ad-2",
    src: ad2,
    alt: "Site PT. Adaro Indonesia 2",
    project: "adaro",
  },
  {
    id: "ad-3",
    src: ad3,
    alt: "Site PT. Adaro Indonesia 3",
    project: "adaro",
  },
  {
    id: "ad-4",
    src: ad4,
    alt: "Site PT. Adaro Indonesia 4",
    project: "adaro",
  },
  {
    id: "ad-5",
    src: ad5,
    alt: "Site PT. Adaro Indonesia 5",
    project: "adaro",
  },
  {
    id: "ad-6",
    src: ad6,
    alt: "Site PT. Adaro Indonesia 6",
    project: "adaro",
  },
  {
    id: "ad-7",
    src: ad7,
    alt: "Site PT. Adaro Indonesia 7",
    project: "adaro",
  },
  {
    id: "ad-9",
    src: ad9,
    alt: "Site PT. Adaro Indonesia 8",
    project: "adaro",
  },
];
