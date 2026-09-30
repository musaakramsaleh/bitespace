import React from "react";
import Image from "next/image";
import { SlidersHorizontal, BarChart3, FolderOpen } from "lucide-react";
import CourseCard from "@/components/shared/CourseCard";
import { baseCourses } from "@/constants/CourseData";

// Creator avatar
import creatorAvatar from "@/assets/creator-avatar.png";

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

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-12 pt-32 sm:px-0">
          {/* Avatar + Name + Badge */}
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 shrink-0 overflow-hidden sm:h-20 sm:w-20">
              <Image
                src={creatorAvatar}
                alt="PurePearl Studio"
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[36px]">
                  PurePearl Studio
                </h1>
                <span className="rounded-full bg-[#D4FB20] px-5 py-1 text-base font-medium text-[#242528]">
                  Creator
                </span>
              </div>
              <p className="mt-2 text-lg text-[#F5F5F6] sm:text-sm">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-8 max-w-[820px] text-xs leading-relaxed text-blue-100 sm:text-sm">
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
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-lg font-medium text-[#242528]">
                <span className="text-[#003BE2]">3</span> Products
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-lg font-medium text-[#242528]">
                <span className="text-[#003BE2]">12</span> Followers
              </span>
            </div>

            <button className="rounded-full bg-[#D4FB20] px-8 py-2.5 text-lg font-semibold text-[#040819] transition-transform hover:scale-105 active:scale-95 sm:px-10 sm:py-3">
              Follow
            </button>
          </div>
        </div>
      </header>

      {/* ================= FILTER BAR ================= */}
      <section className="mx-auto max-w-[1200px] px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          {/* Left — filter pills */}
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

          {/* Right — Most relevant dropdown */}
          <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
            <SlidersHorizontal size={14} />
            Most relevant
          </button>
        </div>
      </section>

      {/* ================= COURSE GRID ================= */}
      <section className="mx-auto max-w-[1200px] px-4 py-8 sm:px-0">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(1, 7).map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
