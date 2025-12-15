import type { TranslationResources } from "@/lib/i18n";
import {
  aspal,
  batchingPlant,
  bulldozer,
  categoryIcons,
  combinationRoller,
  crawlerCrane,
  dumpTruck,
  excavator,
  mixerTruck,
  motorGrader,
  padFootRoller,
  peralatanAspal,
  pneumaticTireRoller,
  readyMix,
  roadSweeper,
  selfLoaderTruck,
  tandemRoller,
  tractorHeadTrailer,
  type ProductAsset,
  vibratoryRoller,
  wheelLoader,
} from "@/assets/products";

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
  highlight: string;
  translationKey: string;
  totalProducts: number;
};

export const salesCategoryDefinitions = [
  { id: "rent", defaultLabel: "Produk Sewa" },
  { id: "sale", defaultLabel: "Produk Jual" },
] as const;

export type SalesCategory = (typeof salesCategoryDefinitions)[number]["id"];

export type Product = {
  id: string;
  name: string;
  categoryId: ProductCategory["id"];
  description: string;
  image: string;
  specs: string[];
  weightClass?: string;
  price: number;
  status: "ready" | "preorder" | "limited";
  tags?: string[];
  salesCategory: SalesCategory;
};

type CategoryDefinition = {
  id: string;
  translationKey: string;
  defaults: Pick<ProductCategory, "name" | "description" | "highlight">;
};

