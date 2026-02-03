"use client";
import * as React from "react"
import Link from "next/link"
import { Menu, Phone, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
  { title: "Home", href: "/" },
  { title: "Rooms", href: "/rooms" },
  { title: "Amenities", href: "/#amenities" },
  { title: "Gallery", href: "/gallery" },
  { title: "Testimonials", href: "/#testimonials" },
  { title: "Contact", href: "/contact" },
  { title: "About Us", href: "/about" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/98 backdrop-blur-lg shadow-xl border-b border-amber-100/50"
          : "bg-linear-to-b from-black/60 via-black/40 to-transparent",
      )}
    >
      {/* Top Bar - Only visible when not scrolled */}
      <div
        className={cn(
          "border-b hidden md:flex border-white/10 transition-all duration-500",
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto  ",
        )}
      >
        <div className="container mx-auto px-4 backdrop-blur-lg">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                <span>Along Kampala-Gulu Highway, Bweyale, Kiryandongo District – Uganda</span>
              </div>
              {/* <div className="hidden md:flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                <span>info@barakahotel.com</span>
              </div> */}
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Phone className="h-3.5 w-3.5" />
              <span  className="font-medium"> <a href="tel:+256768666505">+256 768 666 505</a> / <a href="tel:+256744628976">+256 744 628 976</a></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div
          className={cn("flex items-center justify-between transition-all duration-300", isScrolled ? "h-20" : "h-24")}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className={cn("relative transition-all duration-300", isScrolled ? "w-12 h-12" : "w-14 h-14")}>
              <div className="absolute inset-0 bg-linear-to-br from-amber-400 via-amber-500 to-amber-700 rounded-lg rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="relative w-full h-full bg-linear-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-serif text-2xl font-bold tracking-wide transition-colors duration-300",
                  isScrolled ? "text-gray-900" : "text-red-600",
                )}
              >
                Baraka <span className="text-blue-600" >Hotel</span>
              </span>
              <span
                className={cn(
                  "text-xs tracking-widest uppercase transition-colors duration-300",
                  isScrolled ? "text-amber-600" : "text-amber-200",
                )}
              >
               For a memorable experience
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "relative px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg group",
                  isScrolled ? "text-gray-700 hover:text-amber-600" : "text-white hover:text-amber-200",
                )}
              >
                {item.title}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-300",
                    isScrolled ? "bg-amber-600" : "bg-amber-200",
                  )}
                ></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">

            <Button className="bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6">
              <Phone className="h-4 w-4" /> Book Now 
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "transition-colors duration-300",
                  isScrolled ? "text-gray-900 hover:bg-amber-50" : "text-white hover:bg-white/10",
                )}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col space-y-8 mt-8">
                {/* Mobile Logo */}
                <Link href="/" className="flex items-center space-x-3">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-linear-to-br from-amber-400 via-amber-500 to-amber-700 rounded-lg rotate-6"></div>
                    <div className="relative w-full h-full bg-linear-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">B</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-xl font-bold text-gray-900">Baraka Hotel</span>
                    <span className="text-xs tracking-widest uppercase text-amber-600">Luxury & Comfort</span>
                  </div>
                </Link>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors py-3 px-4 rounded-lg border-b border-gray-100 last:border-0"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="flex flex-col space-y-3 px-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <Phone className="h-4 w-4 text-amber-600" />
                    <span>+256 768 666 505/ +256 744 628 976</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <Mail className="h-4 w-4 text-amber-600" />
                    <span>info@barakahotel.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span>123 Luxury Avenue</span>
                  </div>
                </div>

                {/* Mobile CTA */}
                <Button className="w-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg font-semibold py-6">
                  Book Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
