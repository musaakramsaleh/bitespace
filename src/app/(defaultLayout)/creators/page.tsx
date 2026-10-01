import React from "react";
import Image from "next/image";
import { SlidersHorizontal, BarChart3, FolderOpen } from "lucide-react";
import CourseCard from "@/components/shared/CourseCard";
import { baseCourses } from "@/constants/CourseData";

// Creator avatar
import creatorAvatar from "@/assets/creator-avatar.png";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Creators | ByteSpace",
  description: "Meet the creators sharing their knowledge on ByteSpace.",
};
const Page = () => {
  // Duplicate base courses to fill the grid like the reference
  const courses = Array.from({ length: 2 }).flatMap(() => baseCourses);

  return (
    <div className="w-full bg-white font-sans">
      {/* ================= BLUE HEADER ================= */}
      <header className="relative w-full overflow-hidden bg-[#003be2]">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "120px 120px",
          }}
        />

        {/* ↓ FIX: mobile-e px-4, sm-e px-6, lg-e px-0 */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-32 lg:px-4 xl:px-0 ">
          {/* Avatar + Name + Badge */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
              <Image
                src={creatorAvatar}
                alt="PurePearl Studio"
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="w-full">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* ↓ FIX: chhoto heading on mobile */}
                <h1 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[36px]">
                  PurePearl Studio
                </h1>
                <span className="rounded-full bg-[#D4FB20] px-4 py-1 text-xs font-medium text-[#242528] sm:px-5 sm:text-sm">
                  Creator
                </span>
              </div>
              <p className="mt-2 text-sm text-[#F5F5F6] sm:text-base">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Bio — ↓ FIX: text-sm mobile, text-sm sm+ */}
          <p className="mt-6 max-w-[820px] text-sm leading-relaxed text-blue-100 sm:mt-8 sm:text-base">
            Welcome to the creative world of [Creator&apos;s Name]. Here,
            you&apos;ll discover the passion, expertise, and inspiration that
            drive my creative journey. Let&apos;s explore and learn together!
            <br />
            I&apos;ve into my creative portfolio, showcasing a glimpse of my
            artistic endeavors. From digital designs to multimedia projects,
            each piece tells a unique story. Explore the world of creativity
            with me.
          </p>

          {/* Stats + Follow button */}
          <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
            {/* ↓ FIX: stats stack full-width on mobile, inline on sm+ */}
            <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:gap-4">
              <span className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#242528] sm:flex-none sm:px-5 sm:text-base">
                <span className="font-semibold text-[#003BE2]">3</span> Products
              </span>
              <span className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#242528] sm:flex-none sm:px-5 sm:text-base">
                <span className="font-semibold text-[#003BE2]">12</span>{" "}
                Followers
              </span>
            </div>

            {/* ↓ FIX: Follow button full-width on mobile */}
            <button className="w-full rounded-full bg-[#D4FB20] px-8 py-3 text-sm font-semibold text-[#040819] transition-transform hover:scale-105 active:scale-95 sm:w-auto sm:px-10 sm:text-base">
              Follow
            </button>
          </div>
        </div>
      </header>

      {/* ================= FILTER BAR ================= */}
      {/* ↓ FIX: mobile-e px-4, sm-e px-6, lg-e px-0 */}
      <section className="mx-auto max-w-[1200px] px-4 pt-8 sm:px-6 sm:pt-10 lg:px-4 xl:px-0">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          {/* Left — filter pills */}
          {/* ↓ FIX: horizontal scroll on mobile so they fit */}
          <div className="-mx-4 flex w-full gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
            <button className="flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
              <SlidersHorizontal size={14} />
              Filter
            </button>
            <button className="flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
              <BarChart3 size={14} />
              Level
            </button>
            <button className="flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
              <FolderOpen size={14} />
              Category
            </button>
          </div>

          {/* Right — Most relevant dropdown */}
          <button className="flex w-full shrink-0 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto sm:justify-start">
            <SlidersHorizontal size={14} />
            Most relevant
          </button>
        </div>
      </section>

      {/* ================= COURSE GRID ================= */}
      {/* ↓ FIX: mobile-e px-4, sm-e px-6, lg-e px-0 */}
      <section className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 sm:py-8 lg:px-4 xl:px-0">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {courses.slice(1, 7).map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;