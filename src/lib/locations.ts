export type LocationCategory =
  | "head-office"
  | "strategic-partner"
  | "industry-partner";

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
  "strategic-partner": { color: "#2563EB" },
  "industry-partner": { color: "#059669" },
};

export const branchLocations: LocationData[] = [
  {
    id: "khs-palangka-raya",
    title: "PT SAN & PT BBR (Head Office)",
    subtitle: "Palangka Raya, Kalimantan Tengah, Kalimantan Tengah",
    address:
      "Jl. Mahir Mahar No. 88, Kel. Menteng, Kec. Jekan Raya, Kota Palangka Raya, Kalimantan Tengah, Kalimantan Tengah 73111",
    coordinates: [113.8809038, -2.2640251],
    category: "head-office",
    streetViewEmbedSrc:
      "https://www.google.com/maps/embed?pb=!4v1757492847217!6m8!1m7!1sXc3ueHqT0GdHdX-qV0Mriw!2m2!1d-2.264455526168132!2d113.8804974210874!3f38.87230926484026!4f-18.123220054045646!5f0.7820865974627469",
  },
  {
    id: "khs-borneo",
    title: "PT SAN & PT BBR (site Angsana, Tanah Bumbu)",
    subtitle: "Tanah Bumbu, Kalimantan Selatan",
    address:
      "Site BIB, Kec. Simpang Empat, Kab. Tanah Bumbu, Kalimantan Selatan 72275",
    coordinates: [115.6477118, -3.6953489],
    category: "strategic-partner",
    streetViewEmbedSrc:
      "https://www.google.com/maps/embed?pb=!4v1759084615969!6m8!1m7!1snaesT6S9uPCUpb-c0fdQ6A!2m2!1d-3.695390044055128!2d115.648227721138!3f283.30504286543794!4f-9.843522664343979!5f0.7820865974627469",
  },
  {
    id: "khs-tanjung",
    title: "PT SAN & PT BBR (site Tanjung, Tabalong)",
    subtitle: "Tabalong, Kalimantan Selatan",
    address: "Site Tanjung, Kec. Tanjung, Kab. Tabalong, Kalimantan Selatan",
    coordinates: [115.4220665, -2.1684764],
    category: "industry-partner",
    streetViewEmbedSrc:
      "https://www.google.com/maps/embed?pb=!4v1759084823276!6m8!1m7!1sFINym06qgTbCaFj4GoZCgg!2m2!1d-2.167936067865387!2d115.4217514627865!3f138.14137910219927!4f-4.5186158361791655!5f0.7820865974627469",
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
