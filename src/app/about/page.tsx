import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, Calendar, DollarSign, Eye, MapPin, Shield, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Baraka Hotel's story, mission, and vision. Discover why we're the preferred hotel in Kiryandongo District, Uganda, offering exceptional hospitality since December 2024.",
  openGraph: {
    title: "About Baraka Hotel | Our Story & Mission",
    description:
      "Learn about Baraka Hotel's story, mission, and vision. Discover why we're the preferred hotel in Kiryandongo District, Uganda.",
    images: ["/baraka/hero2.jpg"],
  },
  twitter: {
    title: "About Baraka Hotel | Our Story & Mission",
    description: "Learn about Baraka Hotel's story, mission, and vision.",
    images: ["/baraka/hero2.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

const whyUsPoints = [
  { icon: Building2, title: "Clean comfortable rooms" },
  { icon: DollarSign, title: "Affordable direct pricing" },
  { icon: Users, title: "Friendly professional staff" },
  { icon: MapPin, title: "Convenient highway location" },
  { icon: Shield, title: "Secure environment" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bpaper">
      <PageHero
        kicker="About Baraka Hotel"
        title="A trusted"
        accent="Bweyale stop"
        description="A welcoming haven for travelers and guests seeking comfort, great meals, and a peaceful stay."
        image="/baraka/hero2.jpg"
        primaryAction={{ href: "/rooms", label: "View Rooms" }}
        secondaryAction={{ href: "/contact", label: "Contact Us" }}
      />

      <section className="section-shell">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="image-frame">
              <Image
                src="/baraka/hero.jpg"
                alt="Baraka Hotel story"
                width={900}
                height={700}
                className="h-[420px] w-full object-cover md:h-[560px]"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-bnavy/[0.82] p-5 text-white backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-full bg-bred">
                    <Calendar className="size-5" />
                  </span>
                  <div>
                    <p className="text-2xl font-black">Dec 13, 2024</p>
                    <p className="text-sm text-white/70">Official opening</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="section-kicker">Our story</p>
              <h2 className="display-heading">Hospitality with a clear purpose</h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-bred" />
              <p className="section-copy mt-7">
                Officially opened on December 13, 2024 along Kampala-Gulu Highway in
                Bweyale, Kiryandongo, Baraka Hotel was created to provide quality
                hospitality to travelers and locals alike.
              </p>
              <p className="section-copy mt-5">
                We take pride in offering a welcoming environment where every guest feels
                valued, cared for, and ready for the next part of the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hotel-card-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-bred text-white">
                  <Target className="size-7" />
                </div>
                <h2 className="text-3xl font-black text-bnavy">Our Mission</h2>
                <p className="section-copy mt-4">
                  To provide exceptional hospitality, ensuring every guest feels welcomed,
                  valued, and cared for.
                </p>
              </CardContent>
            </Card>

            <Card className="hotel-card-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-bblue text-bnavy">
                  <Eye className="size-7" />
                </div>
                <h2 className="text-3xl font-black text-bnavy">Our Vision</h2>
                <p className="section-copy mt-4">
                  To be the preferred hotel in Kiryandongo District by offering superior
                  service and memorable guest experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <SectionHeader
            kicker="Why choose us"
            title="What makes us different"
            description="Baraka Hotel is built around practical comforts delivered with polish and genuine care."
            className="mb-12"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {whyUsPoints.map((point) => (
              <article key={point.title} className="hotel-card hotel-card-hover p-6 text-center">
                <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-bmist text-bblue">
                  <point.icon className="size-7" />
                </div>
                <h3 className="font-black text-bnavy">{point.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bnavy py-16 text-white">
        <div className="site-container text-center">
          <h2 className="text-3xl font-black md:text-5xl">Ready to experience Baraka Hotel?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/75">
            Book your stay today and discover why guests love coming back.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/rooms">View Our Rooms</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-bnavy"
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
