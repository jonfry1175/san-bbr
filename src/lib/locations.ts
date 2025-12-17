export type LocationCategory =
  | "head-office"
  | "branch-office"
  | "warehouse"
  | "site-support";

export type LocationData = {
  id: string;
  title: string;
  subtitle: string;
  address: string;
  coordinates: [number, number];
  category: LocationCategory;
  streetViewEmbedSrc?: string;
};

export const LOCATION_CATEGORY_META: Record<
  LocationCategory,
  { color: string }
> = {
  "head-office": { color: "#DC2626" },
  "branch-office": { color: "#059669" },
  "warehouse": { color: "#7C3AED" },
  "site-support": { color: "#D4AF37" },
};

export const branchLocations: LocationData[] = [
  {
    id: "head-office-bogor",
    title: "Head Office",
    subtitle: "Bogor",
    address:
      "Rukan Podomoro Golf View Blok B2 No.30, Cimanggis, Gunung Putri, Bogor, Jawa Barat 16963",
    coordinates: [106.9494, -6.4501],
    category: "head-office",
  },
  {
    id: "branch-office-samarinda",
    title: "Branch Office",
    subtitle: "Samarinda",
    address:
      "Jl. Trikora Pergudangan Mangkupalas Bisnis Center Blok E 12 Simpang Pasir, Samarinda, Kalimantan Timur, 75111",
    coordinates: [117.1611, -0.4953],
    category: "branch-office",
  },
  {
    id: "branch-office-banjarmasin",
    title: "Branch Office",
    subtitle: "Banjarmasin",
    address:
      "JL. Trikora RT 34 RW005, Guntung manggis, Landasan Ulin, Banjarbaru, Kalimantan Selatan 70721",
    coordinates: [114.766542, -3.458129],
    category: "branch-office",
  },
  {
    id: "warehouse-bogor",
    title: "Warehouse",
    subtitle: "Bogor",
    address:
      "Jalan Raya Tapos, Depok Cimangsis RT 026/013, Bogor, Jawa Barat, 16963",
    coordinates: [106.9234, -6.4234],
    category: "warehouse",
  },
  {
    id: "site-support-jambi",
    title: "Site Support",
    subtitle: "Jambi",
    address: "Jambi, Sumatera",
    coordinates: [103.6044, -1.6101],
    category: "site-support",
  },
  {
    id: "site-support-sulawesi",
    title: "Site Support",
    subtitle: "Sulawesi",
    address: "Sulawesi Region",
    coordinates: [120.1746, -2.5489],
    category: "site-support",
  },
];

export const getGoogleMapsDirectionsUrl = (
  coordinates: LocationData["coordinates"],
  label?: string,
) => {
  const [longitude, latitude] = coordinates;
  const base = `https://maps.google.com/?q=${latitude},${longitude}`;
  return label ? `${base}+(${encodeURIComponent(label)})` : base;
};

export const getGoogleMapsStreetViewEmbedUrl = (
  coordinates: LocationData["coordinates"],
  opts?: { heading?: number; pitch?: number; fov?: number },
) => {
  const [longitude, latitude] = coordinates;
  const heading = opts?.heading ?? 0;
  const pitch = opts?.pitch ?? 0;
  const fov = opts?.fov ?? 90;

  return `https://maps.google.com/maps?layer=c&cbll=${latitude},${longitude}&cbp=12,${heading},0,${pitch},${fov}&output=svembed`;
};
