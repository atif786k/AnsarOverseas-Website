import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Glass Products — Lamp Glass, Candle Holders, Decorative Glass & More",
  description:
    "Explore our range of glass products: lamp glass & lighting components, candle holders & votives, decorative glass, drinkware, containers & custom glass manufacturing. Bulk orders welcome.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Glass Products — Lamp Glass, Candle Holders, Decorative Glass & Custom Components",
    description:
      "Full range of B2B glass products: lighting components, candle holders, decorative glass, drinkware & custom manufacturing from Firozabad, India.",
  },
};
import {
  ArrowRight,
  Lamp,
  Flame,
  Gem,
  GlassWater,
  Settings,
  Boxes,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import Link from "next/link";

export default function ProductsPage() {
  const categories = [
    {
      icon: Lamp,
      title: "Lamp Glass & Lighting Components",
      description:
        "We manufacture a wide range of glass components for the lighting industry — from traditional lamp chimneys to modern chandelier parts and pendant light diffusers.",
      items: [
        "Lamp chimneys & shades",
        "Chandelier glass components",
        "Pendant light diffusers",
        "Wall sconce glass covers",
        "Decorative lighting enclosures",
        "Custom lighting glass to specification",
      ],
      useCases:
        "Ideal for lighting manufacturers, chandelier brands, and OEM lighting suppliers looking for reliable custom glass components.",
      image: "/product-lamp-glass.png",
      href: "/products/lamp-glass",
    },
    {
      icon: Flame,
      title: "Candle Holders & Votives",
      description:
        "Our candle glass range includes hurricane holders, tealight cups, votive containers, and decorative candle enclosures — available in various shapes, sizes, and finishes.",
      items: [
        "Hurricane candle holders",
        "Votive glass containers",
        "Tealight cups & holders",
        "Pillar candle enclosures",
        "Decorative candle jars",
        "Custom shapes & frosted finishes",
      ],
      useCases:
        "Perfect for home decor brands, candle companies, gift exporters, and retail chains looking for quality candle glassware.",
      image: "/product-candle-holders.png",
      href: "/products/candle-holders",
    },
    {
      icon: Gem,
      title: "Decorative Glass & Handicraft Components",
      description:
        "We produce glass inserts and decorative components for metal handicrafts, lanterns, terrariums, and home decor products — designed to complement your creations.",
      items: [
        "Glass inserts for metal decor",
        "Lantern glass panels & cylinders",
        "Terrarium glass containers",
        "Decorative bowls & platters",
        "Glass components for handicraft items",
        "Custom decorative glass pieces",
      ],
      useCases:
        "Designed for handicraft exporters, home decor brands, interior designers, and furniture accessory makers.",
      image: "/product-decorative-glass.png",
      href: "/products/decorative-glass",
    },
    {
      icon: GlassWater,
      title: "Drinkware, Bottles & Containers",
      description:
        "Our everyday and premium glassware range covers beverage glasses, bottles, mugs, storage jars, and containers suitable for retail, HORECA, and wholesale distribution.",
      items: [
        "Drinking glasses & tumblers",
        "Beverage & juice bottles",
        "Coffee & tea mugs",
        "Mason jars & storage containers",
        "Oil & vinegar bottles",
        "Water & milk bottles",
      ],
      useCases:
        "Suitable for HORECA suppliers, retail brands, wholesale distributors, and beverage companies needing consistent bulk supply.",
      image: "/product-drinkware.png",
      href: "/products/drinkware",
    },
    {
      icon: Settings,
      title: "Custom Glass Components",
      description:
        "Can't find what you need in standard catalogs? We specialize in manufacturing glass products from scratch based on your exact specifications — shape, size, thickness, color, and finish.",
      items: [
        "Glass parts from your technical drawings",
        "Prototype development & sampling",
        "Custom shapes, sizes & thickness",
        "Frosted, colored, or clear finishes",
        "Logo etching & branding",
        "Packaging customization",
      ],
      useCases:
        "For OEM manufacturers, product designers, startups, and any business with unique glass requirements.",
      image: "/product-custom-glass.png",
      href: "/products/custom-glass",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block border border-accent/40 px-4 py-1.5 mb-6">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                Our Product Range
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 text-balance">
              Glass products for{" "}
              <span className="font-semibold italic">every industry</span>
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed max-w-2xl">
              From lamp glass and decorative components to drinkware and custom
              manufacturing — explore our full range of products built for B2B
              buyers and exporters.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-accent" />
                        <span className="text-sm font-mono text-accent tracking-wide uppercase">
                          Category {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-light">
                        {category.title}
                      </h2>
                      <p className="text-base font-mono text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                      <ul className="space-y-2.5">
                        {category.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center gap-3"
                          >
                            <div className="h-1.5 w-1.5 bg-accent shrink-0" />
                            <span className="text-sm font-mono">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-muted p-4 border-l-2 border-accent">
                        <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">Best for: </strong>
                          {category.useCases}
                        </p>
                      </div>
                      <Link href={category.href}>
                        <Button className="font-mono text-sm cursor-pointer mt-2">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <Link
                    href={category.href}
                    className={`aspect-4/3 overflow-hidden block ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bulk Orders Section */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Boxes className="h-6 w-6 text-accent" />
                <span className="text-sm font-mono tracking-widest text-accent uppercase">
                  Bulk Manufacturing
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-balance">
                Bulk order capabilities
              </h2>
              <p className="text-base font-mono text-muted-foreground leading-relaxed">
                With our large manufacturing setup and 50+ skilled workers, we
                handle bulk orders with consistent quality across every batch.
                Whether it's a one-time large order or an ongoing supply
                partnership — we deliver.
              </p>
              <ul className="space-y-3">
                {[
                  "Export houses & trading companies",
                  "Wholesale distributors & chain retailers",
                  "Hotel, restaurant & hospitality chains",
                  "Lighting manufacturers & OEM suppliers",
                  "Home decor & candle brands",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 bg-accent shrink-0" />
                    <span className="text-sm font-mono">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="font-mono text-sm cursor-pointer mt-2">
                  Get Bulk Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="/glass-manufacturing-factory-production-line-bulk-o.jpg"
                alt="Bulk glass manufacturing production line"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-balance">
              Don't see exactly what you need?
            </h2>
            <p className="text-lg font-mono text-primary-foreground/80 leading-relaxed">
              We specialize in custom glass manufacturing. Share your
              requirements — specifications, drawings, or even a rough idea —
              and our team will develop samples for your approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-mono text-sm bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer"
                >
                  Discuss Custom Order
                  <ArrowRight className="ml-2 h-4 w-4" />
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
                  className="font-mono text-sm bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer"
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
