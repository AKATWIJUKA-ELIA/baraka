import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./index.css";  
import { Navigation } from "@/components/navBar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://barakahotel.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Baraka Hotel | Luxury Accommodation & World-Class Hospitality",
    template: "%s | Baraka Hotel",
  },
  description: "Experience unparalleled luxury at Baraka Hotel in Uganda. Discover a sanctuary of elegance, comfort, and world-class hospitality with stunning rooms, premium amenities, exceptional service, and authentic Ugandan cuisine.",
  keywords: [
    "Baraka Hotel",
    "Uganda hotel",
    "luxury accommodation",
    "hotel in Uganda",
    "affordable hotel",
    "conference room Uganda",
    "Ugandan cuisine",
    "hotel near me",
    "comfortable rooms",
    "business hotel Uganda",
  ],
  authors: [{ name: "Baraka Hotel" }],
  creator: "Baraka Hotel",
  publisher: "Baraka Hotel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Baraka Hotel",
    title: "Baraka Hotel | Luxury Accommodation & World-Class Hospitality",
    description: "Experience unparalleled luxury at Baraka Hotel in Uganda. Discover a sanctuary of elegance, comfort, and world-class hospitality with stunning rooms, premium amenities, and exceptional service.",
    images: [
      {
        url: "/baraka/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Baraka Hotel - Luxury Accommodation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baraka Hotel | Luxury Accommodation & World-Class Hospitality",
    description: "Experience unparalleled luxury at Baraka Hotel in Uganda. Stunning rooms, premium amenities, and exceptional service.",
    images: ["/baraka/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Hotel",
};

// JSON-LD Structured Data for the Hotel
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Baraka Hotel",
  description: "Experience unparalleled luxury at Baraka Hotel in Uganda. A sanctuary of elegance, comfort, and world-class hospitality.",
  url: siteUrl,
  telephone: "+256768666505",
  image: `${siteUrl}/baraka/hero.jpg`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "UG",
  },
  geo: {
    "@type": "GeoCoordinates",
    // Update with actual coordinates
  },
  priceRange: "UGX 40,000 - UGX 110,000",
  starRating: {
    "@type": "Rating",
    ratingValue: "4",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
    { "@type": "LocationFeatureSpecification", name: "Restaurant" },
    { "@type": "LocationFeatureSpecification", name: "Conference Room" },
    { "@type": "LocationFeatureSpecification", name: "Rooftop" },
    { "@type": "LocationFeatureSpecification", name: "Free Parking" },
    { "@type": "LocationFeatureSpecification", name: "24/7 Security" },
    { "@type": "LocationFeatureSpecification", name: "Laundry Service" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Room Types",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "HotelRoom",
          name: "Standard Room",
          description: "A simple and comfortable room ideal for solo travelers",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "UGX",
          price: "40000",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "HotelRoom",
          name: "Standard Plus Room",
          description: "Extra convenience and comfort with added amenities",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "UGX",
          price: "50000",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "HotelRoom",
          name: "Deluxe Executive Room",
          description: "Spacious room perfect for business travelers",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "UGX",
          price: "70000",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}