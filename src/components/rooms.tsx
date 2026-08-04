import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { rooms } from "@/lib/rooms-data";

export function Rooms() {
  return (
    <section id="rooms" className="section-shell bg-bpaper">
      <div className="site-container">
        <SectionHeader
          kicker="Rooms & rates"
          title="Relax in comfort"
          description="Thoughtfully prepared rooms for solo travelers, couples, business guests, and friends traveling together."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {rooms.map((room) => (
            <Card key={room.id} className="group hotel-card-hover">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bnavy/70 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-bred px-3 py-1 text-xs font-bold text-white">
                  {room.badge}
                </span>
                {room.isShared && (
                  <span className="absolute right-4 top-4 rounded-full bg-bnavy/85 px-3 py-1 text-xs font-bold text-white">
                    Shared Facilities
                  </span>
                )}
              </div>

              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-bink/60">
                  <Users className="size-4 text-bblue" />
                  <span>
                    {room.guests} {room.guests > 1 ? "Guests" : "Guest"}
                  </span>
                </div>
                <h3 className="text-xl font-black text-bnavy">{room.name}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-bink/70">
                  {room.description}
                </p>

                <div className="mt-5 flex gap-2">
                  {room.amenityIcons.map((Icon, index) => (
                    <div
                      key={index}
                      className="flex size-9 items-center justify-center rounded-full bg-bmist text-bblue"
                    >
                      <Icon className="size-4" />
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <span className="text-2xl font-black text-bred">
                    UGX {room.price.toLocaleString()}
                  </span>
                  <span className="ml-2 text-sm text-bink/55">/ night</span>
                </div>
              </CardContent>

              <CardFooter className="grid grid-cols-2 gap-3 p-6 pt-0">
                <Button asChild>
                  <a
                    href={`https://wa.me/256770404091?text=${encodeURIComponent(
                      `Hello Baraka Hotel.\n\nI would like to book this room:\n\nRoom: ${room.name}\nPrice: UGX ${room.price.toLocaleString()} per night\nGuests: ${room.guests}\n\nPlease let me know the availability. Thank you.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`/rooms/${room.classification}`}>Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/rooms">Explore All Rooms</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
