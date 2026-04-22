import type React from "react";
export { metadata } from "./metadata";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
