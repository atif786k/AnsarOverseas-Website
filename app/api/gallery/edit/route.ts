import { put, del, list } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const password = request.headers.get("x-admin-password");

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { url, name, category, description } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "Image URL is required" },
        { status: 400 }
      );
    }

    // Find the matching JSON metadata blob by listing all blobs
    // and matching the base filename
    const { blobs } = await list({ prefix: "gallery/" });
    const imageBlob = blobs.find((b) => b.url === url);

    if (!imageBlob) {
      return NextResponse.json(
        { error: "Image not found in storage" },
        { status: 404 }
      );
    }

    // Derive JSON pathname from image pathname: gallery/1234_name.jpg → gallery/1234_name.json
    const jsonPathname = imageBlob.pathname.replace(/\.jpg$/, ".json");

    // Delete old JSON metadata if it exists
    const oldJsonBlob = blobs.find((b) => b.pathname === jsonPathname);
    if (oldJsonBlob) {
      await del(oldJsonBlob.url);
    }

    // Upload new metadata JSON
    const metadata = JSON.stringify({
      name: name || "Untitled",
      category: category || "Gallery",
      description: description || "",
    });

    await put(jsonPathname, metadata, {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Edit error:", error);
    return NextResponse.json(
      { error: `Failed to update: ${error.message || "Unknown error"}` },
      { status: 500 }
    );
  }
}
