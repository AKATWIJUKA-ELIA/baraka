"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Maximize, Wifi, Coffee, Bath, Tv } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Deluxe King Suite",
    description:
      "Spacious suite with stunning city views, king-size bed, and premium amenities for the discerning traveler.",
    price: 299,
    originalPrice: 399,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    size: "45 m²",
    guests: 2,
    features: ["King Bed", "City View", "Mini Bar"],
    badge: "Most Popular",
  },
  {
    id: 2,
    name: "Premium Ocean View",
    description:
      "Wake up to breathtaking ocean views in this elegantly designed room with modern furnishings.",
    price: 399,
    originalPrice: 499,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    size: "55 m²",
    guests: 2,
    features: ["Queen Bed", "Ocean View", "Balcony"],
    badge: "Best Value",
  },
  {
    id: 3,
    name: "Executive Suite",
    description:
      "Ultimate luxury with separate living area, workspace, and exclusive access to the executive lounge.",
    price: 599,
    originalPrice: 799,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    size: "75 m²",
    guests: 4,
    features: ["2 King Beds", "Living Area", "Lounge Access"],
    badge: "Luxury Pick",
  },
  {
    id: 4,
    name: "Royal Penthouse",
    description:
      "The pinnacle of luxury - a stunning penthouse with panoramic views, private terrace, and butler service.",
    price: 1299,
    originalPrice: 1599,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80",
    size: "150 m²",
    guests: 6,
    features: ["Master Suite", "Private Terrace", "Butler Service"],
    badge: "Exclusive",
  },
];

export function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-700 border-none mb-4">
            Our Accommodations
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Luxurious Rooms & Suites
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Each room is a sanctuary of comfort, designed with exquisite
            attention to detail and equipped with world-class amenities.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-amber-600 text-white border-none">
                  {room.badge}
                </Badge>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-24" />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {room.description}
                </p>

                {/* Room Details */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{room.guests} Guests</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-amber-600">
                    ${room.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ${room.originalPrice}
                  </span>
                  <span className="text-sm text-gray-500">/ night</span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-gray-900 hover:bg-amber-600 text-white transition-colors">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
          >
            View All Rooms
          </Button>
        </div>
      </div>
    </section>
  );
}
