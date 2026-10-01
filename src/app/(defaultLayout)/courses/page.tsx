import type { Metadata } from "next";
import CoursesPageClient from "./CoursesPageClient";


export const metadata: Metadata = {
  title: "Courses | ByteSpace",
  description: "Browse all courses available on ByteSpace.",
};

export default function CoursesPage() {
  return <CoursesPageClient />;
}
