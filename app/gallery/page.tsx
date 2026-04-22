"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const galleryItems = [
    {
      name: "Molten Glass Crafting",
      category: "Manufacturing Process",
      description: "Skilled artisan shaping molten glass using traditional techniques",
      image: "/artisan-glassblowing-in-factory-with-molten-glass.jpg",
    },
    {
      name: "Premium Finished Products",
      category: "Finished Goods",
      description: "Export-grade glass products ready for dispatch",
      image: "/finished-glass-products-premium-quality.jpg",
    },
    {
      name: "Production Line",
      category: "Bulk Manufacturing",
      description: "Our factory floor handling large-scale production runs",
      image: "/glass-manufacturing-factory-production-line-bulk-o.jpg",
    },
    {
      name: "Master Glassblower",
      category: "Craftsmanship",
      description: "Experienced artisan with decades of glass-making expertise",
      image: "/experienced-glassblower-artisan-at-work.jpg",
    },
    {
      name: "Quality Inspection",
      category: "Quality Control",
      description: "Rigorous quality checks ensuring export-grade standards",
      image: "/glass-quality-inspection-microscope.jpg",
    },
    {
      name: "Glass Furnace",
      category: "Manufacturing Process",
      description: "High-temperature glass melting furnace in operation",
      image: "/glass-manufacturing-molten-glass-furnace.jpg",
    },
    {
      name: "Annealing Process",
      category: "Manufacturing Process",
      description: "Controlled cooling process for strength and durability",
      image: "/glass-cooling-annealing-process.jpg",
    },
    {
      name: "Final Inspection",
      category: "Quality Control",
      description: "Each product inspected before packaging and dispatch",
      image: "/finished-glass-products-quality-inspection.jpg",
    },
    {
      name: "Team at Work",
      category: "Our Team",
      description: "50+ skilled workers collaborating on the factory floor",
      image: "/glass-factory-team-working-together.jpg",
    },
    {
      name: "Workshop Heritage",
      category: "Our Facility",
      description: "Our family-owned workshop carrying forward Firozabad's glass legacy",
      image: "/family-owned-glass-factory-workshop-heritage.jpg",
    },
  ];

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden bg-muted cursor-pointer ${
                  index === 0 || index === 4
                    ? "md:col-span-2 lg:col-span-1 aspect-square lg:aspect-4/3"
                    : "aspect-square"
                }`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
