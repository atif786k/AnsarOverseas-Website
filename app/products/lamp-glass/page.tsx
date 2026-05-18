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
    "Lamp Glass & Lighting Components — Custom Glass Manufacturer India | Ansar Overseas",
  description:
    "Leading lamp glass manufacturer in Firozabad, India. Custom chandelier glass parts, pendant light diffusers, lamp chimneys, wall sconce covers & decorative lighting glass supplier for bulk and export orders.",
  alternates: {
    canonical: "/products/lamp-glass",
  },
  openGraph: {
    title:
      "Lamp Glass & Lighting Components — Custom Glass Manufacturer India | Ansar Overseas",
    description:
      "Custom lamp glass, chandelier parts, pendant diffusers and lighting glass components manufactured in Firozabad, India. Bulk orders and export supply.",
  },
};

const faqs = [
  {
    question: "What types of lamp glass do you manufacture?",
    answer:
      "We manufacture a comprehensive range of lamp glass and lighting components, including lamp chimneys, chandelier glass parts, pendant light diffusers, wall sconce covers, decorative lighting enclosures, and fully custom lighting glass to specification. Our products are available in borosilicate and soda-lime glass, with options for clear, frosted, colored, and etched finishes.",
  },
  {
    question: "What is the minimum order quantity for lamp glass?",
    answer:
      "Our standard MOQ is 500 pieces per design. This allows us to set up production efficiently while keeping per-unit costs competitive for our buyers. For new customers or prototype orders, we are open to discussing smaller initial quantities to help you evaluate quality before committing to larger volumes.",
  },
  {
    question:
      "Can you manufacture custom lamp glass to our specifications?",
    answer:
      "Absolutely. Custom manufacturing is one of our core strengths. We can produce lamp glass in any shape, size, thickness, and finish based on your technical drawings, reference samples, or even rough sketches. Our team will develop prototypes for your approval before moving to full production, ensuring every detail meets your requirements.",
  },
  {
    question: "What is the lead time for lamp glass orders?",
    answer:
      "Standard orders for existing designs typically ship within 2-3 weeks from order confirmation. Custom orders that require new mold development or prototype approval generally take 3-5 weeks. We provide regular production updates and can accommodate expedited timelines for urgent requirements when possible.",
  },
];

