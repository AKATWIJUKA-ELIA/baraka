import type { Metadata } from "next";
import { AmenitiesPageContent } from "@/components/AmenitiesPageContent";

export const metadata: Metadata = {
  title: "Amenities & Facilities",
  description:
    "Explore Baraka Hotel amenities including restaurant, coffee bar, conference room, rooftop venue, secure parking, laundry services, Wi-Fi, and DSTV entertainment.",
  openGraph: {
    title: "Amenities & Facilities | Baraka Hotel",
    description:
      "Explore our amenities: restaurant, coffee bar, conference room, rooftop venue, secure parking, laundry services, and more.",
    images: ["/baraka/hero3.jpg"],
  },
  twitter: {
    title: "Amenities & Facilities | Baraka Hotel",
    description: "Explore Baraka Hotel amenities including conference room, rooftop venue, and more.",
    images: ["/baraka/hero3.jpg"],
  },
  alternates: {
    canonical: "/facilities",
  },
};

export default function FacilitiesPage() {
  return <AmenitiesPageContent />;
}
