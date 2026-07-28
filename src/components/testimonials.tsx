import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

export const testimonials = [
  {
    id: 1,
    name: "Grace Nakato",
    role: "Business Traveler",
    rating: 5,
    comment:
      "I stayed in the Deluxe Executive Room and it was spacious, quiet, and easy to work from. The rooftop was beautiful for evening relaxation.",
  },
  {
    id: 2,
    name: "Patrick Ochen",
    role: "Solo Traveler",
    rating: 5,
    comment:
      "Great location for travelers. The standard room was simple, comfortable, budget-friendly, and very clean.",
  },
  {
    id: 3,
    name: "Maria Atim",
    role: "Frequent Guest",
    rating: 5,
    comment:
      "The hotel has everything you need: comfortable rooms, a conference room, safe parking, laundry service, and tasty meals.",
  },
  {
    id: 4,
    name: "John Okello",
    role: "Transit Guest",
    rating: 5,
    comment:
      "The hotel is in a quiet area, which made sleeping easy. Staff were friendly and helped with directions and luggage.",
  },
  {
    id: 5,
    name: "Sarah Achieng",
    role: "Workshop Organizer",
    rating: 5,
    comment:
      "I organized a small workshop at Baraka Hotel. The conference room was spacious, air-conditioned, well-lit, and well managed.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell bg-bpaper">
      <div className="site-container">
        <SectionHeader
          kicker="Guest voices"
          title="Warm words from recent stays"
          description="Travelers, organizers, and returning guests trust Baraka Hotel for practical comfort and attentive service."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hotel-card-hover">
              <CardContent className="flex h-full flex-col p-7">
                <Quote className="size-10 text-bblue/45" />

                <div className="mt-5 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} className="size-5 fill-bblue text-bblue" />
                  ))}
                </div>

                <p className="mt-5 flex-1 leading-7 text-bink/75">
                  &quot;{testimonial.comment}&quot;
                </p>

                <div className="mt-7 flex items-center gap-4 border-t border-bline pt-5">
                  <div className="flex size-12 items-center justify-center rounded-full bg-bnavy text-sm font-black text-white">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-black text-bnavy">{testimonial.name}</p>
                    <p className="text-sm text-bink/60">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
