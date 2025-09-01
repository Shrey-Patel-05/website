import { fetchProjectByID } from "@/lib/data";
import PageContents from "@/app/projects/projectinfo/PageContents";
import type { project } from "@/lib/definitions";

type Props = {
  searchParams: { id: string | undefined } | Promise<{ id: string | undefined }>;
};

export default async function Page({ searchParams }: Props) {
  const { id } = await searchParams; // <-- await it here

  if (!id) return <div>Project ID missing</div>;

  const project: project | null = await fetchProjectByID(id);

  if (!project) return <div>Project not found</div>;

  return <PageContents project={project} />;
}
