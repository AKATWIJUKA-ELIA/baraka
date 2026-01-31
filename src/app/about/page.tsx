"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  MapPin, 
  Shield, 
  Users, 
  DollarSign,
  Building2,
  Calendar
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const whyUsPoints = [
  {
    icon: Building2,
    title: "Clean and comfortable rooms",
  },
  {
    icon: DollarSign,
    title: "Affordable pricing",
  },
  {
    icon: Users,
    title: "Friendly and professional staff",
  },
  {
    icon: MapPin,
    title: "Convenient location",
  },
  {
    icon: Shield,
    title: "Secure environment",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-stone-900">
        <div className="absolute inset-0">
          <Image
            src="/baraka/hero2.jpg"
            alt="About Baraka Hotel"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/30 mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-amber-500">Baraka Hotel</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-3xl mx-auto">
            A welcoming haven for travelers and guests seeking comfort, great meals, and a peaceful stay.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/baraka/hero.jpg"
                alt="Baraka Hotel Story"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl hidden md:flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                <div>
                  <p className="text-2xl font-bold">Dec 13</p>
                  <p className="text-sm">2024 Opening</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-700 border-none">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                A Trusted Stop for Comfort
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Officially opened on the 13th December, 2024 along Kampala-Gulu Highway 
                in Bweyale, Kiryandongo with the aim of providing quality hospitality to 
                travelers and locals alike, Baraka Hotel has grown into a trusted stop 
                for comfort and refreshment.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                We take pride in offering a welcoming environment where every guest feels valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Our Mission</h3>
              <p className="text-stone-600 text-lg leading-relaxed">
                To provide exceptional hospitality, ensuring every guest feels welcomed, 
                valued and cared for.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Our Vision</h3>
              <p className="text-stone-600 text-lg leading-relaxed">
                To be the preferred hotel in Kiryandongo District by offering superior 
                service and memorable guest experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-700 border-none mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyUsPoints.map((point, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-stone-50 hover:bg-amber-50 border border-stone-100 hover:border-amber-200 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <point.icon className="w-7 h-7 text-amber-600" />
                </div>
                <p className="text-stone-700 font-medium">{point.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Baraka Hotel?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Book your stay today and discover why guests love coming back.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rooms">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-stone-100 px-8 py-6 text-lg rounded-xl">
                View Our Rooms
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
