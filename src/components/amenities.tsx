"use client";

import { Badge } from "@/components/ui/badge";
import {
  Wifi,
  Dumbbell,
  UtensilsCrossed,
  Car,
  Waves,
  Sparkles,
  Clock,
  Shield,
  Coffee,
  Plane,
  Baby,
  HeartPulse,
} from "lucide-react";

const amenities = [
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Stunning rooftop pool with panoramic city views",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description: "Award-winning restaurants with world-class cuisine",
  },
  {
    icon: Sparkles,
    title: "Luxury Spa",
    description: "Rejuvenating treatments and wellness therapies",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art equipment and personal trainers",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary ultra-fast internet throughout",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Secure parking with 24/7 valet service",
  },
  {
    icon: Clock,
    title: "24/7 Concierge",
    description: "Round-the-clock assistance for all your needs",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Advanced security for your peace of mind",
  },
  {
    icon: Coffee,
    title: "Lounge Bar",
    description: "Exclusive cocktails and premium beverages",
  },
  {
    icon: Plane,
    title: "Airport Transfer",
    description: "Luxury vehicle pickup and drop-off service",
  },
  {
    icon: Baby,
    title: "Kids Club",
    description: "Supervised activities and entertainment",
  },
  {
    icon: HeartPulse,
    title: "Health Services",
    description: "On-call medical assistance available",
  },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-700 border-none mb-4">
            Hotel Amenities
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Enjoy an array of premium amenities designed to make your stay
            unforgettable. Every detail has been carefully curated for your comfort.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gray-50 hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-100 group-hover:bg-amber-600 flex items-center justify-center mb-4 transition-colors duration-300">
                <amenity.icon className="h-7 w-7 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-sm text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Hotel Spa"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
          <div className="space-y-6">
            <Badge className="bg-amber-100 text-amber-700 border-none">
              Why Choose Us
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              A Perfect Blend of Luxury & Comfort
            </h3>
            <p className="text-gray-600 text-lg">
              At Baraka Hotel, we believe in creating experiences that last a
              lifetime. Our commitment to excellence is reflected in every
              aspect of your stay, from our meticulously designed rooms to our
              world-class service.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Award-winning hospitality since 2009
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Eco-friendly and sustainable practices
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Personalized service for every guest
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