const categoryDefinitions = [
  {
    id: "excavator",
    translationKey: "products.productsData.categories.excavator",
    defaults: {
      name: "Excavator",
      description:
        "Armada excavator untuk penggalian massal, <em>loading</em>, dan pekerjaan <em>earthwork</em> berat.",
      highlight: "Fuel Saving, Grade Control, Hydraulic precision",
    },
  },
  {
    id: "vibratory-roller",
    translationKey: "products.productsData.categories.vibratory-roller",
    defaults: {
      name: "Vibratory Roller",
      description:
        "Compactor vibrasi untuk pemadatan granular dan lapisan basecourse secara konsisten.",
      highlight: "Variable Amplitude, Auto Vibration, Telematics",
    },
  },
  {
    id: "pad-foot-roller",
    translationKey: "products.productsData.categories.pad-foot-roller",
    defaults: {
      name: "Pad Foot Roller",
      description:
        "Solusi pemadatan tanah kohesif dengan tekanan tinggi dan traksi maksimal.",
      highlight: "High Compaction, Pad Shell, Heavy Duty Axle",
    },
  },
  {
    id: "aspal",
    translationKey: "products.productsData.categories.aspal",
    defaults: {
      name: "Aspal",
      description:
        "Produk aspal berkualitas tinggi untuk konstruksi jalan dan infrastruktur.",
      highlight: "High-Grade Bitumen, Penetration Grade, Premium Quality",
    },
  },
  {
    id: "ready-mix",
    translationKey: "products.productsData.categories.ready-mix",
    defaults: {
      name: "Ready Mix",
      description:
        "Beton <em>Ready Mix</em> siap pakai dengan berbagai mutu untuk konstruksi.",
      highlight: "K-125 to K-550, Quality Assured",
    },
  },
  {
    id: "peralatan-aspal",
    translationKey: "products.productsData.categories.peralatan-aspal",
    defaults: {
      name: "Peralatan Aspal",
      description: "Peralatan pekerjaan perkerasan aspal.",
      highlight:
        "Uniform spray distribution, Reliable heating control, Consistent surface finish",
    },
  },
  {
    id: "batching-plant",
    translationKey: "products.productsData.categories.batching-plant",
    defaults: {
      name: "Batching Plant",
      description:
        "Batching plant modular untuk produksi beton ready-mix yang konsisten.",
      highlight: "90-120 M³/H, Twin Shaft Mixer, Moisture Sensor",
    },
  },
  {
    id: "combination-roller",
    translationKey: "products.productsData.categories.combination-roller",
    defaults: {
      name: "Combination Roller",
      description:
        "Roller kombinasi untuk finishing permukaan aspal dengan densitas optimal.",
      highlight: "Dual Drum, Pneumatic Tires, Auto Water Spray",
    },
  },
  {
    id: "tandem-roller",
    translationKey: "products.productsData.categories.tandem-roller",
    defaults: {
      name: "Tandem Roller",
      description:
        "Double drum roller untuk pemadatan lapisan aspal halus dan merata.",
      highlight: "Oscillation, Edge Press, Vibration Control",
    },
  },
  {
    id: "pneumatic-tire-roller",
    translationKey: "products.productsData.categories.pneumatic-tire-roller",
    defaults: {
      name: "Pneumatic Tire Roller",
      description:
        "Roller ban pneumatic untuk seal finishing dan bonding antar lapisan aspal.",
      highlight: "Variable Ballast, Tire Heating, Even Coverage",
    },
  },
  {
    id: "bulldozer",
    translationKey: "products.productsData.categories.bulldozer",
    defaults: {
      name: "Bulldozer",
      description:
        "Bulldozer kelas menengah hingga berat untuk land clearing dan ripping.",
      highlight: "Tier 3 Engine, PAT Blade, Ripper Ready",
    },
  },
  {
    id: "crawler-crane",
    translationKey: "products.productsData.categories.crawler-crane",
    defaults: {
      name: "Crawler Crane",
      description:
        "Crawler crane untuk erection struktur berat dan pekerjaan pondasi.",
      highlight: "Luffing Jib, Load Moment Limiter, Heavy Duty Undercarriage",
    },
  },
  {
    id: "road-sweeper",
    translationKey: "products.productsData.categories.road-sweeper",
    defaults: {
      name: "Road Sweeper",
      description:
        "Unit road sweeper untuk pembersihan jalan proyek dan area industri.",
      highlight: "High Capacity Hopper, Water Spray, Vacuum Assist",
    },
  },
  {
    id: "dump-truck",
    translationKey: "products.productsData.categories.dump-truck",
    defaults: {
      name: "Dump Truck",
      description:
        "Dump truck <em>heavy-duty</em> untuk pengangkutan material untuk kebutuhan konstruksi.",
      highlight: "Retarder Brake, Fleet Telematics, Heavy Duty Axle",
    },
  },
  {
    id: "mixer-truck",
    translationKey: "products.productsData.categories.mixer-truck",
    defaults: {
      name: "Mixer Truck",
      description:
        "Truk mixer berbagai kapasitas dengan sistem slump control dan washdown.",
      highlight: "Auto Dosing, Cabin Comfort, Easy Clean Drum",
    },
  },
  {
    id: "self-loader-truck",
    translationKey: "products.productsData.categories.self-loader-truck",
    defaults: {
      name: "Self Loader Truck",
      description:
        "Self loader untuk distribusi alat berat ringan dengan ramp hidrolik.",
      highlight: "Hydraulic Goose Neck, Winch Assist, Escort Kit",
    },
  },
  {
    id: "motor-grader",
    translationKey: "products.productsData.categories.motor-grader",
    defaults: {
      name: "Motor Grader",
      description:
        "Motor grader presisi untuk pembentukan profil jalan dan finishing subgrade.",
      highlight: "Slope Control, AWD, Precision Blade Control",
    },
  },
  {
    id: "wheel-loader",
    translationKey: "products.productsData.categories.wheel-loader",
    defaults: {
      name: "Wheel Loader",
      description:
        "Wheel loader multi fungsi untuk loading agregat, stockpiling, dan material handling.",
      highlight: "Auto Weigh, Traction Control, High Breakout Force",
    },
  },
  {
    id: "tractor-head-trailer",
    translationKey: "products.productsData.categories.tractor-head-trailer",
    defaults: {
      name: "Tractor Head / Trailer",
      description:
        "Tractor head dengan trailer modular untuk heavy haul dan logistik proyek.",
      highlight: "370 HP, ABS, Air Suspension",
    },
  },
] as const satisfies CategoryDefinition[];

type CategoryId = (typeof categoryDefinitions)[number]["id"];

