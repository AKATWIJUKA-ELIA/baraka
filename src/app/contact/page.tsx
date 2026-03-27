import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Baraka Hotel for reservations and inquiries. Call +256 768 666 505, WhatsApp us, or visit us along Kampala-Gulu Highway in Bweyale, Kiryandongo District, Uganda.",
  openGraph: {
    title: "Contact Us | Baraka Hotel",
    description: "Contact Baraka Hotel for reservations. Call +256 768 666 505 or visit us in Bweyale, Kiryandongo District, Uganda.",
    images: ["/baraka/hero.jpg"],
  },
  twitter: {
    title: "Contact Us | Baraka Hotel",
    description: "Contact Baraka Hotel for reservations. Call +256 768 666 505.",
    images: ["/baraka/hero.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
