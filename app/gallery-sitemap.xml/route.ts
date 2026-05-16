import { fetchGalleryImages } from "@/lib/gallery";

export const dynamic = "force-dynamic";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const images = await fetchGalleryImages();
  const siteUrl = "https://ansar-overseas-website.vercel.app";

  const imageEntries = images
    .map(
      (img) => `
    <image:image>
      <image:loc>${escapeXml(img.url)}</image:loc>
      <image:title>${escapeXml(img.name)}</image:title>
      <image:caption>${escapeXml(img.description || img.name)}</image:caption>
    </image:image>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}/gallery</loc>
    <lastmod>${new Date().toISOString()}</lastmod>${imageEntries}
  </url>
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
