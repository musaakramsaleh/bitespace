import React from "react";

// Course thumbnails
import course1 from "@/assets/course-1.png";
import course2 from "@/assets/course-2.png";
import course3 from "@/assets/course-3.png";
import course4 from "@/assets/course-4.png";
import course5 from "@/assets/course-5.png";
import course6 from "@/assets/course-6.png";
import design from "@/assets/about-1.png";
import development from "@/assets/about-2.png";
import software from "@/assets/about-3.png";
import business from "@/assets/about-4.png";
import marketing from "@/assets/about-5.png";
import photography from "@/assets/about-6.png";
import CourseCard from "../shared/CourseCard";
import Image from "next/image";

const Discover = () => {
  const topCategories = [
    { label: "Featured", active: true },
    { label: "Music" },
    { label: "Drawing & Painting" },
    { label: "Marketing" },
    { label: "Animation" },
    { label: "Social Media" },
    { label: "UI/UX Design" },
    { label: "Creative Marketing" },
  ];

  const bottomCategories = [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ];

  const courses = [
    {
      image: course1,
      title: "Learn Figma from Basic",
      author: "purpearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      tag: "lifetime",
      duration: "2 hours 16 mins",
      lessons: "17 Lessons",
      comments: "69 Comments",
      avatars: [1, 2, 3],
      extra: "20+",
    },
    {
      image: course2,
      title: "Build Digital Asset",
      author: "purpearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      tag: "lifetime",
      duration: "2 hours 16 mins",
      lessons: "17 Lessons",
      comments: "69 Comments",
      avatars: [4, 5, 6],
      extra: "20+",
    },
    {
      image: course3,
      title: "the Power of Big Data",
      author: "purpearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      tag: "lifetime",
      duration: "2 hours 16 mins",
      lessons: "17 Lessons",
      comments: "69 Comments",
      avatars: [7, 8, 9],
      extra: "20+",
    },
    {
      image: course4,
      title: "Balancing Productivity an...",
      author: "purpearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      tag: "lifetime",
      duration: "2 hours 16 mins",
      lessons: "17 Lessons",
      comments: "69 Comments",
      avatars: [10, 11, 12, 15],
      extra: "20+",
    },
    {
      image: course5,
      title: "Mastering Money Manage...",
      author: "purpearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      tag: "lifetime",
      duration: "2 hours 16 mins",
      lessons: "17 Lessons",
      comments: "69 Comments",
      avatars: [13, 14, 15, 16],
      extra: "20+",
    },
    {
      image: course6,
      title: "From Idea to Startup Succ...",
      author: "purpearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      tag: "lifetime",
      duration: "2 hours 16 mins",
      lessons: "17 Lessons",
      comments: "69 Comments",
      avatars: [16, 17, 18, 11],
      extra: "20+",
    },
  ];

  const learningPaths = [
    { icon: design, title: "Design" },
    { icon: development, title: "Development" },
    { icon: software, title: "IT & Software" },
    { icon: business, title: "Business" },
    { icon: marketing, title: "Marketing" },
    { icon: photography, title: "Photography" },
  ];

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 md:py-12 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        {/* --- Heading --- */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#040819] sm:text-4xl md:text-[44px]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mx-auto mt-5 max-w-[900px] text-sm leading-relaxed text-gray-500 sm:text-base">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* --- Category Pills --- */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {topCategories.map((cat, i) => (
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

        {/* --- Secondary Categories --- */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {bottomCategories.map((cat, i) => (
            <button
              key={i}
              className="rounded-full bg-[#f5f5f6] px-5 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 sm:text-sm"
            >
              {cat}
            </button>
          ))}
          <button className="rounded-full px-3 py-2 text-xs font-bold text-[#003be2] hover:underline sm:text-sm">
            + More
          </button>
        </div>

        {/* --- Course Grid --- */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </div>

      {/* --- Explore Diverse Learning Paths --- */}
      <div className="mx-auto mt-16 max-w-[1200px]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#040819] sm:text-4xl md:text-[44px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-5 max-w-[917px] text-sm leading-relaxed text-gray-500 sm:text-base">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* Learning path cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 md:gap-6">
          {learningPaths.map((path, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center rounded-2xl border border-[#CED0D3] bg-white px-4 py-8 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4FB20] transition-transform group-hover:scale-105">
                <Image
                  width={300}
                  height={300}
                  src={path.icon}
                  alt={path.title}
                  className=""
                />
              </div>
              <span className="mt-4 text-sm font-medium text-[#242528] sm:text-base">
                {path.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
