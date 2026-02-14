import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users,
  Check,
  Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rooms & Accommodation",
  description: "Browse Baraka Hotel rooms - Standard, Standard Plus, Deluxe Executive, and Twin Economy rooms. Affordable accommodation in Kiryandongo, Uganda starting from UGX 40,000 per night.",
  openGraph: {
    title: "Rooms & Accommodation | Baraka Hotel",
    description: "Browse our rooms - Standard, Standard Plus, Deluxe Executive, and Twin Economy. Affordable accommodation starting from UGX 40,000/night.",
    images: ["/baraka/room2.jpg"],
  },
  twitter: {
    title: "Rooms & Accommodation | Baraka Hotel",
    description: "Affordable, comfortable rooms in Kiryandongo, Uganda starting from UGX 40,000 per night.",
    images: ["/baraka/room2.jpg"],
  },
  alternates: {
    canonical: "/rooms",
  },
};

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    description: "A simple and comfortable room ideal for solo travelers looking for affordability and privacy.",
    price: 40000,
    image: "/baraka/hero.jpg",
    guests: 1,
    amenities: [
      "Comfortable bed",
      "Private bathroom and toilet",
      "Fan",
      "Reading table and chair",
      "Clean bedding and towels",
    ],
    badge: "Budget Friendly",
  },
  {
    id: 2,
    name: "Standard Plus Room",
    description: "Enjoy extra convenience and comfort with added amenities for a more relaxing stay.",
    price: 50000,
    image: "/baraka/hero2.jpg",
    guests: 2,
    amenities: [
      "Comfortable bed",
      "Private bathroom and toilet",
      "Hot shower",
      "Television",
      "Wardrobe",
      "Wi-Fi",
      "Fan",
      "Reading table and chair",
      "Clean bedding and towels",
    ],
    badge: "Most Popular",
  },
  {
    id: 3,
    name: "Deluxe Executive Room",
    description: "A spacious and well-designed room perfect for business travelers or guests who appreciate extra space and comfort.",
    price: 70000,
    image: "/baraka/hero3.jpg",
    guests: 2,
    amenities: [
      "Comfortable bed",
      "Private bathroom and toilet",
      "Hot shower",
      "Television",
      "Wardrobe",
      "Wi-Fi",
      "Large reading/work desk",
      "Two comfortable chairs",
      "Fan",
      "Extra room space",
      "Clean bedding and towels",
    ],
    badge: "Best Value",
  },
  {
    id: 4,
    name: "Twin Economy Room",
    description: "A budget-friendly twin room suitable for friends or travelers who prefer shared facilities.",
    price: 60000,
    image: "/baraka/hero.jpg",
    guests: 2,
    amenities: [
      "Two comfortable beds",
      "Fan",
      "Wooden chairs",
      "Access to shared bathroom and toilet",
      "Clean bedding and towels",
      "Wi-Fi",
    ],
    badge: "Great for Groups",
    isShared: true,
  },
];

export default function RoomsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-stone-900">
        <div className="absolute inset-0">
          <Image
            src="/baraka/room2.jpg"
            alt="Rooms at Baraka Hotel"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* <Badge className="bg-bred/20 text-bred border-bred/30 mb-4">
            Our Rooms
          </Badge> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Comfortable <span className="text-bblue">Accommodation</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-3xl mx-auto">
            At Baraka Hotel, we offer a range of clean and comfortable rooms to suit different 
            needs and budgets. Whether you&apos;re stopping over for a night or staying longer, 
            you&apos;ll find the right space to relax and recharge.
          </p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <Card key={room.id} className="overflow-hidden border-0 shadow-xl">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-bred text-white border-none">
                      {room.badge}
                    </Badge>
                    {room.isShared && (
                      <Badge className="absolute top-4 right-4 bg-stone-700 text-white border-none">
                        Shared Facilities
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-2 text-stone-500 mb-3">
                      <Users className="w-4 h-4" />
                      <span>{room.guests} {room.guests > 1 ? 'Guests' : 'Guest'}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
                      {room.name}
                    </h2>
                    
                    <p className="text-stone-600 text-lg mb-6">
                      {room.description}
                    </p>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-stone-800 mb-3">Amenities:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.map((amenity, i) => (
                          <div key={i} className="flex items-center gap-2 text-stone-600">
                            <Check className="w-4 h-4 text-bblue flex-shrink-0" />
                            <span className="text-sm">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
                      <div>
                        <span className="text-3xl font-bold text-bred">
                          UGX {room.price.toLocaleString()}
                        </span>
                        <span className="text-stone-500 ml-2">/ night</span>
                      </div>
                      <a
                        href={`https://wa.me/256768666505?text=${encodeURIComponent(
                          `Hello Baraka Hotel!\n\nI would like to book the following room:\n\n🏨 Room: ${room.name}\n💰 Price: UGX ${room.price.toLocaleString()} per night\n👥 Guests: ${room.guests}\n\nPlease let me know the availability. Thank you!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-bred hover:bg-bred/90 text-white px-8">
                          Book Now
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">
            Contact us to make a reservation or inquire about availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-bblue hover:bg-bblue/90 text-white px-8 py-6 text-lg rounded-xl">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
            <a href="tel:+256768666505">
              <Button size="lg" variant="outline" className="border-stone-600 text-white hover:bg-stone-800 px-8 py-6 text-lg rounded-xl">
                Call: +256 768 666 505
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
