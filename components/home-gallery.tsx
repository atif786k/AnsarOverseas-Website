interface GalleryImage {
  url: string;
  name: string;
}

/**
 * Server-rendered so the images are in the initial HTML. The previous version
 * fetched /api/gallery/list from the browser, which robots.txt disallows —
 * leaving this section empty for every crawler.
 */
export function HomeGallery({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, index) => (
        <div
          key={img.url}
          className={`overflow-hidden group ${
            index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
          }`}
        >
          <img
            src={img.url}
            alt={img.name}
            width={800}
            height={800}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className="w-full h-full object-contain aspect-square group-hover:scale-105 transition-transform duration-500 bg-muted"
          />
        </div>
      ))}
    </div>
  );
}
