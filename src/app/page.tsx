import { Hero } from "@/components/hero";
import { BelowHero } from "@/components/BelowHero";
import { Rooms } from "@/components/rooms";
import { Amenities } from "@/components/amenities";
import { Testimonials } from "@/components/testimonials";
export default function Home() {
  return (
    <main className="min-h-screen  w-full overflow-x-hidden">
      <Hero />
      <BelowHero />
      <Rooms />
      <Amenities />
      <Testimonials />
      
    </main>
  );
}
