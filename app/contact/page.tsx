"use client";

import type React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MessageCircleMore,
  MapPin,
  Clock,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { contactFormSchema } from "@/lib/contactValidation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    orderType: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = contactFormSchema.parse({
        fullName: formData.name,
        emailAddress: formData.email,
        companyName: formData.company || "",
        phoneNumber: formData.phone || "",
        orderType: formData.orderType,
        message: formData.message,
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          orderType: "",
          message: "",
        });
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);

      if (error.errors) {
        const errorMessages = error.errors
          .map((err: any) => err.message)
          .join("\n");
        alert("Validation Error:\n" + errorMessages);
      } else {
        alert(
          "An error occurred while sending your message. Please try again."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block border border-accent/40 px-4 py-1.5 mb-6">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 text-balance">
              Looking for a reliable glass manufacturing partner?
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed max-w-2xl">
              Whether you need a custom quote, bulk order pricing, or want to
              discuss your product requirements — we're here to help. Reach out
              to our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://wa.me/917727075499"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-accent/10 border border-accent/20 hover:border-accent/50 transition-colors group"
            >
              <MessageCircleMore className="h-8 w-8 text-accent shrink-0" />
              <div>
                <div className="text-xs font-mono text-muted-foreground mb-1">
                  WhatsApp
                </div>
                <div className="text-sm font-mono font-medium group-hover:text-accent transition-colors">
                  +91 7727075499
                </div>
              </div>
            </a>
            <a
              href="tel:+917727075499"
              className="flex items-center gap-4 p-5 border border-border hover:border-accent/50 transition-colors group"
            >
              <Phone className="h-8 w-8 text-accent shrink-0" />
              <div>
                <div className="text-xs font-mono text-muted-foreground mb-1">
                  Phone
                </div>
                <div className="text-sm font-mono font-medium group-hover:text-accent transition-colors">
                  +91 7727075499
                </div>
              </div>
            </a>
            <a
              href="mailto:matif91201@gmail.com"
              className="flex items-center gap-4 p-5 border border-border hover:border-accent/50 transition-colors group"
            >
              <Mail className="h-8 w-8 text-accent shrink-0" />
              <div>
                <div className="text-xs font-mono text-muted-foreground mb-1">
                  Email
                </div>
                <div className="text-sm font-mono font-medium group-hover:text-accent transition-colors">
                  matif91201@gmail.com
                </div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-5 border border-border">
              <MapPin className="h-8 w-8 text-accent shrink-0" />
              <div>
                <div className="text-xs font-mono text-muted-foreground mb-1">
                  Location
                </div>
                <div className="text-sm font-mono font-medium">
                  Firozabad, UP, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-light mb-2">Send us a message</h2>
              <p className="text-sm font-mono text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-mono text-sm">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="font-mono"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-sm">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="font-mono"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-mono text-sm">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="font-mono"
                      placeholder="Your company"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-mono text-sm">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="font-mono"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="orderType" className="font-mono text-sm">
                    Order Type *
                  </Label>
                  <select
                    id="orderType"
                    name="orderType"
                    required
                    value={formData.orderType}
                    onChange={handleChange}
                    className="w-full h-10 px-3 bg-background border border-input font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select order type</option>
                    <option value="custom">Custom Order</option>
                    <option value="bulk">Bulk Order</option>
                    <option value="sample">Sample Request</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-sm">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="font-mono"
                    placeholder="Tell us about your requirements — product type, quantity, specifications, timeline, or any questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="font-mono text-sm w-full md:w-auto cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-sm font-mono text-muted-foreground mb-1">
                        Phone
                      </div>
                      <a
                        href="tel:+917727075499"
                        className="font-mono text-foreground hover:text-accent transition-colors"
                      >
                        +91 7727075499
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MessageCircleMore className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-sm font-mono text-muted-foreground mb-1">
                        WhatsApp
                      </div>
                      <a
                        href="https://wa.me/917727075499"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-foreground hover:text-accent transition-colors"
                      >
                        +91 7727075499
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-sm font-mono text-muted-foreground mb-1">
                        Email
                      </div>
                      <a
                        href="mailto:matif91201@gmail.com"
                        className="font-mono text-foreground hover:text-accent transition-colors"
                      >
                        matif91201@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-sm font-mono text-muted-foreground mb-1">
                        Factory Address
                      </div>
                      <p className="font-mono text-foreground">
                        Shyam Nagar, Gadda Pathar Wali Gali
                        <br />
                        Firozabad, Uttar Pradesh
                        <br />
                        India - 283203
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-sm font-mono text-muted-foreground mb-1">
                        Business Hours
                      </div>
                      <p className="font-mono text-foreground">
                        Monday - Sunday: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-xl font-light mb-4">Quick Response</h3>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed mb-4">
                  We typically respond to inquiries within 24 hours. For urgent
                  matters, reach us directly via WhatsApp or phone.
                </p>
                <a
                  href="https://wa.me/917727075499"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="font-mono text-sm bg-transparent cursor-pointer w-full"
                  >
                    <MessageCircleMore className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the minimum order quantity?",
                  a: "MOQ varies by product type. For standard items, we typically work with orders of 500+ pieces. For custom products, MOQ depends on the complexity. Contact us for specifics.",
                },
                {
                  q: "Do you ship internationally?",
                  a: "Yes, we export to 25+ countries. We handle proper export packaging and documentation. We can ship FOB Firozabad or arrange door-to-door delivery.",
                },
                {
                  q: "Can you create custom designs?",
                  a: "Absolutely. Custom manufacturing is our specialty. Share your specifications, drawings, or even a rough idea — we'll develop samples for your approval before production.",
                },
                {
                  q: "What is your typical lead time?",
                  a: "Standard products: 2-3 weeks. Custom orders: 3-5 weeks including sample development. Bulk orders may require additional time depending on quantity.",
                },
                {
                  q: "Do you offer samples?",
                  a: "Yes, we provide samples for evaluation before placing bulk orders. Sample charges may apply for custom products, which are adjusted against the final order.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-border pb-6">
                  <h4 className="font-mono text-sm font-medium mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
