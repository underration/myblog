import { projectsData } from "@/components/projectData";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: {
    id: string;
  };
  children: React.ReactNode;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = params;
  const project = projectsData.find((p) => p.id === id);

  // 親のメタデータを取得（オプション）
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: project
      ? `${project.title} - プロジェクト詳細`
      : "プロジェクトが見つかりません",
    description: project ? project.description : "プロジェクトが見つかりません",
    openGraph: {
      title: project
        ? `${project.title} - プロジェクト詳細`
        : "プロジェクトが見つかりません",
      description: project
        ? project.description
        : "プロジェクトが見つかりません",
      url: `https://yourwebsite.com/projects/${id}`,
      images: project?.image
        ? [
            {
              url: project.image,
              width: 1200,
              height: 630,
              alt: project.title,
            },
            ...previousImages,
          ]
        : previousImages,
    },
  };
}

export default function ProjectLayout({ children }: Props) {
  return children;
}
