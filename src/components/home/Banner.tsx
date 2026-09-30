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
    <div className=" bg-[#003be2] font-sans text-[#F5F5F6] overflow-hidden relative selection:bg-[#CCFF00] selection:text-black">
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      ></div>

      {/* --- Main Content --- */}
      <main className="relative z-10 flex flex-col items-center pt-12 text-center px-4">
        <h1 className=" font-semibold mt-24 leading-tight tracking-tight md:text-[70px] text-[40px]">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        <p className="mt-6 text-base text-blue-100 md:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="relative mt-14 flex w-full max-w-xl items-center gap-3">
          {/* White input pill */}
          <div className="flex flex-1 items-center rounded-full bg-white p-3 pl-4 shadow-lg text-gray-400">
            <Search size={20} />
            <input
              type="text"
              name="search"
              placeholder="Course, topic, creator"
              className="ml-3 w-full bg-transparent text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Search button outside */}
          <button className="rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 shrink-0">
            Search
          </button>
        </div>
      </main>

      <div className="relative flex w-full justify-center">
        <Image
          src={ellipse}
          alt=""
          priority
          className="pointer-events-none  absolute z-0 top-20 object-contain"
        />
        <div className="relative z-10">
          <Image
            src={photo}
            alt="Student smiling with laptop"
            className="relative z-20 ml-7"
          />

          <div className="absolute top-32 left-20 z-30 rounded-2xl bg-[#F5F5F6] p-3 shadow-xl md:left-10 md:p-4">
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-bold text-gray-800 md:text-base">
                UI/UX Design
              </span>
              <span className="text-[10px] text-gray-400 md:text-xs">
                200 Courses • 1000+ Students
              </span>
            </div>
          </div>

          <div className="absolute top-34 right-16 z-30 w-[238px] rounded-2xl bg-white p-4 shadow-xl md:right-12">
            <div className="flex flex-col items-start text-left">
              <span className="text-xs font-bold text-gray-600">
                Learning Progress
              </span>
              <span className="text-[42px] font-extrabold text-black">55%</span>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[55%] rounded-full bg-[#D4FB20]"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-17 -left-16 z-30 w-[258px] rounded-2xl bg-white p-3 shadow-xl md:-left-14">
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-bold text-gray-800">
                Happy Students
              </span>
              <span className="text-[10px] text-gray-400">
                4.5 (1.2k Reviews)
              </span>
              <div className="mt-2 flex -space-x-4">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div
                    key={i}
                    className="h-11 w-11 rounded-full border-2 border-white bg-gray-300 overflow-hidden"
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
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#CCFF00] text-base font-bold text-black">
                  3k+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={greenShapeTopLeft}
        alt=""
        priority
        className="pointer-events-none absolute top-40 left-16 z-0 object-contain -translate-x-1/4"
      />

      <Image
        src={squiggleLeft}
        alt=""
        priority
        className="pointer-events-none absolute top-[40%] left-38 z-0 object-contain"
      />

      <Image
        src={greenShapeRight}
        alt=""
        priority
        className="pointer-events-none absolute top-40 right-13 z-0 object-contain translate-x-1/4"
      />

      <Image
        src={triangleRight}
        alt=""
        priority
        className="pointer-events-none absolute top-[40%] right-36 z-0 object-contain"
      />

      <Image
        src={squiggleRight}
        alt=""
        priority
        className="pointer-events-none absolute bottom-5 right-0 z-0 object-contain"
      />

      <Image
        src={whiteRingBottom}
        alt=""
        priority
        className="pointer-events-none absolute bottom-2 left-1 z-0 object-contain"
      />
    </div>
  );
};

export default Banner;
