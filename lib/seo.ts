import type { Metadata } from "next";

export const SITE_URL = "https://ansar-overseas-website.vercel.app";
export const SITE_NAME = "Ansar Overseas";

interface SeoInput {
  /** Full <title>, used verbatim. Keep to 60 characters or fewer. */
  title: string;
  /** Meta description. Keep to 155 characters or fewer. */
  description: string;
  /** Path from the site root, e.g. "/products/lamp-glass". */
  path: string;
  /** Open Graph image path. Defaults to the site-wide card. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
}

/**
 * Builds a complete metadata object for a route.
 *
 * Next merges metadata shallowly — a page that declares its own `openGraph`
 * replaces the one from the root layout instead of extending it. Going through
 * this helper keeps og:image, og:url and og:type on every page.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = "/og-default.jpg",
  imageAlt = "Ansar Overseas — custom glass manufacturing in Firozabad, India",
  type = "website",
  publishedTime,
}: SeoInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      ...(publishedTime && { publishedTime }),
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
