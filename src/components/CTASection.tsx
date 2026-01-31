"use client";

import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/baraka/hero3.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/85 to-stone-900/75" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Planning your journey?
          </h2>
          <p className="text-xl md:text-2xl text-amber-400 font-medium mb-4">
            Make Baraka Hotel your stop of choice.
          </p>
          <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re traveling for business or leisure, we&apos;re here to provide 
            you with comfort, great meals, and a peaceful stay.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:shadow-amber-500/30"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Room
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-stone-900 px-8 py-6 text-lg rounded-xl transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-stone-400 mb-2">Call us directly:</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <a
                href="tel:+256768666505"
                className="text-white hover:text-amber-400 transition-colors font-medium"
              >
                +256 768 666 505
              </a>
              <span className="text-stone-500">/</span>
              <a
                href="tel:+256744628976"
                className="text-white hover:text-amber-400 transition-colors font-medium"
              >
                +256 744 628 976
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
    </section>
  );
}
