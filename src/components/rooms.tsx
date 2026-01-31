"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Maximize, Wifi, Bath, Tv, Fan, Desk, ShowerHead } from "lucide-react";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    description:
      "A simple and comfortable room ideal for solo travelers looking for affordability and privacy.",
    price: 40000,
    image: "/baraka/hero.jpg",
    guests: 1,
    features: ["Comfortable Bed", "Private Bathroom", "Fan"],
    badge: "Budget Friendly",
    amenities: [
      { icon: Bath, label: "Private Bathroom" },
      { icon: Fan, label: "Fan" },
      { icon: Desk, label: "Reading Table" },
    ],
  },
  {
    id: 2,
    name: "Standard Plus Room",
    description:
      "Enjoy extra convenience and comfort with added amenities for a more relaxing stay.",
    price: 50000,
    image: "/baraka/hero2.jpg",
    guests: 1,
    features: ["Hot Shower", "Television", "Wi-Fi"],
    badge: "Popular Choice",
    amenities: [
      { icon: ShowerHead, label: "Hot Shower" },
      { icon: Tv, label: "Television" },
      { icon: Wifi, label: "Wi-Fi" },
    ],
  },
  {
    id: 3,
    name: "Deluxe Executive Room",
    description:
      "A spacious and well-designed room perfect for business travelers or guests who appreciate extra space and comfort.",
    price: 70000,
    image: "/baraka/hero3.jpg",
    guests: 2,
    features: ["Large Workspace", "Extra Space", "Hot Shower"],
    badge: "Best Value",
    amenities: [
      { icon: Desk, label: "Large Desk" },
      { icon: Tv, label: "Television" },
      { icon: Wifi, label: "Wi-Fi" },
    ],
  },
  {
    id: 4,
    name: "Twin Economy Room",
    description:
      "A budget-friendly twin room suitable for friends or travelers who prefer shared facilities.",
    price: 60000,
    image: "/baraka/hero.jpg",
    guests: 2,
    features: ["Two Beds", "Wi-Fi", "Shared Bathroom"],
    badge: "Great for Friends",
    amenities: [
      { icon: Users, label: "Two Beds" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Fan, label: "Fan" },
    ],
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
            Relax in Comfort
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our rooms are thoughtfully prepared to give you a restful night. Whether you&apos;re 
            staying for a night or longer, you&apos;ll enjoy comfort, cleanliness, and attentive service.
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
                    <Users className="h-4 w-4" />
                    <span>{room.guests} {room.guests > 1 ? "Guests" : "Guest"}</span>
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
                    UGX {room.price.toLocaleString()}
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
          <Link href="/rooms">
            <Button
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
            >
              Explore All Rooms
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