const categoryDefinitionById = categoryDefinitions.reduce(
  (accumulator, definition) => {
    accumulator[definition.id as CategoryId] = definition;
    return accumulator;
  },
  {} as Record<CategoryId, (typeof categoryDefinitions)[number]>,
);

// Extra specs to add to specific products (same text across languages)
// Map product display name -> spec text to append
const EXTRA_SPECS_BY_NAME: Record<string, string> = {
  "Asphalt Sprayer - BSP 1000": "1000L/capacity",
  "Asphalt Sprayer - RUTRAN": "1000L/capacity",
  "Asphalt Sprayer Distributor - XI'AN DAGANG DGLS251GLS": "1000L/capacity",
  "Asphalt Sprayer Distributor - MITSUBISHI FE 349 H": "4500 L/capacity",
  "Pneumatic Tire Roller - KOTAI KP166": "16 ton class",
  "Pneumatic Tire Roller - SAKAI TS 200": "10-15 ton class",
  "Bulldozer - CATERPILLAR D7G": "20.5 ton class",
  "Bulldozer - MAXIMUS MD85XL": "20-21 ton class",
  "Bulldozer Mini - KOMATSU D31P-20E": "6.8 - 7 ton class",
  "Crawler Crane - KOBELCO BM 500": "50 ton class",
  "Crawler Crane - ZOOMLION ZC550H-1": "55 ton class",
  "Road Sweeper Vacuum Truck - POWER STAR": "4 M³ capacity",
  "Road Sweeper Vacuum Truck - SHACMAN SX5185GXSDR531R": "10 M³ capacity",
  "Dump Truck - HINO 130HD": "8 ton capacity",
  "Dump Truck - HINO FG235JJ": "15 ton capacity",
  "Dump Truck - MITSUBISHI Colt Diesel FE74HDV": "8 ton capacity",
  "Dump Truck - MITSUBISHI FM517HS": "15 ton capacity",
  "Dump Truck - UD TRUCKS CWE 280": "26 ton capacity",
  "Mixer Truck - HINO 130HD": "3 M³ Drum capacity",
  "Mixer Truck - UD TRUCKS CWE 280": "7 M³ Drum capacity",
  "Self Loader Truck - MITSUBISHI FV 416 P": "15-20 ton capacity",
  "Motor Grader - CATERPILLAR 120H": "12 ton class with 12 Ft blade",
  "Motor Grader - CATERPILLAR 120K": "17 ton class with 12 Ft blade",
  "Motor Grader - CATERPILLAR 160H": "23 ton class with 14 Ft blade",
  "Motor Grader - MITSUBISHI MG330": "11 ton class with 12.2 Ft blade",
  "Motor Grader - SINOMACH CHANGLIN 713H": "12 ton class with 12 Ft blade",
  "Wheel Loader - HYUNDAI HL635L": "10.3 ton class with 1.7 - 2 M³ bucket size",
  "Wheel Loader - KOMATSU WA380-3": "16.3 ton class with 3 M³ bucket size",
  "Wheel Loader - XCMG LW300FN": "10.6 ton class with 1.5 - 2.5 M³ bucket size",
  "Tractor Head / Trailer - UD TRUCKS GWE 370": "370 HP",
};

// Filled during product creation: product id -> extra spec text
const extraSpecProductIdToSpec = new Map<string, string>();

const categoryAssets = {
  excavator,
  "vibratory-roller": vibratoryRoller,
  "pad-foot-roller": padFootRoller,
  "motor-grader": motorGrader,
  "wheel-loader": wheelLoader,
  "peralatan-aspal": peralatanAspal,
  "batching-plant": batchingPlant,
  "combination-roller": combinationRoller,
  "tandem-roller": tandemRoller,
  "pneumatic-tire-roller": pneumaticTireRoller,
  bulldozer,
  "crawler-crane": crawlerCrane,
  "road-sweeper": roadSweeper,
  "dump-truck": dumpTruck,
  "mixer-truck": mixerTruck,
  "self-loader-truck": selfLoaderTruck,
  "tractor-head-trailer": tractorHeadTrailer,
  aspal,
  "ready-mix": readyMix,
} as const satisfies Record<CategoryId, ProductAsset[]>;

