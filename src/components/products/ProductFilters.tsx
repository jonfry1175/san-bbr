import { memo, useState } from "react";
import { motion } from "framer-motion";
import { Filter, RefreshCw, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useI18n } from "@/lib/i18n";
import { type ProductCategory } from "@/lib/products";

type ProductFiltersProps = {
  productCategories: ProductCategory[];
  categoryTotals: Record<string, number>;
  selectedCategory: "all" | ProductCategory["id"];
  onSelectCategory: (categoryId: "all" | ProductCategory["id"]) => void;
  isFilterActive: boolean;
  onReset: () => void;
};

export const ProductFilters = memo(
  ({
    productCategories,
    categoryTotals,
    selectedCategory,
    onSelectCategory,
    isFilterActive,
    onReset,
  }: ProductFiltersProps) => {
    const { t } = useI18n();

    const [primaryCategories, remainingCategories] = useMemo(() => {
      const primary = productCategories.slice(0, 5);
      const remaining = productCategories.slice(5);
      return [primary, remaining] as const;
    }, [productCategories]);

    const selectedCategoryData =
      selectedCategory === "all"
        ? undefined
        : productCategories.find((item) => item.id === selectedCategory);

    const isSelectedInRemaining =
      selectedCategory !== "all" &&
      remainingCategories.some((item) => item.id === selectedCategory);

    const dropdownTriggerLabel = isSelectedInRemaining
      ? selectedCategoryData?.name
      : t("products.filters.moreCategoriesLabel");

    const dropdownBadgeCount = isSelectedInRemaining
      ? (categoryTotals[selectedCategory] ?? 0)
      : remainingCategories.reduce(
          (total, category) => total + (categoryTotals[category.id] ?? 0),
          0,
        );

    return (
      <aside className="hidden lg:block space-y-6">
        <Card className="border border-card-border/80">
          <CardContent className="space-y-6 p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-small font-semibold uppercase tracking-wide text-muted-foreground">
                <Filter className="h-4 w-4" />
                {t("products.filters.title")}
              </div>
              <p className="text-small text-muted-foreground">
                {t("products.filters.description")}
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="text-small font-semibold text-muted-foreground uppercase tracking-wide">
                  {t("products.filters.categoryTitle")}
                </p>
                <div className="flex flex-col gap-2">
                  {primaryCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant="outline"
                      className={`justify-between transition-all ${
                        selectedCategory === category.id
                          ? "border-primary/50 bg-primary/5 text-primary shadow-sm"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                      onClick={() => onSelectCategory(category.id)}
                    >
                      <span>{category.name}</span>
                      <Badge
                        variant="secondary"
                        className="bg-white text-primary"
                      >
                        {categoryTotals[category.id] ?? 0}
                      </Badge>
                    </Button>
                  ))}

                  {remainingCategories.length > 0 && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={`group relative flex w-full items-center justify-between gap-4 rounded-2xl border border-dashed px-4 py-3 text-left transition ${
                            isSelectedInRemaining
                              ? "border-primary/60 bg-primary/10 text-primary shadow-sm"
                              : "border-card-border/70 bg-background shadow-sm hover:border-primary/40 hover:bg-primary/5"
                          }`}
                        >
                          <div className="flex flex-1 items-center gap-3 text-left">
                            <div className="flex flex-col gap-1">
                              <span className="block text-sm font-semibold text-foreground">
                                {dropdownTriggerLabel}
                              </span>
                            </div>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="start"
                        className="w-[--radix-dropdown-menu-trigger-width] max-h-72 overflow-hidden p-0"
                      >
                        <ScrollArea className="max-h-56">
                          <div className="space-y-1 p-2">
                            {remainingCategories.map((category) => {
                              const isActive = selectedCategory === category.id;
                              return (
                                <DropdownMenuItem
                                  key={category.id}
                                  onSelect={() => onSelectCategory(category.id)}
                                  className={`flex cursor-pointer items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all ${
                                    isActive
                                      ? "bg-primary/5 text-primary focus:bg-primary/10"
                                      : "text-muted-foreground"
                                  }`}
                                >
                                  <span className="truncate">
                                    {category.name}
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <Badge
                                      variant="secondary"
                                      className="bg-white text-primary"
                                    >
                                      {categoryTotals[category.id] ?? 0}
                                    </Badge>
                                    {isActive && (
                                      <Check className="h-4 w-4 text-primary" />
                                    )}
                                  </div>
                                </DropdownMenuItem>
                              );
                            })}
                          </div>
                        </ScrollArea>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              </div>

              {isFilterActive && (
                <Button variant="ghost" className="w-full" onClick={onReset}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  {t("products.filters.reset")}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </aside>
    );
  },
);
