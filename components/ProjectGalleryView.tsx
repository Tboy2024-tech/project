'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

interface Props {
  images: string[];
  title?: string;
}

export default function ProjectGalleryView({ images, title }: Props) {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{title ?? 'Gallery'}</h2>
          <p className="text-sm text-gray-400">{index + 1} / {images.length}</p>
        </div>

        <div className="relative bg-black rounded-lg overflow-hidden">
          <div className="relative h-[60vh]">
            <Image src={images[index]} alt={`${title} - ${index + 1}`} fill className="object-contain" />
          </div>

          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full">
            <ArrowLeft />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full">
            <ArrowRight />
          </button>

          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button className="bg-black/40 p-2 rounded-md">Download</button>
            <button className="bg-black/40 p-2 rounded-md" onClick={() => window.history.back()}>
              <X />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-6">
          {images.map((img, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-24 rounded-md overflow-hidden border ${i === index ? 'ring-2 ring-primary' : 'border-transparent'}`}>
              <div className="relative h-full">
                <Image src={img} alt={`thumb-${i}`} fill className="object-cover" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
