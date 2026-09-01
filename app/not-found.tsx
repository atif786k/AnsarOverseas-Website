import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Ansar Overseas" },
  robots: { index: false, follow: true },
};

const destinations = [
  {
    href: "/products",
    label: "All Products",
    description:
      "Lamp glass, candle holders, decorative glass, drinkware and custom components.",
  },
  {
    href: "/products/lamp-glass",
    label: "Lamp Glass & Lighting",
    description:
      "Chimneys, chandelier parts, pendant diffusers and sconce covers.",
  },
  {
    href: "/gallery",
    label: "Gallery",
    description:
      "Our factory floor, manufacturing process and finished products.",
  },
  {
    href: "/contact",
    label: "Contact Us",
    description: "Request a quote, bulk pricing or a product sample.",
  },
];

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block border border-accent/40 px-4 py-1.5">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                Error 404
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-light leading-tight text-balance">
              This page isn&apos;t{" "}
              <span className="font-semibold italic">here</span>
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              The page you were looking for has moved or never existed. Here is
              where most visitors are headed.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {destinations.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border border-border p-8 space-y-2 hover:border-accent/50 transition-colors group"
              >
                <h2 className="text-xl font-normal group-hover:text-accent transition-colors">
                  {item.label}
                </h2>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/">
              <Button
                size="lg"
                className="font-mono text-sm cursor-pointer group"
              >
                Back to Home
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
