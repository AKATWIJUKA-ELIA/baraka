"use client";

import { Badge } from "@/components/ui/badge";
import { Bed, UtensilsCrossed, MapPin, Shield } from "lucide-react";

const highlights = [
  {
    icon: Bed,
    title: "Comfortable Rooms",
    description: "Clean, well-maintained rooms designed for relaxation.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fresh & Delicious Meals",
    description: "Enjoy a variety of local and continental dishes.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description:
      "Located at the heart of Uganda, connecting the Northern, Eastern, Central and Western Regions.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "24/7 security and professional staff for your peace of mind.",
  },
];

export function KeyHighlights() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* <Badge className="bg-bred/10 text-bred border-none mb-4">
            Why Choose Us
          </Badge> */}
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-stone-800 mb-4">
            Key Highlights
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Discover what makes Baraka Hotel the perfect choice for your stay
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-stone-50 hover:bg-bred/5 border border-stone-100 hover:border-bred/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-bblue/10 group-hover:bg-bblue flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                <highlight.icon className="h-8 w-8 text-bblue group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-stone-800 mb-3">
                {highlight.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {highlight.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-bred/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-bred/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
