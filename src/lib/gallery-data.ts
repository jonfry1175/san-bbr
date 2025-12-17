export type ImgItem = {
  id: string;
  src: string;
  alt: string;
  project: string;
};

// Unsplash images for Heavy Equipment Rental (Rental Alat Berat)
const he1 = "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=800&auto=format&fit=crop";
const he2 = "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=800&auto=format&fit=crop";
const he3 = "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop";
const he4 = "https://images.unsplash.com/photo-1628131346067-175f5fe7a82c?q=80&w=800&auto=format&fit=crop";
const he5 = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop";
const he6 = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop";
const he7 = "https://images.unsplash.com/photo-1533230559099-0df850b5e947?q=80&w=800&auto=format&fit=crop";
const he8 = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop";
const he9 = "https://images.unsplash.com/photo-1519003300449-424423c28711?q=80&w=800&auto=format&fit=crop";

// Unsplash images for Mining Construction Services (Jasa Konstruksi Tambang)
const mc1 = "https://images.unsplash.com/photo-1599933310642-8f075ee0492b?q=80&w=800&auto=format&fit=crop";
const mc2 = "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=800&auto=format&fit=crop";
const mc3 = "https://images.unsplash.com/photo-1584467541268-b040f83be3dd?q=80&w=800&auto=format&fit=crop";
const mc4 = "https://images.unsplash.com/photo-1495036017122-f9d25ce42d99?q=80&w=800&auto=format&fit=crop";
const mc5 = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop";
const mc6 = "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=800&auto=format&fit=crop";
const mc7 = "https://images.unsplash.com/photo-1580901368919-7738ef321abd?q=80&w=800&auto=format&fit=crop";
const mc8 = "https://images.unsplash.com/photo-1508924445696-039c0f993d56?q=80&w=800&auto=format&fit=crop";
const mc9 = "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=800&auto=format&fit=crop";


export const heavyEquipment: ImgItem[] = [
  {
    id: "he-1",
    src: he1,
    alt: "Excavator in action - Heavy Equipment Rental",
    project: "heavyEquipment",
  },
  {
    id: "he-2",
    src: he2,
    alt: "Construction site equipment - PT SINERGY AGTER NUSANTARA",
    project: "heavyEquipment",
  },
  {
    id: "he-3",
    src: he3,
    alt: "Heavy machinery fleet",
    project: "heavyEquipment",
  },
  {
    id: "he-4",
    src: he4,
    alt: "Bulldozer leveling ground",
    project: "heavyEquipment",
  },
  {
    id: "he-5",
    src: he5,
    alt: "Construction site operations",
    project: "heavyEquipment",
  },
  {
    id: "he-6",
    src: he6,
    alt: "Heavy duty truck",
    project: "heavyEquipment",
  },
  {
    id: "he-7",
    src: he7,
    alt: "Crane lifting operations",
    project: "heavyEquipment",
  },
  {
    id: "he-8",
    src: he8,
    alt: "Excavator digging",
    project: "heavyEquipment",
  },
  {
    id: "he-9",
    src: he9,
    alt: "Equipment maintenance and readiness",
    project: "heavyEquipment",
  },
];

export const miningConstruction: ImgItem[] = [
  {
    id: "mc-1",
    src: mc1,
    alt: "Mining site construction - PT BUMI BLAMBANGAN RESOURCES",
    project: "miningConstruction",
  },
  {
    id: "mc-2",
    src: mc2,
    alt: "Large scale earthworks",
    project: "miningConstruction",
  },
  {
    id: "mc-3",
    src: mc3,
    alt: "Mining infrastructure development",
    project: "miningConstruction",
  },
  {
    id: "mc-4",
    src: mc4,
    alt: "Hauling road construction",
    project: "miningConstruction",
  },
  {
    id: "mc-5",
    src: mc5,
    alt: "Open pit mining operations",
    project: "miningConstruction",
  },
  {
    id: "mc-6",
    src: mc6,
    alt: "Heavy construction machinery at mine site",
    project: "miningConstruction",
  },
  {
    id: "mc-7",
    src: mc7,
    alt: "Site preparation and leveling",
    project: "miningConstruction",
  },
  {
    id: "mc-8",
    src: mc8,
    alt: "Mining road network",
    project: "miningConstruction",
  },
  {
    id: "mc-9",
    src: mc9,
    alt: "Project site overview",
    project: "miningConstruction",
  },
];
