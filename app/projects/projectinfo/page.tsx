import { fetchProjectByID } from "@/lib/data";
import PageContents from "@/app/projects/projectinfo/PageContents";
import type { project } from "@/lib/definitions";

type Props = { searchParams: { id: string } };

export default async function Page({ searchParams }: Props) {
  const project: project | null = await fetchProjectByID(searchParams.id);

  if (!project) return <div>Project not found</div>;

  return <PageContents project={project} />;
}
