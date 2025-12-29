import Link from "next/link"
import { Mail, Phone, MessageCircleMore, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-light tracking-wider mb-6">
              ANSAR<span className="font-semibold">OVERSEAS</span>
            </div>
            <p className="text-sm font-mono text-primary-foreground/80 leading-relaxed">
              Family-owned glass manufacturing excellence since generations. Crafting quality glass products with
              precision and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-sm tracking-wide mb-6 uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm font-mono text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm font-mono text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm font-mono text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm font-mono text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-mono text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-mono text-sm tracking-wide mb-6 uppercase">Our Products</h3>
            <ul className="space-y-3">
              {["Glass Artifacts", "Drinking Glasses", "Bottles & Jars", "Custom Orders"].map((item) => (
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
            <h3 className="font-mono text-sm tracking-wide mb-6 uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/70 mt-0.5" />
                <span className="text-sm font-mono text-primary-foreground/80">matif91201@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MessageCircleMore className="h-5 w-5 text-primary-foreground/70 mt-0.5" />
                <span className="text-sm font-mono text-primary-foreground/80">WhatsApp ( +91 7727075499 )</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/70 mt-0.5" />
                <span className="text-sm font-mono text-primary-foreground/80">
                  Shyam Nagar Gadda Pathar Wali Gali
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
              © {new Date().getFullYear()} Ansar Overseas. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm font-mono text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm font-mono text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
