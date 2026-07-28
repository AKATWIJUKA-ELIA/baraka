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
  { title: "Testimonials", href: "/testimonials" },
  { title: "Contact", href: "/contact" },
  { title: "About Us", href: "/about" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string, title: string) => {
    if (href === "/") return pathname === "/";
    if (title === "Amenities" && pathname.startsWith("/facilities")) return true;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bnavy/[0.92] text-white backdrop-blur-xl transition-all duration-300",
        isScrolled && "shadow-[0_16px_50px_rgba(10,26,36,0.22)]",
      )}
    >
      <div className="site-container">
        <div className="flex h-[4.5rem] items-center justify-between gap-5">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 rounded-full focus-visible:ring-offset-bnavy"
          >
            <Image
              src="/logonbg.png"
              alt="Baraka Hotel"
              width={42}
              height={42}
              className="size-10 shrink-0 object-contain"
              priority
            />
            <div className="min-w-0">
              <p className="text-lg font-black leading-none text-white">Baraka Hotel</p>
              <p className="mt-1 hidden text-xs font-semibold text-bblue/90 sm:block">
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
      </div>
    </header>
  );
}
