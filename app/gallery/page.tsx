"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function GalleryPage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const galleryItems = [
    {
      name: "Crystal Wine Glass",
      dimensions: "22cm × 8cm",
      image: "elegant crystal wine glass on white background",
    },
    {
      name: "Decorative Glass Vase",
      dimensions: "30cm × 15cm",
      image: "decorative glass vase with intricate patterns",
    },
    {
      name: "Glass Water Bottle",
      dimensions: "25cm × 7cm",
      image: "clear glass water bottle with cap",
    },
    {
      name: "Vintage Glass Jar",
      dimensions: "18cm × 12cm",
      image: "vintage style glass storage jar with lid",
    },
    {
      name: "Champagne Flute",
      dimensions: "24cm × 6cm",
      image: "elegant champagne flute glass",
    },
    {
      name: "Glass Tumbler Set",
      dimensions: "12cm × 8cm",
      image: "set of drinking glass tumblers",
    },
    {
      name: "Art Glass Sculpture",
      dimensions: "35cm × 20cm",
      image: "artistic glass sculpture piece",
    },
    {
      name: "Glass Pitcher",
      dimensions: "28cm × 14cm",
      image: "clear glass pitcher with handle",
    },
    {
      name: "Cocktail Glass",
      dimensions: "18cm × 10cm",
      image: "martini cocktail glass",
    },
    {
      name: "Glass Candle Holder",
      dimensions: "15cm × 10cm",
      image: "decorative glass candle holder",
    },
    {
      name: "Beer Mug",
      dimensions: "16cm × 9cm",
      image: "classic beer mug with handle",
    },
    {
      name: "Glass Bowl",
      dimensions: "20cm × 20cm",
      image: "large decorative glass bowl",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-7xl font-light leading-tight text-balance">
              Product <span className="font-semibold italic">Gallery</span>
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Explore our exquisite collection of handcrafted and machine-made glass products. Hover over each item to
              view dimensions and details.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden bg-muted cursor-pointer"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={`/.jpg?height=600&width=600&query=${item.image}`}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay with product details */}
                <div
                  className={`absolute inset-0 bg-primary/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                    hoveredItem === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-normal text-primary-foreground text-center mb-3 text-balance">
                    {item.name}
                  </h3>
                  <p className="text-sm font-mono text-primary-foreground/80 tracking-wider">
                    Dimensions: {item.dimensions}
                  </p>
                  <div className="mt-6 text-xs font-mono text-primary-foreground/60 tracking-widest">
                    ANSAR OVERSEAS
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-balance">Interested in custom orders?</h2>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              We can customize any design to meet your specific requirements. Contact us to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 font-mono"
              >
                Get in Touch
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-11 px-8 font-mono"
              >
                View All Products
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
