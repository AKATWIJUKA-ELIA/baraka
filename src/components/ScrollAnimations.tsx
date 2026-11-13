"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Drives scroll animations declared with data attributes, so section
 * components can stay server components. Render it once inside each page
 * (it must mount together with that page's content).
 *
 *   data-animate="fade-up" | "fade-left" | "fade-right"  – element slides/fades in
 *   data-animate="stagger"  – each direct child fades up in turn
 *   data-animate="reveal"   – image frame unmasks while its <img> zooms out
 *   data-parallax           – element drifts vertically while scrolling
 *   data-parallax="hero"    – stronger drift for a page's top hero background
 *   data-hero-fade          – element lifts and fades out as the hero scrolls away
 *
 * Every animation runs in both directions: things animate in as they enter the
 * viewport and animate back out as they leave, whichever way you scroll.
 * Users with "reduce motion" enabled get no animations at all.
 */

// Where an element counts as "on screen" (relative to the viewport).
const START = "top 96%";
const END = "bottom 4%";

// Tailwind `transition-*` classes would smooth every GSAP frame and make the
// motion feel laggy, so transitions are switched off while a tween runs and
// handed back afterwards (hover effects keep working).
const freeze = (targets: gsap.TweenTarget) => {
  gsap.set(targets, { transition: "none" });
};
const release = (targets: gsap.TweenTarget) => {
  gsap.set(targets, { clearProps: "transition" });
};

const offsets: Record<string, { x?: number; y?: number }> = {
  "fade-up": { y: 60 },
  "fade-left": { x: 80 },
  "fade-right": { x: -80 },
};

export function ScrollAnimations() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // --- Single elements -------------------------------------------------
      Object.entries(offsets).forEach(([name, offset]) => {
        gsap.utils.toArray<HTMLElement>(`[data-animate="${name}"]`).forEach((el) => {
          freeze(el);
          const tween = gsap.fromTo(
            el,
            { opacity: 0, ...offset },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1,
              ease: "power3.out",
              paused: true,
              onComplete: () => release(el),
              onReverseComplete: () => release(el),
            },
          );
          const play = () => {
            freeze(el);
            tween.play();
          };
          const reverse = () => {
            freeze(el);
            tween.reverse();
          };
          ScrollTrigger.create({
            trigger: el,
            start: START,
            end: END,
            onEnter: play,
            onEnterBack: play,
            onLeave: reverse,
            onLeaveBack: reverse,
          });
        });
      });

      // --- Groups: children animate one after another ---------------------
      gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((group) => {
        const items = Array.from(group.children) as HTMLElement[];
        gsap.set(items, { opacity: 0, y: 50, transition: "none" });

        const animate = (batch: Element[], vars: gsap.TweenVars) => {
          freeze(batch);
          gsap.to(batch, {
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            overwrite: true,
            onComplete: () => release(batch),
            ...vars,
          });
        };

        ScrollTrigger.batch(items, {
          start: START,
          end: END,
          onEnter: (b) => animate(b, { opacity: 1, y: 0 }),
          onEnterBack: (b) => animate(b, { opacity: 1, y: 0 }),
          // Leaving off the top: drift up and out. Leaving off the bottom: sink back down.
          onLeave: (b) => animate(b, { opacity: 0, y: -50 }),
          onLeaveBack: (b) => animate(b, { opacity: 0, y: 50 }),
        });
      });

      // --- Parallax (scrubbed, so it follows the scrollbar both ways) -----
      // Runs before "reveal" so the reveal's starting zoom wins.
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const isHero = el.dataset.parallax === "hero";
        freeze(el);
        gsap.set(el, { scale: isHero ? 1.1 : 1.15 });
        gsap.fromTo(
          el,
          { yPercent: isHero ? 0 : -7 },
          {
            yPercent: isHero ? 18 : 7,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: isHero ? "top top" : "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      // --- Image reveal ----------------------------------------------------
      gsap.utils.toArray<HTMLElement>('[data-animate="reveal"]').forEach((frame) => {
        const img = frame.querySelector("img");
        if (img) freeze(img);
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: frame,
            start: "top 85%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse",
          },
        });
        tl.fromTo(
          frame,
          { clipPath: "inset(18% 12% 18% 12% round 1.75rem)", opacity: 0.4 },
          {
            clipPath: "inset(0% 0% 0% 0% round 1.75rem)",
            opacity: 1,
            duration: 1.4,
            ease: "power4.out",
          },
        );
        if (img) {
          tl.fromTo(img, { scale: 1.45 }, { scale: 1.15, duration: 1.8, ease: "power3.out" }, 0);
        }
      });

      // --- Hero content fading as the hero scrolls away (scrubbed) --------
      // Explicit start values: reading them from the page could capture a
      // half-finished load-in animation (e.g. opacity 0) and keep the text hidden.
      gsap.utils.toArray<HTMLElement>("[data-hero-fade]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 0, opacity: 1 },
          {
            y: -120,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") ?? el,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });

    return () => mm.revert();
  });

  return null;
}
