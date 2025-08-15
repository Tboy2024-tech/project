"use client";

import * as React from 'react';
import Image from 'next/image';
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
  const overlayRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    if (open) {
      document.addEventListener('keydown', onKey);
      // prevent background scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
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
              <CarouselItem key={i} className="h-full">
                <div className="relative w-full h-full">
                  <Image src={src} alt={`${project.title} - ${i + 1}`} fill className="object-contain" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
