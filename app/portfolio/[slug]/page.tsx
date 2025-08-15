import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/ProjectDetail';
import projectsData from '@/data/projects.json';

// Use inline param types to match Next.js expected shapes for route params

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const project = projectsData.find((p) => p.id === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Ojo Oluwatimileyin Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export default function ProjectPage({ params }: any) {
  const project = projectsData.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}