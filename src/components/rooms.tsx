"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Users, Bed, Wifi, Bath, Tv, Fan, Armchair, ShowerHead, LucideIcon } from "lucide-react";

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  guests: number;
  classification?: string;
  features: string[];
  badge: string;
  amenityIcons: LucideIcon[];
  isShared?: boolean;
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Standard Room",
    classification: "standard",
    description:
      "A simple and comfortable room ideal for solo travelers looking for affordability and privacy.",
    price: 40000,
    image: "https://fra.cloud.appwrite.io/v1/storage/buckets/6983917c0008568a2555/files/69839a520025669d6ac4/view?project=6983916c002e052ab84d",
    guests: 1,
    features: ["Comfortable bed", "Private bathroom", "Fan", "Reading desk"],
    badge: "Budget Friendly",
    amenityIcons: [Bed, Bath, Fan, Armchair],
  },
  {
    id: 2,
    name: "Standard Plus Room",
    classification: "standard-plus",
    description:
      "Enjoy extra convenience and comfort with added amenities for a more relaxing stay.",
    price: 50000,
    image: "https://fra.cloud.appwrite.io/v1/storage/buckets/6983917c0008568a2555/files/69839b28001100c89ca5/view?project=6983916c002e052ab84d",
    guests: 2,
    features: ["Hot shower", "Television", "Wi-Fi", "Wardrobe"],
    badge: "Most Popular",
    amenityIcons: [ShowerHead, Tv, Wifi, Bed],
  },
  {
    id: 3,
    name: "Deluxe Executive Room",
    classification: "deluxe-executive-room",
    description:
      "A spacious and well-designed room perfect for business travelers or guests who appreciate extra space and comfort.",
    price: 70000,
    image: "https://fra.cloud.appwrite.io/v1/storage/buckets/6983917c0008568a2555/files/69839a9c002222c258b7/view?project=6983916c002e052ab84d",
    guests: 2,
    features: ["Large workspace", "DSTV", "Extra space", "Hot shower"],
    badge: "Best Value",
    amenityIcons: [Armchair, Tv, Wifi, ShowerHead],
  },
  {
    id: 4,
    name: "Twin Economy Room",
    classification: "twin-economy",
    description:
      "A budget-friendly twin room suitable for friends or travelers who prefer shared facilities.",
    price: 60000,
    image: "https://fra.cloud.appwrite.io/v1/storage/buckets/6983917c0008568a2555/files/69a498370018bc6e140b/view?project=6983916c002e052ab84d",
    guests: 2,
    features: ["Two beds", "Wi-Fi", "Shared bathroom", "Fan"],
    badge: "Great for Groups",
    amenityIcons: [Bed, Wifi, Fan, Users],
    isShared: true,
  },
];

export function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <Badge className="bg-bred/10 text-bred border-none mb-4">
            Our Accommodations
          </Badge> */}
          <h2 className="text-3xl md:text-7xl font-bold text-gray-900 mb-4">
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
                <Badge className="absolute top-4 left-4 bg-bred text-white border-none">
                  {room.badge}
                </Badge>
                {room.isShared && (
                  <Badge className="absolute top-4 right-4 bg-stone-700 text-white border-none text-xs">
                    Shared Facilities
                  </Badge>
                )}
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

                {/* Amenity Icons */}
                <div className="flex gap-3 mb-4">
                  {room.amenityIcons.map((Icon, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-lg bg-bblue/10 flex items-center justify-center"
                    >
                      <Icon className="h-4 w-4 text-bblue" />
                    </div>
                  ))}
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
                  <span className="text-2xl font-bold text-bred">
                    UGX {room.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">/ night</span>
                </div>
              </CardContent>

              <CardFooter className="p-2 space-x-4  flex  justify-center items-center">
                <a
                  href={`https://wa.me/+256770404091?text=${encodeURIComponent(
                    `Hello Baraka Hotel!\n\nI would like to book the following room:\n\n🏨 Room: ${room.name}\n💰 Price: UGX ${room.price.toLocaleString()} per night\n👥 Guests: ${room.guests}\n\nPlease let me know the availability. Thank you!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-24 bg-bred hover:bg-bred/90 text-white transition-colors">
                    Book Now
                  </Button>
                </a>
                <Link href={`/rooms/${room.classification}`} className="w-24 p-2 items-center border rounded-lg bg-bblue hover:bg-bblue/90 text-white transition-colors">
                  Explore
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/rooms"
            
            className="border-bred p-4 border rounded-full text-bred hover:bg-bred hover:text-white"
          >
            Explore All Rooms
          </Link >
        </div>
      </div>
    </section>
  );
}
