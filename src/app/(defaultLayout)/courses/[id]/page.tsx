import { notFound } from "next/navigation";
import { baseCourses } from "@/constants/CourseData";
import CourseDetailClient from "./CourseDetailClient";
import { Metadata } from "next";


type Props = {
  params: Promise<{ id: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const course = baseCourses.find((c) => c.id === Number(id));

  if (!course) {
    return {
      title: "Course Not Found | ByteSpace",
    };
  }

  return {
    title: `${course.title} | ByteSpace`,
    description: `${course.title} by ${course.author}. ${course.lessons} • ${course.duration}`,
    openGraph: {
      title: course.title,
      description: `Learn ${course.title} from ${course.author}`,
      images: [course.image.src],
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params;
  const course = baseCourses.find((c) => c.id === Number(id));
  if (!course) notFound();

  return <CourseDetailClient course={course} />;
}
