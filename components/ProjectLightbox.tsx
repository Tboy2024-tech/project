"use client";

import * as React from 'react';
// use native img tag here to avoid next/image config/encoding issues in the modal
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface LightboxProject {
  id: string;
  title: string;
  images: string[];
}

export default function ProjectLightbox({
  project,
  open,
  onClose,
}: {
  project: LightboxProject;
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!mounted) return null; // ensure portal target is present

  const root = document.getElementById('modal-root');
  if (!root) return null;

  return createPortal(
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={(e) => {
        // close when clicking the dimmed background
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl h-[80vh] bg-transparent">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-40 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <Carousel className="h-full">
          <CarouselContent className="h-full">
            {project.images.map((src, i) => (
              <CarouselItem key={i} className="h-full flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <img src={encodeURI(src)} alt={`${project.title} - ${i + 1}`} className="object-contain max-h-full max-w-full" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>,
    root
  );
}
