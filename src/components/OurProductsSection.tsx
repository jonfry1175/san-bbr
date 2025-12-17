import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/MotionSection";
import { productsAssets } from "@/assets/products";

// Select specific categories to display that match the "heavy equipment" theme
// Using keys that exist in productsAssets
const DISPLAY_CATEGORIES = [
  { id: "excavator", label: "Excavator" },
  { id: "dumpTruck", label: "Dump Truck" },
  { id: "wheelLoader", label: "Wheel Loader" },
  { id: "motorGrader", label: "Motor Grader" },
  { id: "vibratoryRoller", label: "Vibratory Roller" },
  { id: "bulldozer", label: "Bulldozer" },
];

const OurProductsSection = memo(() => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <MotionSection
      id="our-products"
      className="section-padding bg-background"
    >
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="heading-lg text-foreground mb-4" variants={item}>
            Produk Kami
          </motion.h2>
          <motion.p className="text-large text-muted-foreground" variants={item}>
            Jelajahi koleksi lengkap heavy equipment dan truck berkualitas tinggi untuk semua kebutuhan industri Anda
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {DISPLAY_CATEGORIES.map((cat) => {
            const asset = productsAssets[cat.id]?.[0];
            
            // Fallback if asset is missing (though we checked they exist)
            if (!asset) return null;

            return (
              <motion.div key={cat.id} variants={item}>
                <Link to="/products?category=rent" className="group block h-full">
                  <div className="bg-card border border-border rounded-xl p-4 h-full flex flex-col items-center justify-between hover:shadow-lg hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="relative w-full aspect-[4/3] mb-3 overflow-hidden rounded-lg bg-muted/10 flex items-center justify-center">
                         <img
                            src={asset.src}
                            alt={cat.label}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                         />
                    </div>
                    {/* Label mimicking a brand logo text if we don't have the logo */}
                    <span className="font-semibold text-sm md:text-base text-center text-foreground/80 group-hover:text-foreground">
                      {cat.label}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/products?category=rent">
                Jelajahi Produk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
      </div>
    </MotionSection>
  );
});

export default OurProductsSection;

