"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** How many page numbers to show around current page. Default: 1 */
  siblingCount?: number;
  /** Show prev/next arrow buttons. Default: true */
  showArrows?: boolean;
  className?: string;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showArrows = true,
  className = "",
}: PaginationProps) => {
  // Don't render if only 1 page or less
  if (totalPages <= 1) return null;

  // Build page range with ellipsis logic
  const getPageNumbers = (): (number | "...")[] => {
    const totalNumbers = siblingCount * 2 + 5; // first + last + current + 2 ellipsis
    if (totalPages <= totalNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftEllipsis = leftSibling > 2;
    const showRightEllipsis = rightSibling < totalPages - 1;

    if (!showLeftEllipsis && showRightEllipsis) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, "...", totalPages];
    }

    if (showLeftEllipsis && !showRightEllipsis) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1,
      );
      return [1, "...", ...rightRange];
    }

    if (showLeftEllipsis && showRightEllipsis) {
      const middleRange = Array.from(
        { length: rightSibling - leftSibling + 1 },
        (_, i) => leftSibling + i,
      );
      return [1, "...", ...middleRange, "...", totalPages];
    }

    return [];
  };

  const pages = getPageNumbers();

  return (
    <div
      className={`mt-14 flex items-center justify-center gap-3 sm:gap-5 ${className}`}
    >
      {/* ---- Prev arrow ---- */}
      {showArrows && (
        <button
          aria-label="Previous page"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-[#040819] transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 sm:h-14 sm:w-14"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>
      )}

      {/* ---- Page numbers ---- */}
      <div className="flex items-center gap-1 sm:gap-2">
        {pages.map((page, i) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${i}`}
                className="flex h-10 w-10 items-center justify-center text-sm font-semibold text-gray-400 sm:text-base"
              >
                ...
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              aria-current={isActive ? "page" : undefined}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors sm:text-base ${
                isActive
                  ? "bg-[#D4FB20] text-[#040819]"
                  : "text-[#040819] hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* ---- Next arrow ---- */}
      {showArrows && (
        <button
          aria-label="Next page"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-[#040819] transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 sm:h-14 sm:w-14"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
};

export default Pagination;
