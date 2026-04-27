import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { blobs } = await list({ prefix: "gallery/" });

    const images = blobs.map((blob) => {
      // Extract name from pathname: "gallery/1234567890_Some-Name.jpg"
      const filename = blob.pathname.replace("gallery/", "");
      const namepart = filename.replace(/^\d+_/, "").replace(/\.jpg$/, "");
      const displayName = namepart.replace(/-/g, " ");

      return {
        url: blob.url,
        pathname: blob.pathname,
        name: displayName,
        uploadedAt: blob.uploadedAt,
        size: blob.size,
      };
    });

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
