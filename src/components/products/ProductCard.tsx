import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { type Product, type ProductCategory } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  category: ProductCategory | undefined;
  statusMeta: { label: string; className: string };
  onViewDetails: (product: Product) => void;
  index: number;
};

export const ProductCard = memo(
  ({
    product,
    category,
    statusMeta,
    onViewDetails,
    index,
  }: ProductCardProps) => {
    const { t } = useI18n();
    const baseSpecs = product.specs ?? [];
    const displaySpecs = product.weightClass
      ? [product.weightClass, ...baseSpecs]
      : baseSpecs;

    return (
      <motion.article
        key={product.id}
        layout
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{
          delay: index * 0.04,
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <Card className="group/card flex h-full flex-col overflow-hidden border border-card-border/80 bg-white/95 shadow-soft transition-all hover:-translate-y-1 hover:shadow-medium">
          <CardHeader className="space-y-4 p-4 sm:p-6 pb-3 sm:pb-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-card-border/60 bg-background-muted">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
              <div className="absolute left-3 sm:left-4 top-3 sm:top-4 flex flex-wrap gap-2">
                {/* <Badge className={`border backdrop-blur-sm ${statusMeta.className}`}>
                                    {statusMeta.label} 
                                  </Badge> */}
              </div>
              {category && (
                <Badge
                  variant="secondary"
                  className="absolute right-3 sm:right-4 top-3 sm:top-4 bg-white/90 text-primary shadow-sm"
                >
                  {t("products.status.contactLabel")}
                </Badge>
              )}
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                {product.name}
              </h3>
              <p
                className="text-xs sm:text-sm text-muted-foreground line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: String(product.description),
                }}
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-5 px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
            {displaySpecs.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {displaySpecs.map((spec) => {
                  const hasTonClassOrGrade =
                    /\b(Ton|Class)\b/i.test(spec) || /K-\d+/i.test(spec);
                  const specClassName = [
                    "flex items-center gap-2 rounded-xl border border-card-border/70 bg-background px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-muted-foreground",
                    "min-w-0 flex-1 sm:flex-none sm:w-auto",
                    hasTonClassOrGrade ? "" : "italic",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  return (
                    <div key={spec} className={specClassName}>
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="leading-relaxed break-words">
                        {spec}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="mt-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-card-border/70 bg-background-secondary/40 px-4 sm:px-6 py-4">
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-primary">
                {category?.name ?? t("products.hero.label")}
              </span>
              <span className="text-xs text-muted-foreground">
                {statusMeta.label}
              </span>
            </div>
            <Button
              className="w-full sm:w-auto items-center justify-center gap-2 bg-primary text-primary-foreground transition-all hover:bg-primary-light"
              onClick={() => onViewDetails(product)}
            >
              {t("common.viewDetails")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.article>
    );
  },
);
