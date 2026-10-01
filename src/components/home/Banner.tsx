import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";

// Main person image
import photo from "@/assets/Image (1).png";

// Decorative shape images
import greenShapeTopLeft from "@/assets/green-shape-top-left.png";
import squiggleLeft from "@/assets/squiggle-left.png";
import greenShapeRight from "@/assets/green-shape-right.png";
import triangleRight from "@/assets/triangle-right.png";
import squiggleRight from "@/assets/squiggle-right.png";
import whiteRingBottom from "@/assets/white-ring-bottom.png";
import ellipse from "@/assets/Ellipse 7.png";

const Banner = () => {
  return (
    <div className="bg-[#003be2] font-sans text-[#F5F5F6] overflow-hidden relative selection:bg-[#CCFF00] selection:text-black">
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      ></div>

      {/* --- Main Content --- */}
      <main className="relative z-10 flex flex-col items-center px-4 pt-12 text-center">
        <h1 className="mt-24 text-[40px] font-semibold leading-tight tracking-tight md:text-[70px]">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        <p className="mt-6 w-1/2 text-base text-blue-100 sm:w-1/2 md:w-3/4 md:text-lg xl:w-full">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* ================= SEARCH BAR ================= */}
        <div className="relative mt-8 flex w-full max-w-[340px] items-center gap-2 sm:mt-10 sm:max-w-[460px] sm:gap-3 md:mt-14 md:max-w-xl">
          <div className="flex flex-1 items-center rounded-full bg-white px-3 py-2 text-gray-400 shadow-lg sm:px-4 sm:py-2.5 md:p-3 md:pl-4">
            <Search
              size={14}
              className="shrink-0 sm:h-4 sm:w-4 md:h-5 md:w-5"
            />
            <input
              type="text"
              name="search"
              placeholder="Course, topic, creator"
              className="ml-2 w-full bg-transparent text-xs text-gray-800 outline-none placeholder:text-gray-400 sm:ml-3 sm:text-sm md:text-base"
            />
          </div>

          <button className="shrink-0 rounded-full bg-[#CCFF00] px-4 py-2 text-xs font-bold text-black transition-transform hover:scale-105 active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-sm">
            Search
          </button>
        </div>
      </main>

      <div className="relative flex w-full justify-center">
        {/* ================= ELLIPSE ================= */}
        <Image
          src={ellipse}
          alt=""
          priority
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[280px] -translate-x-1/2 object-contain object-bottom sm:w-[400px] lg:w-[500px] xl:left-auto xl:top-20 xl:bottom-auto xl:w-auto xl:translate-x-0"
        />

        <div className="relative z-10">
          <Image
            src={photo}
            alt="Student smiling with laptop"
            className="relative z-20 ml-7 w-[280px] sm:w-[340px] lg:w-[400px] xl:w-auto"
          />

          {/* ================= FLOATING CARDS ================= */}

          {/* UI/UX Design — top left */}
          <div className="absolute left-8 top-20 z-30 rounded-lg bg-[#F5F5F6] p-1.5 shadow-xl sm:left-2 sm:top-14 sm:rounded-xl sm:p-2 md:rounded-xl md:p-2 md:left-0 md:top-10 lg:rounded-2xl lg:p-3 xl:left-20 xl:top-32 xl:p-3">
            <div className="flex flex-col items-start text-left">
              <span className="text-[9px] font-bold text-gray-800 sm:text-[10px] md:text-xs lg:text-sm xl:text-base">
                UI/UX Design
              </span>
              <span className="text-[6px] text-gray-400 sm:text-[7px] md:text-[9px] lg:text-[10px] xl:text-xs">
                200 Courses • 1000+ Students
              </span>
            </div>
          </div>

          {/* Learning Progress — top right */}
          <div className="absolute right-4 top-24 z-30 w-[100px] rounded-lg bg-white p-2 shadow-xl sm:right-6 sm:top-28 sm:w-[130px] sm:rounded-xl sm:p-3 md:right-8 md:top-30 md:w-[150px] md:rounded-xl md:p-3 lg:right-10 lg:top-32 lg:w-[180px] lg:rounded-2xl lg:p-4 xl:right-16 xl:top-34 xl:w-[238px] xl:p-4">
            <div className="flex flex-col items-start text-left">
              <span className="text-[8px] font-bold text-gray-600 sm:text-[9px] md:text-[10px] lg:text-xs xl:text-xs">
                Learning Progress
              </span>
              <span className="text-lg font-extrabold text-black sm:text-xl md:text-2xl lg:text-3xl xl:text-[42px]">
                55%
              </span>
              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-gray-200 sm:mt-1.5 sm:h-1.5 md:mt-2 md:h-2">
                <div className="h-full w-[55%] rounded-full bg-[#D4FB20]"></div>
              </div>
            </div>
          </div>

          {/* Happy Students — bottom left */}
          <div className="absolute -left-8 bottom-10 z-30 w-[130px] rounded-lg bg-white p-1.5 shadow-xl sm:-left-10 sm:bottom-14 sm:w-[160px] sm:rounded-xl sm:p-2 md:-left-12 md:bottom-16 md:w-[190px] md:rounded-xl md:p-3 lg:-left-14 lg:bottom-17 lg:w-[220px] lg:rounded-2xl lg:p-3 xl:-left-16 xl:bottom-17 xl:w-[258px] xl:p-3">
            <div className="flex flex-col items-start text-left">
              <span className="text-[9px] font-bold text-gray-800 sm:text-[10px] md:text-xs lg:text-sm xl:text-sm">
                Happy Students
              </span>
              <span className="text-[6px] text-gray-400 sm:text-[7px] md:text-[9px] lg:text-[10px] xl:text-[10px]">
                4.5 (1.2k Reviews)
              </span>
              <div className="mt-1 flex -space-x-2 sm:mt-1.5 sm:-space-x-2.5 md:mt-2 md:-space-x-3 lg:-space-x-3 xl:-space-x-4">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div
                    key={i}
                    className="h-4 w-4 overflow-hidden rounded-full border-2 border-white bg-gray-300 sm:h-5 sm:w-5 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-11 xl:w-11"
                  >
                    <Image
                      width={24}
                      height={24}
                      className="h-full w-full object-cover"
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="student"
                    />
                  </div>
                ))}
                <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[#CCFF00] text-[6px] font-bold text-black sm:h-5 sm:w-5 sm:text-[7px] md:h-7 md:w-7 md:text-[10px] lg:h-8 lg:w-8 lg:text-xs xl:h-11 xl:w-11 xl:text-base">
                  3k+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DECORATIVE SHAPES ================= */}
      <Image
        src={greenShapeTopLeft}
        alt=""
        priority
        className="pointer-events-none absolute left-0 top-40 z-0 w-20 object-contain sm:left-0 sm:w-28 lg:left-0 lg:w-36 xl:left-16 xl:w-auto xl:-translate-x-1/4"
      />

      <Image
        src={squiggleLeft}
        alt=""
        priority
        className="pointer-events-none absolute left-2 top-[40%] z-0 w-12 object-contain sm:left-6 sm:w-16 lg:left-16 lg:w-20 xl:left-38 xl:w-auto"
      />

      <Image
        src={greenShapeRight}
        alt=""
        priority
        className="pointer-events-none absolute right-0 top-40 z-0 w-20 object-contain sm:right-0 sm:w-28 lg:right-0 lg:w-36 xl:right-13 xl:w-auto xl:translate-x-1/4"
      />

      <Image
        src={triangleRight}
        alt=""
        priority
        className="pointer-events-none absolute right-4 top-[40%] z-0 w-12 object-contain sm:right-8 sm:w-16 lg:right-16 lg:w-20 xl:right-36 xl:w-auto"
      />

      <Image
        src={squiggleRight}
        alt=""
        priority
        className="pointer-events-none absolute bottom-5 right-0 z-0 w-20 object-contain sm:w-28 lg:w-36 xl:w-auto"
      />

      <Image
        src={whiteRingBottom}
        alt=""
        priority
        className="pointer-events-none absolute bottom-2 left-0 z-0 w-16 object-contain sm:left-1 sm:w-24 lg:w-32 xl:left-1 xl:w-auto"
      />
    </div>
  );
};

export default Banner;
