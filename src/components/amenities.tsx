import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { facilities } from "@/lib/facilities-data";

export function Amenities() {
  return (
    <section id="amenities" className="section-shell bg-white">
      <div className="site-container">
        <SectionHeader
          kicker="Amenities"
          title="Everything needed for an easy stay"
          align="split"
          description="Dining, coffee, rooftop views, conference space, secure parking, Wi-Fi, laundry, and round-the-clock support."
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-animate="stagger">
          {facilities.slice(0, 8).map((amenity) => (
            <Link
              key={amenity.id}
              href={`/facilities/${amenity.id}`}
              className="hotel-card hotel-card-hover group flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={amenity.images[0]}
                  alt={amenity.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bnavy/60 via-bnavy/10 to-transparent" />
              </div>
              <div className="relative flex flex-1 flex-col px-6 pb-6">
                {/* Icon overlaps the photo's bottom edge */}
                <div className="-mt-7 mb-5 flex size-14 items-center justify-center rounded-2xl bg-white text-bblue shadow-[0_10px_30px_rgba(10,26,36,0.15)] transition group-hover:bg-bblue group-hover:text-bnavy">
                  <amenity.icon className="size-7" />
                </div>
                <h3 className="text-lg font-black text-bnavy">{amenity.title}</h3>
                <p className="mt-2 text-sm leading-6 text-bink/70">{amenity.shortDescription}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-bred">
                  View details
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/amenities">
              View All Amenities
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="image-frame" data-animate="reveal">
            <Image
              src="/images/whyus.jpg"
              alt="Baraka Hotel guest spaces"
              width={900}
              height={650}
              className="h-[400px] w-full object-cover md:h-[540px]"
              data-parallax
            />
            <div className="absolute bottom-5 right-5 rounded-full bg-bred px-5 py-3 text-sm font-black text-white">
              Opened 2024
            </div>
          </div>
          <div data-animate="fade-left">
            <p className="section-kicker">Guest comfort</p>
            <h3 className="section-heading">Prepared for stopovers, stays, and small events</h3>
            <p className="section-copy mt-5">
              Baraka Hotel has quickly become a trusted stop for comfort and refreshment
              along the Kampala-Gulu Highway. The experience is practical, polished, and
              easy to settle into.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2" data-animate="stagger">
              {[
                "Clean and comfortable rooms",
                "Affordable direct rates",
                "Friendly professional staff",
                "Convenient highway location",
                "Secure environment",
                "Fresh meals and drinks",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-bpaper p-4 text-bink">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-bmist text-bblue">
                    <Check className="size-4" />
                  </span>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
