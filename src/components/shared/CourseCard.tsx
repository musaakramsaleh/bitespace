/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { Star, BarChart3 } from "lucide-react";

type CourseCardProps = {
  image: any;
  title: string;
  author: string;
  rating: string;
  level: string;
  price: string;
  tag: string;
  duration: string;
  lessons: string;
  comments: string;
  avatars: number[];
  extra: string;
};

const CourseCard = ({
  image,
  title,
  author,
  rating,
  level,
  price,
  tag,
  duration,
  lessons,
  comments,
  avatars,
  extra,
}: CourseCardProps) => {
  return (
    <article className="group overflow-hidden p-4 rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Thumbnail */}
      <div className="relative h-[190px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Stat badges overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#F6F6F699]/60 px-3 py-1 text-[10px] font-medium text-[#4F4F4F] backdrop-blur-sm sm:text-xs">
            {lessons}
          </span>
          <span className="rounded-full bg-[#F6F6F699]/60 px-3 py-1 text-[10px] font-medium text-[#4F4F4F] backdrop-blur-sm sm:text-xs">
            {duration}
          </span>
          <span className="rounded-full bg-[#F6F6F699]/60 px-3 py-1 text-[10px] font-medium text-[#4F4F4F] backdrop-blur-sm sm:text-xs">
            {comments}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="py-5">
        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="truncate text-base font-bold text-[#0a0a0a] sm:text-lg">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-1 text-sm text-gray-500">
            <span>{rating}</span>
            <Star size={14} className="fill-gray-400 text-gray-400" />
          </div>
        </div>

        <p className="mt-1 text-xs text-gray-400">
          by <span className="text-[#003BE2]">{author}</span>
        </p>

        {/* Level + Avatars */}
        <div className="mt-4  flex items-center gap-3">
          <div className="flex px-2 py-1 rounded-lg bg-[#F6F6F6] items-center gap-2 text-xs text-[#4B4C53]">
            <BarChart3 className="text-[#4B4C53]" size={14} />
            <span>{level}</span>
          </div>

          <div className="flex -space-x-3">
            {avatars.map((a, idx) => (
              <div
                key={idx}
                className="h-7 w-7 overflow-hidden rounded-full border-2 border-white bg-gray-200"
              >
                <Image
                  width={28}
                  height={28}
                  src={`https://i.pravatar.cc/100?img=${a + 20}`}
                  alt="student"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#CCFF00] text-[10px] font-bold text-black">
              {extra}
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-center gap-1">
          <span className="text-lg font-extrabold text-[#003BE2]">{price}</span>
          <span className="text-xs mt-1 text-[#4F4F4F]">/{tag}</span>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
