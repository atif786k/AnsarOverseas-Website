import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Users,
  Gem,
  Lightbulb,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description:
        "Every product undergoes rigorous quality checks. We maintain export-grade standards across all our manufacturing — consistency you can count on.",
    },
    {
      icon: Users,
      title: "Customer-Centric Approach",
      description:
        "We work closely with our clients to understand their exact requirements. Your specifications become our manufacturing blueprint.",
    },
    {
      icon: Lightbulb,
      title: "Custom Manufacturing",
      description:
        "From concept to production — we have the capability and experience to manufacture glass products tailored to your specific designs and needs.",
    },
    {
      icon: ShieldCheck,
      title: "Trust & Reliability",
      description:
        "Many of our clients have been with us for over a decade. We believe in building long-term partnerships based on consistent quality and honest business.",
    },
  ];

  const milestones = [
    {
      year: "Early 2000s",
      title: "Founded in Firozabad",
      description:
        "Started as a small family workshop, learning the craft from Firozabad's generations-old glass-making traditions.",
    },
    {
      year: "2005-2010",
      title: "Growing Capacity",
      description:
        "Expanded manufacturing capacity and began serving lighting manufacturers and handicraft exporters.",
    },
    {
      year: "2010-2015",
      title: "Export Markets",
      description:
        "Started exporting to international markets — Middle East, Europe, and Southeast Asia. Built long-term partnerships with export houses.",
    },
    {
      year: "2015-Present",
      title: "Scaled Operations",
      description:
        "Grew to 50+ skilled workers. Diversified into drinkware, containers, and custom glass components while maintaining our core strengths.",
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
                About Ansar Overseas
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 text-balance">
              A family business built on{" "}
              <span className="font-semibold italic">trust & craftsmanship</span>
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed max-w-2xl">
              From a modest workshop in Firozabad to serving businesses across
              25+ countries — our story is one of dedication, quality, and
              partnerships that last.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-light text-balance">
                Our story
              </h2>
              <div className="space-y-5 text-base font-mono text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">M/S Ansar Overseas</strong>{" "}
                  was founded in the early 2000s in Firozabad, Uttar Pradesh — a
                  city renowned as the{" "}
                  <strong className="text-foreground">
                    Glass City of India
                  </strong>
                  . What began as a small family workshop has grown into a
                  trusted manufacturing unit serving clients domestically and
                  internationally.
                </p>
                <p>
                  Our founder started by learning the intricacies of
                  glass-making from the local artisan community — a skill passed
                  down through generations in Firozabad. This deep understanding
                  of the craft, combined with a commitment to quality and fair
                  business practices, laid the foundation for Ansar Overseas.
                </p>
                <p>
                  Today, we employ over{" "}
                  <strong className="text-foreground">50+ skilled workers</strong>{" "}
                  and serve{" "}
                  <strong className="text-foreground">
                    exporters, lighting manufacturers, handicraft companies, and
                    home decor brands
                  </strong>{" "}
                  worldwide. We've completed over 10,000 orders across 25+
                  countries — and we're still growing.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/family-owned-glass-factory-workshop-heritage.jpg"
                alt="Ansar Overseas workshop heritage"
                className="w-full aspect-4/3 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-primary/80 to-transparent p-6">
                <p className="text-sm font-mono text-primary-foreground/90">
                  Our manufacturing facility in Firozabad, UP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firozabad Advantage */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-sm font-mono tracking-widest text-accent uppercase">
                  The Firozabad Advantage
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-balance">
                Why Firozabad matters for your business
              </h2>
              <div className="space-y-4 text-base font-mono text-muted-foreground leading-relaxed">
                <p>
                  Firozabad is India's largest hub for glass manufacturing —
                  home to thousands of glass factories and an ecosystem that has
                  been perfecting glass-making for over a century.
                </p>
                <p>Being based here gives us distinct advantages:</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Access to highly skilled artisans with generational expertise",
                  "Competitive raw material sourcing — better pricing for you",
                  "Deep understanding of diverse glass-making techniques",
                  "Strong logistics infrastructure for domestic & export shipments",
                  "A community-driven quality benchmark shaped by decades of competition",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 bg-accent mt-2.5 shrink-0" />
                    <span className="text-sm font-mono text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1">
              <img
                src="/glass-manufacturing-molten-glass-furnace.jpg"
                alt="Glass manufacturing furnace in Firozabad"
                className="w-full aspect-4/3 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              Our journey
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Key milestones that have shaped Ansar Overseas into the
              manufacturing partner it is today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="space-y-4 border-l-2 border-accent/30 pl-6">
                <div className="text-sm font-mono text-accent tracking-wide">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-normal">{milestone.title}</h3>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-balance">
              What we stand for
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              The principles that guide how we work, manufacture, and build
              relationships with our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex gap-5 p-8 border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="shrink-0 h-12 w-12 bg-accent/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-normal">{value.title}</h3>
                    <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-balance">
              Ready to work with us?
            </h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Whether you need custom glass components, bulk orders, or want to
              explore a manufacturing partnership — let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="font-mono text-sm cursor-pointer group"
                >
                  Get in Touch
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
                  <Gem className="mr-2 h-4 w-4" />
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
