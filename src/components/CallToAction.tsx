import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden py-24 text-white lg:py-32">
      <Image src="/baraka/hero3.jpg" alt="Baraka Hotel exterior" fill className="object-cover" sizes="100vw" />
      <div className="hero-gradient absolute inset-0" />

      <div className="site-container relative z-10">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase text-bblue">Book direct</p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Planning your journey? Make Baraka Hotel your stop of choice.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/80 md:text-xl">
            Whether traveling for business or leisure, we are here with comfortable rooms,
            fresh meals, secure parking, and warm Ugandan hospitality.
          </p>

          <div className="mt-8 flex flex-wrap gap-5 text-white/80">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-bred text-white">
                <Phone className="size-5" />
              </span>
              <span>+256 768 666 505</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-bblue text-bnavy">
                <MapPin className="size-5" />
              </span>
              <span>Bweyale, Kiryandongo</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a
                href={`https://wa.me/256768666505?text=${encodeURIComponent(
                  "Hello Baraka Hotel. I would like to book a room. Please let me know the availability. Thank you.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-bnavy"
              asChild
            >
              <Link href="/contact">
                <Phone className="size-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
