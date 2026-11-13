"use client";

import * as React from "react";
import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

/**
 * Gallery grid + full-screen viewer. Click a photo to open it, then move
 * through the photos with the arrow buttons, the thumbnails, the keyboard
 * (← / →, Esc to close) or by swiping on phones.
 */
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  // Which way the last move went, so the new photo slides in from that side.
  const [direction, setDirection] = React.useState<"next" | "prev">("next");
  const touchStartX = React.useRef<number | null>(null);
  const thumbRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const isOpen = openIndex !== null;
  const current = isOpen ? images[openIndex] : null;

  const go = React.useCallback(
    (step: 1 | -1) => {
      setDirection(step === 1 ? "next" : "prev");
      setOpenIndex((index) =>
        index === null ? index : (index + step + images.length) % images.length,
      );
    },
    [images.length],
  );

  const jumpTo = (index: number) => {
    if (openIndex === null || index === openIndex) return;
    setDirection(index > openIndex ? "next" : "prev");
    setOpenIndex(index);
  };

  // Keyboard arrows while the viewer is open (Esc is handled by the dialog).
  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, go]);

  // Keep the active thumbnail scrolled into view.
  React.useEffect(() => {
    if (openIndex === null) return;
    thumbRefs.current[openIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [openIndex]);

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1);
  };

  return (
    <>
      <div
        className="grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-3"
        data-animate="stagger"
      >
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => {
              setDirection("next");
              setOpenIndex(index);
            }}
            aria-label={`View ${image.alt}`}
            className={cn(
              "hotel-card group relative cursor-zoom-in p-0 text-left focus-visible:ring-4 focus-visible:ring-bblue/50",
              index === 0 && "md:col-span-2 md:row-span-2",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={
                index === 0
                  ? "(min-width: 768px) 66vw, 100vw"
                  : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              }
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bnavy/80 via-bnavy/10 to-transparent" />
            <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
              <Expand className="size-4" />
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="rounded-full bg-bblue px-3 py-1 text-xs font-black text-bnavy">
                {image.category}
              </span>
              <h2 className="mt-3 text-2xl font-black">{image.alt}</h2>
            </div>
          </button>
        ))}
      </div>

      <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-bnavy/95 backdrop-blur-md data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
          <DialogPrimitive.Content
            className="fixed inset-0 z-[60] flex flex-col text-white outline-none data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95"
            onTouchStart={(event) => (touchStartX.current = event.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          >
            {current && openIndex !== null && (
              <>
                {/* Top bar: counter, caption, close */}
                <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="shrink-0 text-sm font-bold tabular-nums text-white/60">
                      {openIndex + 1} / {images.length}
                    </span>
                    <span className="shrink-0 rounded-full bg-bblue px-3 py-1 text-xs font-black text-bnavy">
                      {current.category}
                    </span>
                    <DialogPrimitive.Title className="truncate text-lg font-black">
                      {current.alt}
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description className="sr-only">
                      Photo {openIndex + 1} of {images.length}. Use the arrow keys or buttons to move
                      between photos.
                    </DialogPrimitive.Description>
                  </div>
                  <DialogPrimitive.Close
                    aria-label="Close viewer"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white hover:text-bnavy"
                  >
                    <X className="size-5" />
                  </DialogPrimitive.Close>
                </div>

                {/* Photo + arrows */}
                <div className="relative flex-1 px-4 sm:px-20">
                  <div
                    key={openIndex}
                    className={cn(
                      "absolute inset-0 mx-4 animate-in fade-in duration-500 ease-out sm:mx-20",
                      direction === "next" ? "slide-in-from-right-10" : "slide-in-from-left-10",
                    )}
                  >
                    <Image
                      src={current.src}
                      alt={current.alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous photo"
                    className="absolute left-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-bnavy/50 backdrop-blur transition hover:bg-white hover:text-bnavy sm:left-5 sm:size-14"
                  >
                    <ChevronLeft className="size-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next photo"
                    className="absolute right-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-bnavy/50 backdrop-blur transition hover:bg-white hover:text-bnavy sm:right-5 sm:size-14"
                  >
                    <ChevronRight className="size-6" />
                  </button>
                </div>

                {/* Thumbnails. Centered via mx-auto on a w-max row (not
                    justify-center), so the first ones stay reachable when the
                    row is wider than the screen. */}
                <div className="overflow-x-auto px-4 py-4 [scrollbar-width:none] sm:px-6">
                  <div className="mx-auto flex w-max gap-3">
                  {images.map((image, index) => (
                    <button
                      key={image.src}
                      ref={(el) => {
                        thumbRefs.current[index] = el;
                      }}
                      type="button"
                      onClick={() => jumpTo(index)}
                      aria-label={`Show ${image.alt}`}
                      aria-current={index === openIndex}
                      className={cn(
                        "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg transition sm:h-16 sm:w-24",
                        index === openIndex
                          ? "ring-2 ring-bred ring-offset-2 ring-offset-bnavy"
                          : "opacity-50 hover:opacity-100",
                      )}
                    >
                      <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
                    </button>
                  ))}
                  </div>
                </div>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
