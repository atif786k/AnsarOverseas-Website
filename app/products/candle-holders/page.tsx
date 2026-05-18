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
    "Candle Holders & Votives — Glass Candle Holder Manufacturer India | Ansar Overseas",
  description:
    "Leading candle holder manufacturer in India. We supply hurricane candle holders, votive glass containers, tealight holder cups, and decorative candle jars in bulk. Wholesale candle holders from Firozabad with custom finishes — frosted, colored, gold & silver rim. Export-quality glass for B2B buyers.",
  alternates: {
    canonical: "/products/candle-holders",
  },
  openGraph: {
    title:
      "Candle Holders & Votives — Glass Candle Holder Manufacturer India | Ansar Overseas",
    description:
      "Wholesale glass candle holders, hurricane holders, votive containers & tealight cups from Firozabad, India. Custom shapes, frosted finishes & bulk supply for B2B buyers worldwide.",
    url: "/products/candle-holders",
    images: [
      {
        url: "/product-candle-holders.png",
        width: 1200,
        height: 630,
        alt: "Glass candle holders and votives manufactured by Ansar Overseas",
      },
    ],
  },
};

const faqs = [
  {
    question: "What types of candle holders do you manufacture?",
    answer:
      "We manufacture a comprehensive range of glass candle holders including hurricane candle holders in various sizes, votive glass containers, tealight cups and holders, pillar candle enclosures, decorative candle jars, and custom-shaped candle glass. All products are available in clear, frosted, colored, and metallic-rim finishes. We can also produce bespoke designs based on your drawings or specifications.",
  },
  {
    question: "What is the MOQ for candle holders?",
    answer:
      "Our minimum order quantity (MOQ) for candle holders starts at 500 pieces per design. For standard designs that are already in our production line, we can sometimes accommodate smaller trial orders. For fully custom shapes or finishes, the MOQ may be higher depending on the tooling and setup required. Contact our team to discuss your specific requirements and we will find a solution that works for your business.",
  },
  {
    question:
      "Can you add custom finishes like frosting or colored glass?",
    answer:
      "Yes, we offer a wide variety of custom finishes for our candle holders. This includes frosted glass (full or partial frosting), colored glass in virtually any shade, metallic rims in gold or silver, etched patterns and logos, spray-coated finishes, and hand-painted decorative elements. Our finishing team works closely with clients to match exact color references and design specifications.",
  },
  {
    question: "Do you supply candle holders for export?",
    answer:
      "Absolutely. A significant portion of our candle holder production is destined for export markets across Europe, the Middle East, North America, and Southeast Asia. We maintain export-grade quality standards, use appropriate packaging for international shipping, and can assist with documentation requirements. We regularly supply to export houses, trading companies, home decor brands, and candle companies sourcing from India.",
  },
];

const productRange = [
  {
    title: "Hurricane Candle Holders",
    description:
      "Open-top glass cylinders and tapered holders in multiple sizes. Available in clear, frosted, and tinted glass with optional gold or silver rims.",
  },
  {
    title: "Votive Glass Containers",
    description:
      "Thick-walled glass containers in standard and custom dimensions with smooth or textured surfaces. Ideal for candle brands and hospitality clients.",
  },
  {
    title: "Tealight Cups & Holders",
    description:
      "Precisely formed glass cups in clear and colored options with consistent wall thickness. Supplied in high volumes for candle filling and retail packaging.",
  },
  {
    title: "Pillar Candle Enclosures",
    description:
      "Large-diameter glass enclosures engineered for stability and heat resistance. Available in straight-sided, flared, or pedestal designs.",
  },
  {
    title: "Decorative Candle Jars",
    description:
      "Glass jars with lids in apothecary, tumbler, and custom shapes. Options for embossing, decals, and branded finishes for scented candle lines.",
  },
  {
    title: "Custom Shapes & Frosted Finishes",
    description:
      "Bespoke shapes tailored to your brand with acid-etched frosting, spray frosting, gradient colors, and metallic coatings. Share your concept for samples.",
  },
];

const specifications = [
  { label: "Materials", value: "Soda-lime glass, borosilicate glass (on request)" },
  { label: "Wall Thickness", value: "2 mm to 5 mm (varies by product type)" },
  {
    label: "Finishes",
    value: "Clear, frosted, colored, spray-coated, gold/silver rim, etched",
  },
  {
    label: "Shapes",
    value: "Cylindrical, tapered, bowl, hurricane, jar, pedestal, custom",
  },
  { label: "Sizes", value: "Custom sizes available — from tealight cups to large hurricane holders" },
  { label: "MOQ", value: "500 pieces per design (negotiable for standard items)" },
  { label: "Lead Time", value: "15 to 30 days depending on order volume and customization" },
  { label: "Packaging", value: "Individual wrapping, inner cartons, export-grade outer cartons" },
];

