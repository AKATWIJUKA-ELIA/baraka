import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FacilityDetailContent } from "@/components/FacilityDetailContent";
import {
  getFacilityById,
  getSerializableFacility,
  getSerializableFacilities,
  facilities,
} from "@/lib/facilities-data";

interface FacilityPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return facilities.map((facility) => ({
    id: facility.id,
  }));
}

export async function generateMetadata({ params }: FacilityPageProps): Promise<Metadata> {
  const { id } = await params;
  const facility = getFacilityById(id);

  if (!facility) {
    return {
      title: "Facility Not Found",
    };
  }

  return {
    title: `${facility.title} | Baraka Hotel`,
    description: facility.description,
    openGraph: {
      title: `${facility.title} | Baraka Hotel`,
      description: facility.shortDescription,
      images: facility.images[0] ? [facility.images[0]] : [],
    },
    twitter: {
      title: `${facility.title} | Baraka Hotel`,
      description: facility.shortDescription,
      images: facility.images[0] ? [facility.images[0]] : [],
    },
    alternates: {
      canonical: `/facilities/${facility.id}`,
    },
  };
}

export default async function FacilityPage({ params }: FacilityPageProps) {
  const { id } = await params;
  const facility = getSerializableFacility(id);

  if (!facility) {
    notFound();
  }

  // Get other facilities (excluding current one)
  const otherFacilities = getSerializableFacilities()
    .filter((f) => f.id !== id)
    .slice(0, 3);

  return <FacilityDetailContent facility={facility} otherFacilities={otherFacilities} />;
}
