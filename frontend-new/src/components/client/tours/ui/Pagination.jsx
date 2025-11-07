import { ChevronLeft } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center gap-[24px]">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-[38px] h-[38px] rounded-full bg-[#FEF4F2] flex items-center justify-center hover:bg-[#FEE7E2] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={18} className="text-[#F27052]" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-[12px]">
        {renderPageNumbers().map((page, index) => (
          <div key={index}>
            {page === "..." ? (
              <span className="text-[16px] text-[#707070]">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`w-[38px] h-[38px] rounded-[100px] flex items-center justify-center text-[16px] ${
                  currentPage === page
                    ? "bg-[#F27052] text-white"
                    : "text-[#00315C] hover:bg-[#F6F6F6]"
                }`}
              >
                {String(page).padStart(2, "0")}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-[38px] h-[38px] rounded-full bg-[#F27052] flex items-center justify-center rotate-180 hover:bg-[#e65e42] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={18} className="text-white rotate-180" />
      </button>
    </div>
  );
}
