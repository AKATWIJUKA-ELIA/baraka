"use client";

import { Badge } from "@/components/ui/badge";
import { Bed, UtensilsCrossed, MapPin, Shield } from "lucide-react";

const highlights = [
  {
    icon: Bed,
    title: "Comfortable Rooms",
    description: "Clean, well-maintained rooms designed for relaxation.",
    color: "bg-amber-500",
  },
  {
    icon: UtensilsCrossed,
    title: "Fresh & Delicious Meals",
    description: "Enjoy a variety of local and continental dishes.",
    color: "bg-emerald-500",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description:
      "Located at the heart of Uganda, connecting the Northern, Eastern, Central and Western Regions.",
    color: "bg-blue-500",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "24/7 security and professional staff for your peace of mind.",
    color: "bg-purple-500",
  },
];

export function KeyHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-700 border-none mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Comfort, Our Priority
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            At Baraka Hotel, we provide everything you need for a restful and
            enjoyable stay.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-xl text-center"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <highlight.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-amber-500 group-hover:w-1/2 transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
