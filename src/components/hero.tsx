"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, MapPin, Star, ChevronDown } from "lucide-react";

const heroSlides = [
  {
    image: "/images/hero.jpg",
    title: "Experience",
    highlight: "Unparalleled Luxury",
    description:
      "Welcome to Baraka Hotel, where every moment is crafted to perfection. Discover a sanctuary of elegance, comfort, and world-class hospitality.",
  },
  {
    image: "/images/hero2.jpg",
    title: "Discover",
    highlight: "Timeless Elegance",
    description:
      "Immerse yourself in the refined atmosphere of our meticulously designed spaces, where modern comfort meets classic sophistication.",
  },
  {
    image: "/images/hero3.jpg",
    title: "Indulge in",
    highlight: "World-Class Amenities",
    description:
      "From our infinity pool to our award-winning spa, experience amenities that redefine luxury and create unforgettable memories.",
  },
];

export function Hero() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api]);

  const scrollToRooms = () => {
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="absolute inset-0 w-full h-full"
      >
        <CarouselContent className="h-screen ml-0">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full pl-0 relative">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 top-2 bg-linear-to-b from-black/60 via-black/40 to-black/70" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-8 h-12 w-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white" />
        <CarouselNext className="right-4 md:right-8 h-12 w-12 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white" />
      </Carousel>



      {/* Floating Elements */}
      <div className="absolute top-40 left-10 hidden lg:block z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white animate-pulse">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            <span className="font-semibold">4.9 Rating</span>
          </div>
          <p className="text-sm text-white/70">500+ Reviews</p>
        </div>
      </div>

      <div className="absolute bottom-40 right-10 hidden lg:block z-20">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-amber-400" />
            <span className="font-semibold">Prime Location</span>
          </div>
          <p className="text-sm text-white/70">Downtown Paradise</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge className="bg-amber-600/90 text-white border-none mb-6 px-4 py-1.5">
          ✨ Luxury Redefined
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {heroSlides[current]?.title || "Experience"}
          <span className="block text-transparent bg-clip-text bg-linear-to-b from-amber-400 to-amber-600">
            {heroSlides[current]?.highlight || "Unparalleled Luxury"}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          {heroSlides[current]?.description ||
            "Welcome to Baraka Hotel, where every moment is crafted to perfection."}
        </p>

        {/* Search/Booking Form */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 text-left">
              <label className="text-sm text-gray-500 font-medium">
                Check In
              </label>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="h-5 w-5 text-amber-600" />
                <span className="font-semibold text-gray-800">
                  Dec 15, 2025
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 text-left">
              <label className="text-sm text-gray-500 font-medium">
                Check Out
              </label>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="h-5 w-5 text-amber-600" />
                <span className="font-semibold text-gray-800">
                  Dec 20, 2025
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 text-left">
              <label className="text-sm text-gray-500 font-medium">Guests</label>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-semibold text-gray-800">2 Adults</span>
              </div>
            </div>
            <Button className="h-full bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold rounded-xl">
              Check Availability
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">150+</p>
            <p className="text-white/70">Luxury Rooms</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">4.9</p>
            <p className="text-white/70">Guest Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
            <p className="text-white/70">Awards Won</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">10K+</p>
            <p className="text-white/70">Happy Guests</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToRooms}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
