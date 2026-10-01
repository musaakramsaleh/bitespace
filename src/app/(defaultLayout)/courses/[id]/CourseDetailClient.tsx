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

        {/* ↓ FIX: mobile-e px-4, desktop-e px-6, xl-e px-0 */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-0 pt-24 sm:px-6 sm:pt-32 lg:px-0 lg:pt-36">
          {/* Top row: title + Share */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="w-full sm:max-w-[750px]">
              {/* ↓ FIX: title chhoto on mobile */}
              <h1 className="text-xl font-semibold leading-tight text-[#F5F5F6] sm:text-3xl md:text-[36px]">
                {title}: A Comprehensive Guide
              </h1>

              {/* ↓ FIX: subtitle smaller on mobile */}
              <p className="mt-3 text-sm text-[#F5F5F6] sm:max-w-[750px] sm:text-xl">
                {subtitle}
              </p>

              <p className="mt-3 text-xs text-[#F5F5F6] sm:mt-4 sm:text-sm">
                by <span className="underline">{author}</span>
              </p>

              {/* ↓ FIX: pills scrollable on tiny screens */}
              <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-[#040819] sm:px-4 sm:py-2 sm:text-xs">
                  <BarChart3 size={12} className="sm:hidden" />
                  <BarChart3 size={14} className="hidden sm:block" />
                  {level}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-[#040819] sm:px-4 sm:py-2 sm:text-xs">
                  <Star size={12} className="fill-[#040819] sm:hidden" />
                  <Star size={14} className="hidden fill-[#040819] sm:block" />
                  {rating} (172 reviews)
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-[#040819] sm:px-4 sm:py-2 sm:text-xs">
                  <Users size={12} className="sm:hidden" />
                  <Users size={14} className="hidden sm:block" />
                  199 Students
                </span>
              </div>
            </div>

            {/* ↓ FIX: Share button full-width on mobile */}
            <button className="flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#D4FB20] px-5 py-2.5 text-sm font-semibold text-[#040819] transition-transform hover:scale-105 active:scale-95 sm:w-auto sm:justify-start">
              <Share2 size={14} />
              Share
            </button>
          </div>

          {/* ================= Video + Sidebar grid ================= */}
          <div className="relative z-20 mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-[1.7fr_1fr] lg:gap-10">
            {/* Video */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-900 shadow-lg lg:h-[550px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover opacity-80"
              />
              {/* ↓ FIX: play button responsive size */}
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-[#4F4F4F]/60 sm:h-20 sm:w-20">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl sm:h-16 sm:w-16">
                  <Play
                    size={20}
                    className="ml-0.5 fill-[#4F4F4F]/60 text-transparent sm:hidden"
                  />
                  <Play
                    size={22}
                    className="ml-0.5 hidden fill-[#4F4F4F]/60 text-transparent sm:block"
                  />
                </div>
              </div>
            </div>

            {/* SIDEBAR CARD — ↓ FIX: no overlap on mobile, only lg+ */}
            <aside className="relative z-30 rounded-3xl border border-gray-200 bg-white p-2 shadow-lg lg:mb-[-260px] lg:self-start">
              {/* Section 1: Lessons */}
              <div className="p-4 sm:p-6">
                <h3 className="text-base font-semibold text-[#040819] sm:text-lg">
                  {lessonsCount}
                </h3>

                <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                  {sidebarLessons.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start justify-between gap-3 text-sm sm:text-base"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 text-sm font-medium text-[#242528] sm:text-base">
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

                <p className="mt-4 text-sm text-[#4B4C53] sm:text-base">
                  99 more videos
                </p>

                <p className="mt-6 max-w-[332px] text-sm leading-relaxed text-gray-600 sm:text-[13px]">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-[28px] font-semibold text-[#003BE2] sm:text-[36px]">
                    {price}
                  </span>
                  <span className="pb-1 text-sm text-[#4B4C53] sm:pb-2 sm:text-base">
                    /{tag}
                  </span>
                </div>

                <button className="mt-4 w-full rounded-full bg-[#D4FB20] py-3 text-base font-medium text-[#242528] transition-transform hover:scale-[1.02] active:scale-95 sm:text-[18px]">
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
                        className="flex items-center gap-3 text-sm text-[#4B4C53] sm:text-base"
                      >
                        <Icon size={16} className="shrink-0 text-[#003be2]" />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mx-4 border-t border-gray-200 sm:mx-6" />

              {/* Section 2: Instructor */}
              <div className="p-4 sm:p-6">
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
                    <h4 className="text-base font-medium text-[#242528] sm:text-[18px]">
                      {author}
                    </h4>
                    <p className="text-sm text-[#4B4C53] sm:text-base">
                      {instructorRole}
                    </p>
                  </div>
                </div>

                <p className="mt-5 max-w-[332px] text-sm leading-relaxed text-[#4B4C53] sm:text-base">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                <button className="mt-4 inline-flex items-center rounded-full border border-[#CED0D3] px-5 py-2 text-sm font-medium text-[#4B4C53] transition-colors hover:bg-gray-50 sm:text-base">
                  See Full Profile
                </button>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* ================= WHITE BODY ================= */}
      <div className="relative z-0 mx-auto max-w-[1200px] px-4 pb-16 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.7fr_1fr] lg:gap-10">
          <div className="pt-8 sm:pt-10 lg:pt-24">
            {/* ↓ FIX: tabs scrollable on tiny screens */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5 sm:text-sm ${
                    activeTab === tab.id
                      ? "bg-[#D4FB20] text-[#242528]"
                      : "bg-[#F5F5F6] text-gray-600 hover:bg-gray-50"
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

                <h3 className="mt-8 text-lg font-medium text-[#000000] sm:text-xl">
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

                <h3 className="mt-8 text-lg font-medium text-[#000000] sm:text-xl">
                  Key Points
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {keyPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#4F4F4F] sm:text-base"
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
                <h2 className="text-lg font-semibold text-[#000000] sm:text-xl">
                  Explore the Modules
                </h2>
                <p className="mt-4 text-sm text-[#4B4C53] sm:mt-5 sm:text-base">
                  Immerse yourself in the course content as we break down each
                  module into comprehensive lessons, providing practical
                  insights and hands-on experience.
                </p>

                <h2 className="mt-6 text-lg font-semibold text-[#000000] sm:mt-5 sm:text-xl">
                  Lesson List
                </h2>
                <ul className="mt-5 space-y-3">
                  {modules.map((mod, i) => (
                    <li
                      key={i}
                      className="flex cursor-pointer gap-3 rounded-2xl p-3 hover:bg-gray-100 sm:gap-4 sm:p-4"
                    >
                      {/* ↓ FIX: h-15 w-15 invalid — use h-12 w-12 sm:h-15 sm:w-15 */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4FB20] sm:h-14 sm:w-14">
                        <Image
                          src={camera}
                          alt="Camera"
                          className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#242528] sm:text-base">
                          {mod.title}
                        </h4>
                        <p className="mt-1 text-xs text-[#4B4C53] sm:text-base">
                          {mod.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-12">
                  <h2 className="text-lg font-semibold text-[#000000] sm:text-xl">
                    Lesson Content
                  </h2>
                  <p className="mt-4 text-sm text-[#4B4C53] sm:mt-5 sm:text-base">
                    Engage with a rich collection of thoughtfully curated video
                    content, detailed textual explanations, and interactive
                    quizzes. Download resources, complete assignments, and test
                    your understanding with quizzes.
                  </p>
                </div>

                <div className="mt-10">
                  <h2 className="text-lg font-semibold text-[#000000] sm:text-xl">
                    Lesson Progress Tracking
                  </h2>
                  <p className="mt-4 text-sm text-[#4B4C53] sm:mt-5 sm:text-base">
                    We&apos;ll track your growth as you complete lessons, with
                    an intuitive progress tracking feature guiding you through
                    your learning journey.
                  </p>
                  <div className="mt-5 rounded-2xl border border-gray-200 p-5">
                    <span className="text-sm font-medium text-[#242528]">
                      Learning Progress
                    </span>
                    <div className="mt-2 text-[28px] font-semibold text-[#242528] sm:text-[36px]">
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
                <h2 className="text-lg font-semibold text-[#000000] sm:text-xl">
                  What Learners Are Saying
                </h2>
                <p className="mt-4 max-w-[560px] text-sm text-[#4B4C53] sm:mt-5 sm:text-base">
                  Discover what our learners have to say about their experience
                  with &apos;Build Digital Assets: A Comprehensive Guide.&apos;
                  Read reviews and ratings from individuals who have embarked on
                  the transformative journey of mastering digital asset
                  creation.
                </p>

                {/* ↓ FIX: Rating summary stacks on mobile */}
                <div className="mt-6 flex flex-col items-stretch gap-4 rounded-2xl border border-gray-200 bg-white p-5 sm:mt-8 sm:flex-row sm:gap-6 sm:p-6 lg:gap-8">
                  <div className="flex w-full shrink-0 flex-row items-center justify-center gap-3 rounded-2xl bg-[#D4FB20] px-4 py-4 sm:w-[130px] sm:flex-col sm:gap-0 sm:py-6">
                    <span className="text-sm font-medium text-[#242528]">
                      Ratings
                    </span>
                    <span className="text-[36px] font-bold leading-none text-[#242528] sm:mt-1 sm:text-[42px]">
                      {reviews.score}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-center space-y-2 sm:space-y-3">
                    {reviews.breakdown.map((b) => (
                      <div
                        key={b.stars}
                        className="flex items-center gap-3 sm:gap-4"
                      >
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
                              size={12}
                              className="fill-[#242528] text-[#242528] sm:hidden"
                            />
                          ))}
                          {Array.from({ length: b.stars }).map((_, s) => (
                            <Star
                              key={`sm-${s}`}
                              size={14}
                              className="hidden fill-[#242528] text-[#242528] sm:block"
                            />
                          ))}
                        </div>

                        <span className="w-8 shrink-0 text-right text-xs text-[#4B4C53] sm:w-10 sm:text-sm">
                          {b.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-[#000000] sm:text-xl">
                    Individual Reviews:
                  </h3>

                  {/* ↓ FIX: filter pills scrollable */}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="shrink-0 rounded-full bg-[#D4FB20] px-4 py-2 text-xs font-medium text-[#242528] sm:px-5 sm:text-sm">
                      All rating
                    </span>
                    {[5, 4, 3, 2, 1].map((s) => (
                      <button
                        key={s}
                        className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#F5F5F6] px-3 py-2 text-xs text-[#4B4C53] transition-colors hover:bg-gray-200 sm:px-4 sm:text-sm"
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
                        className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
                      >
                        {/* ↓ FIX: header stacks on mobile */}
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200 sm:h-12 sm:w-12">
                              <Image
                                width={48}
                                height={48}
                                src={`https://i.pravatar.cc/100?img=${
                                  r.avatar + 20
                                }`}
                                alt={r.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-[#242528] sm:text-base">
                                {r.name}
                              </h4>
                              <p className="text-xs text-[#4B4C53] sm:text-sm">
                                {r.role}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs text-[#4B4C53] sm:text-sm">
                            {r.date}
                          </span>
                        </div>

                        <div className="mt-3 flex items-center gap-0.5 sm:mt-4">
                          {Array.from({ length: r.stars }).map((_, s) => (
                            <Star
                              key={s}
                              size={14}
                              className="fill-[#242528] text-[#242528] sm:hidden"
                            />
                          ))}
                          {Array.from({ length: r.stars }).map((_, s) => (
                            <Star
                              key={`sm-${s}`}
                              size={16}
                              className="hidden fill-[#242528] text-[#242528] sm:block"
                            />
                          ))}
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-[#4B4C53] sm:mt-4 sm:text-base">
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
