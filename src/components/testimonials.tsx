"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Grace Nakato",
    role: "Business Traveler",
    avatar: "",
    rating: 5,
    comment:
      "I stayed in the Deluxe Executive Room and it was amazing: spacious with large workspace. The rooftop was beautiful for evening relaxation, and having DSTV in the room made winding down so easy. Highly recommend!",
  },
  {
    id: 2,
    name: "Patrick Ochen",
    role: "Solo Traveler",
    avatar: "",
    rating: 5,
    comment:
      "Great location, very convenient for travelers. I loved the standard room. It was simple, comfortable, budget-friendly, and with a very clean bathroom.",
  },
  {
    id: 3,
    name: "Maria Atim",
    role: "Frequent Guest",
    avatar: "",
    rating: 5,
    comment:
      "The hotel has everything you need: comfortable rooms, a well-lit conference room, and safe parking. I also appreciated the laundry service and the restaurant's tasty meals. Definitely my go-to place when traveling north.",
  },
  {
    id: 4,
    name: "John Okello",
    role: "Transit Guest",
    avatar: "",
    rating: 5,
    comment:
      "The hotel is in a quiet area, which made sleeping easy. Staff were very friendly and made small gestures, like offering directions and helping with luggage, which made a big difference.",
  },
  {
    id: 5,
    name: "Sarah Achieng",
    role: "Workshop Organizer",
    avatar: "",
    rating: 5,
    comment:
      "I organized a small workshop at Baraka Hotel, and the experience was flawless. The conference room was perfect for our group of 45—air-conditioned, spacious, and well-lit. Staff handled the setup efficiently and ensured refreshments were ready on time.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-700 border-none mb-4">
            Guest Reviews
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Hear from our valued guests about
            their unforgettable experiences at Baraka Hotel.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-amber-200 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  &quot;{testimonial.comment}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-600">4.9/5</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-600">10,000+</p>
            <p className="text-gray-600">Happy Guests</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-600">98%</p>
            <p className="text-gray-600">Would Recommend</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-600">50+</p>
            <p className="text-gray-600">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
}
