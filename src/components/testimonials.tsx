import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

export const testimonials = [
  {
    id: 1,
    name: "John Kulman",
    role: "Local Guide · 30 reviews",
    date: "a year ago",
    rating: 5,
    comment: "Awesome hotel, I enjoyed it so much",
  },
  {
    id: 2,
    name: "ssendiwala brian",
    role: "Local Guide · 46 reviews",
    date: "a year ago",
    rating: 5,
    comment: "It a nice place for travelers.",
  },
  {
    id: 3,
    name: "DANIEL Kasa",
    role: "2 reviews",
    date: "11 months ago",
    rating: 5,
    comment: "Very clean place",
  },
  {
    id: 4,
    name: "Ngabire Lillian",
    role: "1 review",
    date: "a year ago",
    rating: 5,
    comment:
      "It's the best Hotel ever in the whole of Bweyale and Kiryandongo district at large\nWater and power sources are constant their hospitality, Security and meals are so amazing",
  },
  {
    id: 5,
    name: "Mike Ug (Ronald)",
    role: "3 reviews",
    date: "2 months ago",
    rating: 5,
    comment: "Best accommodation offered",
  },
  {
    id: 6,
    name: "Christine Abalo",
    role: "2 reviews",
    date: "a year ago",
    rating: 4,
    comment: "A very nice place with the best security and services so far",
  },
];

const MAX_RATING = 5;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part.replace(/[^a-z]/gi, "")[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

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

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex gap-1">
                    {Array.from({ length: MAX_RATING }).map((_, index) => (
                      <Star
                        key={index}
                        className={
                          index < testimonial.rating
                            ? "size-5 fill-bblue text-bblue"
                            : "size-5 fill-bink/10 text-bink/20"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-bink/55">{testimonial.date}</span>
                </div>

                <p className="mt-5 flex-1 whitespace-pre-line leading-7 text-bink/75">
                  &quot;{testimonial.comment}&quot;
                </p>

                <div className="mt-7 flex items-center gap-4 border-t border-bline pt-5">
                  <div className="flex size-12 items-center justify-center rounded-full bg-bnavy text-sm font-black uppercase text-white">
                    {getInitials(testimonial.name)}
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
