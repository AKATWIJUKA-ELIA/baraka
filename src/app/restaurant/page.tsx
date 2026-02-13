import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Coffee, 
  Clock,
  Beef,
  Soup,
  Sandwich,
  CupSoda,
  Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://barakahotel.com";

export const metadata: Metadata = {
  title: "Restaurant & Coffee Bar",
  description: "Enjoy authentic Ugandan cuisine and continental favorites at Baraka Hotel's restaurant. View our menu featuring local dishes, breakfast, snacks, and beverages at affordable prices.",
  openGraph: {
    title: "Restaurant & Coffee Bar | Baraka Hotel",
    description: "Enjoy authentic Ugandan cuisine and continental favorites. View our menu featuring local dishes and beverages.",
    images: ["/baraka/hero2.jpg"],
  },
  twitter: {
    title: "Restaurant & Coffee Bar | Baraka Hotel",
    description: "Enjoy authentic Ugandan cuisine and continental favorites at Baraka Hotel.",
    images: ["/baraka/hero2.jpg"],
  },
  alternates: {
    canonical: "/restaurant",
  },
};

// JSON-LD Structured Data for Restaurant
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Baraka Hotel Restaurant",
  description: "Restaurant offering authentic Ugandan cuisine and continental favorites at Baraka Hotel.",
  url: `${siteUrl}/restaurant`,
  telephone: "+256768666505",
  image: `${siteUrl}/baraka/hero2.jpg`,
  servesCuisine: ["Ugandan", "African", "Continental"],
  priceRange: "UGX 2,000 - UGX 25,000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kampala-Gulu Highway",
    addressLocality: "Bweyale",
    addressRegion: "Kiryandongo District",
    addressCountry: "UG",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "06:30",
      closes: "22:00",
    },
  ],
  menu: `${siteUrl}/restaurant`,
  hasMenu: {
    "@type": "Menu",
    name: "Restaurant Menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Breakfast",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Full English Breakfast", offers: { "@type": "Offer", price: "15000", priceCurrency: "UGX" } },
          { "@type": "MenuItem", name: "Rolex (Chapati & Eggs)", offers: { "@type": "Offer", price: "5000", priceCurrency: "UGX" } },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Main Dishes",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Grilled Tilapia with Sides", offers: { "@type": "Offer", price: "25000", priceCurrency: "UGX" } },
          { "@type": "MenuItem", name: "Beef Stew with Rice", offers: { "@type": "Offer", price: "18000", priceCurrency: "UGX" } },
        ],
      },
    ],
  },
};

const menuCategories = [
  {
    title: "Breakfast",
    icon: Coffee,
    items: [
      { name: "Full English Breakfast", price: "UGX 15,000" },
      { name: "Rolex (Chapati & Eggs)", price: "UGX 5,000" },
      { name: "Katogo", price: "UGX 8,000" },
      { name: "Toast with Eggs", price: "UGX 7,000" },
      { name: "Pancakes", price: "UGX 10,000" },
    ],
  },
  {
    title: "Main Dishes",
    icon: Beef,
    items: [
      { name: "Grilled Tilapia with Sides", price: "UGX 25,000" },
      { name: "Beef Stew with Rice", price: "UGX 18,000" },
      { name: "Chicken Curry", price: "UGX 20,000" },
      { name: "Goat Stew (Luwombo)", price: "UGX 22,000" },
      { name: "Pork Ribs", price: "UGX 25,000" },
    ],
  },
  {
    title: "Local Favorites",
    icon: Soup,
    items: [
      { name: "Matooke with Groundnut Sauce", price: "UGX 12,000" },
      { name: "Posho & Beans", price: "UGX 8,000" },
      { name: "Cassava with Fish", price: "UGX 15,000" },
      { name: "Millet Bread & Sim Sim", price: "UGX 10,000" },
      { name: "Sweet Potatoes & Greens", price: "UGX 8,000" },
    ],
  },
  {
    title: "Snacks & Light Bites",
    icon: Sandwich,
    items: [
      { name: "Samosas (3 pcs)", price: "UGX 5,000" },
      { name: "Chips (French Fries)", price: "UGX 8,000" },
      { name: "Chicken Wings", price: "UGX 15,000" },
      { name: "Chapati", price: "UGX 2,000" },
      { name: "Mandazi (5 pcs)", price: "UGX 3,000" },
    ],
  },
];

const beverages = [
  { name: "Fresh Juice", price: "UGX 5,000" },
  { name: "Soda", price: "UGX 2,500" },
  { name: "Bottled Water", price: "UGX 1,500" },
  { name: "Coffee", price: "UGX 5,000" },
  { name: "Tea", price: "UGX 3,000" },
  { name: "Beer (Local)", price: "UGX 5,000" },
  { name: "Beer (Import)", price: "UGX 8,000" },
  { name: "Wine (Glass)", price: "UGX 15,000" },
];

const openingHours = [
  { day: "Breakfast", time: "6:30 AM - 10:00 AM" },
  { day: "Lunch", time: "12:00 PM - 3:00 PM" },
  { day: "Dinner", time: "6:00 PM - 10:00 PM" },
  { day: "Coffee Bar", time: "6:30 AM - 10:00 PM" },
];

export default function RestaurantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 bg-stone-900">
          <div className="absolute inset-0">
            <Image
              src="/baraka/hero2.jpg"
              alt="Restaurant at Baraka Hotel"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge className="bg-bred/20 text-bred border-bred/30 mb-4">
              Dining at Baraka
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Restaurant & <span className="text-bblue">Coffee Bar</span>
            </h1>
            <p className="text-stone-300 text-lg md:text-xl max-w-3xl mx-auto">
              Our restaurant offers a variety of freshly prepared meals, including local 
              Ugandan dishes and continental favorites. Whether you&apos;re in the mood for 
              a hearty meal or a refreshing drink, we&apos;ve got you covered.
            </p>
          </div>
        </section>

      {/* Opening Hours */}
      <section className="py-12 bg-bred">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {openingHours.map((item, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex items-center gap-2 justify-center mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">{item.day}</span>
                </div>
                <span className="text-amber-100">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-bblue/10 text-bblue border-none mb-4">
              Our Menu
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Feast Like a King, Spend Small
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              From refreshing drinks to satisfying meals, we serve freshly prepared 
              dishes made with quality ingredients.
            </p>
          </div>

          {/* Menu Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {menuCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="bg-stone-800 text-white p-4 flex items-center gap-3">
                  <category.icon className="w-6 h-6 text-bblue" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex justify-between items-center border-b border-stone-100 pb-3 last:border-0 last:pb-0">
                        <span className="text-stone-700">{item.name}</span>
                        <span className="font-semibold text-bred">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Beverages Section */}
          <div className="bg-stone-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <CupSoda className="w-8 h-8 text-bblue" />
              <h3 className="text-2xl font-bold text-stone-800">Beverages</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {beverages.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-stone-700 font-medium">{item.name}</p>
                  <p className="text-bred font-bold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-bred/10 text-bred border-none mb-4">
              Food Gallery
            </Badge>
            <h2 className="text-3xl font-bold text-stone-800">
              A Taste of What Awaits
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src={`/baraka/hero${num % 3 === 0 ? '' : num % 3}.jpg`}
                  alt={`Food ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dine?</h2>
          <p className="text-stone-300 mb-8 max-w-xl mx-auto">
            Visit our restaurant or make a reservation. We look forward to serving you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-bred hover:bg-bred/90 text-white px-8"
              asChild
            >
              <Link href="/contact">Make Reservation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8"
              asChild
            >
              <a href="tel:+256768666505">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
