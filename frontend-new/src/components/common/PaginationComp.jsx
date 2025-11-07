import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export default function PaginationComp({ page, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (page <= 3) pages.push(1, 2, 3, 4, "...", totalPages);
    else if (page >= totalPages - 2)
      pages.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    else pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
    return pages;
  };

  return (
    <Pagination>
      <PaginationContent className="flex justify-center gap-2 mt-4">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(page - 1, 1))}
            className={cn(
              "rounded-full w-8 h-8 flex items-center justify-center",
              page === 1
                ? "bg-[#FFF3EF] text-[#F15A24] cursor-not-allowed"
                : "bg-[#F15A24] text-white hover:opacity-90"
            )}
          />
        </PaginationItem>

        {getPageNumbers().map((num, idx) =>
          num === "..." ? (
            <PaginationItem key={idx}>
              <PaginationEllipsis className="text-gray-400" />
            </PaginationItem>
          ) : (
            <PaginationItem key={idx}>
              <PaginationLink
                onClick={() => onPageChange(num)}
                className={cn(
                  "rounded-full w-8 h-8 text-sm font-semibold transition-all duration-150 flex items-center justify-center",
                  page === num
                    ? "bg-[#F15A24] text-white"
                    : "text-[#00315C] hover:text-[#F15A24]"
                )}
              >
                {num.toString().padStart(2, "0")}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(page + 1, totalPages))}
            className={cn(
              "rounded-full w-8 h-8 flex items-center justify-center",
              page === totalPages
                ? "bg-[#FFF3EF] text-[#F15A24] cursor-not-allowed"
                : "bg-[#F15A24] text-white hover:opacity-90"
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
