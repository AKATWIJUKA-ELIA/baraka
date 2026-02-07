"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users,
  Check,
  Phone,
  Bed,
  Bath,
  Maximize,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Shield
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { SerializableRoom } from "@/lib/rooms-data";

interface RoomDetailContentProps {
  room: SerializableRoom;
  otherRooms: SerializableRoom[];
}

export function RoomDetailContent({ room, otherRooms }: RoomDetailContentProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section with Image Gallery */}
      <section className="relative">
        {/* Main Image */}
        <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src={room.images[currentImageIndex]}
            alt={room.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          {/* Image Navigation */}
          {room.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-stone-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-stone-800" />
              </button>
            </>
          )}

          {/* Badges */}
          <div className="absolute top-40 right-6 flex gap-2">
            <Badge className="bg-amber-600 text-white border-none text-sm px-4 py-1">
              {room.badge}
            </Badge>
            {room.isShared && (
              <Badge className="bg-stone-700 text-white border-none text-sm px-4 py-1">
                Shared Facilities
              </Badge>
            )}
          </div>

          {/* Image Indicators */}
          {room.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {room.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thumbnail Gallery */}
        {room.images.length > 1 && (
          <div className="container mx-auto px-4 -mt-16 relative z-10">
            <div className="flex gap-4 justify-center">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden shadow-lg transition-all ${
                    index === currentImageIndex ? 'ring-4 ring-amber-500 scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${room.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Room Details Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Back Button */}
              <div className="mb-4">
                <Link href="/rooms">
                  <Button variant="outline" className="hover:cursor-pointer bg-white/90 backdrop-blur-sm hover:bg-white border-0 shadow-lg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Rooms
                  </Button>
                </Link>
              </div>
              
              {/* Room Title & Quick Info */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
                  {room.name}
                </h1>
                <div className="flex flex-wrap gap-6 text-stone-600">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-600" />
                    <span>{room.guests} {room.guests > 1 ? 'Guests' : 'Guest'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-amber-600" />
                    <span>{room.beds} {room.beds > 1 ? 'Beds' : 'Bed'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-amber-600" />
                    <span>{room.bathrooms > 0 ? `${room.bathrooms} Bathroom` : 'Shared Bathroom'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-amber-600" />
                    <span>{room.size}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-stone-800 mb-4">About This Room</h2>
                  <p className="text-stone-600 leading-relaxed text-lg">
                    {room.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-stone-800 mb-6">Amenities & Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-stone-50">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-amber-600" />
                        </div>
                        <span className="text-stone-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Hotel Policies */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-stone-800 mb-6">Hotel Policies</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-800">Check-in/out</h3>
                        <p className="text-stone-600 text-sm">Check-in: 2:00 PM</p>
                        <p className="text-stone-600 text-sm">Check-out: 11:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-800">Security</h3>
                        <p className="text-stone-600 text-sm">24/7 security</p>
                        <p className="text-stone-600 text-sm">Safe environment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-800">Location</h3>
                        <p className="text-stone-600 text-sm">Kampala-Gulu Highway</p>
                        <p className="text-stone-600 text-sm">Bweyale, Uganda</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6 md:p-8">
                    <div className="text-center mb-6">
                      <span className="text-4xl font-bold text-amber-600">
                        UGX {room.price.toLocaleString()}
                      </span>
                      <span className="text-stone-500 ml-2">/ night</span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
                        <p className="text-sm text-amber-700 text-center">
                          Best rate guaranteed when booking directly
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={`https://wa.me/256768666505?text=${encodeURIComponent(
                          `Hello Baraka Hotel!\n\nI would like to book the following room:\n\n🏨 Room: ${room.name}\n💰 Price: UGX ${room.price.toLocaleString()} per night\n👥 Guests: ${room.guests}\n🛏️ Beds: ${room.beds}\n📐 Size: ${room.size}\n\nPlease let me know the availability. Thank you!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg rounded-xl">
                          Book This Room
                        </Button>
                      </a>
                      <a href="tel:+256768666505" className="block">
                        <Button variant="outline" className="w-full py-6 text-lg rounded-xl border-stone-300">
                          <Phone className="w-5 h-5 mr-2" />
                          Call to Book
                        </Button>
                      </a>
                    </div>

                    <p className="text-center text-stone-500 text-sm mt-4">
                      No prepayment needed
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="border-0 shadow-lg mt-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-stone-800 mb-3">Need Help?</h3>
                    <p className="text-stone-600 text-sm mb-4">
                      Our team is available 24/7 to assist you with your booking.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="text-stone-600">
                        <strong>Phone:</strong> +256 768 666 505
                      </p>
                      <p className="text-stone-600">
                        <strong>WhatsApp:</strong> +256 768 666 505
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Rooms Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-8 text-center">
            Explore Other Rooms
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherRooms.map((otherRoom) => (
              <Link key={otherRoom.id} href={`/rooms/${otherRoom.classification}`}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <div className="relative h-48">
                    <Image
                      src={otherRoom.image}
                      alt={otherRoom.name}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-amber-600 text-white border-none text-xs">
                      {otherRoom.badge}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-stone-800 mb-2">{otherRoom.name}</h3>
                    <p className="text-stone-600 text-sm mb-3 line-clamp-2">
                      {otherRoom.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-600 font-bold">
                        UGX {otherRoom.price.toLocaleString()}
                      </span>
                      <span className="text-stone-500 text-sm">/ night</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">
            Contact us to make a reservation or inquire about availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-xl">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
            <a href="tel:+256768666505">
              <Button size="lg" variant="outline" className="border-stone-600 text-white hover:bg-stone-800 px-8 py-6 text-lg rounded-xl">
                Call: +256 768 666 505
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
