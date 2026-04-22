import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircleMore,
  MapPin,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Pre-footer CTA */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-light mb-2">
                Ready to discuss your glass requirements?
              </h3>
              <p className="text-sm font-mono text-primary-foreground/70">
                Contact us for custom quotes, bulk pricing, or product inquiries.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm font-mono hover:bg-accent/90 transition-colors"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/917727075499"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 px-6 py-3 text-sm font-mono hover:bg-primary-foreground/10 transition-colors"
              >
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-light tracking-wider mb-6">
              ANSAR<span className="font-semibold">OVERSEAS</span>
            </div>
            <p className="text-sm font-mono text-primary-foreground/70 leading-relaxed mb-4">
              Custom glass manufacturing from Firozabad, India. Serving
              exporters, lighting brands, and home decor companies since the
              early 2000s.
            </p>
            <p className="text-xs font-mono text-primary-foreground/50">
              M/S Ansar Overseas — Glass City of India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-sm tracking-wide mb-6 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-mono text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-mono text-sm tracking-wide mb-6 uppercase">
              Our Products
            </h3>
            <ul className="space-y-3">
              {[
                "Lamp Glass & Lighting",
                "Candle Holders & Votives",
                "Decorative Glass",
                "Drinkware & Containers",
                "Custom Glass Components",
                "Bulk Orders",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="text-sm font-mono text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-sm tracking-wide mb-6 uppercase">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/70 mt-0.5 shrink-0" />
                <a
                  href="tel:+917727075499"
                  className="text-sm font-mono text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 7727075499
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MessageCircleMore className="h-5 w-5 text-primary-foreground/70 mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/917727075499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  WhatsApp: +91 7727075499
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/70 mt-0.5 shrink-0" />
                <a
                  href="mailto:matif91201@gmail.com"
                  className="text-sm font-mono text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  matif91201@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/70 mt-0.5 shrink-0" />
                <span className="text-sm font-mono text-primary-foreground/80">
                  Shyam Nagar, Gadda Pathar Wali Gali
                  <br />
                  Firozabad, Uttar Pradesh, India - 283203
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm font-mono text-primary-foreground/60">
              &copy; {new Date().getFullYear()} M/S Ansar Overseas. All rights
              reserved.
            </p>
            <p className="text-sm font-mono text-primary-foreground/40">
              Firozabad &mdash; Glass City of India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
