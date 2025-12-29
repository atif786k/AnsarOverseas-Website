"use client";

import type React from "react";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircleMore, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    orderType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
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
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 text-balance">
              Let's discuss your needs
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Whether you need a custom quote, bulk order pricing, or have
              questions about our products, we're here to help. Reach out to our
              team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="lg:col-span-3">
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
                    placeholder="Tell us about your requirements, quantity needs, timeline, or any specific questions..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="font-mono text-sm w-full md:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-accent mt-1" />
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
                    <MessageCircleMore className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="text-sm font-mono text-muted-foreground mb-1">
                        WhatsApp
                      </div>
                      <a className="font-mono text-foreground hover:text-accent transition-colors">
                        +91 7727075499
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="text-sm font-mono text-muted-foreground mb-1">
                        Address
                      </div>
                      <p className="font-mono text-foreground">
                        Shyam Nagar Gadda Pathar Wali Gali
                        <br />
                        Firozabad, Uttar Pradesh, India - 283203
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-accent mt-1" />
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
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                  We typically respond to inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="aspect-[21/9] bg-muted">
            <img
              src="/factory-location-map-aerial-view.jpg"
              alt="Our location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                "What is the minimum order quantity?",
                "Do you ship internationally?",
                "Can you create custom designs?",
                "What is your typical lead time?",
                "Do you offer samples?",
              ].map((question, index) => (
                <div key={index} className="border-b border-border pb-4">
                  <button className="w-full text-left font-mono text-sm hover:text-accent transition-colors">
                    {question}
                  </button>
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
