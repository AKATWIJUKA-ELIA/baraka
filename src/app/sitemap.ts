import { MetadataRoute } from "next";
import { rooms } from "@/lib/rooms-data";
import { facilities } from "@/lib/facilities-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://barakahotel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static pages
  const staticPages = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/rooms`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/restaurant`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/amenities`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/facilities`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/gallery`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Dynamic room pages
  const roomPages = rooms.map((room) => ({
    url: `${siteUrl}/rooms/${room.classification}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic facility pages
  const facilityPages = facilities.map((facility) => ({
    url: `${siteUrl}/facilities/${facility.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...roomPages, ...facilityPages];
}
