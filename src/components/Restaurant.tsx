import Image from "next/image";
import Link from "next/link";
import { Clock, Coffee, Sparkles, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Local & Continental",
    description: "Ugandan favorites and familiar classics served fresh.",
  },
  {
    icon: Coffee,
    title: "Coffee Bar",
    description: "Hot drinks, fresh juice, and easy meeting moments.",
  },
  {
    icon: Sparkles,
    title: "Fresh Ingredients",
    description: "Simple, satisfying meals prepared with care.",
  },
  {
    icon: Clock,
    title: "Daily Dining",
    description: "Breakfast, lunch, dinner, and drinks for hotel guests.",
  },
];

export function Restaurant() {
  return (
    <section id="restaurant" className="section-shell bg-bnavy text-white">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase text-bblue">Restaurant & coffee bar</p>
            <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Feast well, pause longer.
            </h2>
            <div className="mt-6 h-1 w-20 rounded-full bg-bred" />
            <p className="mt-7 text-lg leading-8 text-white/75">
              From refreshing drinks to satisfying meals, our restaurant and coffee bar
              offer a polished place to unwind after a long journey.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-bblue text-bnavy">
                    <feature.icon className="size-5" />
                  </div>
                  <h3 className="font-black text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/restaurant">View Dining</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white hover:text-bnavy"
                asChild
              >
                <Link href="/contact">Make Reservation</Link>
              </Button>
            </div>
          </div>

          <div className="image-frame border-white/10">
            <Image
              src="/baraka/coffebar.jpg"
              alt="Restaurant and coffee bar at Baraka Hotel"
              width={900}
              height={760}
              className="h-[430px] w-full object-cover md:h-[620px]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bnavy/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/15 bg-bnavy/70 p-5 text-white backdrop-blur">
              <p className="text-lg font-black text-bblue">Open Daily</p>
              <p className="mt-1 text-sm text-white/70">Breakfast, lunch, dinner, and coffee service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
