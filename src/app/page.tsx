import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Rooms } from "@/components/rooms";
import { Amenities } from "@/components/amenities";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Rooms />
      <Amenities />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
