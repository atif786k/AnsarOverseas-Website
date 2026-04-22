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
