import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Filter,
  Sparkles,
  ArrowRight,
  RefreshCw,
  ChevronDown,
  Check,
} from "lucide-react";
import { useHero } from "@/hooks/use-hero";
import { useI18n } from "@/lib/i18n";
import { enTranslations } from "@/lib/i18n-en";
import SEO from "@/components/SEO";
import { createBreadcrumbJsonLd, createWebPageJsonLd } from "@/lib/seo";
import { getStaticPageMeta, resolveMeta } from "@/lib/seo-pages";
import { PRIMARY_EMAIL, SECONDARY_EMAIL, ALL_EMAILS } from "@/lib/email-config";
import {
  getLocalizedProductCategories,
  getLocalizedProducts,
  getLocalizedSortOptions,
  salesCategoryDefinitions,
  type SortOptionId,
  type Product,
  type ProductCategory,
  type SalesCategory,
} from "@/lib/products";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SALES_CATEGORY_BUTTON_STYLES: Record<
  SalesCategory,
  { active: string; inactive: string }
> = {
  rent: {
    active:
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
    inactive:
      "border-primary/40 text-primary hover:bg-primary/10 hover:text-primary",
  },
  sale: {
    active:
      "border-transparent bg-accent text-accent-foreground hover:bg-accent/90",
    inactive:
      "border-accent/40 text-accent hover:bg-accent/10 hover:text-accent",
  },
};

const EMAIL = PRIMARY_EMAIL;
const EMAIL_SECONDARY = SECONDARY_EMAIL;
const EMAILS = [...ALL_EMAILS];

const PAGE_SIZE_OPTIONS = [6, 9, 12] as const;

const meta = resolveMeta(getStaticPageMeta("products"));

