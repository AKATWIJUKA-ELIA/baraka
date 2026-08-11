import type { Metadata } from "next";
import { AmenitiesPageContent } from "@/components/AmenitiesPageContent";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "Explore Baraka Hotel amenities including restaurant, coffee bar, conference room, rooftop venue, secure parking, laundry services, Wi-Fi, and 24/7 support.",
  openGraph: {
    title: "Amenities | Baraka Hotel",
    description:
      "Explore our hotel amenities: dining, coffee, conference room, rooftop venue, secure parking, laundry, Wi-Fi, and more.",
    images: ["/baraka/hero3.jpg"],
  },
  twitter: {
    title: "Amenities | Baraka Hotel",
    description: "Explore Baraka Hotel amenities and services.",
    images: ["/baraka/hero3.jpg"],
  },
  alternates: {
    canonical: "/amenities",
  },
};

export default function AmenitiesPage() {
  return <AmenitiesPageContent />;
}
