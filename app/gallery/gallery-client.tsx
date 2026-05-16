"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface GalleryImage {
  url: string;
  name: string;
  category: string;
  description: string;
}

const ITEMS_PER_PAGE = 15;

export function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const loaderRef = useRef<HTMLDivElement>(null);

  const hasMore = visibleCount < images.length;

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasMore) {
        setVisibleCount((prev) =>
          Math.min(prev + ITEMS_PER_PAGE, images.length)
        );
      }
    },
    [hasMore, images.length]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "200px",
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  const visibleItems = images.slice(0, visibleCount);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-muted cursor-pointer aspect-square"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              src={item.url}
              alt={item.name}
              loading={index < 6 ? undefined : "lazy"}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay with product details */}
            <div
              className={`absolute inset-0 bg-primary/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                hoveredItem === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-xs font-mono text-accent tracking-widest uppercase mb-3">
                {item.category}
              </div>
              <h3 className="text-2xl font-normal text-primary-foreground text-center mb-3 text-balance">
                {item.name}
              </h3>
              <p className="text-sm font-mono text-primary-foreground/70 text-center max-w-xs">
                {item.description}
              </p>
              <div className="mt-6 text-xs font-mono text-primary-foreground/40 tracking-widest">
                ANSAR OVERSEAS
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div ref={loaderRef} className="flex justify-center py-12">
          <div className="w-6 h-6 border-2 border-muted-foreground/30 border-t-foreground rounded-full animate-spin" />
        </div>
      )}
    </>
  );
}
