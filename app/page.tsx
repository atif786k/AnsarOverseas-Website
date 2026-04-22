import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Factory,
  Users,
  Award,
  Globe,
  Lightbulb,
  Flame,
  GlassWater,
  Gem,
  Boxes,
  Clock,
  BadgeCheck,
  IndianRupee,
  Truck,
  Handshake,
  Lamp,
  PaintBucket,
  Store,
  ClipboardList,
  FlaskConical,
  Settings,
  PackageCheck,
  MessageCircleMore,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const stats = [
    { icon: Factory, value: "20+", label: "Years in Business" },
    { icon: Users, value: "50+", label: "Skilled Craftsmen" },
    { icon: Award, value: "10,000+", label: "Orders Delivered" },
    { icon: Globe, value: "25+", label: "Countries Served" },
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
      icon: Gem,
      title: "Decorative Glass",
      description:
        "Glass components for metal handicrafts, lanterns, terrariums, and home decor accents crafted to complement your designs.",
      useCases: "Handicraft exporters, interior designers, decor brands",
      image: "/finished-glass-products-premium-quality.jpg",
    },
    {
      icon: GlassWater,
      title: "Drinkware & Containers",
      description:
        "Beverage glasses, bottles, mugs, mason jars, storage containers, and oil & vinegar bottles for everyday and premium use.",
      useCases: "HORECA, retail brands, wholesale distributors",
      image: "/finished-glass-products-quality-inspection.jpg",
    },
    {
      icon: Settings,
      title: "Custom Glass Components",
      description:
        "Bespoke glass parts manufactured to your exact specifications — shapes, sizes, thickness, and finishes tailored to your product line.",
      useCases: "OEM manufacturers, product designers, export houses",
      image: "/glass-quality-inspection-microscope.jpg",
    },
    {
      icon: Boxes,
      title: "Bulk Production",
      description:
        "High-volume manufacturing with consistent quality across large batches. Scalable production capacity for ongoing supply partnerships.",
      useCases: "Wholesale buyers, chain retailers, export orders",
      image: "/glass-manufacturing-factory-production-line-bulk-o.jpg",
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

  const clientTypes = [
    {
      icon: Globe,
      title: "Export Houses",
      description:
        "Supplying export-grade glass components to trading companies shipping to Europe, USA, Middle East & beyond.",
    },
    {
      icon: Lightbulb,
      title: "Lighting Manufacturers",
      description:
        "Custom lamp glass, chandelier parts, and diffusers for lighting brands and OEM producers.",
    },
    {
      icon: PaintBucket,
      title: "Interior Designers",
      description:
        "Bespoke glass pieces for residential and commercial interior design projects.",
    },
    {
      icon: Store,
      title: "Home Decor Brands",
      description:
        "Decorative glassware, candle holders, and accent pieces for retail and D2C brands.",
    },
  ];

  const processSteps = [
    {
      icon: ClipboardList,
      step: "01",
      title: "Requirement Discussion",
      description:
        "Share your specifications, designs, and quantities. We'll understand your exact needs.",
    },
    {
      icon: FlaskConical,
      step: "02",
      title: "Sample Development",
      description:
        "We create prototypes for your approval — iterate until you're fully satisfied.",
    },
    {
      icon: Factory,
      step: "03",
      title: "Production",
      description:
        "Full-scale manufacturing with rigorous quality checks at every stage.",
    },
    {
      icon: PackageCheck,
      step: "04",
      title: "Delivery",
      description:
        "Careful packaging and timely dispatch — domestically or for export.",
    },
  ];

  const galleryImages = [
    {
      src: "/artisan-glassblowing-in-factory-with-molten-glass.jpg",
      alt: "Artisan glassblowing with molten glass",
    },
    {
      src: "/finished-glass-products-premium-quality.jpg",
      alt: "Premium quality finished glass products",
    },
    {
      src: "/glass-manufacturing-factory-production-line-bulk-o.jpg",
      alt: "Glass manufacturing production line",
    },
    {
      src: "/experienced-glassblower-artisan-at-work.jpg",
      alt: "Experienced glassblower at work",
    },
    {
      src: "/glass-quality-inspection-microscope.jpg",
      alt: "Quality inspection of glass products",
    },
    {
      src: "/glass-manufacturing-molten-glass-furnace.jpg",
      alt: "Molten glass furnace in operation",
    },
    {
      src: "/glass-cooling-annealing-process.jpg",
      alt: "Glass cooling and annealing process",
    },
    {
      src: "/finished-glass-products-quality-inspection.jpg",
      alt: "Finished products quality inspection",
    },
  ];

  return (
    <div className="min-h-screen">
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
                  Custom Glass Manufacturing for{" "}
                  <span className="font-semibold italic">
                    Exporters & Lighting Brands
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
              <div className="flex items-center gap-6 pt-2">
                <a
                  href="https://wa.me/917727075499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+917727075499"
                  className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +91 7727075499
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden">
              <img
                src="/artisan-glassblowing-in-factory-with-molten-glass.jpg"
                alt="Master artisan crafting glass at Ansar Overseas factory in Firozabad"
                className="w-full h-full object-cover"
              />
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

      {/* ===== PRODUCTS / CAPABILITIES SECTION ===== */}
      <section className="py-20 lg:py-32 bg-muted">
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
      <section className="py-20 lg:py-32">
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

      {/* ===== CLIENT TYPES SECTION ===== */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block border border-accent/40 px-4 py-1.5 mb-6">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                Who We Work With
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              Trusted by businesses across industries
            </h2>
            <p className="text-lg font-mono text-primary-foreground/70 leading-relaxed">
              We work with a diverse range of businesses — from export houses
              shipping worldwide to local lighting manufacturers and decor
              brands.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((client, index) => {
              const Icon = client.icon;
              return (
                <div
                  key={index}
                  className="border border-primary-foreground/20 p-8 space-y-4 hover:border-accent/60 transition-colors text-center"
                >
                  <Icon className="h-10 w-10 text-accent mx-auto" />
                  <h3 className="text-xl font-normal">{client.title}</h3>
                  <p className="text-sm font-mono text-primary-foreground/70 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block border border-accent/40 px-4 py-1.5 mb-6">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                How We Work
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              From your idea to delivered product
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Our streamlined process ensures quality at every step — from
              initial discussion to final delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative text-center space-y-4">
                  <div className="text-6xl font-light text-accent/20">
                    {item.step}
                  </div>
                  <div className="h-14 w-14 bg-accent/10 mx-auto flex items-center justify-center">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-normal">{item.title}</h3>
                  <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-4 w-8">
                      <ArrowRight className="h-5 w-5 text-accent/30" />
                    </div>
                  )}
                </div>
              );
            })}
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`overflow-hidden group ${
                  index === 0 || index === 5
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 text-sm font-mono text-muted-foreground">
              <a
                href="mailto:matif91201@gmail.com"
                className="hover:text-accent transition-colors"
              >
                matif91201@gmail.com
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="tel:+917727075499"
                className="hover:text-accent transition-colors"
              >
                +91 7727075499
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
