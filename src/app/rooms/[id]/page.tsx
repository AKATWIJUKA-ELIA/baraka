import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { rooms, getRoomByClassification, getSerializableRoom, getSerializableRooms } from "@/lib/rooms-data";
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
  const room = getSerializableRoom(id);

  if (!room) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bpaper p-6">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-black text-bnavy sm:text-4xl">Room Not Found</h1>
          <p className="mb-8 text-bink/70">The room you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild>
            <Link href="/rooms">
              <ArrowLeft className="size-4" />
              Back to Rooms
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  // Get other rooms for suggestions (excluding current room)
  const otherRooms = getSerializableRooms().filter(r => r.id !== room.id).slice(0, 3);

  return <RoomDetailContent room={room} otherRooms={otherRooms} />;
}
