import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { rooms } from "@/lib/rooms-data";

export const metadata: Metadata = {
  title: "Rooms & Accommodation",
  description:
    "Browse Baraka Hotel rooms - Standard, Standard Plus, Deluxe Executive, and Twin Economy rooms. Affordable accommodation in Kiryandongo, Uganda starting from UGX 40,000 per night.",
  openGraph: {
    title: "Rooms & Accommodation | Baraka Hotel",
    description:
      "Browse our rooms - Standard, Standard Plus, Deluxe Executive, and Twin Economy. Affordable accommodation starting from UGX 40,000/night.",
    images: ["/baraka/room2.jpg"],
  },
  twitter: {
    title: "Rooms & Accommodation | Baraka Hotel",
    description: "Affordable, comfortable rooms in Kiryandongo, Uganda starting from UGX 40,000 per night.",
    images: ["/baraka/room2.jpg"],
  },
  alternates: {
    canonical: "/rooms",
  },
};

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-bpaper">
      <PageHero
        kicker="Rooms & accommodation"
        title="Comfortable"
        accent="Accommodation"
        description="Clean, practical, and carefully prepared rooms for stopovers, business travel, and longer stays in Bweyale."
        image="/baraka/room2.jpg"
        primaryAction={{ href: "/contact", label: "Book Direct" }}
        secondaryAction={{ href: "/gallery", label: "View Gallery" }}
      />

      <section className="section-shell">
        <div className="site-container">
          <SectionHeader
            kicker="Choose your room"
            title="A room for every kind of stay"
            description="Every option includes attentive service, clean bedding, daily housekeeping, and easy access to dining and hotel facilities."
            className="mb-12"
          />

          <div className="space-y-10">
            {rooms.map((room, index) => (
              <Card key={room.id} className="hotel-card-hover">
                <div className="grid overflow-hidden lg:grid-cols-2">
                  <div className={`relative min-h-[320px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image src={room.image} alt={room.name} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                    <div className="absolute inset-0 bg-linear-to-t from-bnavy/70 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-bred px-4 py-1.5 text-sm font-bold text-white">
                      {room.badge}
                    </span>
                    {room.isShared && (
                      <span className="absolute right-5 top-5 rounded-full bg-bnavy/85 px-4 py-1.5 text-sm font-bold text-white">
                        Shared Facilities
                      </span>
                    )}
                  </div>

                  <CardContent className={`flex flex-col justify-center p-7 md:p-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="mb-4 flex items-center gap-2 text-sm font-bold text-bink/60">
                      <Users className="size-4 text-bblue" />
                      <span>
                        {room.guests} {room.guests > 1 ? "Guests" : "Guest"}
                      </span>
                    </div>

                    <h2 className="text-3xl font-black text-bnavy md:text-4xl">{room.name}</h2>
                    <p className="section-copy mt-4">{room.description}</p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {room.amenities.slice(0, 8).map((amenity) => (
                        <div key={amenity} className="flex items-center gap-3 text-sm font-semibold text-bink/75">
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-bmist text-bblue">
                            <Check className="size-4" />
                          </span>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-bline pt-6">
                      <div>
                        <span className="text-3xl font-black text-bred">UGX {room.price.toLocaleString()}</span>
                        <span className="ml-2 text-sm text-bink/55">/ night</span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button asChild>
                          <a
                            href={`https://wa.me/256770404091?text=${encodeURIComponent(
                              `Hello Baraka Hotel.\n\nI would like to book this room:\n\nRoom: ${room.name}\nPrice: UGX ${room.price.toLocaleString()} per night\nGuests: ${room.guests}\n\nPlease let me know the availability. Thank you.`,
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Book Now
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={`/rooms/${room.classification}`}>Details</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bnavy py-16 text-white">
        <div className="site-container text-center">
          <h2 className="text-3xl font-black md:text-5xl">Ready to book your stay?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/75">
            Contact us directly for the best available room and current availability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/contact">
                <Phone className="size-4" />
                Contact Us
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-bnavy"
              asChild
            >
              <a href="tel:+256768666505">Call: +256 768 666 505</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
