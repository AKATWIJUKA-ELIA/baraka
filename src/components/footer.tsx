"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "Rooms", href: "/rooms" },
  { title: "Amenities", href: "/amenities" },
  { title: "Gallery", href: "/gallery" },
  { title: "Testimonials", href: "/#testimonials" },
  { title: "Contact", href: "/contact" },
  { title: "About Us", href: "/about" },
];

const services = ["Accommodation", "Restaurant", "Coffee Bar", "Conference Room", "Rooftop Events"];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bnavy text-white">
      <div className="site-container py-14 md:py-[4.5rem]">
        <div>
          <p className="text-sm font-bold uppercase text-bblue">Baraka Hotel</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
            Rest, refresh, and recharge along the Kampala-Gulu Highway.
          </h2>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center rounded-full text-2xl font-black">
              Baraka <span className="ml-1 text-bblue">Hotel</span>
            </Link>
            <p className="mt-4 max-w-xs leading-7 text-white/70">
              A welcoming haven for travelers seeking clean rooms, fresh meals, secure parking, and warm service.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-black">Explore</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-white/70 transition hover:text-bblue">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-black">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-black">Contact</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-bblue" />
                <span>
                  Along Kampala-Gulu Highway
                  <br />
                  Bweyale, Kiryandongo District, Uganda
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 size-5 shrink-0 text-bred" />
                <span className="flex flex-col">
                  <a href="tel:+256768666505" className="transition hover:text-bblue">
                    +256 768 666 505
                  </a>
                  <a href="tel:+256744628976" className="transition hover:text-bblue">
                    +256 744 628 976
                  </a>
                  <a href="tel:+256770404091" className="transition hover:text-bblue">
                    +256 770 404 091
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-bblue" />
                <a
                  href="mailto:barakahotelbweyale@gmail.com"
                  className="break-all transition hover:text-bblue"
                >
                  barakahotelbweyale@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-5 shrink-0 text-bred" />
                <span>24/7 Front Desk</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-3 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Baraka Hotel. All rights reserved.</p>
          <p>Designed for a memorable experience.</p>
        </div>
      </div>
    </footer>
  );
}
