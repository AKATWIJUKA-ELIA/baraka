"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const images = [
  {
    src: "/baraka/hero.jpg",
    alt: "Hotel Exterior",
    category: "Exterior",
  },
  {
    src: "/baraka/_DSC7498.jpg",
    alt: "Lobby Entrance",
    category: "Lobby",
  },
  {
    src: "/baraka/room.jpg",
    alt: "Deluxe Suite",
    category: "Rooms",
  },
  {
    src: "/baraka/_DSC7503.jpg",
    alt: "Hotel Lounge",
    category: "Lounge",
  },
  {
    src: "/baraka/room2.jpg",
    alt: "Premium Room",
    category: "Rooms",
  },
  {
    src: "/baraka/_DSC7513.jpg",
    alt: "Restaurant Area",
    category: "Dining",
  },
  {
    src: "/baraka/room3.jpg",
    alt: "Executive Suite",
    category: "Rooms",
  },
  {
    src: "/baraka/_DSC7521.jpg",
    alt: "Reception",
    category: "Lobby",
  },
  {
    src: "/baraka/hero2.jpg",
    alt: "Hotel View",
    category: "Exterior",
  },
  {
    src: "/baraka/_DSC7540.jpg",
    alt: "Dining Experience",
    category: "Dining",
  },
  {
    src: "/baraka/room4.jpg",
    alt: "Standard Room",
    category: "Rooms",
  },
  {
    src: "/baraka/_DSC7559.jpg",
    alt: "Hotel Amenities",
    category: "Amenities",
  },
  {
    src: "/baraka/room5.jpg",
    alt: "Family Suite",
    category: "Rooms",
  },
  {
    src: "/baraka/_DSC7576.jpg",
    alt: "Relaxation Area",
    category: "Lounge",
  },
  {
    src: "/baraka/hero3.jpg",
    alt: "Hotel Grounds",
    category: "Exterior",
  },
  {
    src: "/baraka/_DSC7601.jpg",
    alt: "Meeting Space",
    category: "Facilities",
  },
  {
    src: "/baraka/room6.jpg",
    alt: "Cozy Room",
    category: "Rooms",
  },
  {
    src: "/baraka/_DSC7620.jpg",
    alt: "Hotel Interior",
    category: "Interior",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 mt-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-amber-600 text-white border-none mb-4">
            Photo Gallery
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Baraka in Pictures
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Take a visual tour of our stunning facilities and experience the
            beauty of Baraka Hotel before you arrive.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-[500px]" : "h-60"
                }`}
                
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Badge className="bg-amber-600 text-white border-none mb-2">
                  {image.category}
                </Badge>
                <h3 className="text-xl font-semibold text-white">
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
