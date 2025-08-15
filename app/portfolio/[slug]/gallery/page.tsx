import ProjectGalleryView from '../../../../components/ProjectGalleryView';
import projects from '../../../../data/projects.json';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return projects.map((p: any) => ({ slug: p.id }));
}

export default function GalleryPage(props: any) {
  const { params } = props;
  const project = projects.find((p: any) => p.id === params?.slug);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
  }

  return <ProjectGalleryView images={project.images} title={project.title} />;
}
