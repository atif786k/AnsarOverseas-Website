import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const categories = [
    {
      title: "Glass Artifacts",
      description: "Handcrafted decorative pieces and artistic glass creations",
      items: [
        "Decorative Bowls",
        "Glass Sculptures",
        "Artistic Vases",
        "Display Pieces",
        "Custom Artwork",
      ],
      image: "artistic glass artifacts and decorative pieces",
    },
    {
      title: "Drinking Glasses",
      description: "Elegant glassware for every occasion",
      items: [
        "Wine Glasses",
        "Tumblers",
        "Champagne Flutes",
        "Shot Glasses",
        "Beer Mugs",
      ],
      image: "collection of elegant drinking glasses",
    },
    {
      title: "Bottles & Containers",
      description: "Functional glass storage solutions",
      items: [
        "Beverage Bottles",
        "Storage Jars",
        "Oil & Vinegar Bottles",
        "Perfume Bottles",
        "Mason Jars",
      ],
      image: "glass bottles and storage jars collection",
    },
    {
      title: "Custom Products",
      description: "Bespoke glass solutions for your specific needs",
      items: [
        "Branded Glassware",
        "Special Designs",
        "Corporate Gifts",
        "Promotional Items",
        "Unique Creations",
      ],
      image: "custom designed glass products",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 text-balance">
              Our product catalog
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Discover our comprehensive range of glass products, from handmade
              artifacts to machine-manufactured precision glassware. Each piece
              reflects our commitment to quality and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-mono text-accent tracking-wide mb-2">
                        CATEGORY {String(index + 1).padStart(2, "0")}
                      </div>
                      <h2 className="text-4xl font-light mb-4">
                        {category.title}
                      </h2>
                      <p className="text-lg font-mono text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center space-x-3"
                        >
                          <div className="h-1.5 w-1.5 bg-accent" />
                          <span className="text-sm font-mono">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="font-mono text-sm">
                      Request Pricing
                    </Button>
                  </div>
                </div>
                <div
                  className={`aspect-square ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <img
                    src={`/.jpg?height=700&width=700&query=${category.image}`}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light text-balance">
              Need something unique?
            </h2>
            <p className="text-lg font-mono text-primary-foreground/80 leading-relaxed">
              We specialize in custom glass manufacturing. Share your
              requirements, and our team will work with you to create exactly
              what you need.
            </p>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="font-mono text-sm bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer"
              >
                Discuss Custom Order
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Bulk Orders Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-light text-balance">
                Bulk order capabilities
              </h2>
              <p className="text-lg font-mono text-muted-foreground leading-relaxed">
                With our advanced manufacturing facilities, we can handle
                large-scale orders while maintaining consistent quality. Perfect
                for:
              </p>
              <ul className="space-y-3">
                {[
                  "Restaurant & Hotel Chains",
                  "Retail Distribution",
                  "Corporate Events",
                  "Wholesale Partners",
                  "Export Orders",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="h-1.5 w-1.5 bg-accent" />
                    <span className="text-sm font-mono">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="font-mono text-sm">Get Bulk Pricing</Button>
            </div>
            <div className="aspect-[4/3]">
              <img
                src="/glass-manufacturing-factory-production-line-bulk-o.jpg"
                alt="Bulk manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
