import { notFound } from "next/navigation";

import ClassPage from "../classPage";
import { classData, getClassBySlug } from "@/src/components/class/classData";

export function generateStaticParams() {
  return classData.map((item) => ({ slug: item.slug }));
}

export default async function ClassSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const schoolClass = getClassBySlug(slug);

  if (!schoolClass) {
    notFound();
  }

  return <ClassPage schoolClass={schoolClass} />;
}
