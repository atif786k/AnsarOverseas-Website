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
    "Drinkware, Bottles & Containers — Bulk Glass Manufacturer India | Ansar Overseas",
  description:
    "Bulk drinking glasses manufacturer in India. Mason jar manufacturer, wholesale drinkware supplier, glass bottles manufacturer, glass containers wholesale. Custom drinkware from Firozabad. MOQ 1000 pieces.",
  alternates: {
    canonical: "/products/drinkware",
  },
  openGraph: {
    title:
      "Drinkware, Bottles & Containers — Bulk Glass Manufacturer India | Ansar Overseas",
    description:
      "Bulk glass drinkware manufacturer from Firozabad, India. Drinking glasses, tumblers, bottles, mason jars, storage containers. Wholesale supply for HORECA, retail brands, and distributors.",
    images: ["/product-drinkware.png"],
  },
};

const faqs = [
  {
    question:
      "What types of drinkware does Ansar Overseas manufacture?",
    answer:
      "We manufacture a comprehensive range of glass drinkware and containers including drinking glasses and tumblers in various sizes, beverage and juice bottles, coffee and tea mugs, mason jars and storage containers, oil and vinegar bottles, and water and milk bottles. All products are available in clear, coloured, frosted, and printed finishes with customisation options for shape, capacity, and branding.",
  },
  {
    question:
      "What is the minimum order quantity (MOQ) for bulk drinkware orders?",
    answer:
      "Our standard minimum order quantity for drinkware, bottles, and containers is 1,000 pieces per design. For custom shapes, specialised printing, or unique finishes, MOQ may vary depending on the complexity of production. We recommend contacting our sales team to discuss your specific requirements and receive an accurate quotation tailored to your order volume.",
  },
  {
    question:
      "Can you print logos and branding on glasses and bottles?",
    answer:
      "Yes, logo printing and custom branding is one of our core capabilities. We offer screen printing, decal application, pad printing, and frosted etching for branding on all glass drinkware and bottles. Whether you need a single-colour logo on drinking glasses for a restaurant chain or full-colour branded labels on retail bottles, our printing team delivers precise, durable results that withstand regular use and washing.",
  },
  {
    question:
      "Do you supply drinkware to HORECA and hospitality businesses?",
    answer:
      "Absolutely. A significant portion of our drinkware production is supplied to HORECA (Hotels, Restaurants, and Catering) businesses through distributors and hospitality suppliers. We manufacture glasses, tumblers, mugs, and bottles designed for high-volume commercial use with consistent wall thickness, durable finishes, and uniform sizing across large batch orders. We also offer custom branding for hotel and restaurant chains looking for branded glassware.",
  },
];

export default function DrinkwarePage() {
  const productRange = [
    {
      title: "Drinking Glasses & Tumblers",
      description:
        "Glasses and tumblers from 150 ml to 500 ml in clear, coloured, frosted, and printed finishes for retail and hospitality use.",
    },
    {
      title: "Beverage & Juice Bottles",
      description:
        "Bottles for juices, smoothies, and flavoured water from 200 ml to 1 litre. Screw-cap, cork, and flip-top closures with branding options.",
    },
    {
      title: "Coffee & Tea Mugs",
      description:
        "Heat-resistant glass mugs in 200 ml to 400 ml capacities. Double-walled and single-walled options with ergonomic handles.",
    },
    {
      title: "Mason Jars & Storage Containers",
      description:
        "Mason jars and airtight containers from 250 ml to 2000 ml with metal, bamboo, or clip-lock lids for food storage and retail packaging.",
    },
    {
      title: "Oil & Vinegar Bottles",
      description:
        "Glass bottles for oils, vinegar, and condiments from 100 ml to 750 ml with pour spouts and drip-free caps.",
    },
    {
      title: "Water & Milk Bottles",
      description:
        "Durable bottles from 500 ml to 1500 ml with swing-top, screw-cap, and silicone-seal closures. Frosted and printed finishes available.",
    },
  ];

  const specifications = [
    {
      label: "Materials",
      value: "Soda-lime glass, borosilicate glass (for heat-resistant items)",
    },
    {
      label: "Capacity Range",
      value: "50 ml to 2000 ml (custom sizes available)",
    },
    {
      label: "Finishes",
      value: "Clear, coloured, frosted, screen-printed, decal-applied",
    },
    {
      label: "Shapes",
      value:
        "Cylindrical, tapered, mason, square, hexagonal, custom moulds",
    },
    {
      label: "Closure Options",
      value: "Screw-cap, cork, swing-top, clip-lock, pour spout, silicone seal",
    },
    {
      label: "Minimum Order Quantity",
      value: "1,000 pieces per design",
    },
    {
      label: "Lead Time",
      value: "2-4 weeks (standard); 4-6 weeks (custom moulds)",
    },
    {
      label: "Packaging",
      value:
        "Individual wrap, corrugated dividers, shrink-wrapped trays, export-grade cartons",
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
        "Glass inserts, lantern panels, terrarium containers, and custom decorative pieces.",
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
        name="Drinkware, Bottles & Containers"
        description="Bulk glass drinkware manufacturer in India. Drinking glasses, tumblers, beverage bottles, mason jars, storage containers, oil and vinegar bottles. Custom finishes and branding for HORECA, retail, and wholesale buyers. Manufactured in Firozabad."
        category="Glass Drinkware"
        url="/products/drinkware"
        image="/product-drinkware.png"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://ansar-overseas-website.vercel.app/" },
          {
            name: "Products",
            url: "https://ansar-overseas-website.vercel.app/products",
          },
          {
            name: "Drinkware",
            url: "https://ansar-overseas-website.vercel.app/products/drinkware",
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
              <li className="text-foreground">
                Drinkware, Bottles & Containers
              </li>
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
                Product Category 04
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 text-balance">
              Drinkware, Bottles &{" "}
              <span className="font-semibold italic">Containers</span>
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed max-w-2xl">
              Drinking glasses, tumblers, beverage bottles, mason jars, and
              storage containers — bulk manufactured for HORECA suppliers,
              retail brands, wholesale distributors, and beverage companies.
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
                src="/product-drinkware.png"
                alt="Glass drinkware, bottles and containers — tumblers, mason jars, beverage bottles and storage containers by Ansar Overseas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-5 text-base font-mono text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">
                  Ansar Overseas is a bulk drinkware manufacturer based in
                  Firozabad, India
                </strong>
                {" "}— producing drinking glasses, tumblers, bottles, mason
                jars, and containers for wholesale and HORECA buyers. Our
                range includes beverage bottles, storage containers, and
                custom branding options such as screen printing and frosted
                etching, all manufactured at scale with consistent quality.
                We supply retail brands, distributors, beverage companies,
                and e-commerce sellers with competitively priced, export-ready
                glass drinkware.
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
              Our drinkware & container range
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              From everyday drinking glasses to specialised bottles and storage
              containers, we manufacture glass drinkware for a wide range of
              commercial and retail applications.
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
                Our drinkware, bottles, and containers are manufactured to
                food-safe standards with consistent quality across large
                production runs. Below are the standard specifications —
                custom requirements can be accommodated on request.
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
              Common questions about our glass drinkware, bottles, and
              containers — including ordering, customisation, and supply
              capabilities.
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
              Ready to source bulk drinkware?
            </h2>
            <p className="text-lg font-mono text-primary-foreground/80 leading-relaxed">
              Whether you need drinking glasses for your hospitality supply
              chain, branded bottles for a beverage brand, or mason jars in
              bulk for retail — share your requirements and our team will get
              back to you with pricing and samples within 24 hours.
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
