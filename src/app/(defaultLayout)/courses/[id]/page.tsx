import { notFound } from "next/navigation";
import { baseCourses } from "@/constants/CourseData";
import CourseDetailClient from "./CourseDetailClient";


type Props = {
  params: Promise<{ id: string }>;
};

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params;
  const course = baseCourses.find((c) => c.id === Number(id));
  if (!course) notFound();

  return <CourseDetailClient course={course} />;
}
