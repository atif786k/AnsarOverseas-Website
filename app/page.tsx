import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Users, Award, Globe } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const capabilities = [
    {
      number: "01",
      title: "Handcrafted Excellence",
      description:
        "Master artisans creating unique glass pieces with traditional techniques passed down through generations.",
    },
    {
      number: "02",
      title: "Modern Manufacturing",
      description:
        "State-of-the-art machinery for precision glass production at scale, ensuring consistency and quality.",
    },
    {
      number: "03",
      title: "Custom Solutions",
      description:
        "Tailored glass products designed to meet your exact specifications, from concept to delivery.",
    },
  ];

  const stats = [
    { icon: Factory, value: "25+", label: "Years of Experience" },
    { icon: Users, value: "200+", label: "Skilled Craftsmen" },
    { icon: Award, value: "10k+", label: "Order Completed" },
    { icon: Globe, value: "25+", label: "Countries Served" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-light leading-tight text-balance">
                  Crafting glass excellence for{" "}
                  <span className="font-semibold italic">generations</span>
                </h1>
                <p className="text-lg font-mono text-muted-foreground leading-relaxed max-w-xl">
                  Family-owned glass manufacturing combining artisan
                  craftsmanship with modern technology to deliver exceptional
                  glass products worldwide.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/gallery">
                  <Button
                    size="lg"
                    className="font-mono text-sm group cursor-pointer"
                  >
                    View Gallery
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-mono text-sm bg-transparent"
                >
                  Request Quote
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-square">
              <img
                src="/artisan-glassblowing-in-factory-with-molten-glass.jpg"
                alt="Master glassmaker crafting glass"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
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
                  <div className="text-sm font-mono text-muted-foreground tracking-wide">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              Combining tradition with innovation
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Our manufacturing process blends time-honored glassmaking
              techniques with cutting-edge technology to deliver superior
              quality products.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {capabilities.map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="text-6xl font-light text-accent/30">
                  {item.number}
                </div>
                <h3 className="text-2xl font-normal">{item.title}</h3>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              Explore our glass collection
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              From elegant drinking glasses to custom artifacts, we manufacture
              a diverse range of glass products for every need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Glass Artifacts",
                image: "decorative glass art pieces and sculptures",
              },
              {
                title: "Drinking Glasses",
                image: "elegant drinking glasses and tumblers",
              },
              {
                title: "Bottles & Jars",
                image: "glass bottles and storage jars",
              },
              {
                title: "Custom Products",
                image: "custom designed glass products",
              },
            ].map((product, index) => (
              <Link
                key={index}
                href="/products"
                className="group space-y-4 block"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={`/.jpg?key=gp2py&height=500&width=500&query=${product.image}`}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-normal text-center group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/products">
              <Button
                size="lg"
                variant="outline"
                className="font-mono text-sm bg-transparent cursor-pointer"
              >
                View Full Catalog
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-balance">
              Ready to discuss your custom glass requirements?
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Whether you need bulk orders or bespoke glass creations, our team
              is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button size="lg" className="font-mono text-sm cursor-pointer">
                  Contact Our Sales Team
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="font-mono text-sm bg-transparent cursor-not-allowed"
              >
                Download Product Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
