"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Home", href: "#home" },
  { title: "Rooms", href: "#rooms" },
  { title: "Amenities", href: "#amenities" },
  { title: "Gallery", href: "#gallery" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span
              className={cn(
                "text-2xl font-bold tracking-tight transition-colors",
                isScrolled ? "text-gray-900" : "text-white"
              )}
            >
              Baraka Hotel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-white/20",
                        isScrolled
                          ? "text-gray-700 hover:text-amber-600"
                          : "text-white hover:text-amber-200"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "gap-2",
                isScrolled
                  ? "text-gray-700 hover:text-amber-600"
                  : "text-white hover:text-amber-200"
              )}
            >
              <Phone className="h-4 w-4" />
              +1 (555) 123-4567
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  isScrolled ? "text-gray-900" : "text-white"
                )}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    Baraka Hotel
                  </span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-700 hover:text-amber-600 transition-colors py-2 border-b border-gray-100"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col space-y-3 pt-4">
                  <Button
                    variant="outline"
                    className="gap-2 justify-start"
                  >
                    <Phone className="h-4 w-4" />
                    +1 (555) 123-4567
                  </Button>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                    Book Now
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