const selectCategoryImage = (categoryId: CategoryId) => {
  const assets = categoryAssets[categoryId] ?? [];
  const fallbackIcon = (categoryIcons as Record<string, string>)[categoryId];
  return assets[0]?.src ?? fallbackIcon ?? "";
};

const categorySalesCategoryMap: Record<CategoryId, SalesCategory> = {
  excavator: "rent",
  "vibratory-roller": "rent",
  "pad-foot-roller": "rent",
  "motor-grader": "rent",
  "wheel-loader": "rent",
  "peralatan-aspal": "rent",
  "batching-plant": "rent",
  "combination-roller": "rent",
  "tandem-roller": "rent",
  "pneumatic-tire-roller": "rent",
  bulldozer: "rent",
  "crawler-crane": "rent",
  "road-sweeper": "rent",
  "dump-truck": "rent",
  "mixer-truck": "rent",
  "self-loader-truck": "rent",
  "tractor-head-trailer": "rent",
  aspal: "sale",
  "ready-mix": "sale",
};

const highlightToSpecs = (highlight: string) =>
  highlight
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

type CategoryTranslationOverrides = {
  name?: string;
  description?: string;
  highlight?: string;
};

const resolveCategoryTranslation = (
  translations: TranslationResources,
  definition: CategoryDefinition,
): CategoryTranslationOverrides | undefined => {
  const segments = definition.translationKey.split(".");
  let current: unknown = translations;

  for (const segment of segments) {
    if (
      current &&
      typeof current === "object" &&
      segment in (current as Record<string, unknown>)
    ) {
      current = (current as Record<string, unknown>)[segment];
    } else {
      return undefined;
    }
  }

  if (!current || typeof current !== "object") {
    return undefined;
  }

  const { name, description, highlight } = current as Record<string, unknown>;

  return {
    name: typeof name === "string" ? name : undefined,
    description: typeof description === "string" ? description : undefined,
    highlight: typeof highlight === "string" ? highlight : undefined,
  };
};

