"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

interface GalleryImage {
  url: string;
  name: string;
  category: string;
  description: string;
}

const ITEMS_PER_PAGE = 15;

export default function GalleryPage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryImage[]>([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/gallery/list")
      .then((res) => res.json())
      .then((data) => {
        if (data.images && data.images.length > 0) {
          setGalleryItems(
            data.images.map((img: { url: string; name: string }) => ({
              url: img.url,
              name: img.name,
              category: "Gallery",
              description: "",
            }))
          );
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const hasMore = visibleCount < galleryItems.length;

  // Infinite scroll observer
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasMore) {
        setVisibleCount((prev) =>
          Math.min(prev + ITEMS_PER_PAGE, galleryItems.length)
        );
      }
    },
    [hasMore, galleryItems.length]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "200px",
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  const visibleItems = galleryItems.slice(0, visibleCount);

  return (
    <div className="min-h-screen">
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
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-muted-foreground/30 border-t-foreground rounded-full animate-spin" />
            </div>
          ) : galleryItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">
              Gallery images coming soon.
            </p>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden bg-muted cursor-pointer aspect-square"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay with product details */}
                    <div
                      className={`absolute inset-0 bg-primary/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                        hoveredItem === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="text-xs font-mono text-accent tracking-widest uppercase mb-3">
                        {item.category}
                      </div>
                      <h3 className="text-2xl font-normal text-primary-foreground text-center mb-3 text-balance">
                        {item.name}
                      </h3>
                      <p className="text-sm font-mono text-primary-foreground/70 text-center max-w-xs">
                        {item.description}
                      </p>
                      <div className="mt-6 text-xs font-mono text-primary-foreground/40 tracking-widest">
                        ANSAR OVERSEAS
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Infinite scroll trigger */}
              {hasMore && (
                <div ref={loaderRef} className="flex justify-center py-12">
                  <div className="w-6 h-6 border-2 border-muted-foreground/30 border-t-foreground rounded-full animate-spin" />
                </div>
              )}
            </>
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
                href="https://wa.me/917727075499"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="font-mono text-sm bg-transparent cursor-pointer"
                >
                  <MessageCircleMore className="mr-2 h-4 w-4" />
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
