import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, X, ZoomOut, ChevronDown, ChevronUp } from "lucide-react";
import OlMap from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import Overlay from "ol/Overlay";
import { fromLonLat } from "ol/proj";
import { defaults as defaultInteractions } from "ol/interaction";
import { defaults as defaultControls } from "ol/control";
import { unByKey } from "ol/Observable";
import "ol/ol.css";
import { useI18n } from "@/lib/i18n";
import {
  branchLocations,
  LOCATION_CATEGORY_META,
  type LocationCategory,
  type LocationData,
} from "@/lib/locations";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const LocationMap = () => {
  const { translations } = useI18n();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const tooltipContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<Overlay | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [map, setMap] = useState<OlMap | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(
    null,
  );
  const [showAllCards, setShowAllCards] = useState(false);

  const locations = useMemo<LocationData[]>(() => branchLocations, []);

  useEffect(() => {
    if (!mapContainerRef.current || !tooltipContainerRef.current) {
      return undefined;
    }

    const mobileZoom = 4.8;
    const desktopZoom = 5.2;
    const initialIsMobile = window.innerWidth < 768;

    const mapInstance = new OlMap({
      target: mapContainerRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([117.0, -2.5]),
        zoom: initialIsMobile ? mobileZoom : desktopZoom,
      }),
      interactions: defaultInteractions({
        mouseWheelZoom: false,
      }),
      controls: defaultControls({
        attribution: false,
      }),
    });

    const vectorSource = new VectorSource();

    locations.forEach((location) => {
      const marker = new Feature<Point>({
        geometry: new Point(fromLonLat(location.coordinates)),
        locationData: location,
      });

      const markerColor = LOCATION_CATEGORY_META[location.category].color;

      marker.setStyle(
        new Style({
          image: new Icon({
            src:
              "data:image/svg+xml;base64," +
              btoa(`
                <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 0C7.163 0 0 7.163 0 16C0 28 16 42 16 42S32 28 32 16C32 7.163 24.837 0 16 0Z" fill="${markerColor}"/>
                  <circle cx="16" cy="16" r="8" fill="white"/>
                </svg>
              `),
            scale: 0.8,
            anchor: [0.5, 1],
          }),
        }),
      );

      vectorSource.addFeature(marker);
    });

    const vectorLayer = new VectorLayer({ source: vectorSource });
    mapInstance.addLayer(vectorLayer);

    const overlay = new Overlay({
      element: tooltipContainerRef.current,
      offset: [-120, 10],
      positioning: "bottom-center",
    });

    mapInstance.addOverlay(overlay);
    overlayRef.current = overlay;

    const pointerMoveKey = mapInstance.on("pointermove", (event) => {
      const feature = mapInstance.forEachFeatureAtPixel(
        event.pixel,
        (item) => item as Feature<Point> | undefined,
      );

      if (feature) {
        const locationData = feature.get("locationData") as
          | LocationData
          | undefined;
        if (locationData) {
          setSelectedLocation(locationData);
          overlay.setPosition(event.coordinate);
          if (mapContainerRef.current) {
            mapContainerRef.current.style.cursor = "pointer";
          }
        }
      } else {
        setSelectedLocation(null);
        overlay.setPosition(undefined);
        if (mapContainerRef.current) {
          mapContainerRef.current.style.cursor = "";
        }
      }
    });

    const clickKey = mapInstance.on("click", (event) => {
      const feature = mapInstance.forEachFeatureAtPixel(
        event.pixel,
        (item) => item as Feature<Point> | undefined,
      );

      if (feature) {
        const locationData = feature.get("locationData") as
          | LocationData
          | undefined;
        if (locationData) {
          mapInstance.getView().animate({
            center: fromLonLat(locationData.coordinates),
            zoom: 10,
            duration: 1000,
          });
          setSelectedLocation(locationData);
          overlay.setPosition(event.coordinate);
        }
      } else {
        setSelectedLocation(null);
        overlay.setPosition(undefined);
      }
    });

    const handleResize = () => {
      const currentlyMobile = window.innerWidth < 768;
      const targetZoom = currentlyMobile ? mobileZoom : desktopZoom;
      mapInstance.getView().setZoom(targetZoom);
      setIsMobile(currentlyMobile);
    };

    setIsMobile(initialIsMobile);

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    setMap(mapInstance);

    return () => {
      unByKey(pointerMoveKey);
      unByKey(clickKey);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      overlayRef.current = null;
      mapInstance.setTarget(undefined);
    };
  }, [locations]);

  const getCategoryColor = (category: LocationCategory) =>
    LOCATION_CATEGORY_META[category].color;

  return (
    <section
      id="locations"
      ref={sectionRef}
      className="section-padding bg-background-secondary"
    >
      <div className="container mx-auto container-padding">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          custom={0}
        >
          <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-sm font-medium text-accent">
            {translations.location.map?.coverageBadge}
          </span>
          <h2 className="heading-lg mt-5 text-primary">
            {translations.location.map?.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body text-muted-foreground">
            {translations.location.map?.subheadline}
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          custom={1}
        >
          <div className="mb-6 flex flex-wrap justify-center gap-4 rounded-lg border border-card-border bg-card p-4 shadow-soft">
            {locations.map((location) => (
              <div
                key={location.id}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: getCategoryColor(location.category),
                  }}
                />
                <span>{location.title}</span>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-card-border bg-card shadow-soft">
            <div
              ref={mapContainerRef}
              className="h-[500px] w-full md:h-[600px]"
            />

            <button
              type="button"
              onClick={() => {
                if (!map) {
                  return;
                }
                const currentlyMobile = window.innerWidth < 768;
                const targetZoom = currentlyMobile ? 4.8 : 5.2;
                map.getView().animate({
                  center: fromLonLat([117.0, -2.5]),
                  zoom: targetZoom,
                  duration: 1000,
                });
                setSelectedLocation(null);
                overlayRef.current?.setPosition(undefined);
              }}
              className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-lg border border-card-border bg-white px-4 py-2 text-sm font-medium text-muted-foreground shadow-soft transition-colors hover:bg-muted"
            >
              <ZoomOut className="h-4 w-4" />
              {translations.location.map?.zoomOut}
            </button>

            <div
              ref={tooltipContainerRef}
              className={`absolute z-20 transition-opacity duration-200 ${
                selectedLocation
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              {selectedLocation && (
                <div className="min-w-[240px] max-w-xs overflow-hidden rounded-xl border border-card-border bg-white shadow-soft">
                  <div
                    className="relative px-4 py-3 pr-10"
                    style={{
                      backgroundColor: getCategoryColor(
                        selectedLocation.category,
                      ),
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedLocation(null);
                        overlayRef.current?.setPosition(undefined);
                      }}
                      className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/25 transition-colors hover:bg-white/40"
                    >
                      <X className="h-4 w-4 text-white" />
                    </button>
                    <h4 className="text-base font-semibold text-white">
                      {selectedLocation.title}
                    </h4>
                    <p className="text-sm text-white/85">
                      {selectedLocation.subtitle}
                    </p>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-xs text-muted-foreground">
                      {selectedLocation.address}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl">
                {locations.map((location, index) => {
                  if (isMobile && !showAllCards && index >= 3) {
                    return null;
                  }

                  const categoryColor = getCategoryColor(location.category);

                  return (
                    <motion.div
                      key={location.id}
                      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-medium"
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={fadeInVariants}
                      custom={2 + index * 0.1}
                      whileHover={{ y: -6 }}
                    >
                      <div className="flex flex-col items-center gap-3 px-4 pt-6">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-full"
                          style={{ backgroundColor: categoryColor }}
                        >
                          <MapPin className="h-5 w-5 text-white" />
                        </span>
                        <div className="px-2">
                          <p className="text-sm font-semibold text-primary">
                            {location.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {location.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex h-full w-full flex-1 flex-col justify-between gap-4 px-4 pb-6 text-sm text-muted-foreground">
                        <p className="leading-relaxed text-center mt-2">
                          {location.address}
                        </p>
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            if (!map) {
                              return;
                            }
                            map.getView().animate({
                              center: fromLonLat(location.coordinates),
                              zoom: 10,
                              duration: 1000,
                            });
                            setSelectedLocation(location);
                            overlayRef.current?.setPosition(
                              fromLonLat(location.coordinates),
                            );
                          }}
                          className="mt-auto flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors"
                          style={{ backgroundColor: categoryColor }}
                        >
                          <MapPin className="h-4 w-4" />
                          {translations.location.map?.viewOnMap}
                        </button>
                      </div>

                      <span
                        className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                        style={{ backgroundColor: categoryColor }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {locations.length > 3 && (
              <div className="mt-6 flex justify-center md:hidden">
                <motion.button
                  type="button"
                  onClick={() => setShowAllCards((prev) => !prev)}
                  className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-accent-light"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {showAllCards ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      {translations.location.map?.showLess}
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      {(
                        translations.location.map?.viewMoreTemplate || ""
                      ).replace("{count}", String(locations.length - 3))}
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;
