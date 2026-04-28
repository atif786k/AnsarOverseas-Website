import { list, head } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { blobs } = await list({ prefix: "gallery/" });

    const images = await Promise.all(
      blobs.map(async (blob) => {
        // Get full blob details including custom metadata
        let metadata: Record<string, string> = {};
        try {
          const details = await head(blob.url);
          metadata = (details as { customMetadata?: Record<string, string> }).customMetadata || {};
        } catch {
          // fallback to parsing from pathname
        }

        // Fallback name from pathname if no metadata
        const filename = blob.pathname.replace("gallery/", "");
        const namepart = filename.replace(/^\d+_/, "").replace(/\.jpg$/, "");
        const fallbackName = namepart.replace(/-/g, " ");

        return {
          url: blob.url,
          pathname: blob.pathname,
          name: metadata.name || fallbackName,
          category: metadata.category || "Gallery",
          description: metadata.description || "",
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
