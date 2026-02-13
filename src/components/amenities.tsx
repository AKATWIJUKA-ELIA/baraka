"use client";

import { Badge } from "@/components/ui/badge";
import {
  Wifi,
  UtensilsCrossed,
  Car,
  Clock,
  Shield,
  Coffee,
  Tv,
  Building2,
  Shirt,
  Sun,
} from "lucide-react";
import Image from "next/image";

const amenities = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description: "Fresh local and continental dishes served daily",
  },
  {
    icon: Coffee,
    title: "Coffee Bar",
    description: "Premium coffee and refreshing beverages",
  },
  {
    icon: Building2,
    title: "Conference Room",
    description: "Well-lit, air-conditioned room seating up to 45 people",
  },
  {
    icon: Sun,
    title: "Rooftop",
    description: "Open-air space perfect for events and relaxation",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Complimentary high-speed internet access",
  },
  {
    icon: Car,
    title: "Safe Parking",
    description: "Spacious and secure parking area",
  },
  {
    icon: Shirt,
    title: "Laundry Service",
    description: "Professional washing and ironing at affordable rates",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security for your peace of mind",
  },
  {
    icon: Tv,
    title: "DSTV",
    description: "Enjoy live football and international news",
  },
  {
    icon: Clock,
    title: "24/7 Reception",
    description: "Always available to assist with your needs",
  },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Facilities & Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need for a comfortable stay. From delicious meals to 
            modern amenities, we&apos;ve got you covered.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gray-50 hover:bg-bblue/5 border border-transparent hover:border-bblue/20 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-bblue/10 group-hover:bg-bblue flex items-center justify-center mb-4 transition-colors duration-300">
                <amenity.icon className="h-7 w-7 text-bblue group-hover:text-white transition-colors duration-300" />
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
            <Image
              src="/images/whyus.jpg"
              alt="Hotel Spa"
              width={600}
                  height={400}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-bred text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold">2024</p>
              <p className="text-sm">Newly Opened</p>
            </div>
          </div>
          <div className="space-y-6">
            <Badge className="bg-bred/10 text-bred border-none">
              Why Choose Us
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Comfort is Our Priority
            </h3>
            <p className="text-gray-600 text-lg">
              Officially opened on December 13th, 2024, Baraka Hotel has quickly 
              become a trusted stop for comfort and refreshment along the Kampala-Gulu 
              Highway. We take pride in offering a welcoming environment where every 
              guest feels valued.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-bred/10 flex items-center justify-center">
                  <span className="text-bred text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Clean and comfortable rooms
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-bblue/10 flex items-center justify-center">
                  <span className="text-bblue text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Affordable pricing
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-bred/10 flex items-center justify-center">
                  <span className="text-bred text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Friendly and professional staff
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-bblue/10 flex items-center justify-center">
                  <span className="text-bblue text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Convenient location
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  Secure environment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
