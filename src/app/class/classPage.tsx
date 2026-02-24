import ClassComponent from "@/src/components/class/classComponent";
import type { SchoolClass } from "@/src/components/class/classData";

export default function ClassPage({ schoolClass }: { schoolClass: SchoolClass }) {
  return <ClassComponent schoolClass={schoolClass} />;
}
