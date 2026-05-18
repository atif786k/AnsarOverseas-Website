import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import {
  ProductJsonLd,
  BreadcrumbJsonLd,
  FAQJsonLd,
} from "@/components/json-ld";
import { FAQAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title:
    "Decorative Glass & Handicraft Components — Glass Supplier India | Ansar Overseas",
  description:
    "Leading decorative glass supplier in India. Glass inserts for handicrafts, lantern glass panels, terrarium glass manufacturer, decorative bowls & platters. Custom shapes & finishes from Firozabad. MOQ 300 pieces.",
  alternates: {
    canonical: "/products/decorative-glass",
  },
  openGraph: {
    title:
      "Decorative Glass & Handicraft Components — Glass Supplier India | Ansar Overseas",
    description:
      "Decorative glass supplier from Firozabad, India. Glass inserts for metal decor, lantern panels, terrarium containers, handicraft components. Custom manufacturing for exporters & home decor brands.",
    images: ["/product-decorative-glass.png"],
  },
};

const faqs = [
  {
    question:
      "What types of decorative glass does Ansar Overseas manufacture?",
    answer:
      "We manufacture a wide range of decorative glass products including glass inserts for metal decor frames, lantern glass panels and cylinders, terrarium containers and domes, decorative bowls and platters, glass components for handicraft items, and fully custom decorative pieces. All products are available in clear, frosted, tinted, and hand-painted finishes.",
  },
  {
    question:
      "What is the minimum order quantity (MOQ) for decorative glass products?",
    answer:
      "Our standard minimum order quantity for decorative glass products is 300 pieces per design. For custom shapes or specialized finishes like hand-painting, MOQ may vary depending on complexity. We recommend contacting our sales team to discuss your specific requirements and get an accurate MOQ for your order.",
  },
  {
    question: "Can you produce custom shapes and designs for decorative glass?",
    answer:
      "Absolutely. Custom manufacturing is one of our core strengths. We can produce decorative glass in virtually any shape — panels, cylinders, domes, curved forms, and bespoke geometries based on your technical drawings or reference samples. Our artisans in Firozabad have generations of experience crafting complex glass forms, and we offer prototype development before committing to full production runs.",
  },
  {
    question:
      "How is decorative glass packaged for export and international shipping?",
    answer:
      "We use multi-layer export-grade packaging designed specifically for fragile glass products. Each piece is individually wrapped in foam or bubble wrap, placed in corrugated dividers within sturdy cartons, and then secured in wooden crates for international shipping. We can also customize packaging with your branding or labelling requirements. Our packaging has been tested and trusted by exporters shipping to 25+ countries worldwide.",
  },
];

