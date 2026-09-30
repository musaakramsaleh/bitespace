"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  Play,
  BarChart3,
  Users,
  Share2,
  Video,
  Award,
  Sparkles,
} from "lucide-react";

import { baseCourses, sharedCourseDetail as D } from "@/constants/CourseData";
import { IoMdCheckmark } from "react-icons/io";
import camera from "@/assets/Camera.png";

type Course = (typeof baseCourses)[number];

export default function CourseDetailClient({ course }: { course: Course }) {
  const { title, author, rating, level, price, tag, image } = course;

  const {
    subtitle,
    lessonsCount,
    instructorRole,
    longDescription,
    keyPoints,
    modules,
    sidebarLessons,
    sidebarIncludes,
    reviews,
  } = D;

  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">(
    "about",
  );

  const tabs = [
    { id: "about", label: "About" },
    { id: "lessons", label: "Lessons" },
    { id: "reviews", label: "Reviews" },
  ] as const;

  const includeIcons = [Video, Play, Award, Sparkles];

  return (
    <div className="w-full bg-white font-sans">
      {/* ================= BLUE HEADER ================= */}
      <header className="relative w-full bg-[#003be2]">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-0 pb-0 pt-32 sm:px-6 sm:pt-36 lg:px-0">
          {/* Top row: title + Share */}
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-[750px]">
              <h1 className="text-2xl font-semibold leading-tight text-[#F5F5F6] sm:text-3xl md:text-[36px]">
                {title}: A Comprehensive Guide
              </h1>
              <p className="mt-3 max-w-[750px] text-xs text-[#F5F5F6] sm:text-xl">
                {subtitle}
              </p>
              <p className="mt-4 text-xs text-[#F5F5F6] sm:text-sm">
                by <span className="underline">{author}</span>
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[11px] font-medium text-[#040819] sm:text-xs">
                  <BarChart3 size={14} />
                  {level}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[11px] font-medium text-[#040819] sm:text-xs">
                  <Star size={14} className="fill-[#040819]" />
                  {rating} (172 reviews)
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[11px] font-medium text-[#040819] sm:text-xs">
                  <Users size={14} />
                  199 Students
                </span>
              </div>
            </div>

            <button className="hidden shrink-0 items-center gap-2 rounded-full bg-[#D4FB20] px-5 py-2.5 text-sm font-semibold text-[#040819] transition-transform hover:scale-105 active:scale-95 sm:flex">
              <Share2 size={14} />
              Share
            </button>
          </div>

          {/* ================= Video + Sidebar grid ================= */}
          <div className="relative z-20 mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.7fr_1fr] lg:gap-10">
            {/* Video */}
            <div className="relative aspect-video lg:h-[550px] w-full overflow-hidden rounded-2xl bg-gray-900 shadow-lg">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#4F4F4F]/60 h-20 w-20 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl sm:h-16 sm:w-16">
                  <Play
                    size={22}
                    className="ml-0.5 fill-[#4F4F4F]/60 text-transparent"
                  />
                </div>
              </div>
            </div>

            {/* SIDEBAR CARD */}
            <aside className="relative z-30 rounded-3xl p-2 border border-gray-200 bg-white shadow-lg lg:mb-[-260px] lg:self-start">
              {/* Section 1: Lessons */}
              <div className="p-5 sm:p-6">
                <h3 className="text-base font-semibold text-[#040819] sm:text-lg">
                  {lessonsCount}
                </h3>

                <ul className="mt-5 space-y-4">
                  {sidebarLessons.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start justify-between gap-3 text-xs sm:text-base"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 text-base font-medium text-[#242528]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[#242528]">{item.title}</span>
                      </div>
                      <span className="shrink-0 text-[#003BE2]">
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-base text-[#4B4C53]">99 more videos</p>

                <p className="mt-6 text-xs max-w-[332px] leading-relaxed text-gray-600 sm:text-[13px]">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-[36px] font-semibold text-[#003BE2]">
                    {price}
                  </span>
                  <span className="text-base pb-2 text-[#4B4C53]">/{tag}</span>
                </div>

                <button className="mt-4 w-full rounded-full bg-[#D4FB20] py-3 text-[18px] font-medium text-[#242528] transition-transform hover:scale-[1.02] active:scale-95">
                  Enroll Now
                </button>

                <h4 className="mt-6 text-sm font-bold text-[#040819] sm:text-base">
                  This course include
                </h4>

                <ul className="mt-4 space-y-3">
                  {sidebarIncludes.map((item, i) => {
                    const Icon = includeIcons[i % includeIcons.length];
                    return (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-base text-[#4B4C53]"
                      >
                        <Icon size={16} className="shrink-0 text-[#003be2]" />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mx-5 border-t border-gray-200 sm:mx-6" />

              {/* Section 2: Instructor */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      width={44}
                      height={44}
                      src="https://i.pravatar.cc/100?img=32"
                      alt={author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-medium text-[#242528] sm:text-base">
                      {author}
                    </h4>
                    <p className="text-base text-[#4B4C53]">{instructorRole}</p>
                  </div>
                </div>

                <p className="mt-5 text-xs leading-relaxed max-w-[332px] text-[#4B4C53] sm:text-base">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                <button className="mt-4 inline-flex items-center rounded-full border border-[#CED0D3] px-5 py-2 text-base font-medium text-[#4B4C53] transition-colors hover:bg-gray-50">
                  See Full Profile
                </button>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* ================= WHITE BODY ================= */}
      <div className="relative z-0 mx-auto max-w-[1200px] px-4 pb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.7fr_1fr] lg:gap-10">
          <div className="pt-10 lg:pt-24">
            <div className="flex items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-2 text-base font-medium transition-colors sm:text-sm ${
                    activeTab === tab.id
                      ? "bg-[#D4FB20] text-[#242528]"
                      : " bg-[#F5F5F6] text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "about" && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-[#242528] sm:text-xl">
                  Description
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4B4C53]">
                  {longDescription}
                </p>

                <h3 className="mt-8 text-xl font-medium text-[#000000]">
                  Sneak Peak
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200"
                    >
                      <Image
                        src={image}
                        alt={`Preview ${n}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <h3 className="mt-8 text-xl font-medium text-[#000000]">
                  Key Points
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {keyPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-base text-[#4F4F4F]"
                    >
                      <IoMdCheckmark
                        size={16}
                        className="mt-0.5 shrink-0 rounded-full bg-[#003BE2] text-white"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "lessons" && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-[#000000] sm:text-xl">
                  Explore the Modules
                </h2>
                <p className="mt-5 text-base text-[#4B4C53]">
                  Immerse yourself in the course content as we break down each
                  module into comprehensive lessons, providing practical
                  insights and hands-on experience.
                </p>

                <h2 className="text-xl mt-5 font-semibold text-[#000000] sm:text-xl">
                  Lesson List
                </h2>
                <ul className="mt-5 space-y-3">
                  {modules.map((mod, i) => (
                    <li
                      key={i}
                      className="flex gap-4 hover:bg-gray-100 rounded-2xl cursor-pointer p-4"
                    >
                      <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-2xl bg-[#D4FB20]">
                        <Image src={camera} alt="Camera" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-[#242528]">
                          {mod.title}
                        </h4>
                        <p className="text-base text-[#4B4C53] sm:text-base">
                          {mod.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-12">
                  <h2 className="text-xl mt-5 font-semibold text-[#000000] sm:text-xl">
                    Lesson Content
                  </h2>
                  <p className="mt-5 text-base text-[#4B4C53]">
                    Engage with a rich collection of thoughtfully curated video
                    content, detailed textual explanations, and interactive
                    quizzes. Download resources, complete assignments, and test
                    your understanding with quizzes.
                  </p>
                </div>

                <div className="mt-10">
                  <h2 className="text-xl mt-5 font-semibold text-[#000000] sm:text-xl">
                    Lesson Progress Tracking
                  </h2>
                  <p className="mt-5 text-base text-[#4B4C53]">
                    We&apos;ll track your growth as you complete lessons, with
                    an intuitive progress tracking feature guiding you through
                    your learning journey.
                  </p>
                  <div className="mt-5 rounded-2xl border border-gray-200 p-5">
                    <span className="text-sm font-medium text-[#242528]">
                      Learning Progress
                    </span>
                    <div className="mt-2 text-[36px] font-semibold text-[#242528]">
                      55%
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-[#000000] sm:text-xl">
                  What Learners Are Saying
                </h2>
                <p className="mt-5 max-w-[560px] text-base text-[#4B4C53]">
                  Discover what our learners have to say about their experience
                  with &apos;Build Digital Assets: A Comprehensive Guide.&apos;
                  Read reviews and ratings from individuals who have embarked on
                  the transformative journey of mastering digital asset
                  creation.
                </p>

                {/* Rating Summary Card */}
                <div className="mt-8 flex items-stretch gap-6 rounded-2xl border border-gray-200 bg-white p-6 sm:gap-8">
                  <div className="flex w-[110px] shrink-0 flex-col items-center justify-center rounded-2xl bg-[#D4FB20] px-4 py-6 sm:w-[130px]">
                    <span className="text-sm font-medium text-[#242528]">
                      Ratings
                    </span>
                    <span className="mt-1 text-[42px] font-bold leading-none text-[#242528]">
                      {reviews.score}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-center space-y-3">
                    {reviews.breakdown.map((b) => (
                      <div key={b.stars} className="flex items-center gap-4">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                          <div
                            className="h-full rounded-full bg-[#D4FB20]"
                            style={{
                              width: `${
                                (b.count /
                                  reviews.breakdown.reduce(
                                    (a, x) => a + x.count,
                                    0,
                                  )) *
                                100
                              }%`,
                            }}
                          />
                        </div>

                        <div className="flex shrink-0 items-center gap-0.5">
                          {Array.from({ length: b.stars }).map((_, s) => (
                            <Star
                              key={s}
                              size={14}
                              className="fill-[#242528] text-[#242528]"
                            />
                          ))}
                        </div>

                        <span className="w-10 shrink-0 text-right text-sm text-[#4B4C53]">
                          {b.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-[#000000]">
                    Individual Reviews:
                  </h3>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#D4FB20] px-5 py-2 text-sm font-medium text-[#242528]">
                      All rating
                    </span>
                    {[5, 4, 3, 2, 1].map((s) => (
                      <button
                        key={s}
                        className="flex items-center gap-1.5 rounded-full bg-[#F5F5F6] px-4 py-2 text-sm text-[#4B4C53] transition-colors hover:bg-gray-200"
                      >
                        <Star
                          size={12}
                          className="fill-[#4B4C53] text-[#4B4C53]"
                        />
                        {s}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 space-y-4">
                    {reviews.individual.map((r, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-gray-200 bg-white p-6"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                              <Image
                                width={48}
                                height={48}
                                src={`https://i.pravatar.cc/100?img=${r.avatar + 20}`}
                                alt={r.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-[#242528]">
                                {r.name}
                              </h4>
                              <p className="text-sm text-[#4B4C53]">{r.role}</p>
                            </div>
                          </div>
                          <span className="text-sm text-[#4B4C53]">
                            {r.date}
                          </span>
                        </div>

                        <div className="mt-4 flex items-center gap-0.5">
                          {Array.from({ length: r.stars }).map((_, s) => (
                            <Star
                              key={s}
                              size={16}
                              className="fill-[#242528] text-[#242528]"
                            />
                          ))}
                        </div>

                        <p className="mt-4 text-base leading-relaxed text-[#4B4C53]">
                          {r.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
