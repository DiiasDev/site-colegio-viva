import { notFound } from "next/navigation";

import ProjectsPage from "@/src/app/projects/projectsPage";
import { getProjectBySlug, pData } from "@/src/components/projects/projectsData";

export function generateStaticParams() {
  return pData.map((project) => ({ slug: project.slug }));
}

export default async function ProjetoSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectsPage project={project} />;
}
