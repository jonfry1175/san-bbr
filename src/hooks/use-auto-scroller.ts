import { useEffect, useRef, useState } from "react";
import { useAnimation, useInView, useReducedMotion } from "framer-motion";

type UseAutoScrollerProps = {
  /** Total number of original items in the scroller */
  totalItems: number;
  /** Width of a single item card in pixels */
  itemWidth: number;
  /** Gap between items in pixels */
  gap: number;
  /** Animation duration multiplier, adjusts speed. Higher is slower. */
  durationMultiplier?: number;
};

export const useAutoScroller = ({
  totalItems,
  itemWidth,
  gap,
  durationMultiplier = 4,
}: UseAutoScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2 });
  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const sliderWidth = (itemWidth + gap) * totalItems - gap;

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (isInView && !isHovering) {
      controls.start({
        x: [-sliderWidth - gap, 0],
        transition: {
          x: {
            duration: Math.max(8, totalItems * durationMultiplier),
            repeat: Infinity,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [
    controls,
    gap,
    isHovering,
    isInView,
    prefersReducedMotion,
    sliderWidth,
    totalItems,
    durationMultiplier,
  ]);

  return {
    containerRef,
    controls,
    sliderWidth,
    isHovering,
    setIsHovering,
  };
};
