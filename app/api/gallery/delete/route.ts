import { del } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const password = request.headers.get("x-admin-password");

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const urls: string[] = body.urls || (body.url ? [body.url] : []);

    if (urls.length === 0) {
      return NextResponse.json(
        { error: "No URLs provided" },
        { status: 400 }
      );
    }

    await del(urls);

    return NextResponse.json({ success: true, deleted: urls.length });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Delete failed. Please try again." },
      { status: 500 }
    );
  }
}
