import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useI18n } from "@/lib/i18n";
import { type Product, type ProductCategory } from "@/lib/products";

type ProductDetailProps = {
  product: Product | null;
  category: ProductCategory | undefined;
  categoryHighlight: string | undefined;
  statusLabel: Record<Product["status"], { label: string; className: string }>;
  statusDescription: Record<Product["status"], string>;
  onOpenChange: (open: boolean) => void;
};

export const ProductDetail = memo(
  ({
    product,
    category,
    categoryHighlight,
    statusLabel,
    statusDescription,
    onOpenChange,
  }: ProductDetailProps) => {
    const { t } = useI18n();

    const productSpecs = useMemo(() => {
      if (!product) return [];
      const baseSpecs = product.specs ?? [];
      return product.weightClass
        ? [product.weightClass, ...baseSpecs]
        : baseSpecs;
    }, [product]);

    if (!product) return null;

    return (
      <Dialog open={Boolean(product)} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl space-y-6">
          <DialogHeader className="items-start space-y-3 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                className={`border ${statusLabel[product.status].className}`}
              >
                {statusLabel[product.status].label}
              </Badge>
              {category && (
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary"
                >
                  {category.name}
                </Badge>
              )}
            </div>
            <DialogTitle className="text-2xl font-semibold text-foreground">
              {`${product.salesCategory === "rent" ? t("products.detail.rentPrefix") : t("products.detail.salePrefix")} – ${product.name}`}
            </DialogTitle>
            <DialogDescription
              className="text-body text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: (() => {
                  // Override description for BUKAKA products with correct capacity
                  if (
                    product.id ===
                    "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-1000b-fa"
                  ) {
                    return "60Ton/H capacity";
                  } else if (
                    product.id ===
                    "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-800p-sa"
                  ) {
                    return "50Ton/H capacity";
                  }
                  return String(product.description);
                })(),
              }}
            />
          </DialogHeader>

          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-background-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-small font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("products.detail.specsTitle")}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(() => {
                      // Override specs for BUKAKA products with correct capacity
                      let specsToDisplay = productSpecs;

                      if (
                        product.id ===
                        "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-1000b-fa"
                      ) {
                        specsToDisplay = [
                          ...(product.weightClass ? [product.weightClass] : []),
                          "60Ton/H capacity",
                        ];
                      } else if (
                        product.id ===
                        "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-800p-sa"
                      ) {
                        specsToDisplay = [
                          ...(product.weightClass ? [product.weightClass] : []),
                          "50Ton/H capacity",
                        ];
                      }

                      return specsToDisplay.map((spec) => (
                        <Badge
                          key={spec}
                          variant="outline"
                          className="bg-background text-muted-foreground italic"
                        >
                          {spec}
                        </Badge>
                      ));
                    })()}
                  </div>
                </div>
                {product.tags && product.tags.length > 0 && (
                  <div>
                    <p className="text-small font-semibold uppercase tracking-wide text-muted-foreground">
                      {t("products.detail.highlights")}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-accent/10 text-accent italic"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <ScrollArea className="max-h-[360px] pr-2">
              <div className="space-y-4 text-small text-muted-foreground">
                <div className="rounded-2xl border border-card-border/80 bg-white p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {t("products.detail.locationTitle")}
                  </p>
                  <p className="mt-2 leading-relaxed text-primary">
                    {product.id ===
                    "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-1000b-fa"
                      ? "Kab. Pulang Pisau, Kalimantan Tengah"
                      : t("products.detail.locationValue")}
                  </p>
                </div>
                {categoryHighlight && (
                  <div className="rounded-2xl border border-card-border/80 bg-background-secondary/60 p-4">
                    <p className="text-sm font-semibold text-foreground">
                      {t("products.detail.categoryHighlights")}
                    </p>
                    <p
                      className="mt-2 leading-relaxed italic"
                      dangerouslySetInnerHTML={{
                        __html: (() => {
                          // Override category highlights for BUKAKA products with correct capacity
                          if (
                            product.id ===
                            "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-1000b-fa"
                          ) {
                            return "60Ton/H capacity";
                          } else if (
                            product.id ===
                            "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-800p-sa"
                          ) {
                            return "50Ton/H capacity";
                          }
                          return categoryHighlight || "";
                        })(),
                      }}
                    />
                  </div>
                )}
                <div className="rounded-2xl border border-card-border/80 bg-white p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {t("products.detail.availabilityStatus")}
                  </p>
                  <p className="mt-2 leading-relaxed">
                    {statusDescription[product.status]}
                  </p>
                </div>
                <div className="rounded-2xl border border-card-border/80 bg-background-secondary/60 p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {t("products.detail.nextSteps")}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {(
                      t("products.detail.nextStepsList.0") && [
                        t("products.detail.nextStepsList.0"),
                        t("products.detail.nextStepsList.1"),
                        t("products.detail.nextStepsList.2"),
                      ]
                    ).map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollArea>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-left text-sm text-muted-foreground">
              {t("products.detail.helpText")}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  },
);
