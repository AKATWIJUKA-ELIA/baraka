import { Navigation } from "@/components/navBar";
import { Footer } from "@/components/footer";
import { AboutContent } from "@/components/AboutContent";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <AboutContent />
      <Footer />
    </main>
  );
}
