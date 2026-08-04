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
    <main className="min-h-screen bg-bpaper">
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
          <div className="hero-gradient absolute inset-0" />

          {/* Title */}
          <div className="site-container absolute inset-x-0 top-0 z-10 pt-28 md:pt-32">
            <p className="mb-3 text-sm font-bold uppercase text-bblue">Room</p>
            <div className="flex flex-wrap items-end gap-3">
              <h1 className="text-3xl font-black leading-[0.95] text-white sm:text-4xl lg:text-5xl">
                {room.name}
              </h1>
              <Badge className="bg-bred text-white border-none text-sm px-4 py-1">
                {room.badge}
              </Badge>
              {room.isShared && (
                <Badge className="bg-bblue text-white border-none text-sm px-4 py-1">
                  Shared Facilities
                </Badge>
              )}
            </div>
            <div className="mt-4 h-1 w-16 rounded-full bg-bred" />
          </div>

          {/* Image Navigation */}
          {room.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-bnavy" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-bnavy" />
              </button>
            </>
          )}

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
          <div className="site-container -mt-16 relative z-10">
            <div className="flex gap-4 justify-center">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-24 h-16 md:w-32 md:h-20 rounded-xl overflow-hidden shadow-md transition-all ${
                    index === currentImageIndex ? 'ring-4 ring-bred scale-105' : 'opacity-70 hover:opacity-100'
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
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Back Button */}
              <div className="mb-4">
                <Link href="/rooms">
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Rooms
                  </Button>
                </Link>
              </div>

              {/* Quick Info */}
              <div>
                <div className="flex flex-wrap gap-6 text-bink/70">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-bred" />
                    <span>{room.guests} {room.guests > 1 ? 'Guests' : 'Guest'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-bblue" />
                    <span>{room.beds} {room.beds > 1 ? 'Beds' : 'Bed'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-bred" />
                    <span>{room.bathrooms > 0 ? `${room.bathrooms} Bathroom` : 'Shared Bathroom'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-bblue" />
                    <span>{room.size}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-bnavy mb-4">About This Room</h2>
                  <p className="text-bink/75 leading-relaxed text-lg">
                    {room.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-bnavy mb-6">Amenities & Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-bpaper">
                        <div className="w-8 h-8 rounded-full bg-bblue/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-bblue" />
                        </div>
                        <span className="text-bink/80">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="text-center mb-6">
                      <span className="text-4xl font-bold text-bred">
                        UGX {room.price.toLocaleString()}
                      </span>
                      <span className="text-bink/55 ml-2">/ night</span>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="p-4 rounded-lg bg-bblue/5 border border-bblue/20">
                        <p className="text-sm text-bblue text-center">
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
                        <Button className="w-full py-6 text-lg rounded-xl">
                          Book This Room
                        </Button>
                      </a>
                      <a href="tel:+256768666505" className="block">
                        <Button variant="outline" className="w-full py-6 text-lg rounded-xl">
                          <Phone className="w-5 h-5 mr-2" />
                          Call to Book
                        </Button>
                      </a>
                    </div>

                    <p className="text-center text-bink/55 text-sm mt-4">
                      No prepayment needed
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="mt-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-bnavy mb-3">Need Help?</h3>
                    <p className="text-bink/70 text-sm mb-4">
                      Our team is available 24/7 to assist you with your booking.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="text-bink/70">
                        <strong>Phone:</strong> +256 768 666 505
                      </p>
                      <p className="text-bink/70">
                        <strong>WhatsApp:</strong>{" "}
                        <a
                          href="https://wa.me/256770404091"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-bblue hover:underline"
                        >
                          +256 770 404091
                        </a>
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
        <div className="site-container">
          <h2 className="text-2xl md:text-3xl font-black text-bnavy mb-8 text-center">
            Explore Other Rooms
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherRooms.map((otherRoom) => (
              <Link key={otherRoom.id} href={`/rooms/${otherRoom.classification}`}>
                <Card className="hotel-card-hover cursor-pointer h-full">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={otherRoom.image}
                      alt={otherRoom.name}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-bblue text-white border-none text-xs">
                      {otherRoom.badge}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-bnavy mb-2">{otherRoom.name}</h3>
                    <p className="text-bink/70 text-sm mb-3 line-clamp-2">
                      {otherRoom.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-bred font-bold">
                        UGX {otherRoom.price.toLocaleString()}
                      </span>
                      <span className="text-bink/55 text-sm">/ night</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bnavy">
        <div className="site-container text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Contact us to make a reservation or inquire about availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="px-8 py-6 text-lg rounded-xl">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
            <a href="tel:+256768666505">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg rounded-xl"
              >
                Call: +256 768 666 505
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
