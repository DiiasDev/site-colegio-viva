import { redirect } from "next/navigation";

export default async function ProjectAliasSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/projetos/${slug}`);
}
