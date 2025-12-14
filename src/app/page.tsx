import { Hero } from "@/components/hero";
import { Rooms } from "@/components/rooms";
import { Amenities } from "@/components/amenities";
import { Testimonials } from "@/components/testimonials";
export default function Home() {
  return (
    <main className="min-h-screen  w-full overflow-x-hidden">
      <Hero />
      <Rooms />
      <Amenities />
      <Testimonials />
      
    </main>
  );
}
