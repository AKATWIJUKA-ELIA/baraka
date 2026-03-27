"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Check,
  Phone,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface SerializableFacility {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  images: string[];
  features: { text: string }[];
}

interface FacilityDetailContentProps {
  facility: SerializableFacility;
  otherFacilities: SerializableFacility[];
}

export function FacilityDetailContent({ facility, otherFacilities }: FacilityDetailContentProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % facility.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + facility.images.length) % facility.images.length);
  };

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section with Image Gallery */}
      <section className="relative">
        {/* Main Image */}
        <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src={facility.images[currentImageIndex]}
            alt={facility.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          {/* Image Navigation */}
          {facility.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-stone-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-stone-800" />
              </button>
            </>
          )}

          {/* Badge */}
          <div className="absolute top-40 right-6 flex gap-2">
            <Badge className="bg-bred text-white border-none text-sm px-4 py-1">
              Facility
            </Badge>
          </div>

          {/* Image Indicators */}
          {facility.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {facility.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thumbnail Gallery */}
        {facility.images.length > 1 && (
          <div className="container mx-auto px-4 -mt-16 relative z-10">
            <div className="flex gap-4 justify-center">
              {facility.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden shadow-lg transition-all ${
                    index === currentImageIndex ? 'ring-4 ring-bred scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${facility.title} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Facility Details Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Back Button */}
              <div className="mb-4">
                <Link href="/facilities">
                  <Button variant="outline" className="hover:cursor-pointer bg-white/90 backdrop-blur-sm hover:bg-white border-0 shadow-lg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Facilities
                  </Button>
                </Link>
              </div>
              
              {/* Facility Title & Short Description */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
                  {facility.title}
                </h1>
                <p className="text-stone-600 text-lg">
                  {facility.shortDescription}
                </p>
              </div>

              {/* Description */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-stone-800 mb-4">About This Facility</h2>
                  <p className="text-stone-600 leading-relaxed text-lg">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-stone-800 mb-6">Features & Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {facility.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-stone-50">
                        <div className="w-8 h-8 rounded-full bg-bblue/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-bblue" />
                        </div>
                        <span className="text-stone-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Contact Card */}
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6 md:p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-stone-800 mb-2">
                        Interested in this facility?
                      </h3>
                      <p className="text-stone-600 text-sm">
                        Contact us for more information or to make a reservation
                      </p>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={`https://wa.me/256768666505?text=${encodeURIComponent(
                          `Hello Baraka Hotel!\n\nI would like to inquire about your ${facility.title} facility.\n\nPlease provide more details. Thank you!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-bred hover:bg-bred/90 text-white py-6 text-lg rounded-xl">
                          Inquire Now
                        </Button>
                      </a>
                      <a href="tel:+256768666505" className="block">
                        <Button variant="outline" className="w-full py-6 text-lg rounded-xl border-stone-300">
                          <Phone className="w-5 h-5 mr-2" />
                          Call Us
                        </Button>
                      </a>
                    </div>

                    <p className="text-center text-stone-500 text-sm mt-4">
                      Available 24/7
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="border-0 shadow-lg mt-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-stone-800 mb-3">Need Help?</h3>
                    <p className="text-stone-600 text-sm mb-4">
                      Our team is available 24/7 to assist you.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="text-stone-600">
                        <strong>Phone:</strong> +256 768 666 505
                      </p>
                      <p className="text-stone-600">
                        <strong>WhatsApp:</strong> +256 768 666 505
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Facilities Section */}
      {otherFacilities.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-8 text-center">
              Explore Other Facilities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherFacilities.map((otherFacility) => (
                <Link key={otherFacility.id} href={`/facilities/${otherFacility.id}`}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer h-full">
                    <div className="relative h-48">
                      <Image
                        src={otherFacility.images[0]}
                        alt={otherFacility.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-bold text-stone-800 text-lg mb-2">{otherFacility.title}</h3>
                      <p className="text-stone-600 text-sm line-clamp-2">{otherFacility.shortDescription}</p>
                      <div className="flex items-center text-bred mt-3 text-sm font-medium group-hover:translate-x-1 transition-transform">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-bred text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Baraka Hotel?</h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            Book your stay today and enjoy all our facilities and services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-bred hover:bg-stone-100 px-8"
              asChild
            >
              <Link href="/rooms">View Rooms</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-bblue text-white hover:bg-white/10 px-8"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
