import { list } from "@vercel/blob";

export interface GalleryImage {
  url: string;
  pathname: string;
  name: string;
  category: string;
  description: string;
  uploadedAt: string;
  size: number;
}

export async function fetchGalleryImages(): Promise<GalleryImage[]> {
  const { blobs } = await list({ prefix: "gallery/" });

  const imageBlobs = blobs.filter((b) => b.pathname.endsWith(".jpg"));
  const metaBlobs = blobs.filter((b) => b.pathname.endsWith(".json"));

  const metaMap = new Map<string, string>();
  for (const meta of metaBlobs) {
    const base = meta.pathname.replace(/\.json$/, "");
    metaMap.set(base, meta.url);
  }

  const images = await Promise.all(
    imageBlobs.map(async (blob) => {
      const base = blob.pathname.replace(/\.jpg$/, "");
      const metaUrl = metaMap.get(base);

      let name = "";
      let category = "Gallery";
      let description = "";

      if (metaUrl) {
        try {
          const res = await fetch(metaUrl, { cache: "no-store" });
          const meta = await res.json();
          name = meta.name || "";
          category = meta.category || "Gallery";
          description = meta.description || "";
        } catch {
          // fallback below
        }
      }

      if (!name) {
        const filename = blob.pathname.replace("gallery/", "");
        const namepart = filename.replace(/^\d+_/, "").replace(/\.jpg$/, "");
        name = namepart.replace(/-/g, " ");
      }

      return {
        url: blob.url,
        pathname: blob.pathname,
        name,
        category,
        description,
        uploadedAt: blob.uploadedAt.toISOString(),
        size: blob.size,
      };
    })
  );

  images.sort(
    (a, b) =>
      new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
  );

  return images;
}
