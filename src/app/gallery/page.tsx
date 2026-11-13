import type { Metadata } from "next";
import { GalleryGrid, type GalleryImage } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollAnimations } from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a visual tour of Baraka Hotel. Browse our photo gallery featuring rooms, restaurant, lobby, and facilities in Kiryandongo, Uganda.",
  openGraph: {
    title: "Photo Gallery | Baraka Hotel",
    description: "Take a visual tour of Baraka Hotel. Browse photos of our rooms, restaurant, and facilities.",
    images: ["/baraka/hero.jpg"],
  },
  twitter: {
    title: "Photo Gallery | Baraka Hotel",
    description: "Take a visual tour of Baraka Hotel.",
    images: ["/baraka/hero.jpg"],
  },
  alternates: {
    canonical: "/gallery",
  },
};

const images: GalleryImage[] = [
  { src: "/baraka/hero.jpg", alt: "Hotel exterior", category: "Exterior" },
  { src: "/baraka/room.jpg", alt: "Standard room", category: "Rooms" },
  { src: "/baraka/room2.jpg", alt: "Premium room", category: "Rooms" },
  { src: "/baraka/room3.jpg", alt: "Executive room", category: "Rooms" },
  { src: "/baraka/hero2.jpg", alt: "Dining area", category: "Dining" },
  { src: "/baraka/dstv.jpg", alt: "DSTV entertainment", category: "In-room" },
  { src: "/baraka/laundry.jpg", alt: "Laundry service", category: "Services" },
  { src: "/baraka/roof.jpg", alt: "Rooftop venue", category: "Rooftop" },
  { src: "/baraka/room4.jpg", alt: "Comfortable guest room", category: "Rooms" },
  { src: "/baraka/room5.jpg", alt: "Deluxe room", category: "Rooms" },
  { src: "/baraka/_DSC7553.jpg", alt: "Reception area", category: "Reception" },
  { src: "/baraka/hero3.jpg", alt: "Hotel view", category: "Exterior" },
  { src: "/baraka/conference.jpg", alt: "Meeting space", category: "Facilities" },
  { src: "/baraka/room6.jpg", alt: "Cozy room", category: "Rooms" },
  { src: "/baraka/_DSC7620.jpg", alt: "Hotel night view", category: "Night view" },
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-bpaper">
      <PageHero
        kicker="Gallery"
        title="Baraka"
        accent="in pictures"
        description="A visual tour of the rooms, dining spaces, rooftop, services, and welcoming hotel details guests experience before they arrive."
        image="/baraka/hero.jpg"
        primaryAction={{ href: "/rooms", label: "Explore Rooms" }}
        secondaryAction={{ href: "/contact", label: "Book Direct" }}
      />

      <section className="section-shell">
        <div className="site-container">
          <SectionHeader
            kicker="Photo tour"
            title="Spaces made for rest and refreshment"
            align="split"
            description="Browse a curated look at the guest rooms and public spaces across Baraka Hotel."
            className="mb-12"
          />

          <GalleryGrid images={images} />
        </div>
      </section>
      <ScrollAnimations />
    </main>
  );
}
