import ProjectGalleryView from '../../../../components/ProjectGalleryView';
import projects from '../../../../data/projects.json';

interface Params {
  params: { slug: string };
}

export default function GalleryPage({ params }: Params) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
  }

  return <ProjectGalleryView images={project.images} title={project.title} />;
}
