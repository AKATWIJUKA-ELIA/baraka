"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coffee, UtensilsCrossed, Clock, Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Local & Continental",
    description: "Wide variety of Ugandan dishes and international favorites",
  },
  {
    icon: Coffee,
    title: "Coffee Bar",
    description: "Premium coffee and refreshing beverages",
  },
  {
    icon: Sparkles,
    title: "Fresh Ingredients",
    description: "Quality ingredients for every dish",
  },
  {
    icon: Clock,
    title: "All Day Dining",
    description: "Breakfast, lunch, and dinner served daily",
  },
];

export function Restaurant() {
  return (
    <section id="restaurant" className="py-20 lg:py-28 bg-stone-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/30 mb-4">
                Restaurant & Coffee Bar
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Feast Like a King,{" "}
                <span className="text-amber-500">Spend Small</span>
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed">
                From refreshing drinks to satisfying meals, our restaurant and bar 
                offer the perfect setting to unwind after a long journey. We serve 
                freshly prepared dishes made with quality ingredients.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-stone-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-600/25 transition-all hover:shadow-xl"
              >
                View Menu
              </Button>
              <Button
              onClick={() => window.location.href = '/contact'}
                size="lg"
                variant="outline"
                className="bg-blue-600 border-stone-600 text-white hover:bg-stone-800 px-8 py-6 text-lg rounded-xl"
              >
                Make Reservation
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/baraka/hero2.jpg"
                alt="Restaurant and Coffee Bar at Baraka Hotel"
                width={600}
                height={500}
                className="w-full h-[450px] lg:h-[550px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-amber-400 font-semibold text-lg">Open Daily</p>
                    <p className="text-stone-300 text-sm">Breakfast • Lunch • Dinner</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                    <UtensilsCrossed className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-amber-600/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-600/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
