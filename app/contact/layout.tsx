import type React from "react";
import { FAQJsonLd } from "@/components/json-ld";
export { metadata } from "./metadata";

const faqs = [
  {
    question: "What is the minimum order quantity?",
    answer:
      "MOQ varies by product type. For standard items, we typically work with orders of 500+ pieces. For custom products, MOQ depends on the complexity. Contact us for specifics.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we export to 25+ countries. We handle proper export packaging and documentation. We can ship FOB Firozabad or arrange door-to-door delivery.",
  },
  {
    question: "Can you create custom designs?",
    answer:
      "Absolutely. Custom manufacturing is our specialty. Share your specifications, drawings, or even a rough idea — we'll develop samples for your approval before production.",
  },
  {
    question: "What is your typical lead time?",
    answer:
      "Standard products: 2-3 weeks. Custom orders: 3-5 weeks including sample development. Bulk orders may require additional time depending on quantity.",
  },
  {
    question: "Do you offer samples?",
    answer:
      "Yes, we provide samples for evaluation before placing bulk orders. Sample charges may apply for custom products, which are adjusted against the final order.",
  },
  {
    question: "What types of glass products do you manufacture?",
    answer:
      "We manufacture lamp glass and lighting components, candle holders and votives, decorative glass for handicrafts, drinkware and containers, and fully custom glass components. We serve B2B buyers, exporters, and bulk purchasers.",
  },
  {
    question: "Do you manufacture OEM glass components?",
    answer:
      "Yes, OEM manufacturing is one of our core strengths. We produce glass components to your exact specifications — from technical drawings to production — with custom branding, etching, and packaging options.",
  },
  {
    question: "What quality standards do you follow?",
    answer:
      "Every product goes through multi-stage quality checks — from raw material inspection to final packaging. We ensure consistent thickness, clarity, and finish across batches. Our products meet export-quality standards for international markets.",
  },
  {
    question: "How is glass packaged for export?",
    answer:
      "We use multi-layer protective packaging including individual wrapping, foam inserts, corrugated cartons, and wooden crates for international shipments. Packaging is designed to withstand long-distance transit with zero breakage.",
  },
  {
    question: "Can you handle large bulk orders?",
    answer:
      "Yes. With 50+ skilled craftsmen and a large manufacturing setup in Firozabad, we handle bulk orders of 10,000+ pieces with consistent quality across every batch. We also support recurring supply partnerships.",
  },
];

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FAQJsonLd faqs={faqs} />
      {children}
    </>
  );
}
