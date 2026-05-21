import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  OrganizationJsonLd,
  LocalBusinessJsonLd,
} from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Ansar Overseas | Custom Glass Manufacturer in Firozabad, India",
  description:
    "M/S Ansar Overseas manufactures custom glass products — lamp glass, candle holders, decorative glass, drinkware & more — for exporters, lighting brands & bulk buyers. Based in Firozabad, India. 20+ years experience.",
  alternates: {
    canonical: "/",
  },
};
import {
  ArrowRight,
  Factory,
  Users,
  Award,
  Flame,
  Boxes,
  Clock,
  BadgeCheck,
  IndianRupee,
  Truck,
  Handshake,
  Lamp,
  Settings,
  Phone,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import Link from "next/link";
import { HomeGallery } from "@/components/home-gallery";

export default function HomePage() {
  const stats = [
    { icon: Factory, value: "20+", label: "Years in Business" },
    { icon: Users, value: "50+", label: "Skilled Craftsmen" },
    { icon: Award, value: "10,000+", label: "Orders Delivered" },
    { icon: Handshake, value: "30+", label: "Trusted Clients" },
  ];

  const products = [
    {
      icon: Lamp,
      title: "Lamp Glass & Lighting Components",
      description:
        "Chimneys, shades, diffusers, and custom glass components for chandeliers, pendant lights, and decorative lighting fixtures.",
      useCases: "Lighting manufacturers, chandelier brands, OEM suppliers",
      image: "/glass-manufacturing-molten-glass-furnace.jpg",
    },
    {
      icon: Flame,
      title: "Candle Holders & Votives",
      description:
        "Hurricane glasses, votive holders, tealight cups, and decorative candle enclosures in various shapes and finishes.",
      useCases: "Home decor brands, export houses, candle companies",
      image: "/artisan-glassblowing-in-factory-with-molten-glass.jpg",
    },
    {
      icon: Settings,
      title: "Custom Glass Components",
      description:
        "Bespoke glass parts manufactured to your exact specifications — shapes, sizes, thickness, and finishes tailored to your product line.",
      useCases: "OEM manufacturers, product designers, export houses",
      image: "/glass-quality-inspection-microscope.jpg",
    },
  ];

  const strengths = [
    {
      icon: Clock,
      title: "20+ Years Experience",
      description:
        "A family business rooted in Firozabad's glass-making heritage since the early 2000s.",
    },
    {
      icon: BadgeCheck,
      title: "Custom Design Support",
      description:
        "From concept sketches to production-ready samples — we build what you need.",
    },
    {
      icon: IndianRupee,
      title: "Competitive Pricing",
      description:
        "Direct from the manufacturing hub — no middlemen, better margins for your business.",
    },
    {
      icon: Boxes,
      title: "Bulk Order Capability",
      description:
        "Scalable production capacity to handle large and recurring orders consistently.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description:
        "Timely dispatch with proper packaging to ensure safe delivery, domestically and internationally.",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnerships",
      description:
        "We believe in building trust — many of our clients have been with us for over a decade.",
    },
  ];

  return (
    <div className="min-h-screen">
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <Navigation />

      {/* ===== HERO SECTION ===== */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block border border-accent/40 px-4 py-1.5">
                  <span className="text-xs font-mono tracking-widest text-accent uppercase">
                    Since Early 2000s &mdash; Firozabad, India
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] text-balance">
                  Custom Glass Manufacturing in India for{" "}
                  <span className="font-semibold italic">
                    Exporters & B2B Buyers
                  </span>
                </h1>
                <p className="text-lg font-mono text-muted-foreground leading-relaxed max-w-xl">
                  We manufacture custom glass products — lamp glass, candle
                  holders, decorative components, drinkware & more — for
                  exporters, lighting companies, and bulk buyers worldwide.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="font-mono text-sm group cursor-pointer"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-mono text-sm bg-transparent cursor-pointer"
                  >
                    View Products
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
                <a
                  href="https://wa.me/916399035470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+917727075499"
                  className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +91 7727075499
                </a>
                <a
                  href="tel:+916399035470"
                  className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +91 6399035470
                </a>
              </div>
            </div>
            <div className="relative grid grid-cols-5 grid-rows-2 gap-1.5 aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm">
              <div className="col-span-3 row-span-2 overflow-hidden">
                <img
                  src="/factory-hero-molten-glass.jpg"
                  alt="Craftsman holding molten glass at Ansar Overseas factory in Firozabad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 overflow-hidden">
                <img
                  src="/factory-hero-craftsmen.jpg"
                  alt="Glass factory craftsmen working with molten glass on rods"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 overflow-hidden">
                <img
                  src="/factory-hero-furnace.jpg"
                  alt="Artisans working near glass furnace with warm glow"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-primary/80 to-transparent p-6">
                <p className="text-sm font-mono text-primary-foreground/90">
                  Our craftsmen at work — Firozabad, Glass City of India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-3">
                  <Icon className="h-8 w-8 mx-auto text-accent" />
                  <div className="text-4xl lg:text-5xl font-light">
                    {stat.value}
                  </div>
                  <div className="text-sm font-mono text-primary-foreground/70 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/family-owned-glass-factory-workshop-heritage.jpg"
                alt="Ansar Overseas family-owned glass factory"
                className="w-full aspect-3/4 object-cover"
              />
              <img
                src="/glass-factory-team-working-together.jpg"
                alt="Our team working together"
                className="w-full aspect-3/4 object-cover mt-8"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block border border-accent/40 px-4 py-1.5">
                <span className="text-xs font-mono tracking-widest text-accent uppercase">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-balance">
                A legacy of glass craftsmanship from Firozabad
              </h2>
              <div className="space-y-4 text-base font-mono text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">M/S Ansar Overseas</strong>{" "}
                  is a family-owned glass manufacturing unit based in{" "}
                  <strong className="text-foreground">Firozabad</strong> — the
                  Glass City of India. We have been manufacturing and supplying
                  quality glass products since the early 2000s.
                </p>
                <p>
                  Our location gives us a unique advantage — access to
                  Firozabad's generations-old glass-making ecosystem, skilled
                  artisans, and competitive raw material sourcing. This means
                  better quality at better prices for our clients.
                </p>
                <p>
                  We specialize in custom manufacturing for{" "}
                  <strong className="text-foreground">
                    lighting brands, handicraft exporters, and home decor
                    companies
                  </strong>
                  , while also supplying drinkware, bottles, jars, and containers
                  to retail and wholesale buyers.
                </p>
              </div>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="font-mono text-sm bg-transparent cursor-pointer mt-2"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block border border-accent/40 px-4 py-1.5 mb-6">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                Our Work
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              From our factory floor
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              A glimpse into our manufacturing process and the products we
              create.
            </p>
          </div>

          <HomeGallery />

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="font-mono text-sm bg-transparent cursor-pointer"
              >
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS / CAPABILITIES SECTION ===== */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block border border-accent/40 px-4 py-1.5 mb-6">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                What We Manufacture
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              Products & capabilities
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              From lighting components to decorative glass and everyday
              drinkware — we manufacture a wide range of glass products tailored
              to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="bg-background border border-border p-8 space-y-4 hover:border-accent/50 transition-colors group"
                >
                  <Icon className="h-8 w-8 text-accent" />
                  <h3 className="text-xl font-normal group-hover:text-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs font-mono text-accent tracking-wide">
                      {product.useCases}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="font-mono text-sm bg-transparent cursor-pointer"
              >
                View Full Product Catalog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block border border-accent/40 px-4 py-1.5 mb-6">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                Why Partner With Us
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              Why businesses choose Ansar Overseas
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              We don't just supply glass — we become your reliable manufacturing
              partner. Here's what sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 h-12 w-12 bg-accent/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-normal">{item.title}</h3>
                    <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA SECTION ===== */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-balance">
              Looking for a reliable glass manufacturing partner?
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether you need custom glass components, bulk production, or want
              to discuss a new product line — we're ready to help. Get in touch
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="font-mono text-sm cursor-pointer group"
                >
                  Contact Us Today
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 text-sm font-mono text-muted-foreground">
              <a
                href="mailto:msansaroverseas@gmail.com"
                className="hover:text-accent transition-colors"
              >
                msansaroverseas@gmail.com
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="tel:+917727075499"
                className="hover:text-accent transition-colors"
              >
                +91 7727075499
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="tel:+916399035470"
                className="hover:text-accent transition-colors"
              >
                +91 6399035470
              </a>
              <span className="hidden sm:inline">|</span>
              <span>Firozabad, UP, India</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
