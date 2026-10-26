/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  serverExternalPackages: ["sharp"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
  async headers() {
    return [
      {
        // Static images ship with `max-age=0` by default, so every visit
        // re-fetches them. A week of browser caching with a month of
        // stale-while-revalidate keeps repeat visits cheap without pinning a
        // replaced image forever.
        source: "/:path*.:ext(jpg|jpeg|png|webp|avif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
    ]
  },
}

export default nextConfig
