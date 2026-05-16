import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import Link from "next/link";
import { fetchGalleryImages } from "@/lib/gallery";
import { GalleryClient } from "./gallery-client";
import { ImageGalleryJsonLd } from "@/components/json-ld";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  let images: Awaited<ReturnType<typeof fetchGalleryImages>> = [];
  try {
    images = await fetchGalleryImages();
  } catch {
    // Falls back to empty array (e.g., missing token in local dev)
  }

  return (
    <div className="min-h-screen">
      <ImageGalleryJsonLd images={images} />
      <Navigation />

      {/* Header Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block border border-accent/40 px-4 py-1.5">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                Our Work
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight text-balance">
              From our{" "}
              <span className="font-semibold italic">factory floor</span>
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              A glimpse into our manufacturing process, craftsmanship, and the
              products we create at our facility in Firozabad.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          {images.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">
              Gallery images coming soon.
            </p>
          ) : (
            <GalleryClient images={images} />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-balance">
              Want to see more or discuss your requirements?
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              We can share detailed product photos, samples, or arrange a
              virtual tour of our factory. Contact us to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="font-mono text-sm cursor-pointer group"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="https://wa.me/916399035470"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="font-mono text-sm bg-transparent cursor-pointer"
                >
                  <WhatsAppIcon className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
