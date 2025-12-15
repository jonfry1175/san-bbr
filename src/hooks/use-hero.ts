import { useContext } from "react";
import { HeroContext } from "@/components/HeroProvider";

export const useHero = () => {
  const ctx = useContext(HeroContext);
  if (!ctx) throw new Error("useHero must be used within a HeroProvider");
  return ctx;
};
