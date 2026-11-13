"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  Shield,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroSlides = [
  {
    image: "/baraka/hero.jpg",
    word: "Baraka",
    title: "Bweyale Baraka Hotel",
    highlight: "Stay beautifully on the journey",
    description:
      "Clean rooms, fresh meals, secure parking, and a calm stop along the Kampala-Gulu Highway.",
  },
  {
    image: "/baraka/hero2.jpg",
    word: "Hotel",
    title: "Rest, refresh, recharge",
    highlight: "For a memorable experience",
    description:
      "A welcoming hotel for transit guests, business travelers, families, and event hosts.",
  },
  {
    image: "/baraka/hero3.jpg",
    word: "Bweyale",
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

// Slide-change effects, used in this order and then repeated.
// The keyframes live in globals.css (search "hero-fx").
const effects = ["blur", "blinds", "crossfade"] as const;
type Effect = (typeof effects)[number];

// When each effect has (nearly) finished, so the text waits for the picture.
const effectDurationMs: Record<Effect, number> = {
  blur: 1300,
  blinds: 1400,
  crossfade: 1100,
};
// First load: the photo zooms out (.hero-zoom, 2.4s, fast at first), and the text
// starts once that has mostly settled.
const FIRST_LOAD_DELAY_MS = 1200;
// When each piece of text starts, counted from the end of the picture transition:
// headline, tagline, description, buttons. The gaps shrink (0.6s → 0.4s → 0.3s)
// so the sequence starts unhurried and speeds up towards the buttons.
const TEXT_STEP_OFFSETS_MS = [0, 600, 1000, 1300];
// The big bottom-left word comes last: this long after the buttons start.
const BIG_WORD_AFTER_BUTTONS_MS = 350;

// How long each slide stays fully shown (everything visible) before the next one.
const HOLD_MS = 6500;
// Time for a slide to finish appearing: longest picture effect, then the text
// steps, then the big word (which rises in over 0.9s, like the other text).
const SEQUENCE_MS =
  Math.max(...Object.values(effectDurationMs)) +
  TEXT_STEP_OFFSETS_MS[3] +
  BIG_WORD_AFTER_BUTTONS_MS +
  900;
const AUTOPLAY_MS = SEQUENCE_MS + HOLD_MS; // ≈ 10.5s per slide
const TRANSITION_MS = 1700; // longest effect (blinds incl. stagger), keep in sync with globals.css
const BLIND_COUNT = 8;

export function Hero() {
  const [current, setCurrent] = React.useState(0);
  const [previous, setPrevious] = React.useState<number | null>(null);
  const [effect, setEffect] = React.useState<Effect | null>(null);
  const changeCount = React.useRef(0);
  const touchStartX = React.useRef<number | null>(null);

  const goTo = React.useCallback(
    (next: number) => {
      const target = (next + heroSlides.length) % heroSlides.length;
      if (target === current) return;
      setPrevious(current);
      setEffect(effects[changeCount.current % effects.length]);
      changeCount.current += 1;
      setCurrent(target);
    },
    [current],
  );

  // Once the effect has finished, drop the outgoing slide.
  React.useEffect(() => {
    if (previous === null) return;
    const timeout = window.setTimeout(() => setPrevious(null), TRANSITION_MS);
    return () => window.clearTimeout(timeout);
  }, [previous, current]);

  // Autoplay. Restarts whenever the slide changes, so manual navigation
  // always gets a full 9 seconds before the next automatic change.
  React.useEffect(() => {
    const timeout = window.setTimeout(() => goTo(current + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(timeout);
  }, [current, goTo]);

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 50) goTo(delta < 0 ? current + 1 : current - 1);
  };

  const scrollToIntro = () => {
    document.getElementById("belowHero")?.scrollIntoView({ behavior: "smooth" });
  };

  const slide = heroSlides[current] ?? heroSlides[0];

  // Text for a new slide starts once its picture transition is done.
  // (`effect` is null only on first load, before any slide change.)
  const textStart = effect ? effectDurationMs[effect] : FIRST_LOAD_DELAY_MS;
  const textReveal =
    "block animate-in fade-in slide-in-from-bottom-6 duration-900 ease-out fill-mode-both";
  const textStep = (step: number): React.CSSProperties => ({
    animationDelay: `${textStart + TEXT_STEP_OFFSETS_MS[step]}ms`,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-bnavy text-white"
      onTouchStart={(event) => (touchStartX.current = event.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides are stacked. The incoming slide sits on top and plays the
          current effect; the outgoing one stays visible underneath until the
          effect finishes. */}
      {/* hero-zoom: on first load / refresh the photos settle from a slight zoom,
          same as the inner-page heroes (runs once; slide changes don't repeat it). */}
      <div className="hero-zoom absolute inset-0 isolate" aria-roledescription="carousel">
        {heroSlides.map((item, index) => {
          const isCurrent = index === current;
          const isPrevious = index === previous;
          const entering = isCurrent && previous !== null ? effect : null;

          return (
            <div
              key={item.title}
              aria-hidden={!isCurrent}
              className={cn(
                "absolute inset-0 overflow-hidden",
                isCurrent ? "z-20" : isPrevious ? "z-10" : "invisible z-0",
                entering === "crossfade" && "hero-fx-crossfade",
                entering === "blur" && "hero-fx-blur",
                isPrevious && effect === "blur" && "hero-fx-blur-out",
              )}
            >
              {/* Slow zoom on the visible slide. Kept on this wrapper so the
                  blinds strips zoom together as one picture. */}
              <div
                className={cn(
                  "absolute inset-0 transition-transform ease-out motion-reduce:transition-none",
                  isCurrent || isPrevious ? "scale-110 duration-[11000ms]" : "scale-100 duration-0",
                )}
              >
                {entering === "blinds" ? (
                  Array.from({ length: BLIND_COUNT }).map((_, strip) => (
                    <div
                      key={strip}
                      className="hero-fx-blind absolute inset-x-0 overflow-hidden"
                      style={{
                        top: `${(strip * 100) / BLIND_COUNT}%`,
                        height: `${100 / BLIND_COUNT}%`,
                        animationDelay: `${strip * 90}ms`,
                      }}
                    >
                      {/* Full-size picture shifted so each strip shows its own band. */}
                      <div
                        className="absolute inset-x-0"
                        style={{ top: `${-strip * 100}%`, height: `${BLIND_COUNT * 100}%` }}
                      >
                        <Image src={item.image} alt="" fill sizes="100vw" className="object-cover" />
                      </div>
                    </div>
                  ))
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-30 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-bnavy md:inline-flex"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-30 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-bnavy md:inline-flex"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="hero-gradient absolute inset-0" />
      {/* Big word, bottom-left, behind the hero content: one word per slide
          (Baraka → Hotel → Bweyale). It is the last thing to appear, after the
          headline, tagline, description and buttons, using the same rise-and-fade
          as that text. Outer div fades on scroll, inner div animates in (kept on
          separate elements on purpose).
          It sits in the same .site-container as the text block so both share
          one left edge; -ml-[0.05em] cancels the letters' built-in side space. */}
      <div
        data-hero-fade
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-6 z-10 select-none md:bottom-10"
      >
        <div className="site-container">
          <div
            key={current}
            style={{
              animationDelay: `${textStart + TEXT_STEP_OFFSETS_MS[3] + BIG_WORD_AFTER_BUTTONS_MS}ms`,
            }}
            className={cn(textReveal, "-ml-[0.05em] whitespace-nowrap text-[12.5vw] font-black uppercase leading-none tracking-tighter text-white/40")}
          >
            {slide.word}
          </div>
        </div>
      </div>

      {/* Bottom padding = the big word's height (12.5vw) + its offset, so the
          text block always sits just above the big word at any screen width. */}
      <div
        data-hero-fade
        className="site-container relative z-20 flex min-h-screen flex-col justify-end pb-[calc(12.5vw+1.5rem)] pt-28 md:pb-[calc(12.5vw+2.5rem)]"
      >
        <div
          key={current}
          className="max-w-5xl pb-6 md:pb-8"
        >
          {/* <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase text-bblue">
            <MapPin className="size-4" />
            Bweyale, Kiryandongo District
          </p> */}
          {/* Text waits for the picture's transition, then enters in steps:
              headline → tagline → description → buttons. */}
          <h1 className="text-[clamp(2.25rem,10vw,3.4rem)] font-black leading-[0.92] text-white break-words hyphens-auto sm:text-7xl lg:text-[5.25rem]">
            <span className={textReveal} style={textStep(0)}>
              {slide.title}
            </span>
            <span className={cn(textReveal, "text-bblue lg:text-5xl")} style={textStep(1)}>
              {slide.highlight}
            </span>
          </h1>
          <div className={textReveal} style={textStep(2)}>
            <div className="mt-6 h-1 w-20 rounded-full bg-bred" />
            <p className="mt-7 max-w-3xl text-xl leading-8 text-white/85 md:text-2xl md:leading-9">
              {slide.description}
            </p>
          </div>
          <div className={cn(textReveal, "mt-9 flex flex-wrap gap-3")} style={textStep(3)}>
            <Button size="lg" className="h-12 px-7 text-base" asChild>
              <a href="tel:+256768666505">
                <Phone className="size-4" />
                Book Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-white/30 bg-white/10 px-7 text-base text-white hover:bg-white hover:text-bnavy"
              asChild
            >
              <Link href="/rooms">Explore Rooms</Link>
            </Button>
          </div>
        </div>

        {/* <div className="grid gap-3 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              style={{ animationDelay: `${400 + index * 150}ms` }}
              className="rounded-[1.5rem] border border-white/[0.14] bg-white/[0.09] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.13] animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-bblue text-bnavy">
                <item.icon className="size-5" />
              </div>
              <h2 className="text-lg font-black">{item.title}</h2>
              <p className="mt-1 text-sm leading-6 text-white/70">{item.text}</p>
            </div>
          ))}
        </div> */}
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
