import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  const password = request.headers.get("x-admin-password");

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const name = (formData.get("name") as string) || "Untitled";
    const category = (formData.get("category") as string) || "Gallery";
    const description = (formData.get("description") as string) || "";

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const isImage =
      file.type.startsWith("image/") ||
      file.name.toLowerCase().endsWith(".heic") ||
      file.name.toLowerCase().endsWith(".heif");

    if (!isImage) {
      return NextResponse.json(
        { error: "File must be an image" },
        { status: 400 }
      );
    }

    // Max 10MB input (raw camera photos can be large, sharp will compress)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File too large. Maximum 10MB." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Resize: max 1200px width, maintain aspect ratio, JPEG 80% quality
    // This compresses large camera photos (3-10MB) down to ~100-300KB
    const resizedBuffer = await sharp(buffer)
      .rotate() // auto-rotate based on EXIF orientation (important for mobile photos)
      .resize(1200, null, { withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toBuffer();

    // Create a filename with metadata encoded in the path
    const timestamp = Date.now();
    const safeName = name.replace(/[^a-zA-Z0-9-_ ]/g, "").replace(/\s+/g, "-");
    const filename = `gallery/${timestamp}_${safeName}.jpg`;

    const blob = await put(filename, resizedBuffer, {
      access: "public",
      contentType: "image/jpeg",
      addRandomSuffix: false,
      customMetadata: {
        name,
        category,
        description,
      },
    });

    return NextResponse.json({
      url: blob.url,
      pathname: blob.pathname,
      name,
      category,
      description,
      uploadedAt: new Date().toISOString(),
    });
  } catch (error: unknown) {
    console.error("Upload error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Upload failed: ${message}` },
      { status: 500 }
    );
  }
}
