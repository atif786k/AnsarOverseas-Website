import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { blobs } = await list({ prefix: "gallery/" });

    // Separate image files and metadata JSON files
    const imageBlobs = blobs.filter((b) => b.pathname.endsWith(".jpg"));
    const metaBlobs = blobs.filter((b) => b.pathname.endsWith(".json"));

    // Build a map of metadata: base filename -> metadata URL
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
            const res = await fetch(metaUrl);
            const meta = await res.json();
            name = meta.name || "";
            category = meta.category || "Gallery";
            description = meta.description || "";
          } catch {
            // fallback below
          }
        }

        // Fallback name from pathname if no metadata
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
          uploadedAt: blob.uploadedAt,
          size: blob.size,
        };
      })
    );

    // Sort by upload date, newest first
    images.sort(
      (a, b) =>
        new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    );

    return NextResponse.json({ images });
  } catch (error) {
    console.error("List error:", error);
    return NextResponse.json({ images: [] });
  }
}
