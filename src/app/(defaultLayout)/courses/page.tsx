import React from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  BarChart3,
  FolderOpen,
} from "lucide-react";
import CourseCard from "@/components/shared/CourseCard";
import { baseCourses } from "@/constants/CourseData";

const Page = () => {
  const categories = [
    { label: "Featured", active: true },
    { label: "Music" },
    { label: "Drawing & Painting" },
    { label: "Marketing" },
    { label: "Animation" },
    { label: "Social Media" },
    { label: "UI/UX Design" },
    { label: "Creative Marketing" },
    { label: "Cooking" },
  ];

  // Duplicate to make 24 cards
  const courses = Array.from({ length: 4 }).flatMap(() => baseCourses);

  // Helper — turns a title into a URL-safe slug

  return (
    <div className="w-full bg-white font-sans">
      {/* ================= Hero Header ================= */}
      <header className="relative w-full overflow-hidden bg-[#003be2]">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "120px 120px",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 mx-auto mt-15 flex max-w-[1200px] flex-col items-center px-4 pb-20 pt-16 text-center sm:pt-20">
          <h1 className="text-[36px] font-semibold tracking-tight text-[#F5F5F6]">
            Find Your Next Course
          </h1>

          {/* Search + Courses dropdown */}
          <div className="mt-8 flex w-full max-w-[680px] flex-col items-center gap-3 sm:flex-row">
            <div className="flex flex-1 items-center rounded-full bg-white p-3 pl-4 shadow-lg text-gray-400">
              <Search size={20} />
              <input
                type="text"
                name="search"
                placeholder="Course, topic, creator"
                className="ml-3 w-full bg-transparent text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>

            <button className="flex shrink-0 items-center gap-2 rounded-full bg-[#D4FB20] px-8 py-3 text-[18px] font-semibold text-[#040819] transition-transform hover:scale-105 active:scale-95">
              Courses
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= Filter & Category Bar ================= */}
      <section className="mx-auto max-w-[1200px] pt-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
              <SlidersHorizontal size={14} />
              Filter
            </button>
            <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
              <BarChart3 size={14} />
              Level
            </button>
            <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
              <FolderOpen size={14} />
              Category
            </button>
          </div>

          <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
            <SlidersHorizontal size={14} />
            Most relevant
          </button>
        </div>

        {/* Category pills */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`rounded-full px-5 py-2 text-xs font-medium transition-colors sm:text-sm ${
                cat.active
                  ? "bg-[#D4FB20] text-[#4B4C53]"
                  : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ================= Course Grid ================= */}
      <section className="mx-auto max-w-[1200px] py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <Link
              key={i}
              href={`/courses/${course.id}`}
              className="block transition-transform hover:-translate-y-1"
            >
              <CourseCard {...course} />
            </Link>
          ))}
        </div>

        {/* ================= Pagination ================= */}
        <div className="mt-14 flex items-center justify-center gap-3 sm:gap-5">
          {/* Prev arrow */}
          <button
            aria-label="Previous page"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-[#040819] transition-colors hover:bg-gray-50 sm:h-14 sm:w-14"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Numbers */}
          <div className="flex items-center gap-1 sm:gap-2">
            {["1", "2", "3", "4", "5"].map((n, i) => (
              <button
                key={i}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors sm:text-base ${
                  n === "1"
                    ? "text-gray-300"
                    : "text-[#040819] hover:bg-gray-100"
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          {/* Next arrow */}
          <button
            aria-label="Next page"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-[#040819] transition-colors hover:bg-gray-50 sm:h-14 sm:w-14"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
