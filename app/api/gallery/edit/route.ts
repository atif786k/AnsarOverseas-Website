import { put } from "@vercel/blob";
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

    // Derive the JSON metadata path from the image URL
    // Image URL: https://.../{path}.jpg → we need the pathname part
    const urlObj = new URL(url);
    const pathname = urlObj.pathname.startsWith("/")
      ? urlObj.pathname.slice(1)
      : urlObj.pathname;
    const jsonPathname = pathname.replace(/\.jpg$/, ".json");

    // Upload updated metadata JSON (overwrites existing)
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
  } catch (error) {
    console.error("Edit error:", error);
    return NextResponse.json(
      { error: "Failed to update image metadata" },
      { status: 500 }
    );
  }
}
