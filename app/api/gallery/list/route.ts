import { NextResponse } from "next/server";
import { fetchGalleryImages } from "@/lib/gallery";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const images = await fetchGalleryImages();
    return NextResponse.json({ images });
  } catch (error) {
    console.error("List error:", error);
    return NextResponse.json({ images: [] });
  }
}