const Products = () => {
  const { t, translations } = useI18n();
  const { setHero } = useHero();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | ProductCategory["id"]
  >("all");
  const [salesCategoryFilter, setSalesCategoryFilter] = useState<
    "all" | SalesCategory
  >("all");
  const [sort, setSort] = useState<SortOptionId>("recommended");
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [pageSize, setPageSize] = useState<(typeof PAGE_SIZE_OPTIONS)[number]>(
    PAGE_SIZE_OPTIONS[0],
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Initialize from URL query parameters
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (
      categoryParam &&
      (categoryParam === "sale" || categoryParam === "rent")
    ) {
      setSalesCategoryFilter(categoryParam as SalesCategory);
    }
  }, [searchParams]);

  useEffect(() => {
    setHero({
      variant: "simple",
      label: t("products.hero.label"),
      title: t("products.hero.title"),
      description: t("products.hero.description"),
    });
  }, [setHero, t]);

  const breadcrumbs = useMemo(
    () =>
      createBreadcrumbJsonLd([
        { name: t("common.home"), url: "/" },
        { name: t("common.products"), url: meta.path },
      ]),
    [t],
  );

  const productCategories = useMemo(
    () => getLocalizedProductCategories(translations),
    [translations],
  );

  const englishCategoryHighlights = useMemo(() => {
    const categories = getLocalizedProductCategories(enTranslations);
    return categories.reduce<Record<string, string>>(
      (accumulator, category) => {
        accumulator[category.id] = category.highlight;
        return accumulator;
      },
      {},
    );
  }, []);

  const products = useMemo(
    () => getLocalizedProducts(translations),
    [translations],
  );

  const sortOptions = useMemo(
    () => getLocalizedSortOptions(translations),
    [translations],
  );

  const salesCategoryOptions = useMemo(
    () =>
      salesCategoryDefinitions.map((definition) => ({
        id: definition.id,
        label:
          translations.products?.filters?.salesCategories?.[definition.id] ??
          definition.defaultLabel,
      })),
    [translations],
  );

  const salesCategoryTitle =
    translations.products?.filters?.salesCategoryTitle ??
    t("products.filters.salesCategoryTitle");

  const categoryTotals = useMemo(() => {
    const mapping: Record<string, number> = { all: 0 };
    productCategories.forEach((category) => {
      mapping[category.id] = category.totalProducts;
      mapping.all += category.totalProducts;
    });
    return mapping;
  }, [productCategories]);

  const statusLabel: Record<
    Product["status"],
    { label: string; className: string }
  > = {
    ready: {
      label: t("products.status.contactLabel"),
      className: "bg-success/15 text-success border-success/20",
    },
    preorder: {
      label: t("products.status.contactLabel"),
      className: "bg-primary/10 text-primary border-primary/20",
    },
    limited: {
      label: t("products.status.contactLabel"),
      className: "bg-accent/15 text-accent border-accent/20",
    },
  };

  const EMAIL_CONST = EMAIL;
  const statusDescription: Record<Product["status"], string> = {
    ready: t("products.status.descriptionDualEmail", {
      email: EMAIL_CONST,
      emailSecondary: EMAIL_SECONDARY,
    }),
    preorder: t("products.status.descriptionDualEmail", {
      email: EMAIL_CONST,
      emailSecondary: EMAIL_SECONDARY,
    }),
    limited: t("products.status.descriptionDualEmail", {
      email: EMAIL_CONST,
      emailSecondary: EMAIL_SECONDARY,
    }),
  };

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    let scoped =
      selectedCategory === "all"
        ? [...products]
        : products.filter((product) => product.categoryId === selectedCategory);

    if (salesCategoryFilter !== "all") {
      scoped = scoped.filter(
        (product) => product.salesCategory === salesCategoryFilter,
      );
    }

    if (normalizedSearch) {
      scoped = scoped.filter((product) => {
        const haystack = [
          product.name,
          product.description,
          ...(product.tags ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(normalizedSearch);
      });
    }

    const sortWithPriority = (items: Product[]) => {
      switch (sort) {
        case "name-asc":
          return [...items].sort((a, b) => a.name.localeCompare(b.name));
        case "name-desc":
          return [...items].sort((a, b) => b.name.localeCompare(a.name));
        case "price-asc":
          return [...items].sort((a, b) => a.price - b.price);
        case "price-desc":
          return [...items].sort((a, b) => b.price - a.price);
        case "recommended":
        default: {
          const statusWeight: Record<Product["status"], number> = {
            ready: 0,
            limited: 1,
            preorder: 2,
          };
          return [...items].sort((a, b) => {
            const diff = statusWeight[a.status] - statusWeight[b.status];
            if (diff !== 0) return diff;
            return a.price - b.price;
          });
        }
      }
    };

    return sortWithPriority(scoped);
  }, [searchTerm, selectedCategory, sort, products, salesCategoryFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sort, pageSize, salesCategoryFilter]);

  const totalPages = useMemo(() => {
    if (filteredProducts.length === 0) {
      return 0;
    }
    return Math.ceil(filteredProducts.length / pageSize);
  }, [filteredProducts.length, pageSize]);

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedProducts = useMemo(() => {
    if (filteredProducts.length === 0) {
      return [] as Product[];
    }
    const start = (currentPage - 1) * pageSize;
    return filteredProducts.slice(start, start + pageSize);
  }, [filteredProducts, currentPage, pageSize]);

  type PaginationSegment = number | "ellipsis";

  const paginationRange = useMemo(() => {
    if (totalPages <= 1) {
      return [1] as PaginationSegment[];
    }

    if (totalPages <= 5) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1,
      ) as PaginationSegment[];
    }

    const range = new Set<number>();
    range.add(1);
    range.add(totalPages);
    range.add(currentPage);
    range.add(currentPage - 1);
    range.add(currentPage + 1);
    range.add(currentPage - 2);
    range.add(currentPage + 2);

    const sorted = Array.from(range)
      .filter((page) => page >= 1 && page <= totalPages)
      .sort((a, b) => a - b);

    return sorted.reduce<PaginationSegment[]>((accumulator, page) => {
      const previous = accumulator[accumulator.length - 1];
      if (typeof previous === "number" && page - previous > 1) {
        accumulator.push("ellipsis");
      }
      accumulator.push(page);
      return accumulator;
    }, []);
  }, [currentPage, totalPages]);

  const pageStart = useMemo(() => {
    if (filteredProducts.length === 0) {
      return 0;
    }
    return (currentPage - 1) * pageSize + 1;
  }, [currentPage, pageSize, filteredProducts.length]);

  const pageEnd = useMemo(() => {
    if (filteredProducts.length === 0) {
      return 0;
    }
    return Math.min(
      filteredProducts.length,
      pageStart + paginatedProducts.length - 1,
    );
  }, [filteredProducts.length, pageStart, paginatedProducts.length]);

  const isFilterActive =
    selectedCategory !== "all" ||
    Boolean(searchTerm) ||
    salesCategoryFilter !== "all";

  const scrollToProductSection = useCallback(() => {
    if (typeof window === "undefined") return;
    const section = document.getElementById("all-products");
    if (!section) return;

    const block = window.innerWidth < 768 ? "center" : "start";

    section.scrollIntoView({ behavior: "smooth", block });
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      if (totalPages === 0) {
        return;
      }

      const safeTotal = totalPages;
      const nextPage = Math.min(Math.max(page, 1), safeTotal);
      setCurrentPage(nextPage);

      scrollToProductSection();
    },
    [totalPages, scrollToProductSection],
  );

  const handleSelectCategory = useCallback(
    (categoryId: (typeof productCategories)[number]["id"] | "all") => {
      setSelectedCategory(categoryId);
      scrollToProductSection();
    },
    [scrollToProductSection],
  );

  const handleSelectSalesCategory = useCallback(
    (category: SalesCategory) => {
      const newFilter = salesCategoryFilter === category ? "all" : category;
      setSalesCategoryFilter(newFilter);

      // Update URL query parameters
      const newSearchParams = new URLSearchParams(searchParams);
      if (newFilter === "all") {
        newSearchParams.delete("category");
      } else {
        newSearchParams.set("category", newFilter);
      }
      setSearchParams(newSearchParams, { replace: true });

      scrollToProductSection();
    },
    [
      salesCategoryFilter,
      searchParams,
      setSearchParams,
      scrollToProductSection,
    ],
  );

  const handleReset = () => {
    setSelectedCategory("all");
    setSearchTerm("");
    setSort("recommended");
    setSalesCategoryFilter("all");

    // Clear URL query parameters
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("category");
    setSearchParams(newSearchParams, { replace: true });

    scrollToProductSection();
  };

  const handleCloseDetail = (open: boolean) => {
    if (!open) {
      setDetailProduct(null);
    }
  };

  const [primaryCategories, remainingCategories] = useMemo(() => {
    const primary = productCategories.slice(0, 5);
    const remaining = productCategories.slice(5);
    return [primary, remaining] as const;
  }, [productCategories]);

  const selectedCategoryData =
    selectedCategory === "all"
      ? undefined
      : productCategories.find((item) => item.id === selectedCategory);

  const selectedCategoryHighlight = selectedCategoryData
    ? englishCategoryHighlights[selectedCategoryData.id]
    : undefined;

  const selectedCategoryLabel =
    selectedCategoryData?.name ?? t("products.filters.allCategories");
  const selectedCategoryCount =
    selectedCategory === "all"
      ? categoryTotals.all
      : (categoryTotals[selectedCategory] ?? 0);

  const isSelectedInRemaining =
    selectedCategory !== "all" &&
    remainingCategories.some((item) => item.id === selectedCategory);

  const dropdownTriggerLabel = isSelectedInRemaining
    ? selectedCategoryLabel
    : t("products.filters.moreCategoriesLabel");

  const dropdownTriggerDescription = isSelectedInRemaining
    ? (selectedCategoryHighlight ?? t("products.filters.viewOptions"))
    : t("products.filters.exploreMore", {
        count: String(remainingCategories.length),
      });

  const dropdownTriggerDescriptionIsHtml =
    isSelectedInRemaining && Boolean(selectedCategoryHighlight);

  const dropdownBadgeCount = isSelectedInRemaining
    ? selectedCategoryCount
    : remainingCategories.reduce(
        (total, category) => total + (categoryTotals[category.id] ?? 0),
        0,
      );

  const detailCategory = detailProduct
    ? productCategories.find((item) => item.id === detailProduct.categoryId)
    : undefined;

  const detailCategoryHighlight = detailProduct
    ? englishCategoryHighlights[detailProduct.categoryId]
    : undefined;

  const detailProductSpecs = detailProduct
    ? (() => {
        const baseSpecs = detailProduct.specs ?? [];
        return detailProduct.weightClass
          ? [detailProduct.weightClass, ...baseSpecs]
          : baseSpecs;
      })()
    : [];

  return (
    <div className="bg-background">
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        keywords={meta.keywords}
        openGraph={{
          title: meta.title,
          description: meta.description,
          url: meta.canonical,
          image: meta.image,
        }}
        jsonLd={[
          createWebPageJsonLd({
            name: meta.title,
            description: meta.description,
            url: meta.canonical,
            image: meta.image,
          }),
          breadcrumbs,
        ].filter(Boolean)}
      />
      <section className="section-padding pb-5 ">
        <div className="container mx-auto container-padding">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-sm font-medium text-accent">
              <Sparkles className="h-4 w-4" />
              {t("products.intro.badge")}
            </div>

            <p className="text-body text-muted-foreground">
              {t("products.intro.description")}
            </p>
          </div>
        </div>
      </section>

      <section
        id="all-products"
        className="section-padding bg-background-secondary/60 pt-6 sm:pt-8 md:pt-10 lg:pt-12"
      >
        <div className="layout-container">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[280px_1fr]">
            {/* Section: Filter sidebar */}
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
                            onClick={() => handleSelectCategory(category.id)}
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
                                    const isActive =
                                      selectedCategory === category.id;
                                    return (
                                      <DropdownMenuItem
                                        key={category.id}
                                        onSelect={() =>
                                          handleSelectCategory(category.id)
                                        }
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
                      <Button
                        variant="ghost"
                        className="w-full"
                        onClick={handleReset}
                      >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        {t("products.filters.reset")}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </aside>

            <div className="space-y-4 sm:space-y-6 w-full max-w-2xl mx-auto md:max-w-none md:mx-0">
              {/* Section: Listing header */}
              <Card className="border border-card-border/80">
                <CardContent className="flex flex-col items-center gap-3 text-center sm:gap-4 sm:items-start sm:text-left p-4 sm:p-6">
                  <div className="flex flex-col w-full gap-4">
                    <div className="space-y-1 w-full">
                      <p className="text-small font-medium text-muted-foreground uppercase tracking-wide">
                        {t("products.intro.badge")}
                      </p>
                      <div className="flex items-center justify-center gap-2 sm:justify-start">
                        {isFilterActive && (
                          <Badge
                            variant="secondary"
                            className="bg-accent/15 text-accent"
                          >
                            {t("products.filters.activeLabel")}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        {salesCategoryTitle}
                      </span>
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                        {salesCategoryOptions.map((option) => {
                          const isActive = salesCategoryFilter === option.id;
                          const styles =
                            SALES_CATEGORY_BUTTON_STYLES[option.id];
                          return (
                            <Button
                              key={option.id}
                              type="button"
                              variant="outline"
                              onClick={() =>
                                handleSelectSalesCategory(option.id)
                              }
                              className={`h-9 rounded-full px-4 text-sm font-semibold transition ${
                                isActive ? styles.active : styles.inactive
                              }`}
                            >
                              {option.label}
                            </Button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center">
                      <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          value={searchTerm}
                          onChange={(event) =>
                            setSearchTerm(event.target.value)
                          }
                          placeholder={
                            t("products.filters.searchPlaceholder") ?? ""
                          }
                          className="h-10 sm:h-12 w-full pl-10 text-sm sm:text-base"
                        />
                      </div>
                      <Select
                        value={sort}
                        onValueChange={(value) =>
                          setSort(value as SortOptionId)
                        }
                      >
                        <SelectTrigger className="h-10 sm:h-12 w-full sm:w-[200px] rounded-full text-sm sm:text-base">
                          <SelectValue
                            placeholder={
                              t("products.filters.sortPlaceholder") ?? undefined
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {sortOptions.map((option) => (
                            <SelectItem key={option.id} value={option.id}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mobile Filter Button */}
              <div className="lg:hidden">
                <Sheet
                  open={isMobileFilterOpen}
                  onOpenChange={setIsMobileFilterOpen}
                >
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full h-10 sm:h-12 justify-center gap-2 text-sm sm:text-base"
                    >
                      <Filter className="h-4 w-4" />
                      {t("products.filters.title")}
                      {isFilterActive && (
                        <Badge
                          variant="secondary"
                          className="ml-2 bg-accent/15 text-accent"
                        >
                          {t("products.filters.activeLabel")}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        {t("products.filters.title")}
                      </SheetTitle>
                      <SheetDescription>
                        {t("products.filters.description")}
                      </SheetDescription>
                    </SheetHeader>
                    <div className="mt-6 space-y-4">
                      <div className="space-y-3">
                        <p className="text-small font-semibold text-muted-foreground uppercase tracking-wide">
                          {t("products.filters.categoryTitle")}
                        </p>
                        <div className="flex flex-col gap-2">
                          <Button
                            variant="outline"
                            className={`justify-between transition-all ${
                              selectedCategory === "all"
                                ? "border-primary/50 bg-primary/5 text-primary shadow-sm"
                                : "text-muted-foreground hover:text-primary"
                            }`}
                            onClick={() => {
                              handleSelectCategory("all");
                              setIsMobileFilterOpen(false);
                            }}
                          >
                            <span>{t("products.filters.allCategories")}</span>
                            <Badge
                              variant="secondary"
                              className="bg-white text-primary"
                            >
                              {categoryTotals.all}
                            </Badge>
                          </Button>

                          {primaryCategories.map((category) => (
                            <Button
                              key={category.id}
                              variant="outline"
                              className={`justify-between transition-all ${
                                selectedCategory === category.id
                                  ? "border-primary/50 bg-primary/5 text-primary shadow-sm"
                                  : "text-muted-foreground hover:text-primary"
                              }`}
                              onClick={() => {
                                handleSelectCategory(category.id);
                                setIsMobileFilterOpen(false);
                              }}
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
                                  <div className="flex items-center gap-2">
                                    <Badge
                                      variant="secondary"
                                      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                                        isSelectedInRemaining
                                          ? "bg-primary/20 text-primary"
                                          : "bg-muted/40 text-muted-foreground"
                                      }`}
                                    >
                                      {dropdownBadgeCount}{" "}
                                      {t("products.filters.productNoun")}
                                    </Badge>
                                    <span
                                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition ${
                                        isSelectedInRemaining
                                          ? "border-primary/40 bg-primary/15 text-primary"
                                          : "border-card-border/70 bg-transparent text-muted-foreground group-hover:border-primary/40 group-hover:text-primary"
                                      }`}
                                    >
                                      <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                                    </span>
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
                                      const isActive =
                                        selectedCategory === category.id;
                                      return (
                                        <DropdownMenuItem
                                          key={category.id}
                                          onSelect={() => {
                                            handleSelectCategory(category.id);
                                            setIsMobileFilterOpen(false);
                                          }}
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
                        <Button
                          variant="ghost"
                          className="w-full"
                          onClick={() => {
                            handleReset();
                            setIsMobileFilterOpen(false);
                          }}
                        >
                          <RefreshCw className="mr-2 h-4 w-4" />
                          {t("products.filters.reset")}
                        </Button>
                      )}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Section: Product grid */}
              <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.length === 0 ? (
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
                      <Button
                        className="mt-6"
                        variant="outline"
                        onClick={handleReset}
                      >
                        {t("products.filters.reset")}
                      </Button>
                    </motion.div>
                  ) : (
                    paginatedProducts.map((product, index) => {
                      const category = productCategories.find(
                        (item) => item.id === product.categoryId,
                      );
                      const statusMeta = statusLabel[product.status];
                      const globalIndex = (currentPage - 1) * pageSize + index;
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
                            delay: globalIndex * 0.04,
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
                                      /\b(Ton|Class)\b/i.test(spec) ||
                                      /K-\d+/i.test(spec);
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
                                onClick={() => setDetailProduct(product)}
                              >
                                {t("common.viewDetails")}
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            </CardFooter>
                          </Card>
                        </motion.article>
                      );
                    })
                  )}
                </AnimatePresence>
              </div>

              {/* Section: Pagination */}
              {filteredProducts.length > 0 && (
                <div className="flex flex-col gap-3 sm:gap-4 rounded-2xl border border-card-border/80 bg-white/95 px-4 sm:px-6 py-3 sm:py-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span>
                      {t("products.pagination.summaryTemplate", {
                        start: String(pageStart),
                        end: String(pageEnd),
                        total: String(filteredProducts.length),
                        noun: t("products.filters.productNoun"),
                      })}
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {t("products.pagination.perPage")}
                      </span>
                      <Select
                        value={String(pageSize)}
                        onValueChange={(value) =>
                          setPageSize(
                            Number(value) as (typeof PAGE_SIZE_OPTIONS)[number],
                          )
                        }
                      >
                        <SelectTrigger
                          className="h-9 w-[120px]"
                          aria-label={t("products.pagination.perPageAria")}
                        >
                          <SelectValue
                            placeholder={t("products.pagination.perPage")}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {PAGE_SIZE_OPTIONS.map((option) => (
                            <SelectItem key={option} value={String(option)}>
                              {option} {t("products.filters.productNoun")}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {totalPages > 1 && (
                      <Pagination className="w-full justify-center sm:w-auto sm:justify-end">
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              href="#"
                              onClick={(event) => {
                                event.preventDefault();
                                handlePageChange(currentPage - 1);
                              }}
                              aria-disabled={currentPage === 1}
                              tabIndex={currentPage === 1 ? -1 : undefined}
                              className={
                                currentPage === 1
                                  ? "pointer-events-none opacity-50"
                                  : undefined
                              }
                            />
                          </PaginationItem>

                          {paginationRange.map((item, index) => (
                            <PaginationItem key={`${item}-${index}`}>
                              {item === "ellipsis" ? (
                                <PaginationEllipsis />
                              ) : (
                                <PaginationLink
                                  href="#"
                                  isActive={item === currentPage}
                                  onClick={(event) => {
                                    event.preventDefault();
                                    handlePageChange(item);
                                  }}
                                >
                                  {item}
                                </PaginationLink>
                              )}
                            </PaginationItem>
                          ))}

                          <PaginationItem>
                            <PaginationNext
                              href="#"
                              onClick={(event) => {
                                event.preventDefault();
                                handlePageChange(currentPage + 1);
                              }}
                              aria-disabled={currentPage === totalPages}
                              tabIndex={
                                currentPage === totalPages ? -1 : undefined
                              }
                              className={
                                currentPage === totalPages
                                  ? "pointer-events-none opacity-50"
                                  : undefined
                              }
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={Boolean(detailProduct)} onOpenChange={handleCloseDetail}>
        <DialogContent className="max-w-3xl space-y-6">
          {detailProduct && (
            <>
              <DialogHeader className="items-start space-y-3 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    className={`border ${statusLabel[detailProduct.status].className}`}
                  >
                    {statusLabel[detailProduct.status].label}
                  </Badge>
                  {detailCategory && (
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {detailCategory.name}
                    </Badge>
                  )}
                </div>
                <DialogTitle className="text-2xl font-semibold text-foreground">
                  {`${detailProduct.salesCategory === "rent" ? t("products.detail.rentPrefix") : t("products.detail.salePrefix")} – ${detailProduct.name}`}
                </DialogTitle>
                <DialogDescription
                  className="text-body text-muted-foreground"
                  dangerouslySetInnerHTML={{
                    __html: (() => {
                      // Override description for BUKAKA products with correct capacity
                      if (
                        detailProduct.id ===
                        "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-1000b-fa"
                      ) {
                        return "60Ton/H capacity";
                      } else if (
                        detailProduct.id ===
                        "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-800p-sa"
                      ) {
                        return "50Ton/H capacity";
                      }
                      return String(detailProduct.description);
                    })(),
                  }}
                />
              </DialogHeader>

              <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-background-muted">
                    <img
                      src={detailProduct.image}
                      alt={detailProduct.name}
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
                          let specsToDisplay = detailProductSpecs;

                          if (
                            detailProduct.id ===
                            "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-1000b-fa"
                          ) {
                            specsToDisplay = [
                              ...(detailProduct.weightClass
                                ? [detailProduct.weightClass]
                                : []),
                              "60Ton/H capacity",
                            ];
                          } else if (
                            detailProduct.id ===
                            "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-800p-sa"
                          ) {
                            specsToDisplay = [
                              ...(detailProduct.weightClass
                                ? [detailProduct.weightClass]
                                : []),
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
                    {detailProduct.tags && detailProduct.tags.length > 0 && (
                      <div>
                        <p className="text-small font-semibold uppercase tracking-wide text-muted-foreground">
                          {t("products.detail.highlights")}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {detailProduct.tags.map((tag) => (
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
                        {detailProduct.id ===
                        "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-1000b-fa"
                          ? "Kab. Pulang Pisau, Kalimantan Tengah"
                          : t("products.detail.locationValue")}
                      </p>
                    </div>
                    {detailCategoryHighlight && (
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
                                detailProduct.id ===
                                "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-1000b-fa"
                              ) {
                                return "60Ton/H capacity";
                              } else if (
                                detailProduct.id ===
                                "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-800p-sa"
                              ) {
                                return "50Ton/H capacity";
                              }
                              return detailCategoryHighlight || "";
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
                        {statusDescription[detailProduct.status]}
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
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
