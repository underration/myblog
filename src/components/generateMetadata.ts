import { projectsData } from "./projectData";
import { Metadata } from "next";

interface MetadataProps {
  params: {
    id: string;
  };
}

// Next.jsのメタデータ生成関数
export function generateProjectMetadata({ params }: MetadataProps): Metadata {
  const { id } = params;
  const project = projectsData.find((p) => p.id === id);

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
      images: [
        {
          url: project ? project.image : "/default-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
