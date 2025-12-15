import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { useI18n } from "@/lib/i18n";
import { type Product, type ProductCategory } from "@/lib/products";

type ProductGridProps = {
  products: Product[];
  productCategories: ProductCategory[];
  statusLabel: Record<Product["status"], { label: string; className: string }>;
  onViewDetails: (product: Product) => void;
  onReset: () => void;
  pageSize: number;
};

export const ProductGrid = memo(
  ({
    products,
    productCategories,
    statusLabel,
    onViewDetails,
    onReset,
    pageSize,
  }: ProductGridProps) => {
    const { t } = useI18n();

    return (
      <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {products.length === 0 ? (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="col-span-full rounded-2xl border border-dashed border-card-border bg-white p-6 sm:p-10 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Search className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {t("products.emptyState.title")}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {t("products.emptyState.description")}
              </p>
              <Button className="mt-6" variant="outline" onClick={onReset}>
                {t("products.filters.reset")}
              </Button>
            </motion.div>
          ) : (
            products.map((product, index) => {
              const category = productCategories.find(
                (item) => item.id === product.categoryId,
              );
              const statusMeta = statusLabel[product.status];

              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  category={category}
                  statusMeta={statusMeta}
                  onViewDetails={onViewDetails}
                  index={index}
                />
              );
            })
          )}
        </AnimatePresence>
      </div>
    );
  },
);
