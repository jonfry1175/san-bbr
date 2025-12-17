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
      "Podomoro Golf View Ruko Podomoro City, Jl. Blk. B2 No.20, Bojong Nangka, Cimanggis, Bogor Regency, West Java 16953",
    coordinates: [106.893131, -6.42958],
    category: "head-office",
    streetViewEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7929.446632078272!2d106.893131!3d-6.42958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb1ba7420b85%3A0x6408106de87ce1b4!2sPT%20Traktor%20Utama%20Nusantara!5e0!3m2!1sen!2sid!4v1765952991830!5m2!1sen!2sid",
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

export const getGoogleMapsEmbedUrl = (
  coordinates: LocationData["coordinates"],
  address?: string,
) => {
  const [longitude, latitude] = coordinates;
  // Use address if available, otherwise use coordinates
  const query = address
    ? encodeURIComponent(address)
    : `${latitude},${longitude}`;
  return `https://www.google.com/maps?q=${query}&output=embed`;
};
