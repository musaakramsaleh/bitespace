import type { StaticImageData } from "next/image";

// ==================== COURSE ====================

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type BaseCourse = {
  id: number;
  image: StaticImageData;
  title: string;
  author: string;
  rating: string;
  level: CourseLevel;
  price: string;
  tag: string;
  duration: string;
  lessons: string;
  comments: string;
  avatars: number[];
  extra: string;
};

// ==================== DETAILS ====================

export type CourseModule = {
  title: string;
  desc: string;
};

export type SidebarLesson = {
  title: string;
  time: string;
};

export type ReviewBreakdown = {
  stars: number;
  count: number;
};

export type IndividualReview = {
  name: string;
  role: string;
  date: string;
  stars: number;
  text: string;
  avatar: number;
};

export type CourseReviews = {
  score: string;
  total: string;
  breakdown: ReviewBreakdown[];
  individual: IndividualReview[];
};

export type SharedCourseDetail = {
  subtitle: string;
  lessonsCount: string;
  enrolled: string;
  instructorRole: string;
  longDescription: string;
  keyPoints: string[];
  modules: CourseModule[];
  sidebarLessons: SidebarLesson[];
  sidebarIncludes: string[];
  reviews: CourseReviews;
};
