"use client";

import { Badge } from "@/components/ui/badge";

const images = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hotel Exterior",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Lobby",
    category: "Lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Deluxe Room",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Spa",
    category: "Spa",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Restaurant",
    category: "Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Pool",
    category: "Pool",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-amber-600 text-white border-none mb-4">
            Photo Gallery
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Explore Our Hotel
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
              <img
                src={image.src}
                alt={image.alt}
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
