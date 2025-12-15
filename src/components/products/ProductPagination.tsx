import { memo, useMemo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useI18n } from "@/lib/i18n";

type ProductPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const ProductPagination = memo(
  ({ currentPage, totalPages, onPageChange }: ProductPaginationProps) => {
    const { t } = useI18n();

    const paginationRange = useMemo(() => {
      if (totalPages <= 1) {
        return [1];
      }

      if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
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

      return sorted.reduce<(number | "ellipsis")[]>((accumulator, page) => {
        const previous = accumulator[accumulator.length - 1];
        if (typeof previous === "number" && page - previous > 1) {
          accumulator.push("ellipsis");
        }
        accumulator.push(page);
        return accumulator;
      }, []);
    }, [currentPage, totalPages]);

    if (totalPages <= 1) {
      return null;
    }

    return (
      <Pagination className="w-full justify-center sm:w-auto sm:justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(event) => {
                event.preventDefault();
                onPageChange(currentPage - 1);
              }}
              aria-disabled={currentPage === 1}
              tabIndex={currentPage === 1 ? -1 : undefined}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : undefined
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
                    onPageChange(item as number);
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
                onPageChange(currentPage + 1);
              }}
              aria-disabled={currentPage === totalPages}
              tabIndex={currentPage === totalPages ? -1 : undefined}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
);
