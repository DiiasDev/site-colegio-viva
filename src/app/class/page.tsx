import { redirect } from "next/navigation";

import { classData } from "@/src/components/class/classData";

export default function ClassIndexPage() {
  const firstClass = classData[0];

  if (firstClass) {
    redirect(`/class/${firstClass.slug}`);
  }

  redirect("/");
}
