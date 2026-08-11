import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { facilities } from "@/lib/facilities-data";

export function AmenitiesPageContent() {
  return (
    <main className="min-h-screen bg-bpaper">
      <PageHero
        kicker="Amenities & services"
        title="Designed"
        accent="for ease"
        description="Beyond comfortable rooms, Baraka Hotel offers dining, coffee, events, rooftop relaxation, secure parking, laundry, Wi-Fi, and 24/7 support."
        image="/baraka/hero3.jpg"
        primaryAction={{ href: "/contact", label: "Ask a Question" }}
        secondaryAction={{ href: "/gallery", label: "View Photos" }}
      />

      <section className="section-shell">
        <div className="site-container">
          <SectionHeader
            kicker="Hotel amenities"
            title="Everything in one polished stay"
            description="Explore practical services and guest spaces prepared for travelers, business visitors, and small event hosts."
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <Link key={facility.id} href={`/facilities/${facility.id}`} className="group">
                <Card className="hotel-card-hover h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={facility.images[0]}
                      alt={facility.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bnavy/75 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-2xl bg-bblue text-bnavy">
                      <facility.icon className="size-6" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-black text-bnavy">{facility.title}</h2>
                    <p className="mt-3 leading-7 text-bink/70">{facility.shortDescription}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-bred">
                      View details
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-kicker">Guest assurance</p>
              <h2 className="section-heading">A practical hotel experience with a premium finish</h2>
              <p className="section-copy mt-5">
                Whether you are booking a room, hosting a workshop, stopping for a meal,
                or relaxing on the rooftop, the same service standard runs through every detail.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "24/7 front desk",
                  "Secure parking",
                  "Fresh dining",
                  "Conference-ready spaces",
                  "Laundry service",
                  "Free Wi-Fi",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-bpaper p-4 font-semibold text-bink">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-bmist text-bblue">
                      <Check className="size-4" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-bnavy p-7 text-white shadow-[0_24px_80px_rgba(10,26,36,0.16)]">
              <h3 className="text-3xl font-black">Need facility details?</h3>
              <p className="mt-3 leading-7 text-white/75">
                Call us for conference room, rooftop event, restaurant, or room availability.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contact">
                    <Phone className="size-4" />
                    Contact Us
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-bnavy"
                  asChild
                >
                  <a href="tel:+256768666505">Call Hotel</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