const relatedProducts = [
  {
    title: "Lamp Glass & Lighting Components",
    href: "/products/lamp-glass",
    description:
      "Chimneys, shades, diffusers, and custom glass for chandeliers and pendant lights.",
  },
  {
    title: "Decorative Glass & Handicraft Components",
    href: "/products/decorative-glass",
    description:
      "Glass inserts for metal decor, lantern panels, terrarium containers, and decorative bowls.",
  },
  {
    title: "Drinkware, Bottles & Containers",
    href: "/products/drinkware",
    description:
      "Drinking glasses, tumblers, bottles, mason jars, and storage containers for retail and HORECA.",
  },
  {
    title: "Custom Glass Components",
    href: "/products/custom-glass",
    description:
      "Bespoke glass parts manufactured to your exact specifications — shape, size, thickness, and finish.",
  },
];

export default function CandleHoldersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Structured Data */}
      <ProductJsonLd
        name="Candle Holders & Votives"
        description="Glass candle holders, hurricane holders, votives, and tealight containers manufactured in Firozabad, India for B2B buyers."
        category="Glass Candle Holders"
        url="/products/candle-holders"
        image="/product-candle-holders.png"
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
            name: "Candle Holders & Votives",
            url: "https://ansar-overseas-website.vercel.app/products/candle-holders",
          },
        ]}
      />
      <FAQJsonLd faqs={faqs} />

      {/* Breadcrumb Navigation */}
      <section className="pt-28 lg:pt-36">
        <div className="container mx-auto px-4 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-accent transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground">Candle Holders & Votives</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block border border-accent/40 px-4 py-1.5 mb-6">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                Product Category 02
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 text-balance">
              Candle Holders{" "}
              <span className="font-semibold italic">& Votives</span>
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed max-w-2xl">
              Hand-crafted glass candle holders, hurricane holders, votive
              containers, and tealight cups — manufactured in Firozabad, India
              for home decor brands, candle companies, and wholesale buyers
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Description Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="/product-candle-holders.png"
                alt="Glass candle holders and votive containers manufactured by Ansar Overseas in Firozabad, India"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-light">
                Glass Candle Holders Built for{" "}
                <span className="font-semibold">B2B Buyers</span>
              </h2>
              <div className="space-y-4 text-base font-mono text-muted-foreground leading-relaxed">
                <p>
                  Ansar Overseas is a candle holder manufacturer based in
                  Firozabad, India, supplying hurricane holders, votive
                  containers, tealight cups, pillar enclosures, and decorative
                  candle jars to B2B buyers worldwide. Every piece is available
                  in frosted, colored, or clear glass with gold and silver rim
                  options to match your brand. With 20+ years of export
                  experience and 50+ skilled artisans, we handle orders from 500
                  pieces to tens of thousands — sample development through
                  export-grade packaging included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs font-mono tracking-widest text-accent uppercase">
              What We Manufacture
            </span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4 text-balance">
              Our Candle Glass Product Range
            </h2>
            <p className="text-base font-mono text-muted-foreground leading-relaxed mt-4 max-w-2xl">
              We produce a diverse range of glass candle holders and containers,
              each engineered for durability, aesthetic appeal, and practical
              use in candle making and home decor applications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productRange.map((product, index) => (
              <div
                key={index}
                className="bg-background p-6 lg:p-8 border border-border space-y-3"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-1.5 w-1.5 bg-accent shrink-0" />
                  <span className="text-xs font-mono tracking-widest text-accent uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-light">{product.title}</h3>
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
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs font-mono tracking-widest text-accent uppercase">
              Technical Details
            </span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4">
              Product Specifications
            </h2>
            <p className="text-base font-mono text-muted-foreground leading-relaxed mt-4 max-w-2xl">
              Our candle holders are manufactured to precise specifications. Below
              is an overview of the standard parameters — all of which can be
              customized to match your exact requirements.
            </p>
          </div>
          <div className="max-w-3xl">
            <div className="border border-border">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${
                    index !== specifications.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <div className="col-span-1 p-4 lg:p-5 bg-muted">
                    <span className="text-sm font-mono font-medium">
                      {spec.label}
                    </span>
                  </div>
                  <div className="col-span-2 p-4 lg:p-5">
                    <span className="text-sm font-mono text-muted-foreground">
                      {spec.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs font-mono tracking-widest text-accent uppercase">
              Common Questions
            </span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-balance">
              Ready to Source Candle Holders?
            </h2>
            <p className="text-lg font-mono text-primary-foreground/80 leading-relaxed">
              Whether you need standard votive containers or fully custom
              hurricane holders, our team is ready to discuss your requirements,
              develop samples, and set up reliable supply. Get in touch today to
              start your order.
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="text-xs font-mono tracking-widest text-accent uppercase">
              Explore More
            </span>
            <h2 className="text-4xl lg:text-5xl font-light mt-4">
              Related Product Categories
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="group border border-border p-6 lg:p-8 space-y-3 hover:border-accent transition-colors"
              >
                <h3 className="text-lg font-light group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-mono text-accent">
                  View Products
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
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
