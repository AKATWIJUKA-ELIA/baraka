"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Traveler",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "Absolutely stunning hotel! The attention to detail is remarkable. From the moment I arrived, the staff made me feel like royalty. The room was immaculate and the view was breathtaking.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Honeymoon Guest",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "We chose Baraka Hotel for our honeymoon and it exceeded all expectations. The romantic dinner they arranged was unforgettable. We'll definitely be coming back for our anniversary!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Family Vacation",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "Traveling with kids can be challenging, but Baraka Hotel made it so easy. The kids club was amazing and gave us some much-needed relaxation time. The pool was a hit with the whole family!",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Corporate Event",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "We hosted our annual conference at Baraka Hotel and it was flawless. The event spaces are world-class and the catering was exceptional. Our clients were thoroughly impressed.",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Spa Weekend",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "The spa at Baraka Hotel is a slice of heaven. I left feeling completely rejuvenated. The therapists are skilled and the facilities are top-notch. Already planning my next visit!",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Luxury Traveler",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "I've stayed at many luxury hotels around the world, and Baraka Hotel stands among the best. The service is impeccable, the dining is superb, and the amenities are unmatched.",
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
