import ProjectsComponent from "@/src/components/projects/projectsComponent";
import type { ProjectData } from "@/src/components/projects/projectsData";

export default function ProjectsPage({ project }: { project?: ProjectData }) {
  return <ProjectsComponent project={project} />;
}
