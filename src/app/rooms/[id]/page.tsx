import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { rooms, getRoomByClassification } from "@/lib/rooms-data";
import { RoomDetailContent } from "@/components/RoomDetailContent";

interface RoomDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: RoomDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const room = getRoomByClassification(id);

  if (!room) {
    return {
      title: "Room Not Found",
      description: "The requested room could not be found at Baraka Hotel.",
    };
  }

  return {
    title: room.name,
    description: `${room.description} Book the ${room.name} at Baraka Hotel for UGX ${room.price.toLocaleString()} per night. ${room.size}, ${room.beds} bed(s), ${room.guests} guest(s).`,
    openGraph: {
      title: `${room.name} | Baraka Hotel`,
      description: `${room.description} UGX ${room.price.toLocaleString()} per night.`,
      images: room.images.length > 0 ? [room.images[0]] : ["/baraka/hero.jpg"],
    },
    twitter: {
      title: `${room.name} | Baraka Hotel`,
      description: `${room.description} UGX ${room.price.toLocaleString()} per night.`,
      images: room.images.length > 0 ? [room.images[0]] : ["/baraka/hero.jpg"],
    },
    alternates: {
      canonical: `/rooms/${room.classification}`,
    },
  };
}

export function generateStaticParams() {
  return rooms.map((room) => ({
    id: room.classification,
  }));
}

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { id } = await params;
  const room = getRoomByClassification(id);

  if (!room) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black/20 p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">Room Not Found</h1>
          <p className="text-stone-600 mb-8">The room you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/rooms">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Rooms
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return <RoomDetailContent room={room} />;
}
