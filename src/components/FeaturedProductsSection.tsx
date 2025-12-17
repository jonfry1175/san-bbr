import { memo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { productsAssets } from "@/assets/products";

// Helper to map category to URL type
const getUrlCategory = (title: string) => {
  const map: Record<string, string> = {
    "Excavator": "excavator",
    "Dump Truck": "dumpTruck",
    "Vibratory Roller": "vibratoryRoller",
    "Motor Grader": "motorGrader",
  };
  return map[title] || "rent";
};

type ProductCardProps = {
  title: string;
  image: string;
  index: number;
  brandName?: string; // Using text instead of logo if logo missing
};

const ProductCard = ({
  title,
  image,
  index,
  brandName,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "bg-white rounded-xl overflow-hidden group relative transition-all duration-500 hover:shadow-2xl border border-gray-100",
        "h-64 sm:h-72" // Fixed height for consistency
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/products?category=${getUrlCategory(title)}`}
        className="block h-full"
      >
        <div className="relative h-full flex flex-col">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200"></div>

          {/* Decorative curved element - using accent color */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-bl-full transform translate-x-10 -translate-y-10 opacity-90"></div>

          {/* Content area */}
          <div className="relative z-10 flex h-full p-6">
            {/* Left side - Title and Arrow */}
            <div className="flex flex-col justify-between flex-1 pr-4 z-20">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 uppercase tracking-wide">
                  {title}
                </h3>
                <div className="w-12 h-1 bg-foreground mb-3"></div>
                {brandName && (
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {brandName}
                  </div>
                )}
              </div>

              <motion.div
                className="flex items-center mt-auto"
                animate={{ x: isHovered ? 6 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="h-6 w-6 text-foreground" />
              </motion.div>
            </div>

            {/* Right side - Product Image */}
            <div className="flex items-center justify-center flex-1 relative">
              <motion.div
                className="w-full h-full flex items-center justify-center"
                animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? -2 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={image}
                  alt={title}
                  className="max-w-[140%] max-h-[140%] object-contain drop-shadow-xl transform translate-x-4"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturedProductsSection = memo(() => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Selecting 4 categories to feature
  const features = [
    {
      title: "Dump Truck",
      image: productsAssets.dumpTruck?.[0]?.src || "",
      brandName: "HINO / UD TRUCKS",
    },
    {
      title: "Excavator",
      image: productsAssets.excavator?.[0]?.src || "",
      brandName: "HYUNDAI / KOMATSU",
    },
    {
      title: "Motor Grader",
      image: productsAssets.motorGrader?.[0]?.src || "",
      brandName: "CATERPILLAR",
    },
    {
      title: "Vibratory Roller",
      image: productsAssets.vibratoryRoller?.[0]?.src || "",
      brandName: "HAMM / SAKAI",
    },
  ];

  return (
    <section
      id="featured-products"
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
    >
       {/* Background decoration */}
       <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-muted/30 to-transparent -z-10" />

      <div className="container mx-auto container-padding">
        <motion.div
          className="mb-16 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 uppercase tracking-wider">
            Produk Kami
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Heavy Equipment & Truck Berkualitas Tinggi
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Mesin berkualitas tinggi yang dirancang untuk daya tahan, efisiensi, dan performa dalam lingkungan kerja yang menantang
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((product, index) => (
            <ProductCard key={product.title} {...product} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/25"
              asChild
            >
              <Link to="/products?category=rent">
                Lihat Semua Katalog
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
        </motion.div>
      </div>
    </section>
  );
});

export default FeaturedProductsSection;

