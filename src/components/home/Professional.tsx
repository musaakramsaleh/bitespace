import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

// Images
import boyWithLaptop from "@/assets/Image (3).png";
import girlWithTablet from "@/assets/Image (2).png";

// Floating card thumbnails
import courseThumb from "@/assets/course-1.png";
import bg from "@/assets/Frame 15.png";

// Decorative shapes
import greenDoodleTop from "@/assets/Frame (2).png";
import greenDoodleBottom from "@/assets/green-doodle-bottom.png";
import CourseCard from "../shared/CourseCard";

const Professional = () => {
  const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
  ];

  const features = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  return (
    <section className="relative w-full overflow-hidden pt-10 xl:pt-14">
      {/* --- Background Image --- */}
      <Image
        src={bg}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 -z-10 object-cover"
      />

      {/* --- Section 1: Text Left / Image Right --- */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text */}
          <div className="mt-8 text-center sm:mt-14 lg:mt-22 lg:text-left">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#242528] sm:text-3xl md:text-4xl lg:text-[44px]">
              Your Path to Professional
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>
              Growth Starts Here!
            </h2>
            <p className="mx-auto mt-5 max-w-[477px] text-sm leading-relaxed text-gray-500 sm:mt-7 sm:text-base lg:text-[18px] lg:mx-0">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats */}
            <div className="mt-8 flex items-start justify-center gap-8 sm:mt-10 sm:gap-14 lg:justify-start">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-start">
                  <span className="text-3xl font-bold text-[#003BE2] sm:text-[36px] lg:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image with floating cards */}
          <div className="relative flex justify-center lg:justify-end">
            {/* ↓ FIX: constrain the wrapper so absolute cards scale properly on mobile */}
            <div className="relative w-full max-w-[340px] sm:max-w-[700px] lg:max-w-none">
              {/* Green doodle */}
              <Image
                src={greenDoodleTop}
                alt=""
                className="pointer-events-none absolute -right-8 top-20 z-60 w-16 sm:-right-12 lg:w-24 md:w-auto md:-right-16 sm:top-24 sm:w-24 xl:-right-16 lg:-right-10 xl:top-28 lg:top-14 xl:w-auto"
              />

              {/* Floating Course Card — BEHIND the boy */}
              <div className="absolute -left-2 top-4 z-10 w-[260px] shadow-xl sm:-left-4 sm:top-6 sm:w-auto lg:-left-4 lg:top-6 lg:w-auto">
                <CourseCard
                  image={courseThumb}
                  title="Web Development Bootcamp"
                  author="John Doe"
                  rating="4.8"
                  level="Beginner"
                  price="$25"
                  tag="lifetime"
                  duration="2 hours 16 mins"
                  lessons="17 Lessons"
                  comments="12"
                  avatars={[1, 2, 3]}
                  extra="20+"
                />
              </div>

              {/* Main image — ON TOP of the card */}
              <div className="relative z-40 mt-16 w-full sm:mt-20 lg:mt-23 lg:w-[621px]">
                <Image
                  src={boyWithLaptop}
                  alt="Student with laptop"
                  className="w-full"
                  priority
                />
              </div>

              {/* Floating — Progress card */}
              <div className="absolute -right-2 top-24 z-40 w-[140px] rounded-2xl bg-white p-3 shadow-xl sm:-right-4 sm:top-40 sm:w-[180px] md:w-[238px] lg:w-[180px] sm:p-4 lg:-right-4 xl:-right-4 xl:top-32 lg:top-18 xl:w-[238px]">
                <span className="text-[10px] font-bold text-gray-600 sm:text-xs">
                  Learning Progress
                </span>
                <p className="text-2xl font-extrabold text-black sm:text-3xl lg:text-[42px]">
                  55%
                </p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200 sm:h-2">
                  <div className="h-full w-[55%] rounded-full bg-[#D4FB20]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 2: Image Left / Text Right --- */}
      <div className="mx-auto mt-16 max-w-[1200px] px-4 sm:mt-20 sm:px-6 md:mt-2 lg:mt-2 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Image with floating cards */}
          <div className="relative order-2 flex justify-center lg:order-1 lg:justify-start">
            {/* ↓ FIX: constrain the wrapper */}
            <div className="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-none">
              {/* Green doodle */}
              <Image
                src={greenDoodleBottom}
                alt=""
                className="pointer-events-none absolute right-4 top-16 z-40 w-16 sm:right-8 sm:top-20 sm:w-24 lg:right-10 lg:top-50 lg:w-1/3 xl:top-25 xl:w-auto"
              />

              {/* Floating — Revenue card */}
              <div className="absolute -left-2 top-4 z-10 w-[140px] rounded-2xl bg-[#003be2] p-3 text-[#F5F5F6] shadow-xl sm:-left-4 sm:top-6 sm:w-[180px] sm:p-4 lg:-left-4 lg:top-6 lg:w-[232px]">
                <span className="text-xs font-medium opacity-80 sm:text-sm lg:text-base">
                  Total Revenue
                </span>
                <p className="text-[10px] text-[#F5F5F6]">July 1-28</p>
                <div className="mt-1 text-lg font-semibold sm:text-xl lg:text-2xl">
                  $120.29
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white sm:h-2">
                  <div className="h-full w-[65%] rounded-full bg-[#D4FB20]"></div>
                </div>
              </div>

              {/* Floating — YTD card */}
              <div className="absolute -left-3 top-32 z-10 w-[90px] rounded-2xl bg-[#003be2] p-3 text-white shadow-xl sm:-left-4 sm:top-40 sm:w-[120px] sm:p-4 lg:-left-6 lg:top-40 lg:w-[134px]">
                <span className="text-[10px] font-medium opacity-80 sm:text-xs lg:text-base">
                  Year to Date
                </span>
                <div className="mt-1 text-base font-semibold sm:text-lg lg:text-2xl">
                  $1200.38
                </div>
                <div className="mt-2 flex w-10 items-center justify-center rounded-[12px] bg-[#D4FB20] p-1.5 sm:p-2">
                  <span className="text-[9px] font-bold text-[#242528] sm:text-[10px]">
                    +12%
                  </span>
                </div>
              </div>

              {/* Main image — ON TOP of the cards */}
              <div className="relative z-20 w-full lg:w-[541px]">
                <Image
                  src={girlWithTablet}
                  alt="Creator with tablet"
                  className="w-full"
                />
              </div>

              {/* Floating — Happy Students */}
              <div className="absolute bottom-32 right-0 z-30 w-[180px] rounded-2xl bg-white p-2.5 shadow-xl sm:bottom-40 sm:right-2 sm:w-[220px] sm:p-3 lg:bottom-48 lg:w-[258px]">
                <div className="flex flex-col items-start text-left">
                  <span className="text-xs font-bold text-gray-800 sm:text-sm">
                    Happy Students
                  </span>
                  <span className="text-[9px] text-gray-400 sm:text-[10px]">
                    4.5 (1.2k Reviews)
                  </span>
                  <div className="mt-2 flex -space-x-3 sm:-space-x-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <div
                        key={i}
                        className=" xl:h-7 xl:w-7  overflow-hidden rounded-full border-2 border-white bg-gray-300 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
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
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#CCFF00] text-xs font-bold text-black sm:h-9 sm:w-9 sm:text-sm lg:h-11 lg:w-11 lg:text-base">
                      3k+
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="order-1 mt-8 text-center sm:mt-14 lg:order-2 md:mt-2 lg:mt-22 lg:text-left">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#242528] sm:text-3xl md:text-4xl lg:text-[44px]">
              Create &amp; Manage
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>
              Courses Easily.
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-sm leading-relaxed text-gray-500 sm:mt-7 sm:text-base lg:mx-0">
              <span className="font-semibold text-[#040819]">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Checklist */}
            <ul className="mt-8 space-y-3 text-left">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#003be2]">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-[#040819] sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