const createProductId = (categoryId: CategoryId, name: string) => {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${categoryId}-${slug}`;
};

const productWeightClassOverrides: Record<string, string> = {
  [createProductId("excavator", "Excavator - HYUNDAI HX210S")]:
    "20 - 21.5 Ton Class",
  [createProductId("excavator", "Excavator - HYUNDAI R220-9SH")]:
    "21.2-22.5 Ton Class",
  [createProductId("excavator", "Excavator Long Arm - KOMATSU PC200-8")]:
    "20-25 Ton Class",
  [createProductId("excavator", "Excavator Mini Wheeled - HYUNDAI R60W-9S")]:
    "5.5-5.75 Ton Class",
  [createProductId("excavator", "Excavator Mini Wheeled - HYUNDAI R60WVSPRO")]:
    "5.75-6 Ton (0.21m3 bucket size)",
  [createProductId("excavator", "Excavator Wheeled - HYUNDAI R170W-9S")]:
    "17.3-18.3 Ton (0.76m3 bucket size)",
  [createProductId("vibratory-roller", "Vibratory Roller - DYNAPAC CA250D")]:
    "12.1 Ton Class",
  [createProductId("vibratory-roller", "Vibratory Roller - HAMM 3410")]:
    "10-12 Ton Class",
  [createProductId("vibratory-roller", "Vibratory Roller - HAMM 3520")]:
    "19.8-20 Ton Class",
  [createProductId("pad-foot-roller", "Pad Foot Roller - HAMM 320")]:
    "20-20.5 Ton Class",
  [createProductId(
    "pad-foot-roller",
    "Vibratory : Pad Foot Roller - DYNAPAC CA610D",
  )]: "20.7-21 Ton Class",
  [createProductId("peralatan-aspal", "Asphalt Finisher - DYNAPAC DRF-25-70C")]:
    "2.3-6 working width with 13.9 Ton asphalt capacity",
  [createProductId("peralatan-aspal", "Asphalt Finisher - SUMITOMO HA60C")]:
    "2.3-6 working width with 13.9 Ton asphalt capacity",
  [createProductId(
    "pad-foot-roller",
    "Vibratory : Pad Foot Roller - KOTAI KS266H-2",
  )]: "26-26,5 Ton class",
};

export const productCategories: ProductCategory[] = categoryDefinitions.map(
  (definition) => ({
    id: definition.id,
    name: definition.defaults.name,
    description: definition.defaults.description,
    highlight: definition.defaults.highlight,
    translationKey: definition.translationKey,
    image: selectCategoryImage(definition.id),
    totalProducts: (categoryAssets[definition.id] ?? []).length,
  }),
);

export const products: Product[] = categoryDefinitions.flatMap((definition) => {
  const assets = categoryAssets[definition.id] ?? [];
  return assets.map((asset) => {
    const specs = highlightToSpecs(definition.defaults.highlight);
    const id = createProductId(definition.id, asset.name);

    // If this asset has a configured extra spec, append it and record by id
    const extraSpecForThis = EXTRA_SPECS_BY_NAME[asset.name];
    if (extraSpecForThis) {
      if (!specs.includes(extraSpecForThis)) specs.push(extraSpecForThis);
      extraSpecProductIdToSpec.set(id, extraSpecForThis);
    }

    return {
      id,
      name: asset.name,
      categoryId: definition.id,
      description: definition.defaults.description,
      image: asset.src,
      specs,
      weightClass: productWeightClassOverrides[id],
      price: 0,
      status: "ready" as const,
      salesCategory: categorySalesCategoryMap[definition.id] ?? "rent",
    };
  });
});

export const sortOptions = [
  { id: "recommended", label: "Rekomendasi" },
  { id: "name-asc", label: "Nama A-Z" },
  { id: "name-desc", label: "Nama Z-A" },
];

export type SortOptionId = (typeof sortOptions)[number]["id"];

export const getCategoryById = (id: ProductCategory["id"]) =>
  productCategories.find((category) => category.id === id);

export const getProductsByCategory = (
  categoryId: ProductCategory["id"] | "all",
) => {
  if (categoryId === "all") return products;
  return products.filter((product) => product.categoryId === categoryId);
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
};

// Localized helpers
export const getLocalizedSortOptions = (translations: TranslationResources) => {
  // Translations provide a generic filters.sortPlaceholder only; keep ids and map labels if needed later.
  // For now, keep Indonesian labels until we add explicit keys.
  const mapped = sortOptions.map((opt) => ({
    ...opt,
    label:
      translations.products?.productsData?.sortOptions?.[opt.id]?.label ??
      opt.label,
  }));
  return mapped;
};

export const getLocalizedProductCategories = (
  translations: TranslationResources,
) => {
  return productCategories.map((cat) => {
    const definition = categoryDefinitionById[cat.id];
    const overrides = definition
      ? resolveCategoryTranslation(translations, definition)
      : undefined;

    return {
      ...cat,
      name: overrides?.name ?? cat.name,
      description: overrides?.description ?? cat.description,
      highlight: overrides?.highlight ?? cat.highlight,
    };
  });
};

export const getLocalizedProducts = (translations: TranslationResources) => {
  return products.map((p) => {
    const override = translations.products?.productsData?.products?.[p.id];

    const definition = categoryDefinitionById[p.categoryId as CategoryId];
    const categoryOverride = definition
      ? resolveCategoryTranslation(translations, definition)
      : undefined;

    const description =
      override?.description ?? categoryOverride?.description ?? p.description;
    // Ensure any configured extra spec for this product is present across languages
    const localizedSpecs = override?.specs ?? p.specs;
    const finalSpecs = localizedSpecs.slice();
    const extraSpecForId = extraSpecProductIdToSpec.get(p.id);
    if (extraSpecForId && !finalSpecs.includes(extraSpecForId)) {
      finalSpecs.push(extraSpecForId);
    }

    return {
      ...p,
      name: override?.name ?? p.name,
      description,
      specs: override?.specs ?? finalSpecs,
      weightClass: override?.weightClass ?? p.weightClass,
      tags: override?.tags ?? p.tags,
      salesCategory: override?.salesCategory ?? p.salesCategory,
    };
  });
};
