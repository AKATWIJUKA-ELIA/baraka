"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Quote } from "lucide-react";
import Image from "next/image";

export function BelowHero() {
  return (
    <section id="belowHero" className="relative py-20 lg:py-28 bg-linear-to-b from-stone-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-bblue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 ">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1.5 text-bred border-bred/30 bg-bred/5"
          >
            Welcome to Baraka
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4">
            Bweyale <span className="text-bred">Baraka</span> Hotel
          </h2>
          <p className="text-xl md:text-2xl text-bblue font-medium italic">
            For a memorable experience.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/baraka/hero.jpg"
                alt="Bweyale Baraka Hotel"
                width={600}
                height={450}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating quote card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <Quote className="w-8 h-8 text-amber-500 mb-2" />
                <p className="text-stone-700 font-medium text-lg italic">
                  Rest, refresh, and recharge.
                </p>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-bblue/20 rounded-full blur-xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-bred/20 rounded-2xl -z-10" />
          </div>

          {/* Text content */}
          <div className="space-y-8">
            {/* Introduction paragraph */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                Welcome to <span className="font-semibold text-stone-800">Baraka Hotel</span>, 
                a welcoming haven for travelers and guests seeking comfort, great meals, 
                and a peaceful stay.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Conveniently located for those traveling between Northern Uganda and the capital, 
                we provide clean rooms, refreshing drinks, and delicious meals to make every 
                stop worthwhile.
              </p>
            </div>

            {/* Location info */}
            <div className="flex items-start gap-4 p-5 bg-stone-100 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-bred rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800 mb-1">Our Location</h3>
                <p className="text-stone-600">
                  Along Kampala-Gulu Highway, Bweyale,<br />
                  Kiryandongo District – Uganda
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div className="flex items-start gap-4 p-5 bg-bblue/5 rounded-xl border border-bblue/20">
              <div className="flex-shrink-0 w-12 h-12 bg-bblue rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800 mb-1">Contact Us</h3>
                <p className="text-stone-600">
                  <a href="tel:+256768666505" className="hover:text-bred transition-colors">
                    +256 768 666 505
                  </a>
                  <span className="mx-2">/</span>
                  <a href="tel:+256744628976" className="hover:text-bred transition-colors">
                    +256 744 628 976
                  </a>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-bred hover:bg-bred/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-bred/25 transition-all hover:shadow-xl hover:shadow-bred/30"
                onClick={() =>
                  document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Our Rooms
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
