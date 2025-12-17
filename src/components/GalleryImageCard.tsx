import { memo, useCallback, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ZoomIn, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

type Props = {
  src: string;
  alt: string;
  onOpen?: () => void;
};

// Enhanced image card with sophisticated hover effects and loading states
export const GalleryImageCard = memo(({ src, alt }: Props) => {
  const { t } = useI18n();
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Preload full image on hover/touch to make dialog open instant
  const prefetch = useCallback(() => {
    const img = new Image();
    img.src = src;
  }, [src]);

  const shimmerStyle = useMemo(
    () => ({
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.06) 25%, rgba(0,0,0,0.15) 37%, rgba(0,0,0,0.06) 63%)",
      backgroundSize: "400% 100%",
      animation: "shimmer 1.8s ease infinite",
    }),
    [],
  );

  return (
    <Card className="overflow-hidden group rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 border-0">
      <CardContent className="p-0 relative">
        <div
          className="aspect-[4/3] w-full bg-gradient-to-br from-muted via-muted/80 to-muted overflow-hidden relative"
          onMouseEnter={() => {
            prefetch();
            setIsHovered(true);
          }}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={prefetch}
        >
          {/* Base image with enhanced effects */}
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110 group-hover:contrast-105"
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            onLoad={() => setLoaded(true)}
            draggable={false}
          />

          {/* Enhanced skeleton shimmer while loading */}
          {!loaded && (
            <div
              aria-hidden
              className="absolute inset-0 flex items-center justify-center"
              style={shimmerStyle as React.CSSProperties}
            >
              <Camera className="w-8 h-8 text-muted-foreground/40" />
            </div>
          )}

          {/* Sophisticated hover overlays */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* Animated corner accent */}
          <motion.div
            className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/30 to-transparent"
            initial={{ scale: 0, rotate: 45 }}
            animate={{
              scale: isHovered ? 1 : 0,
              rotate: isHovered ? 0 : 45,
            }}
            transition={{ duration: 0.3, ease: "backOut" }}
          />

          {/* Enhanced view indicator */}
          <motion.div
            className="absolute right-4 top-4"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : -10,
            }}
            transition={{ duration: 0.3, delay: 0.1, ease: "backOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur-sm px-3 py-2 text-sm font-medium text-gray-900 shadow-lg border border-white/20">
              <ZoomIn className="h-4 w-4" />
              {t("gallery.overlay.clickToView")}
            </span>
          </motion.div>

          {/* Bottom gradient for better text readability */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />

          {/* Image quality indicator */}
          {loaded && (
            <motion.div
              className="absolute bottom-4 left-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -10,
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-1 rounded-lg bg-primary/90 px-2 py-1 text-xs font-medium text-white shadow-sm">
                <div className="w-2 h-2 bg-white rounded-full" />
                {t("gallery.card.hdBadge")}
              </span>
            </motion.div>
          )}
        </div>
      </CardContent>
      <style>{`
        @keyframes shimmer { 
          0% { background-position: 200% 0 } 
          100% { background-position: -200% 0 } 
        }
      `}</style>
    </Card>
  );
});
