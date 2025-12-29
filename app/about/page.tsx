import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const values = [
    {
      title: "Craftsmanship",
      description:
        "Every piece reflects the skill and dedication of our master artisans who have perfected their craft over decades.",
    },
    {
      title: "Quality",
      description:
        "We never compromise on quality. From materials to final inspection, excellence guides every decision.",
    },
    {
      title: "Innovation",
      description:
        "While respecting tradition, we embrace modern technology to improve our processes and expand our capabilities.",
    },
    {
      title: "Sustainability",
      description:
        "We're committed to responsible manufacturing, minimizing waste and using recyclable materials wherever possible.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 bg-muted flex justify-center">
        <h1 className="text-5xl lg:text-7xl font-light leading-tight text-balance">
          About US
        </h1>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-balance">
              Our story
            </h2>
            <div className="space-y-6 text-lg font-mono text-muted-foreground leading-relaxed">
              <p>
                Founded in the early 2000, Ansar Overseas began as a modest
                family workshop where glass was shaped entirely by hand. Our
                founder learned the craft from European masters and brought
                those traditions to our facility.
              </p>
              <p>
                As demand grew, we expanded our capabilities while maintaining
                our commitment to quality. We invested in modern machinery not
                to replace craftsmanship, but to complement it—allowing us to
                serve both boutique clients seeking unique pieces and large
                vendors requiring consistent bulk orders.
              </p>
              <p>
                Today, we're proud to be a second-generation family business
                employing over 200 skilled workers. We export to 25+ countries
                while staying true to the principles that have guided us from
                the beginning: quality, integrity, and excellence in every
                piece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              What drives us
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Our values shape everything we do, from how we source materials to
              how we treat our employees and customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div key={index} className="space-y-4 p-8 border border-border">
                <h3 className="text-2xl font-normal">{value.title}</h3>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-light text-balance">
                Meet our craftsmen
              </h2>
              <p className="text-lg font-mono text-primary-foreground/80 leading-relaxed">
                Our team includes master glassblowers, skilled machine
                operators, quality inspectors, and designers—all united by their
                passion for glass and commitment to excellence.
              </p>
              <p className="text-lg font-mono text-primary-foreground/80 leading-relaxed">
                Many have been with us for decades, passing their knowledge to
                the next generation and ensuring our traditions continue while
                embracing innovation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/experienced-glassblower-artisan-at-work.jpg"
                alt="Master craftsman"
                className="w-full aspect-square object-cover"
              />
              <img
                src="/glass-factory-team-working-together.jpg"
                alt="Our team"
                className="w-full aspect-square object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-balance">
              Let's work together
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Whether you're looking for custom creations or bulk orders, we'd
              love to discuss how we can help bring your vision to life.
            </p>
            <a href="/contact">
            <Button size="lg" className="font-mono text-sm cursor-pointer">
              Get in Touch
            </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
