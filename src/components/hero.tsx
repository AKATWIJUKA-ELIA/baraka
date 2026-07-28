"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bed, ChevronDown, Phone, Shield, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    image: "/baraka/hero.jpg",
    title: "Bweyale Baraka Hotel",
    highlight: "Stay beautifully on the journey",
    description:
      "Clean rooms, fresh meals, secure parking, and a calm stop along the Kampala-Gulu Highway.",
  },
  {
    image: "/baraka/hero2.jpg",
    title: "Rest, refresh, recharge",
    highlight: "For a memorable experience",
    description:
      "A welcoming hotel for transit guests, business travelers, families, and event hosts.",
  },
  {
    image: "/baraka/hero3.jpg",
    title: "Warm Ugandan hospitality",
    highlight: "With modern comfort",
    description:
      "From conference space to rooftop moments, every detail is prepared for an easy stay.",
  },
];

const highlights = [
  { icon: Bed, title: "Rooms", text: "Clean, restful spaces from UGX 40,000." },
  { icon: UtensilsCrossed, title: "Dining", text: "Fresh local and continental meals daily." },
  { icon: Shield, title: "Secure", text: "24/7 reception, parking, and security." },
];

export function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    handleSelect();
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const interval = window.setInterval(() => api.scrollNext(), 9000);
    return () => window.clearInterval(interval);
  }, [api]);

  const scrollToIntro = () => {
    document.getElementById("belowHero")?.scrollIntoView({ behavior: "smooth" });
  };

  const slide = heroSlides[current] ?? heroSlides[0];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-bnavy text-white">
      <Carousel setApi={setApi} opts={{ loop: true }} className="absolute inset-0">
        <CarouselContent className="ml-0 h-screen">
          {heroSlides.map((item) => (
            <CarouselItem key={item.title} className="relative h-full pl-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={item.image === "/baraka/hero.jpg"}
                sizes="100vw"
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-5 hidden z-20 border-white/20 bg-white/10 text-white hover:bg-white hover:text-bnavy md:inline-flex" />
        <CarouselNext className="right-5 hidden z-20 border-white/20 bg-white/10 text-white hover:bg-white hover:text-bnavy md:inline-flex" />
      </Carousel>

      <div className="hero-gradient absolute inset-0" />
      <div className="pointer-events-none lg:absolute hidden z-10 select-none text-[5rem] font-black leading-none text-white/5 sm:text-[8rem] lg:left-10 lg:top-[5.5rem] lg:text-[14rem]">
        BARAKA HOTEL
      </div>

      <div className="site-container relative z-20 flex min-h-screen flex-col justify-end pb-8 pt-28 md:pb-10">
        <div className="max-w-4xl pb-8 md:pb-12">
          {/* <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase text-bblue">
            <MapPin className="size-4" />
            Bweyale, Kiryandongo District
          </p> */}
          <h1 className="text-5xl font-black leading-[0.92] text-white sm:text-6xl lg:text-7xl">
            {slide.title}
            <span className="block text-bblue lg:text-4xl">{slide.highlight}</span>
          </h1>
          <div className="mt-6 h-1 w-20 rounded-full bg-bred" />
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
            {slide.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="tel:+256768666505">
                <Phone className="size-4" />
                Book Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-bnavy"
              asChild
            >
              <Link href="/rooms">Explore Rooms</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-white/[0.14] bg-white/[0.09] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.13]"
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-bblue text-bnavy">
                <item.icon className="size-5" />
              </div>
              <h2 className="text-lg font-black">{item.title}</h2>
              <p className="mt-1 text-sm leading-6 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToIntro}
        className="absolute bottom-5 left-1/2 z-30 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-bnavy focus-visible:ring-offset-bnavy"
        aria-label="Scroll to hotel introduction"
      >
        <ChevronDown className="size-6" />
      </button>
    </section>
  );
}
