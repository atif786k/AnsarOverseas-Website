"use client";

import { useEffect, useState } from "react";

interface GalleryImage {
  url: string;
  name: string;
}

export function HomeGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetch("/api/gallery/list")
      .then((res) => res.json())
      .then((data) => {
        if (data.images && data.images.length > 0) {
          setImages(data.images.slice(0, 5));
        }
      })
      .catch(() => {});
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, index) => (
        <div
          key={img.url}
          className={`overflow-hidden group ${
            index === 0 || index === 5
              ? "md:col-span-2 md:row-span-2"
              : ""
          }`}
        >
          <img
            src={img.url}
            alt={img.name}
            loading="lazy"
            className="w-full h-full object-contain aspect-square group-hover:scale-105 transition-transform duration-500 bg-muted"
          />
        </div>
      ))}
    </div>
  );
}
