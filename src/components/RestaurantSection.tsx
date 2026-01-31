"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Coffee, Clock, ChefHat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function RestaurantSection() {
  return (
    <section className="py-20 bg-stone-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 mb-4">
                Restaurant & Coffee Bar
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Feast Like a King, <span className="text-amber-400">Spend Small</span>
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed">
                From refreshing drinks to satisfying meals, our restaurant and bar offer the 
                perfect setting to unwind after a long journey. We serve freshly prepared 
                dishes made with quality ingredients.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <ChefHat className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Fresh Cuisine</h3>
                  <p className="text-sm text-stone-400">Local & continental dishes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Coffee Bar</h3>
                  <p className="text-sm text-stone-400">Premium beverages</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <UtensilsCrossed className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quality Food</h3>
                  <p className="text-sm text-stone-400">Made with fresh ingredients</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Open Daily</h3>
                  <p className="text-sm text-stone-400">Breakfast to dinner</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link href="/restaurant">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-8"
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/baraka/hero2.jpg"
                alt="Baraka Hotel Restaurant"
                width={600}
                height={500}
                className="w-full h-[450px] lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-stone-900 p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
                  <UtensilsCrossed className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-600">Fresh Daily</p>
                  <p className="text-sm text-stone-600">Quality Ingredients</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-amber-500/30 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
