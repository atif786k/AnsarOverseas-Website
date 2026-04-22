export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "M/S Ansar Overseas",
    alternateName: "Ansar Overseas",
    url: "https://ansar-overseas-website.vercel.app",
    logo: "https://ansar-overseas-website.vercel.app/icon.svg",
    description:
      "Custom glass manufacturer in Firozabad, India supplying lamp glass, candle holders, decorative glass, drinkware & custom glass components to exporters, lighting brands & bulk buyers worldwide.",
    foundingDate: "2000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shyam Nagar, Gadda Pathar Wali Gali",
      addressLocality: "Firozabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "283203",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7727075499",
        contactType: "sales",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    email: "matif91201@gmail.com",
    telephone: "+91-7727075499",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 27.1507,
        longitude: 78.3957,
      },
      geoRadius: "50000",
    },
    knowsAbout: [
      "Glass Manufacturing",
      "Custom Glass Products",
      "Lamp Glass",
      "Candle Holders",
      "Decorative Glass",
      "Glass Export",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ansar-overseas-website.vercel.app/#localbusiness",
    name: "M/S Ansar Overseas",
    image:
      "https://ansar-overseas-website.vercel.app/artisan-glassblowing-in-factory-with-molten-glass.jpg",
    url: "https://ansar-overseas-website.vercel.app",
    telephone: "+91-7727075499",
    email: "matif91201@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shyam Nagar, Gadda Pathar Wali Gali",
      addressLocality: "Firozabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "283203",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.1507,
      longitude: 78.3957,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "120",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
