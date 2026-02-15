import {
  Wifi,
  UtensilsCrossed,
  Car,
  Clock,
  Shield,
  Coffee,
  Tv,
  Building2,
  Shirt,
  Sun,
  Users,
  Wind,
  Lightbulb,
  PartyPopper,
  Eye,
  Phone,
  type LucideIcon,
} from "lucide-react";

export interface FacilityFeature {
  icon: LucideIcon;
  text: string;
}

export interface Facility {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  images: string[];
  features: FacilityFeature[];
}

export const facilities: Facility[] = [
  {
    id: "restaurant",
    title: "Restaurant",
    shortDescription: "Fresh local and continental dishes served daily",
    description: "Enjoy authentic Ugandan cuisine and continental favorites at our restaurant. We serve fresh, delicious meals prepared by our skilled chefs, from hearty breakfasts to satisfying dinners. Open daily from 6:30 AM to 10:00 PM.",
    icon: UtensilsCrossed,
    images: [
      "/baraka/hero2.jpg",
      "/baraka/_DSC7577.jpg",
      "/baraka/_DSC7578.jpg",
      "/baraka/_DSC7579.jpg",
    ],
    features: [
      { icon: UtensilsCrossed, text: "Local Ugandan cuisine" },
      { icon: UtensilsCrossed, text: "Continental favorites" },
      { icon: Clock, text: "Open 6:30 AM - 10:00 PM" },
      { icon: Users, text: "Spacious dining area" },
    ],
  },
  {
    id: "coffee-bar",
    title: "Coffee Bar",
    shortDescription: "Premium coffee and refreshing beverages",
    description: "Start your day or take a break with our premium coffee and refreshing beverages. Our coffee bar offers a variety of hot and cold drinks, perfect for relaxation or quick meetings.",
    icon: Coffee,
    images: [
      "/baraka/coffebar.jpg",
      "/baraka/_DSC7580.jpg",
      "/baraka/_DSC7581.jpg",
    ],
    features: [
      { icon: Coffee, text: "Premium coffee blends" },
      { icon: Coffee, text: "Fresh juices and smoothies" },
      { icon: Coffee, text: "Hot and cold beverages" },
      { icon: Clock, text: "Open all day" },
    ],
  },
  {
    id: "conference",
    title: "Conference Room",
    shortDescription: "Well-lit, air-conditioned room seating up to 45 people",
    description: "Perfect for meetings, workshops, and corporate events. Our well-equipped conference room provides a professional setting for your business needs with modern amenities and comfortable seating.",
    icon: Building2,
    images: [
      "/baraka/conference.jpg",
      "/baraka/conference1.jpg",
      "/baraka/conference2.jpg",
    ],
    features: [
      { icon: Users, text: "Seats up to 45 people" },
      { icon: Wind, text: "Well aerated and air-conditioned" },
      { icon: Lightbulb, text: "Bright and well lit" },
      { icon: Building2, text: "Ideal for meetings and workshops" },
    ],
  },
  {
    id: "rooftop",
    title: "Rooftop",
    shortDescription: "Open-air space perfect for events and relaxation",
    description: "An open-air relaxing atmosphere perfect for small events, gatherings, and evening relaxation with scenic views of the surroundings. Ideal for birthday parties, small celebrations, and enjoying the fresh evening breeze.",
    icon: Sun,
    images: [
      "/baraka/roof.jpg",
      "/baraka/roof1.jpg",
      "/baraka/roof2.jpg",
      "/baraka/roof3.jpg",
      "/baraka/roof4.jpg",
    ],
    features: [
      { icon: Sun, text: "Open-air and relaxing atmosphere" },
      { icon: PartyPopper, text: "Ideal for small events and birthday parties" },
      { icon: Eye, text: "Scenic views of the surroundings" },
      { icon: Wind, text: "Fresh and airy setting" },
    ],
  },
  {
    id: "wifi",
    title: "Free Wi-Fi",
    shortDescription: "Complimentary high-speed internet access",
    description: "Stay connected with our complimentary high-speed Wi-Fi available throughout the hotel. Whether you're working remotely or staying in touch with loved ones, enjoy seamless internet connectivity during your stay.",
    icon: Wifi,
    images: [
      "/baraka/hero.jpg",
      "/baraka/_DSC7604.jpg",
      "/baraka/_DSC7605.jpg",
    ],
    features: [
      { icon: Wifi, text: "High-speed connectivity" },
      { icon: Wifi, text: "Available in all rooms" },
      { icon: Wifi, text: "Free for all guests" },
      { icon: Clock, text: "24/7 availability" },
    ],
  },
  {
    id: "parking",
    title: "Safe Parking",
    shortDescription: "Spacious and secure parking area",
    description: "Rest easy knowing your vehicle is safe in our spacious, secure parking area with 24/7 surveillance. Our parking facility can accommodate multiple vehicles and is monitored round the clock for your peace of mind.",
    icon: Car,
    images: [
      "/baraka/parking.jpg",
      "/baraka/parking1.jpg",
      "/baraka/parking2.jpg",
    ],
    features: [
      { icon: Car, text: "Spacious parking area" },
      { icon: Shield, text: "Safe and secure" },
      { icon: Eye, text: "24/7 surveillance" },
      { icon: Clock, text: "Always available" },
    ],
  },
  {
    id: "laundry",
    title: "Laundry Service",
    shortDescription: "Professional washing and ironing at affordable rates",
    description: "Professional washing and ironing services at affordable rates. Keep your clothes fresh and clean during your stay with our efficient laundry service. Same-day service available upon request.",
    icon: Shirt,
    images: [
      "/baraka/laundry.jpg",
      "/baraka/laundry1.jpg",
      "/baraka/laundry2.jpg",
    ],
    features: [
      { icon: Shirt, text: "Professional washing" },
      { icon: Shirt, text: "Ironing services" },
      { icon: Building2, text: "Affordable rates" },
      { icon: Clock, text: "Same-day service available" },
    ],
  },
  {
    id: "security",
    title: "24/7 Security",
    shortDescription: "Round-the-clock security for your peace of mind",
    description: "Your safety is our priority. Our trained security personnel are on duty 24/7 to ensure a safe and secure environment for all our guests. The entire property is monitored with surveillance systems.",
    icon: Shield,
    images: [
      "/baraka/hero3.jpg",
      "/baraka/_DSC7619.jpg",
      "/baraka/_DSC7620.jpg",
    ],
    features: [
      { icon: Shield, text: "Trained security personnel" },
      { icon: Eye, text: "CCTV surveillance" },
      { icon: Clock, text: "24/7 monitoring" },
      { icon: Shield, text: "Safe environment" },
    ],
  },
  {
    id: "dstv",
    title: "DSTV Entertainment",
    shortDescription: "Enjoy live football and international news",
    description: "Stay entertained with our DSTV service. Watch live football matches, stay updated with local and international news, and enjoy a variety of entertainment channels from the comfort of your room.",
    icon: Tv,
    images: [
      "/baraka/dstv.jpg",
      "/baraka/dstv1.jpg",
      "/baraka/dstv2.jpg",
    ],
    features: [
      { icon: Tv, text: "Live football matches" },
      { icon: Tv, text: "Local and international news" },
      { icon: Tv, text: "Entertainment channels" },
      { icon: Tv, text: "Available in all rooms" },
    ],
  },
  {
    id: "reception",
    title: "24/7 Reception",
    shortDescription: "Always available to assist with your needs",
    description: "Our friendly reception staff is available around the clock to assist you with check-ins, check-outs, inquiries, and any special requests. We're here to make your stay as comfortable as possible.",
    icon: Clock,
    images: [
      "/baraka/_DSC7553.jpg",
      "/baraka/_DSC7554.jpg",
      "/baraka/_DSC7559.jpg",
    ],
    features: [
      { icon: Clock, text: "24-hour availability" },
      { icon: Phone, text: "Assistance with inquiries" },
      { icon: Users, text: "Friendly staff" },
      { icon: Building2, text: "Easy check-in/check-out" },
    ],
  },
];

export function getFacilityById(id: string): Facility | undefined {
  return facilities.find((facility) => facility.id === id);
}

export function getSerializableFacility(id: string) {
  const facility = getFacilityById(id);
  if (!facility) return null;
  
  return {
    id: facility.id,
    title: facility.title,
    shortDescription: facility.shortDescription,
    description: facility.description,
    images: facility.images,
    features: facility.features.map((f) => ({ text: f.text })),
  };
}

export function getSerializableFacilities() {
  return facilities.map((facility) => ({
    id: facility.id,
    title: facility.title,
    shortDescription: facility.shortDescription,
    description: facility.description,
    images: facility.images,
    features: facility.features.map((f) => ({ text: f.text })),
  }));
}
