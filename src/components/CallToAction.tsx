"use client";

import { Button } from "@/components/ui/button";
import { Phone, Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export function CallToAction() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/baraka/hero3.jpg"
          alt="Baraka Hotel"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/80 to-stone-900/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Planning your journey?{" "}
            <span className="text-bblue">Make Baraka Hotel</span> your stop of choice.
          </h2>

          {/* Description */}
          <p className="text-stone-300 text-lg md:text-xl mb-8 leading-relaxed">
            Whether you&apos;re traveling for business or leisure, we&apos;re here to provide 
            comfort, great food, and a peaceful stay. Book your room today and experience 
            our warm Ugandan hospitality.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-3 text-stone-300">
              <div className="w-10 h-10 rounded-full bg-bred/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-bred" />
              </div>
              <span>+256 768 666 505</span>
            </div>
            <div className="flex items-center gap-3 text-stone-300">
              <div className="w-10 h-10 rounded-full bg-bblue/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-bblue" />
              </div>
              <span>Bweyale, Kiryandongo</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-bred hover:bg-bred/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-bred/25 transition-all hover:shadow-xl hover:scale-105 group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Room
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-bred/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-bblue/5 rounded-full blur-2xl" />
    </section>
  );
}
