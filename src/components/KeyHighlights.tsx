import Image from "next/image";
import { Bed, MapPin, Shield, UtensilsCrossed } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const highlights = [
  {
    icon: Bed,
    title: "Comfortable Rooms",
    description: "Clean, well-maintained rooms designed for a restful night.",
    image: "/baraka/room.jpg",
  },
  {
    icon: UtensilsCrossed,
    title: "Fresh Meals",
    description: "Local and continental dishes prepared daily for guests.",
    image: "/baraka/hero2.jpg",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "A convenient stop connecting northern, central, eastern, and western Uganda.",
    image: "/baraka/hero.jpg",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "24/7 security, reception support, and secure parking.",
    image: "/baraka/parking.jpg",
  },
];

export function KeyHighlights() {
  return (
    <section className="section-shell bg-white">
      <div className="site-container">
        <SectionHeader
          kicker="Why guests choose us"
          title="Hospitality that feels easy"
          align="split"
          description="Every essential is handled with care, from a peaceful room to a good meal and safe parking."
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-animate="stagger">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="hotel-card hotel-card-hover group">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bnavy/60 via-bnavy/10 to-transparent" />
              </div>
              <div className="relative px-7 pb-7">
                {/* Icon overlaps the photo's bottom edge */}
                <div className="-mt-7 mb-5 flex size-14 items-center justify-center rounded-2xl bg-white text-bblue shadow-[0_10px_30px_rgba(10,26,36,0.15)] transition group-hover:bg-bblue group-hover:text-bnavy">
                  <highlight.icon className="size-7" />
                </div>
                <h3 className="text-xl font-black text-bnavy">{highlight.title}</h3>
                <p className="mt-3 leading-7 text-bink/70">{highlight.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
