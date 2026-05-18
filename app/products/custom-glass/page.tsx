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
    "Custom Glass Manufacturing — OEM Glass Components Manufacturer India | Ansar Overseas",
  description:
    "Custom glass manufacturer in Firozabad, India. OEM glass components, bespoke glass products, glass prototype development & custom glass manufacturing from technical drawings. MOQ 200 pieces.",
  alternates: {
    canonical: "/products/custom-glass",
  },
  openGraph: {
    title:
      "Custom Glass Manufacturing — OEM Glass Components Manufacturer India | Ansar Overseas",
    description:
      "OEM custom glass components manufacturer in Firozabad, India. Bespoke glass products from technical drawings — prototype development, custom shapes, finishes & branding for manufacturers and brands worldwide.",
    images: ["/product-custom-glass.png"],
  },
};

const faqs = [
  {
    question:
      "How does custom glass manufacturing work at Ansar Overseas?",
    answer:
      "Our custom glass manufacturing process begins when you share your requirements — technical drawings, reference samples, rough sketches, or even a verbal description of what you need. Our engineering team reviews the design for feasibility and suggests materials, thickness, and finish options. We then develop one or more prototypes for your evaluation. Once you approve the sample, we move into full-scale production with consistent quality control at every stage. The entire process — from initial enquiry to first delivery — typically takes 3 to 6 weeks depending on complexity.",
  },
  {
    question:
      "What is the minimum order quantity (MOQ) for custom glass orders?",
    answer:
      "Our standard minimum order quantity for custom glass products is 200 pieces per design. This MOQ allows us to set up production tooling efficiently while keeping per-unit costs competitive. For very complex or large-format pieces, MOQ may be higher depending on the manufacturing process involved. We recommend reaching out to our sales team with your specific requirements so we can provide an accurate MOQ and pricing for your project.",
  },
  {
    question: "How long does prototype development take?",
    answer:
      "Prototype development typically takes 7 to 14 working days from the time we receive your finalised design or reference sample. Simple shapes with standard finishes may be ready sooner, while complex geometries, multi-step finishes, or pieces requiring new mold development may take up to 3 weeks. We provide regular updates during the prototyping phase and ship samples for your approval before proceeding to production.",
  },
  {
    question: "What materials and glass types do you work with?",
    answer:
      "We primarily work with soda-lime glass, which is the most versatile and cost-effective option for a wide range of applications. For products that require higher heat resistance or superior optical clarity, we offer borosilicate glass manufacturing as well. Both glass types can be processed with a full range of finishes including clear, frosted, coloured, etched, sandblasted, and painted. Our team can recommend the ideal material based on your product's end-use, performance requirements, and budget.",
  },
];

