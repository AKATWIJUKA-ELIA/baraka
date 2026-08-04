import { Bed, MapPin, Shield, UtensilsCrossed } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const highlights = [
  {
    icon: Bed,
    title: "Comfortable Rooms",
    description: "Clean, well-maintained rooms designed for a restful night.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fresh Meals",
    description: "Local and continental dishes prepared daily for guests.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "A convenient stop connecting northern, central, eastern, and western Uganda.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "24/7 security, reception support, and secure parking.",
  },
];

export function KeyHighlights() {
  return (
    <section className="section-shell bg-white">
      <div className="site-container">
        <SectionHeader
          kicker="Why guests choose us"
          title="Hospitality that feels easy"
          description="Every essential is handled with care, from a peaceful room to a good meal and safe parking."
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="hotel-card hotel-card-hover p-7">
              <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-bmist">
                <highlight.icon className="size-7 text-bblue" />
              </div>
              <h3 className="text-xl font-black text-bnavy">{highlight.title}</h3>
              <p className="mt-3 leading-7 text-bink/70">{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