export default function LampGlassPage() {
  const products = [
    {
      title: "Lamp Chimneys & Shades",
      description:
        "Glass chimneys for oil, hurricane, and table lamps in cylindrical, bulged, and tapered profiles. Clear, frosted, or tinted finishes.",
    },
    {
      title: "Chandelier Glass Components",
      description:
        "Glass arms, cups, bobeches, and decorative elements designed to integrate with metal and crystal chandelier frameworks.",
    },
    {
      title: "Pendant Light Diffusers",
      description:
        "Dome, globe, and cone-shaped diffusers for even light distribution. Available in opal, frosted, and translucent finishes.",
    },
    {
      title: "Wall Sconce Glass Covers",
      description:
        "Half-cylinder, curved, and flat covers for wall-mounted fixtures in clear, ribbed, frosted, and colored variations.",
    },
    {
      title: "Decorative Lighting Enclosures",
      description:
        "Ornamental enclosures for lanterns and outdoor fixtures. Hand-blown and machine-made options with etched, painted, or textured surfaces.",
    },
    {
      title: "Custom Lighting Glass",
      description:
        "Bespoke components manufactured to your specifications. Share drawings or samples and we will prototype before full production.",
    },
  ];

  const specifications = [
    { label: "Materials", value: "Borosilicate glass, soda-lime glass" },
    { label: "Thickness", value: "1.5mm - 6mm" },
    {
      label: "Finishes",
      value: "Clear, frosted, colored, etched, painted",
    },
    {
      label: "Shapes",
      value: "Cylindrical, conical, dome, globe, custom",
    },
    { label: "Sizes", value: "Custom per requirement" },
    { label: "MOQ", value: "500 pieces per design" },
  ];

  const relatedProducts = [
    {
      title: "Candle Holders & Votives",
      href: "/products/candle-holders",
      description:
        "Hurricane holders, votive containers, tealight cups and decorative candle glass.",
    },
    {
      title: "Decorative Glass & Handicraft Components",
      href: "/products/decorative-glass",
      description:
        "Glass inserts, lantern panels, terrarium containers and handicraft components.",
    },
    {
      title: "Drinkware, Bottles & Containers",
      href: "/products/drinkware",
      description:
        "Drinking glasses, beverage bottles, mason jars and storage containers.",
    },
    {
      title: "Custom Glass Components",
      href: "/products/custom-glass",
      description:
        "Bespoke glass manufacturing from your technical drawings and specifications.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <ProductJsonLd
        name="Lamp Glass & Lighting Components"
        description="Custom lamp glass, chandelier parts, pendant diffusers and lighting glass components manufactured in Firozabad, India."
        category="Glass Lighting Components"
        url="/products/lamp-glass"
        image="/product-lamp-glass.png"
      />
      <BreadcrumbJsonLd
        items={[
          {
            name: "Home",
            url: "https://ansar-overseas-website.vercel.app",
          },
          {
            name: "Products",
            url: "https://ansar-overseas-website.vercel.app/products",
          },
          {
            name: "Lamp Glass & Lighting",
            url: "https://ansar-overseas-website.vercel.app/products/lamp-glass",
          },
        ]}
      />
      <FAQJsonLd faqs={faqs} />

      {/* Breadcrumb */}
      <div className="pt-24 lg:pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
            <Link
              href="/"
              className="hover:text-accent transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-accent transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-foreground">
              Lamp Glass & Lighting
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block border border-accent/40 px-4 py-1.5 mb-6">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                Product Category 01
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 text-balance">
              Lamp Glass &{" "}
              <span className="font-semibold italic">
                Lighting Components
              </span>
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed max-w-2xl">
              Precision-manufactured glass components for the lighting
              industry. From traditional lamp chimneys to modern pendant
              diffusers and chandelier parts, we supply lighting
              manufacturers, designers, and export houses with consistent
              quality at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Description Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="/product-lamp-glass.png"
                alt="Lamp glass and lighting components manufactured by Ansar Overseas in Firozabad, India — including lamp chimneys, chandelier parts, and pendant diffusers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-base font-mono text-muted-foreground leading-relaxed">
                Ansar Overseas is a lamp glass manufacturer based in
                Firozabad, India, supplying chandelier glass parts,
                pendant diffusers, lamp chimneys, and custom lighting
                components for export. Our facility handles both
                hand-blown and machine-made production in borosilicate
                and soda-lime glass, with finishes including frosted,
                etched, and colored. Whether you need standard catalogue
                items or fully custom shapes, we deliver at scale with
                strict quality control at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products List Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-5xl font-light mb-4">
              Our Lamp Glass Product Range
            </h2>
            <p className="text-base font-mono text-muted-foreground leading-relaxed">
              We manufacture a comprehensive selection of glass components
              for every type of lighting application. Each product is
              available with customization in shape, size, thickness, and
              finish.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-background p-6 border border-border space-y-3"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-accent tracking-wide">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-light">
                    {product.title}
                  </h3>
                </div>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-5xl font-light mb-4">
              Specifications & Customization
            </h2>
            <p className="text-base font-mono text-muted-foreground leading-relaxed">
              All lamp glass products are fully customizable. Below are
              our standard specification ranges — we can accommodate
              requirements outside these parameters on a project basis.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-muted p-4">
                <p className="text-xs font-mono text-accent tracking-wide uppercase mb-2">
                  {spec.label}
                </p>
                <p className="text-sm font-mono text-foreground">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-5xl font-light mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base font-mono text-muted-foreground leading-relaxed">
              Common questions from buyers and procurement teams about our
              lamp glass manufacturing capabilities.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-light">
              Ready to Source Lamp Glass Components?
            </h2>
            <p className="text-base font-mono text-muted-foreground leading-relaxed">
              Share your requirements with our team. Whether you need
              standard lamp glass in bulk or fully custom lighting
              components, we will provide a detailed quotation within 24
              hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button className="font-mono text-sm cursor-pointer">
                  Request Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://wa.me/916399035470"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="font-mono text-sm cursor-pointer"
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-light mb-12">
            Explore More Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="group border border-border p-6 hover:border-accent transition-colors space-y-3"
              >
                <h3 className="text-lg font-light group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-mono text-accent">
                  View Products
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
