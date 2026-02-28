"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
} from "lucide-react";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "Rooms & Suites", href: "/rooms" },
  { title: "Amenities", href: "/#amenities" },
  { title: "Gallery", href: "/gallery" },
  { title: "Testimonials", href: "/#testimonials" },
  { title: "Contact", href: "/contact" },
];

const services = [
  "Room Service",
  "Fine Dining",
  "Event Hosting",
];

export function Footer() {
        const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      {/* <div className="bg-amber-600">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-amber-100">
                Get exclusive offers and updates delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 min-w-[300px]"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="p-2" >
            <Link href="/" className="flex flex-col  items-center space-x-2 mb-6">
            <div className="flex  " >
                <Image
                  src="/logowide.png"
                  alt="Baraka Hotel Logo"
                  className="flex "
                  width={300}
                  height={100}
                />
            </div>

              <div className="gap-6  rounded-full flex items-center justify-center">
                <Image
                  src="/logonbg.png"
                  alt="Baraka Hotel Logo"
                  className="flex "
                  width={24}
                  height={24}
                />

                  <div className="flex text-2xl font-bold">
                        <h1 className="" >
                        Baraka Hotel</h1>
                        </div>
              </div>
            
            </Link>
            <p className="text-center font-bold text-gray-400 mb-6">
               For a memorable experience
            </p>
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-bred flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-bblue flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-bred flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-bblue flex items-center justify-center transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-bblue transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-bred mt-1 shrink-0" />
                <span className="text-gray-400">
                Along Kampala-Gulu Highway,
                  <br />
                  Bweyale, Kiryandongo District – Uganda
                </span>
              </li>
               
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-bblue shrink-0" />
                    <span  className="text-sm font-medium flex flex-col"> 
                        <a href="tel:+256768666505">+256 768 666 505</a>
                    <a href="tel:+256744628976">+256 744 628 976</a>
                        <a href="tel:+256770404091">+256 770 404 091</a>
                    
                    </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                <span className="text-gray-400">
                  <a href="mailto:barakahotelbweyale@gmail.com">barakahotelbweyale@gmail.com</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-500 shrink-0" />
                <span className="text-gray-400">24/7 Front Desk</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Baraka Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
