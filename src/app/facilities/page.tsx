import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Sun, 
  Car, 
  Shirt, 
  Tv,
  Users,
  Wind,
  Lightbulb,
  PartyPopper,
  Eye,
  Shield,
  Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Explore Baraka Hotel facilities including conference room, rooftop venue, secure parking, laundry services, and DSTV entertainment. Perfect for business and leisure travelers.",
  openGraph: {
    title: "Hotel Facilities | Baraka Hotel",
    description: "Explore our facilities: conference room, rooftop venue, secure parking, laundry services, and DSTV entertainment.",
    images: ["/baraka/hero3.jpg"],
  },
  twitter: {
    title: "Hotel Facilities | Baraka Hotel",
    description: "Explore Baraka Hotel facilities including conference room, rooftop venue, and more.",
    images: ["/baraka/hero3.jpg"],
  },
  alternates: {
    canonical: "/facilities",
  },
};

const facilities = [
  {
    id: "conference",
    title: "Conference Room",
    description: "Perfect for meetings, workshops, and corporate events. Our well-equipped conference room provides a professional setting for your business needs.",
    image: "/baraka/hero3.jpg",
    features: [
      { icon: Users, text: "Seats up to 45 people" },
      { icon: Wind, text: "Well aerated and air-conditioned" },
      { icon: Lightbulb, text: "Bright and well lit" },
      { icon: Building2, text: "Ideal for meetings and workshops" },
    ],
  },
  {
    id: "rooftop",
    title: "Rooftop",
    description: "An open-air relaxing atmosphere perfect for small events, gatherings, and evening relaxation with scenic views of the surroundings.",
    image: "/baraka/hero2.jpg",
    features: [
      { icon: Sun, text: "Open-air and relaxing atmosphere" },
      { icon: PartyPopper, text: "Ideal for small events and birthday parties" },
      { icon: Eye, text: "Scenic views of the surroundings" },
      { icon: Wind, text: "Fresh and airy setting" },
    ],
  },
  {
    id: "parking",
    title: "Parking",
    description: "Rest easy knowing your vehicle is safe in our spacious, secure parking area with 24/7 surveillance.",
    image: "/baraka/hero.jpg",
    features: [
      { icon: Car, text: "Spacious parking area" },
      { icon: Shield, text: "Safe and secure" },
      { icon: Eye, text: "24/7 surveillance" },
    ],
  },
  {
    id: "laundry",
    title: "Laundry Services",
    description: "Professional washing and ironing services at affordable rates. Keep your clothes fresh during your stay.",
    image: "/baraka/hero3.jpg",
    features: [
      { icon: Shirt, text: "Professional washing" },
      { icon: Shirt, text: "Ironing services" },
      { icon: Building2, text: "Affordable rates" },
    ],
  },
  {
    id: "dstv",
    title: "DSTV Entertainment",
    description: "Stay entertained with our DSTV service. Watch live football matches and stay updated with local and international news.",
    image: "/baraka/hero2.jpg",
    features: [
      { icon: Tv, text: "Live football matches" },
      { icon: Tv, text: "Local and international news" },
      { icon: Tv, text: "Entertainment channels" },
    ],
  },
];

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-stone-900">
        <div className="absolute inset-0">
          <Image
            src="/baraka/hero3.jpg"
            alt="Facilities at Baraka Hotel"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-amber-600/20 text-amber-400 border-amber-600/30 mb-4">
            Extra Facilities
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-amber-500">Facilities</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-3xl mx-auto">
            Beyond comfortable rooms and great food, we offer additional facilities 
            to make your stay even more convenient and enjoyable.
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {facilities.map((facility, index) => (
              <div 
                key={facility.id} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      width={600}
                      height={400}
                      className="w-full h-[350px] lg:h-[450px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-full blur-xl" />
                  <div className={`absolute -top-4 ${index % 2 === 1 ? '-right-4' : '-left-4'} w-32 h-32 border-2 border-amber-200 rounded-2xl -z-10`} />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Badge className="bg-amber-100 text-amber-700 border-none">
                    {facility.title}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                    {facility.title}
                  </h2>
                  <p className="text-stone-600 text-lg leading-relaxed">
                    {facility.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {facility.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl"
                      >
                        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="text-stone-700 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-amber-100 mb-8 max-w-xl mx-auto">
            Contact us to learn more about our facilities or to make a booking for 
            our conference room or rooftop space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-stone-100 px-8"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8"
              asChild
            >
              <a href="tel:+256768666505">
                <Phone className="w-4 h-4 mr-2" />
                +256 768 666 505
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
