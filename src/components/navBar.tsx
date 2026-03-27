"use client";
import * as React from "react"
import Link from "next/link"
import { Menu, Phone, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";
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
          ? "bg-white/98 backdrop-blur-lg shadow-xl border-b border-bblue/20"
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
            <div className={cn("relative transition-all duration-300", isScrolled ? "w-12 h-12" : "w-16 h-14")}>
              <div className="absolute inset-0 rounded-lg   transition-transform duration-500"></div>
              <div className="relative  w-full h-full   rounded-lg  group-hover:scale-110 transition-transform duration-300 flex items-center justify-center ">
                <Image className=" flex bg-transparent h-full w-full  font-bold text-2xl"
                src="/logonbg.png"
                alt="Baraka Hotel Logo"
                width={isScrolled ? 48 : 56}
                height={isScrolled ? 48 : 56}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-serif text-2xl font-bold tracking-wide transition-colors duration-300",
                  isScrolled ? "text-gray-900" : "text-bred",
                )}
              >
                Baraka <span className="text-bblue" >Hotel</span>
              </span>
              <span
                className={cn(
                  "text-xs tracking-widest uppercase transition-colors duration-300",
                  isScrolled ? "text-amber-500" : "text-amber-200",
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
                  isScrolled ? "bg-transparent text-gray-700 hover:text-bred" : "text-white hover:text-bblue",
                )}
              >
                {item.title}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-300",
                    isScrolled ? "bg-bred" : "bg-bblue",
                  )}
                ></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">

            
              
              <Link href="tel:+256768666505" className="flex  items-center justify-center rounded-lg  p-2 gap-3 ml-2 bg-linear-to-r from-bred to-bred/90 hover:from-bred/90 hover:to-bred text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6">
              <Phone className="h-4 w-4" /> Book Now 
              </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "transition-colors duration-300",
                  isScrolled ? "text-gray-900 hover:bg-bblue/10" : "text-white hover:bg-white/10",
                )}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col space-y-8 mt-8 p-2">
                {/* Mobile Logo */}
                <Link href="/" className="flex items-center space-x-3">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0  rounded-lg"></div>
                   <div className="relative  w-full h-full   rounded-lg  group-hover:scale-110 transition-transform duration-300 flex items-center justify-center ">
                <Image className=" flex bg-transparent h-full w-full  font-bold text-2xl"
                src="/logonbg.png"
                alt="Baraka Hotel Logo"
                width={isScrolled ? 48 : 56}
                height={isScrolled ? 48 : 56}
                />
              </div>
                  </div>
                  <div className="flex flex-col">
                    <span
                className={cn(
                  "font-serif text-2xl font-bold tracking-wide transition-colors duration-300",
                  isScrolled ? "text-gray-900" : "text-bred",
                )}
              >
                Baraka <span className="text-bblue" >Hotel</span>
              </span>
                    <span
                className={cn(
                  "text-xs tracking-widest uppercase transition-colors duration-300",
                  isScrolled ? "text-amber-500" : "text-amber-200",
                )}
              >
               For a memorable experience
              </span>
                  </div>
                </Link>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-gray-700 hover:text-bred hover:bg-bred/5 transition-colors py-3 px-4 rounded-lg border-b border-gray-100 last:border-0"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="flex flex-col space-y-3 p-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <Phone className="h-4 w-4 text-bred" />
                    <span>+256 768 666 505/ +256 744 628 976 / +256 770 404 091</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <Mail className="h-4 w-4 text-bred" />
                    <span className="text-gray-400">
                      <a href="mailto:barakahotelbweyale@gmail.com">barakahotelbweyale@gmail.com</a>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 text-bblue" />
                    <span>Along Kampala-Gulu Highway, Bweyale, Kiryandongo District – Uganda</span>
                  </div>
                </div>

                {/* Mobile CTA */}
                {/* <Button className="w-full bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg font-semibold py-6">
                  Book Now
                </Button> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