export default function CustomGlassPage() {
  const capabilities = [
    {
      title: "Glass Parts from Technical Drawings",
      description:
        "We manufacture glass components directly from your CAD files, engineering drawings, or dimensioned sketches with tight tolerances to ensure a perfect fit in your assembly.",
    },
    {
      title: "Prototype Development & Sampling",
      description:
        "Physical prototypes are ready within 7 to 14 working days, letting you evaluate form, fit, finish, and optical quality before committing to bulk production.",
    },
    {
      title: "Custom Shapes, Sizes & Thickness",
      description:
        "We produce glass in virtually any shape — cylindrical, conical, curved, or irregular — with wall thickness from 1.5 mm to 10 mm and no fixed size constraints.",
    },
    {
      title: "Frosted, Coloured or Clear Finishes",
      description:
        "Choose from acid-frosted, sandblasted, spray-frosted, colour-coated, tinted, opal, and crystal-clear finishes. Multiple finishes can be combined on a single piece.",
    },
    {
      title: "Logo Etching & Branding",
      description:
        "Apply your brand via precision etching, screen printing, pad printing, or embossing on flat or curved surfaces — built to withstand regular handling and cleaning.",
    },
    {
      title: "Packaging Customisation",
      description:
        "Options include branded boxes, foam inserts, colour-printed sleeves, poly-bag wrapping, barcode labelling, and export-grade cartons so products arrive shelf-ready.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Share Requirements",
      description:
        "Send us drawings, samples, photos, or a written brief with dimensions, quantities, and finish preferences. We review every enquiry within 24 hours.",
    },
    {
      step: "02",
      title: "Design Review",
      description:
        "Our team evaluates feasibility, recommends the optimal glass type and finish, and provides a detailed quotation with tooling, pricing, and timeline.",
    },
    {
      step: "03",
      title: "Sample Development",
      description:
        "We manufacture physical prototypes in the actual material and finish, shipped to you for hands-on evaluation.",
    },
    {
      step: "04",
      title: "Approval & Production",
      description:
        "Once approved, we begin full-scale production with strict batch consistency, in-line quality checks, and documented parameters.",
    },
    {
      step: "05",
      title: "Quality Check & Delivery",
      description:
        "Every piece is inspected for accuracy and finish, then packaged to your specification and dispatched via your preferred method.",
    },
  ];

  const specifications = [
    {
      label: "Materials",
      value: "Soda-lime glass, borosilicate glass (on request)",
    },
    {
      label: "Thickness Range",
      value: "1.5 mm to 10 mm (custom thickness available)",
    },
    {
      label: "Finish Options",
      value: "Clear, frosted, sandblasted, acid-etched, colour-coated, opal",
    },
    {
      label: "Colour Options",
      value:
        "Transparent, tinted (amber, green, blue, grey), opaque white, custom colour matching",
    },
    {
      label: "Branding",
      value: "Etching, screen printing, pad printing, embossing",
    },
    {
      label: "Minimum Order Quantity",
      value: "200 pieces for custom orders",
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
      title: "Decorative Glass & Handicraft Components",
      href: "/products/decorative-glass",
      description:
        "Glass inserts, lantern panels, terrarium containers, and handicraft components.",
    },
    {
      title: "Drinkware, Bottles & Containers",
      href: "/products/drinkware",
      description:
        "Glasses, tumblers, bottles, mason jars, and storage containers for retail and HORECA.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <ProductJsonLd
        name="Custom Glass Manufacturing"
        description="OEM custom glass components manufactured from technical drawings and specifications. Prototype development, custom shapes, finishes, branding, and packaging from Firozabad, India."
        category="Custom Glass Components"
        url="/products/custom-glass"
        image="/product-custom-glass.png"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://ansar-overseas-website.vercel.app/" },
          {
            name: "Products",
            url: "https://ansar-overseas-website.vercel.app/products",
          },
          {
            name: "Custom Glass",
            url: "https://ansar-overseas-website.vercel.app/products/custom-glass",
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
              <li className="text-foreground">Custom Glass Manufacturing</li>
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
                Product Category 05
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 text-balance">
              Custom Glass{" "}
              <span className="font-semibold italic">Manufacturing</span>
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed max-w-2xl">
              Bespoke glass components manufactured to your exact
              specifications. From technical drawings to finished products — OEM
              glass manufacturing, prototype development, and full-scale
              production from Firozabad, India.
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
                src="/product-custom-glass.png"
                alt="Custom glass manufacturing — OEM glass components, bespoke shapes and finishes by Ansar Overseas, Firozabad, India"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-5 text-base font-mono text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">
                  Ansar Overseas is a custom glass manufacturer based in
                  Firozabad, India
                </strong>
                , offering end-to-end OEM production from your specifications.
                Send us technical drawings or a rough concept and we handle
                prototyping, bespoke shaping, surface finishing, branding, and
                bulk production under one roof. Our factory produces
                everything from delicate decorative components to
                industrial-grade glass parts for export houses, lighting
                brands, and product startups worldwide. With a minimum order
                of just 200 pieces, we make factory-direct custom glass
                manufacturing accessible to businesses of every size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Capabilities */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              Our custom capabilities
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              From initial concept to finished product, we offer a complete
              range of custom glass manufacturing services tailored to your
              exact requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="p-8 border border-border bg-background hover:border-accent/50 transition-colors"
              >
                <div className="text-xs font-mono text-accent tracking-widest mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-normal mb-3">
                  {capability.title}
                </h3>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works / Process */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              How it works
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Our custom manufacturing process is designed to be
              straightforward, transparent, and efficient — from your first
              enquiry to final delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-4xl lg:text-5xl font-light text-accent/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-normal mb-3">{item.title}</h3>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
                Specifications & options
              </h2>
              <p className="text-base font-mono text-muted-foreground leading-relaxed mb-8">
                Every custom order is unique, but the parameters below
                represent our standard manufacturing range. If your
                requirements fall outside these specifications, contact us —
                we are equipped to accommodate non-standard requests on a
                project basis.
              </p>
              <Link href="/contact">
                <Button className="font-mono text-sm cursor-pointer">
                  Discuss Your Requirements
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
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-base font-mono text-muted-foreground text-center mb-12 leading-relaxed">
              Common questions about our custom glass manufacturing process,
              ordering, and capabilities.
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
              Have a custom glass requirement?
            </h2>
            <p className="text-lg font-mono text-primary-foreground/80 leading-relaxed">
              Whether you need a single prototype or thousands of custom glass
              components — share your drawings, samples, or brief with our
              team. We will respond with a detailed quotation, timeline, and
              sample plan within 24 hours.
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
