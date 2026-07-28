import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BelowHero() {
  return (
    <section id="belowHero" className="section-shell bg-bpaper">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="image-frame">
            <Image
              src="/baraka/hero.jpg"
              alt="Baraka Hotel exterior"
              width={900}
              height={700}
              className="h-[420px] w-full object-cover md:h-[560px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-bnavy/85 to-transparent p-6 text-white">
              <Quote className="mb-3 size-8 text-bblue" />
              <p className="text-2xl font-black">Rest, refresh, and recharge.</p>
            </div>
          </div>

          <div>
            <p className="section-kicker">About the stay</p>
            <h2 className="display-heading">
              Bweyale Baraka <span className="text-bblue">Hotel</span>
            </h2>
            <div className="mt-6 h-1 w-20 rounded-full bg-bred" />
            <div className="mt-8 space-y-5">
              <p className="section-copy">
                Welcome to Baraka Hotel, a calm and comfortable haven for travelers seeking
                clean rooms, great meals, secure parking, and a peaceful stay.
              </p>
              <p className="section-copy">
                Conveniently located along the Kampala-Gulu Highway, we make every stop feel
                considered, from a quick meal to a longer business or family visit.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="hotel-card p-5">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-bblue text-bnavy">
                  <MapPin className="size-5" />
                </div>
                <h3 className="text-lg font-black text-bnavy">Our Location</h3>
                <p className="mt-2 text-sm leading-6 text-bink/70">
                  Along Kampala-Gulu Highway, Bweyale, Kiryandongo District, Uganda.
                </p>
              </div>
              <div className="hotel-card p-5">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-bred text-white">
                  <Phone className="size-5" />
                </div>
                <h3 className="text-lg font-black text-bnavy">Direct Booking</h3>
                <p className="mt-2 text-sm leading-6 text-bink/70">
                  Call +256 768 666 505 or +256 744 628 976 for room availability.
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/rooms">Explore Rooms</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
