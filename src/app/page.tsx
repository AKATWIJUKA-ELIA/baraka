import { Hero } from "@/components/hero";
import { BelowHero } from "@/components/BelowHero";
import { KeyHighlights } from "@/components/KeyHighlights";
import { Rooms } from "@/components/rooms";
import { Restaurant } from "@/components/Restaurant";
import { Amenities } from "@/components/amenities";
import { Testimonials } from "@/components/testimonials";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden ">
      <Hero />
      <BelowHero />
      <KeyHighlights />
      <Rooms />
      <Restaurant />
      <Amenities />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
