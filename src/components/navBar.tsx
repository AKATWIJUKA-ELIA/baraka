"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Rooms", href: "/rooms" },
  { title: "Amenities", href: "/amenities" },
  { title: "Gallery", href: "/gallery" },
  { title: "Testimonials", href: "/#testimonials" },
  { title: "Contact", href: "/contact" },
  { title: "About Us", href: "/about" },
];

// Home-page section ids → the nav item to underline while that section is on screen.
const homeSections: Record<string, string> = {
  rooms: "Rooms",
  amenities: "Amenities",
  testimonials: "Testimonials",
};

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [direction, setDirection] = React.useState<"up" | "down">("up");
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const progressRef = React.useRef<HTMLSpanElement>(null);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 24);

      // Ignore tiny movements so the bar doesn't flicker between states.
      if (Math.abs(y - lastY.current) > 8) {
        setDirection(y > lastY.current ? "down" : "up");
        lastY.current = y;
      }

      // Written straight to the DOM so the progress line doesn't re-render on every frame.
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }

      if (pathname !== "/") return;
      // A section counts as "current" once its top passes 40% down the viewport.
      const line = window.innerHeight * 0.4;
      const current = Object.keys(homeSections).find((id) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect ? rect.top <= line && rect.bottom > line : false;
      });
      setActiveSection(current ?? null);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (href: string, title: string) => {
    if (pathname === "/") {
      const sectionTitle = activeSection ? homeSections[activeSection] : null;
      return sectionTitle ? title === sectionTitle : href === "/";
    }
    if (href === "/") return false;
    if (title === "Amenities" && pathname.startsWith("/facilities")) return true;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Three looks: a full-width bar at the very top, a compact floating pill while
  // scrolling down, and a wider floating bar when scrolling back up.
  // Corners stay square in every mode (no rounded edges).
  const mode = !isScrolled ? "top" : direction === "down" ? "compact" : "wide";
  const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-[padding] duration-700",
        ease,
        mode === "top" ? "px-0 pt-0" : "px-3 pt-3",
      )}
    >
      <div
        className={cn(
          "relative mx-auto overflow-hidden rounded-none border transition-all duration-700",
          ease,
          mode === "top" &&
            "max-w-full border-transparent border-b-white/10 bg-bnavy/25 backdrop-blur-md",
          mode === "compact" &&
            "max-w-6xl border-white/15 bg-bink/80 shadow-[0_18px_50px_rgba(10,26,36,0.28)] backdrop-blur-xl",
          mode === "wide" &&
            "max-w-7xl border-white/20 bg-bink/65 shadow-[0_12px_40px_rgba(10,26,36,0.18)] backdrop-blur-xl",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 transition-[height] duration-700 sm:px-6 lg:px-8",
            ease,
            mode === "top" ? "h-[4.5rem]" : mode === "compact" ? "h-14" : "h-16",
          )}
        >
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 rounded-full focus-visible:ring-offset-bnavy"
          >
            <Image
              src="/logonbg.png"
              alt="Baraka Hotel"
              width={42}
              height={42}
              className={cn(
                "shrink-0 object-contain transition-all duration-700",
                mode === "compact" ? "size-8" : "size-10",
              )}
              priority
            />
            <div className="min-w-0">
              <p className="text-lg font-black leading-none text-white">Baraka Hotel</p>
              <p
                className={cn(
                  "hidden overflow-hidden text-xs font-semibold text-bblue/90 transition-all duration-500 sm:block",
                  mode === "compact" ? "mt-0 max-h-0 opacity-0" : "mt-1 max-h-5 opacity-100",
                )}
              >
                For a memorable experience
              </p>
            </div>
          </Link>

          <nav className="hidden items-center justify-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href, item.title);
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-semibold text-white/80 transition hover:text-white focus-visible:ring-offset-bnavy xl:px-4",
                    active && "text-white",
                  )}
                >
                  {item.title}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-1 h-0.5 origin-center scale-x-0 rounded-full bg-bblue transition-transform",
                      active && "scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Button asChild>
              <a href="tel:+256768666505">
                <Phone className="size-4" />
                Book Now
              </a>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-white/25 bg-white/[0.08] text-white hover:bg-white hover:text-bnavy focus-visible:ring-offset-bnavy lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(90vw,360px)] border-bline bg-bnavy p-0 text-white">
              <div className="flex h-full flex-col">
                <div className="flex h-[4.5rem] items-center justify-between border-b border-white/10 px-5">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <Image src="/logonbg.png" alt="Baraka Hotel" width={38} height={38} className="size-9" />
                    <span className="font-black">Baraka Hotel</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10 hover:text-white focus-visible:ring-offset-bnavy"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close navigation menu"
                  >
                    <X className="size-5" />
                  </Button>
                </div>

                <nav className="flex flex-1 flex-col gap-2 px-5 py-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-base font-semibold text-white/75 transition hover:bg-white/[0.08] hover:text-white",
                        isActive(item.href, item.title) && "bg-white/10 text-white",
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>

                <div className="border-t border-white/10 p-5">
                  <Button className="w-full" asChild>
                    <a href="tel:+256768666505">
                      <Phone className="size-4" />
                      Book Now
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Scroll progress line */}
        <span
          ref={progressRef}
          aria-hidden
          style={{ transform: "scaleX(0)" }}
          className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left bg-linear-to-r from-bblue to-bred"
        />
      </div>
    </header>
  );
}
