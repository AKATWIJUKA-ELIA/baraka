import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

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

const images = [
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
            description="Browse a curated look at the guest rooms and public spaces across Baraka Hotel."
            className="mb-12"
          />

          <div className="grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <article
                key={image.src}
                className={`hotel-card group relative p-0 ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bnavy/80 via-bnavy/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="rounded-full bg-bblue px-3 py-1 text-xs font-black text-bnavy">
                    {image.category}
                  </span>
                  <h2 className="mt-3 text-2xl font-black">{image.alt}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
