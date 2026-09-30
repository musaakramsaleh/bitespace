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
    <section className="relative w-full overflow-hidden pt-14">
      {/* --- Background Image --- */}
      <Image
        src={bg}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 -z-10 object-cover"
      />

      {/* --- Section 1: Text Left / Image Right --- */}
      <div className="mx-auto max-w-[1200px] ">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text */}
          <div className="text-center lg:text-left mt-22">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#242528] sm:text-4xl md:text-[44px]">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="mx-auto mt-7 max-w-[477px] text-sm leading-relaxed text-gray-500 sm:text-[18px] lg:mx-0">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats */}
            <div className="mt-10 flex items-start justify-center gap-10 sm:gap-14 lg:justify-start">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-start">
                  <span className="text-[36px] font-bold text-[#003BE2] sm:text-4xl">
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
            <div className="relative w-full">
              {/* Green doodle */}
              <Image
                src={greenDoodleTop}
                alt=""
                className="pointer-events-none absolute -right-16 top-28 z-60"
              />

              {/* Floating Course Card — BEHIND the boy (z-10) */}
              <div className="absolute -left-4 top-6 z-10 shadow-xl sm:-left-8 sm:top-10">
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

              {/* Main image — ON TOP of the card (z-20) */}
              <div className="relative mt-23 z-40 w-[621px]">
                <Image
                  src={boyWithLaptop}
                  alt="Student with laptop"
                  className=""
                  priority
                />
              </div>

              {/* Floating — Progress card (right, above image) */}
              <div className="absolute -right-4 top-32 z-40 w-[238px]  shadow-xl] bg-white p-4 shadow-xl rounded-2xl  sm:-right-6 sm:top-65 sm:w-[238px]">
                <span className="text-xs font-bold text-gray-600">
                  Learning Progress
                </span>
                <p className="text-[42px] font-extrabold text-black">55%</p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-[55%] rounded-full bg-[#D4FB20]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section 2: Image Left / Text Right --- */}
      <div className="mx-auto mt-12 max-w-[1200px] px-4 sm:px-6 lg:mt-2 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Image with floating cards */}
          <div className="relative order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative w-full">
              {/* Green doodle */}
              <Image
                src={greenDoodleBottom}
                alt=""
                className="pointer-events-none absolute right-10 top-25 z-40"
              />

              {/* Floating — Revenue card (BEHIND the girl) */}
              <div className="absolute -left-4 top-6 z-10 rounded-2xl bg-[#003be2] p-4 text-[#F5F5F6] shadow-xl sm:-left-6 w-[232px]">
                <span className="text-base font-medium opacity-80">
                  Total Revenue
                </span>
                <p className="text-[10px] text-[#F5F5F6]">July 1-28</p>
                <div className="mt-1 text-2xl font-semibold sm:text-2xl">
                  $120.29
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white">
                  <div className="h-full w-[65%] rounded-full bg-[#D4FB20]"></div>
                </div>
              </div>

              {/* Floating — YTD card (BEHIND the girl) */}
              <div className="absolute -left-6 top-40 z-10 w-[134px] rounded-2xl bg-[#003be2] p-4 text-white shadow-xl sm:top-44">
                <span className="text-base font-medium opacity-80">
                  Year to Date
                </span>
                <div className="mt-1 text-2xl font-semibold sm:text-2xl">
                  $1200.38
                </div>

                <div className="w-10 mt-2 bg-[#D4FB20] flex items-center justify-center p-2 rounded-[12px]">
                  <span className="text-[10px] font-bold text-[#242528]">
                    +12%
                  </span>
                </div>
              </div>

              {/* Main image — ON TOP of the cards (z-20) */}
              <div className="relative z-20 w-[541px]">
                <Image
                  src={girlWithTablet}
                  alt="Creator with tablet"
                  className="w-full"
                />
              </div>

              {/* Floating — Happy Students (ON TOP of everything) */}
              <div className="absolute bottom-48 z-30 w-[258px] rounded-2xl bg-white p-3 shadow-xl right-2">
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

          {/* Right — Text */}
          <div className="order-1 text-center mt-22 lg:order-2 lg:text-left">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#242528] sm:text-4xl md:text-[44px]">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="mx-auto mt-7 max-w-[520px] text-sm leading-relaxed text-gray-500 sm:text-base lg:mx-0">
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