export default function DecorativeGlassPage() {
  const productRange = [
    {
      title: "Glass Inserts for Metal Decor",
      description:
        "Precision-cut glass panels and inserts for metal decor frames and wall hangings. Available in clear, frosted, and tinted variants with polished or bevelled edges.",
    },
    {
      title: "Lantern Glass Panels & Cylinders",
      description:
        "Heat-resistant glass panels and cylinders for traditional and contemporary lanterns. Clear, frosted, or textured finishes in multiple sizes.",
    },
    {
      title: "Terrarium Containers",
      description:
        "Geometric and organic-shaped glass containers for terrariums and indoor gardens. Open-top and enclosed dome variants with consistent wall thickness.",
    },
    {
      title: "Decorative Bowls & Platters",
      description:
        "Hand-finished glass bowls and platters for centrepieces and displays. Available in various sizes, colours, and hand-painted finishes.",
    },
    {
      title: "Glass Handicraft Components",
      description:
        "Individual beads, drops, pendants, rosettes, and connectors for handicraft assemblers and exporters building chandeliers, curtains, and decorative products.",
    },
    {
      title: "Custom Decorative Pieces",
      description:
        "Bespoke decorative glass manufactured to your specifications — custom shapes, colour matches, and finishes from your drawings or reference samples.",
    },
  ];

  const specifications = [
    {
      label: "Materials",
      value: "Soda-lime glass, borosilicate glass (on request)",
    },
    {
      label: "Thickness Range",
      value: "2 mm to 8 mm (custom thickness available)",
    },
    {
      label: "Finishes",
      value: "Clear, frosted, tinted, hand-painted, etched, sandblasted",
    },
    {
      label: "Shapes",
      value:
        "Panels, cylinders, domes, bowls, platters, custom geometric & organic forms",
    },
    {
      label: "Edge Options",
      value: "Polished, bevelled, flat-ground, fire-polished",
    },
    {
      label: "Minimum Order Quantity",
      value: "300 pieces per design",
    },
    {
      label: "Lead Time",
      value: "2-4 weeks (standard); 3-5 weeks (custom orders)",
    },
    {
      label: "Packaging",
      value:
        "Individual foam wrap, corrugated dividers, export-grade wooden crates",
    },
  ];

  const relatedProducts = [
    {
      title: "Lamp Glass & Lighting Components",
      href: "/products/lamp-glass",
      description:
        "Chimneys, shades, diffusers, and custom lighting glass for manufacturers.",
    },
    {
      title: "Candle Holders & Votives",
      href: "/products/candle-holders",
      description:
        "Hurricane holders, votive containers, tealight cups, and decorative candle jars.",
    },
    {
      title: "Drinkware, Bottles & Containers",
      href: "/products/drinkware",
      description:
        "Glasses, tumblers, bottles, mason jars, and storage containers for retail and HORECA.",
    },
    {
      title: "Custom Glass Components",
      href: "/products/custom-glass",
      description:
        "Bespoke glass parts from your specifications — prototyping, sampling, and production.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <ProductJsonLd
        name="Decorative Glass & Handicraft Components"
        description="Premium decorative glass products including glass inserts for metal decor, lantern glass panels, terrarium containers, decorative bowls, and handicraft components. Custom shapes and finishes manufactured in Firozabad, India."
        category="Decorative Glass"
        url="/products/decorative-glass"
        image="/product-decorative-glass.png"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://ansar-overseas-website.vercel.app/" },
          {
            name: "Products",
            url: "https://ansar-overseas-website.vercel.app/products",
          },
          {
            name: "Decorative Glass",
            url: "https://ansar-overseas-website.vercel.app/products/decorative-glass",
          },
        ]}
      />
      <FAQJsonLd faqs={faqs} />

      {/* Breadcrumb Navigation */}
      <section className="pt-28 pb-4 lg:pt-36 lg:pb-4">
        <div className="container mx-auto px-4 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground">Decorative Glass</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-4 pb-20 lg:pt-6 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block border border-accent/40 px-4 py-1.5 mb-6">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                Product Category 03
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 text-balance">
              Decorative Glass &{" "}
              <span className="font-semibold italic">
                Handicraft Components
              </span>
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed max-w-2xl">
              Glass inserts, lantern panels, terrarium containers, and custom
              decorative components for handicraft exporters, home decor brands,
              and interior product manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Descriptive Content */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="/product-decorative-glass.png"
                alt="Decorative glass products — inserts, lantern panels, terrarium containers and handicraft components by Ansar Overseas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-5 text-base font-mono text-muted-foreground leading-relaxed">
              <p>
                As a leading{" "}
                <strong className="text-foreground">
                  decorative glass supplier from Firozabad, India
                </strong>
                , M/S Ansar Overseas manufactures glass inserts for metal decor,
                lantern panels, terrarium containers, decorative bowls and
                platters, and handicraft components such as beads, drops, and
                rosettes. Every piece is crafted with generational artisan
                expertise and finished to export-grade standards — available in
                custom shapes, sizes, and finishes including frosted, tinted, and
                hand-painted options. We work directly with handicraft exporters,
                home decor brands, and interior product manufacturers to deliver
                production-ready glass from prototype through bulk order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              Our decorative glass range
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              From metal decor inserts to fully custom pieces, we manufacture
              decorative glass components for a wide range of applications and
              industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productRange.map((product, index) => (
              <div
                key={index}
                className="p-8 border border-border bg-background hover:border-accent/50 transition-colors"
              >
                <div className="text-xs font-mono text-accent tracking-widest mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-normal mb-3">{product.title}</h3>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
                Technical specifications
              </h2>
              <p className="text-base font-mono text-muted-foreground leading-relaxed mb-8">
                Our decorative glass products are manufactured to precise
                standards. Below are the standard specifications — custom
                requirements can be accommodated on request.
              </p>
              <Link href="/contact">
                <Button className="font-mono text-sm cursor-pointer">
                  Request Custom Specs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="space-y-0">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-6 py-4 border-b border-border"
                >
                  <span className="text-sm font-mono font-medium text-foreground shrink-0">
                    {spec.label}
                  </span>
                  <span className="text-sm font-mono text-muted-foreground text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-base font-mono text-muted-foreground text-center mb-12 leading-relaxed">
              Common questions about our decorative glass products, ordering
              process, and manufacturing capabilities.
            </p>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-balance">
              Ready to source decorative glass?
            </h2>
            <p className="text-lg font-mono text-primary-foreground/80 leading-relaxed">
              Whether you need glass inserts for your handicraft line, custom
              terrarium containers, or lantern panels in bulk — share your
              requirements and our team will get back to you with pricing and
              samples within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-mono text-sm bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer"
                >
                  Request a Quote
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

      {/* Related Products */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              Explore more products
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Browse our other product categories to find the right glass
              components for your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="group p-6 border border-border hover:border-accent/50 transition-colors"
              >
                <h3 className="text-lg font-normal mb-2 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <span className="inline-flex items-center text-sm font-mono text-accent">
                  View details
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
