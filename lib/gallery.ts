import { list } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export interface GalleryImage {
  url: string;
  pathname: string;
  name: string;
  category: string;
  description: string;
  uploadedAt: string;
  size: number;
}

/**
 * Reads the gallery from blob storage.
 *
 * Public pages call this behind ISR, so the per-image metadata JSON is fetched
 * with a one-hour cache. The admin screen passes `fresh: true` to bypass that
 * and always see its own edits immediately.
 */
export async function fetchGalleryImages({
  fresh = false,
}: { fresh?: boolean } = {}): Promise<GalleryImage[]> {
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
          const res = await fetch(
            metaUrl,
            fresh ? { cache: "no-store" } : { next: { revalidate: 3600 } },
          );
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
    }),
  );

  images.sort(
    (a, b) =>
      new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime(),
  );

  return images;
}

/**
 * Rebuilds the pages that render gallery images, so admin changes appear
 * immediately instead of waiting out the hourly revalidation.
 */
export function revalidateGallery(): void {
  revalidatePath("/gallery");
  revalidatePath("/");
  revalidatePath("/gallery-sitemap.xml");
}
