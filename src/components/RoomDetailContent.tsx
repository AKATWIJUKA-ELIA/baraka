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
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { SerializableRoom } from "@/lib/rooms-data";

const HERO_AUTOPLAY_MS = 6000;
// Entry order: badges → name → description → detail chips → price & buttons.
// Gaps shrink so it starts unhurried and speeds up (same feel as the home hero).
const HERO_STEP_OFFSETS_MS = [200, 650, 1000, 1300, 1550];

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

  // Swipe left/right on phones to change photo.
  const touchStartX = useRef<number | null>(null);
  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 50) (delta < 0 ? nextImage : prevImage)();
  };

  // Auto-advance the hero photos; restarts after every manual change.
  useEffect(() => {
    if (room.images.length < 2) return;
    const timeout = window.setTimeout(
      () => setCurrentImageIndex((prev) => (prev + 1) % room.images.length),
      HERO_AUTOPLAY_MS,
    );
    return () => window.clearTimeout(timeout);
  }, [currentImageIndex, room.images.length]);

  const heroDetails = [
    { icon: Users, label: `${room.guests} ${room.guests > 1 ? "Guests" : "Guest"}` },
    { icon: Bed, label: `${room.beds} ${room.beds > 1 ? "Beds" : "Bed"}` },
    { icon: Bath, label: room.bathrooms > 0 ? "Private Bathroom" : "Shared Bathroom" },
    ...(room.size ? [{ icon: Maximize, label: room.size }] : []),
  ];

  const whatsappHref = `https://wa.me/256768666505?text=${encodeURIComponent(
    `Hello Baraka Hotel!\n\nI would like to book the following room:\n\n🏨 Room: ${room.name}\n💰 Price: UGX ${room.price.toLocaleString()} per night\n👥 Guests: ${room.guests}\n🛏️ Beds: ${room.beds}\n\nPlease let me know the availability. Thank you!`,
  )}`;

  const heroReveal = "animate-in fade-in slide-in-from-bottom-6 duration-900 ease-out fill-mode-both";
  const heroStep = (step: number) => ({ animationDelay: `${HERO_STEP_OFFSETS_MS[step]}ms` });

  return (
    <main className="min-h-screen bg-bpaper">
      {/* Hero: cross-fading room photos with the room's key details on top. */}
      <section className="relative">
        <div
          className="relative h-[82vh] min-h-[600px] overflow-hidden"
          onTouchStart={(event) => (touchStartX.current = event.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          {/* Photos sit side by side in a strip that slides horizontally. */}
          <div className="absolute inset-0" data-parallax="hero">
            <div
              className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {room.images.map((image, index) => (
                <div key={image} className="relative h-full w-full shrink-0">
                  <Image
                    src={image}
                    alt={index === currentImageIndex ? room.name : ""}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="hero-gradient absolute inset-0" />
          <div className="absolute inset-0 bg-linear-to-t from-bnavy/85 via-bnavy/15 to-transparent" />

          {/* Details. Bottom padding keeps them clear of the thumbnails. */}
          <div
            data-hero-fade
            className="site-container absolute inset-x-0 bottom-0 z-10 pb-24 text-white md:pb-28"
          >
            <div className="min-w-0 max-w-3xl">
              <div className={cn(heroReveal, "flex flex-wrap items-center gap-3")} style={heroStep(0)}>
                <span className="text-sm font-bold uppercase tracking-wide text-bblue">Room</span>
                <Badge className="border-none bg-bred px-3 py-1 text-xs text-white">{room.badge}</Badge>
                {room.isShared && (
                  <Badge className="border-none bg-bblue px-3 py-1 text-xs text-bnavy">
                    Shared Facilities
                  </Badge>
                )}
              </div>

              <h1
                className={cn(heroReveal, "mt-4 text-4xl font-black leading-[0.95] break-words hyphens-auto sm:text-5xl lg:text-7xl")}
                style={heroStep(1)}
              >
                {room.name}
              </h1>

              <div className={heroReveal} style={heroStep(2)}>
                <div className="mt-5 h-1 w-20 rounded-full bg-bred" />
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                  {room.description}
                </p>
              </div>

              <div className={cn(heroReveal, "mt-6 flex flex-wrap gap-2.5")} style={heroStep(3)}>
                {heroDetails.map((detail) => (
                  <span
                    key={detail.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur"
                  >
                    <detail.icon className="size-4 text-bblue" />
                    {detail.label}
                  </span>
                ))}
              </div>

              <div
                className={cn(heroReveal, "mt-8 flex flex-wrap items-center gap-x-6 gap-y-4")}
                style={heroStep(4)}
              >
                <p>
                  <span className="text-3xl font-black md:text-4xl">
                    UGX {room.price.toLocaleString()}
                  </span>
                  <span className="ml-2 text-white/70">/ night</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="size-4" />
                      Book This Room
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-bnavy"
                    asChild
                  >
                    <a href="tel:+256768666505">
                      <Phone className="size-4" />
                      Call
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Arrows only on wide screens, where they can't overlap the text. */}
          {room.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous photo"
                className="absolute left-5 top-1/2 z-20 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-bnavy xl:flex"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next photo"
                className="absolute right-5 top-1/2 z-20 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-bnavy xl:flex"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Gallery */}
        {room.images.length > 1 && (
          <div className="site-container -mt-16 relative z-10">
            <div className="flex gap-4 justify-center">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Show photo ${index + 1}`}
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
            <div className="lg:col-span-2 space-y-8" data-animate="stagger">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-animate="stagger">
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
            <div className="lg:col-span-1" data-animate="fade-left">
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
          <div className="grid md:grid-cols-3 gap-6" data-animate="stagger">
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
        <div className="site-container text-center" data-animate="fade-up">
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
      <ScrollAnimations />
    </main>
  );
}
