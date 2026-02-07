import { 
  Bed, 
  Bath, 
  Wifi, 
  Tv, 
  Fan, 
  ShowerHead,
  Users,
  Armchair,
  LucideIcon
} from "lucide-react";

export interface Room {
  id: number;
  name: string;
  classification: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  images: string[];
  guests: number;
  beds: number;
  bathrooms: number;
  size: string;
  amenities: string[];
  features: string[];
  badge: string;
  amenityIcons: LucideIcon[];
  isShared?: boolean;
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "Standard Room",
    classification: "standard",
    description: "A simple and comfortable room ideal for solo travelers looking for affordability and privacy.",
    longDescription: "Our Standard Room is designed with the budget-conscious traveler in mind, offering a clean, comfortable, and private space to rest after a day of activities. The room features a cozy single bed with fresh linens, a private bathroom with essential toiletries, and a reading desk for those who need to catch up on work or simply relax with a book. The room is equipped with a ceiling fan to keep you cool throughout the night. Perfect for solo travelers who value affordability without compromising on comfort and privacy.",
    price: 40000,
    image: "https://fra.cloud.appwrite.io/v1/storage/buckets/6983917c0008568a2555/files/69839a520025669d6ac4/view?project=6983916c002e052ab84d",
    images: ["/baraka/room.jpg", "/baraka/hero.jpg", "/baraka/hero2.jpg"],
    guests: 1,
    beds: 1,
    bathrooms: 1,
    size: "15 sqm",
    amenities: [
      "Comfortable bed",
      "Private bathroom and toilet",
      "Fan",
      "Reading table and chair",
      "Clean bedding and towels",
      "Daily housekeeping",
      "24/7 security",
    ],
    features: ["Comfortable bed", "Private bathroom", "Fan", "Reading desk"],
    badge: "Budget Friendly",
    amenityIcons: [Bed, Bath, Fan, Armchair],
  },
  {
    id: 2,
    name: "Standard Plus Room",
    classification: "standard-plus",
    description: "Enjoy extra convenience and comfort with added amenities for a more relaxing stay.",
    longDescription: "The Standard Plus Room offers an elevated experience for guests who desire a little extra comfort during their stay. This thoughtfully designed room features a spacious bed with premium linens, a private bathroom with hot water shower, and modern amenities including a flat-screen television and complimentary Wi-Fi. The room also includes a wardrobe for your belongings and a comfortable reading area. Whether you're traveling for business or leisure, the Standard Plus Room provides the perfect balance of comfort and value.",
    price: 50000,
    image: "https://fra.cloud.appwrite.io/v1/storage/buckets/6983917c0008568a2555/files/69839b28001100c89ca5/view?project=6983916c002e052ab84d",
    images: ["/baraka/room32.jpg", "/baraka/hero2.jpg", "/baraka/hero3.jpg"],
    guests: 2,
    beds: 1,
    bathrooms: 1,
    size: "20 sqm",
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
      "Daily housekeeping",
      "24/7 security",
    ],
    features: ["Hot shower", "Television", "Wi-Fi", "Wardrobe"],
    badge: "Most Popular",
    amenityIcons: [ShowerHead, Tv, Wifi, Bed],
  },
  {
    id: 3,
    name: "Deluxe Executive Room",
    classification: "deluxe-executive-room",
    description: "A spacious and well-designed room perfect for business travelers or guests who appreciate extra space and comfort.",
    longDescription: "Experience the finest accommodation at Baraka Hotel with our Deluxe Executive Room. This premium room is perfect for discerning travelers who value space, comfort, and functionality. The room features a large, comfortable bed with luxury linens, an ensuite bathroom with hot water shower, and a dedicated workspace with a large desk and two comfortable chairs - ideal for business travelers. Enjoy entertainment with DSTV and stay connected with complimentary high-speed Wi-Fi. The extra room space allows for relaxation and productivity, making this room the best choice for extended stays or those who simply want the best experience.",
    price: 70000,
    image: "https://fra.cloud.appwrite.io/v1/storage/buckets/6983917c0008568a2555/files/69839a9c002222c258b7/view?project=6983916c002e052ab84d",
    images: ["/baraka/room5.jpg", "/baraka/hero3.jpg", "/baraka/hero.jpg"],
    guests: 2,
    beds: 1,
    bathrooms: 1,
    size: "28 sqm",
    amenities: [
      "Comfortable bed",
      "Private bathroom and toilet",
      "Hot shower",
      "Television with DSTV",
      "Wardrobe",
      "Wi-Fi",
      "Large reading/work desk",
      "Two comfortable chairs",
      "Fan",
      "Extra room space",
      "Clean bedding and towels",
      "Mini fridge",
      "Daily housekeeping",
      "24/7 security",
    ],
    features: ["Large workspace", "DSTV", "Extra space", "Hot shower"],
    badge: "Best Value",
    amenityIcons: [Armchair, Tv, Wifi, ShowerHead],
  },
  {
    id: 4,
    name: "Twin Economy Room",
    classification: "twin-economy",
    description: "A budget-friendly twin room suitable for friends or travelers who prefer shared facilities.",
    longDescription: "The Twin Economy Room is an excellent choice for friends, colleagues, or travelers who don't mind sharing facilities and want to save on accommodation costs. This spacious room features two comfortable single beds, providing a restful night's sleep for both guests. The room is equipped with a ceiling fan, wooden chairs for relaxation, and complimentary Wi-Fi to keep you connected. While the bathroom and toilet facilities are shared with other guests on the same floor, they are cleaned regularly and maintained to high standards. This room offers great value for money and is perfect for travelers who prioritize location and comfort over private amenities.",
    price: 60000,
    image: "https://fra.cloud.appwrite.io/v1/storage/buckets/6983917c0008568a2555/files/69839a78000036441902/view?project=6983916c002e052ab84d",
    images: ["/baraka/room3.jpg", "/baraka/hero.jpg", "/baraka/hero2.jpg"],
    guests: 2,
    beds: 2,
    bathrooms: 0,
    size: "22 sqm",
    amenities: [
      "Two comfortable beds",
      "Fan",
      "Wooden chairs",
      "Access to shared bathroom and toilet",
      "Clean bedding and towels",
      "Wi-Fi",
      "Daily housekeeping",
      "24/7 security",
    ],
    features: ["Two beds", "Wi-Fi", "Shared bathroom", "Fan"],
    badge: "Great for Groups",
    amenityIcons: [Bed, Wifi, Fan, Users],
    isShared: true,
  },
];

// Serializable room type for passing to client components (excludes function references)
export type SerializableRoom = Omit<Room, 'amenityIcons'>;

export function getRoomByClassification(classification: string): Room | undefined {
  return rooms.find(room => room.classification === classification);
}

export function getSerializableRoom(classification: string): SerializableRoom | undefined {
  const room = rooms.find(room => room.classification === classification);
  if (!room) return undefined;
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { amenityIcons, ...serializableRoom } = room;
  return serializableRoom;
}

export function getSerializableRooms(): SerializableRoom[] {
  return rooms.map(({ amenityIcons, ...rest }) => rest);
}

