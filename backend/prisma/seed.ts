import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  console.log("Seeding database...");
  await prisma.user.createMany({
      data:[
            {"username": "John Doe","email": "john.doe@example.com"},
            {"username":"elia light","email":"elia.light@example.com"},
            {"username":"Jane Smith","email":"jane.smith@example.com"},

      ]
  })
}

seed().then(() => {
      console.log("Seeding completed.");
      prisma.$disconnect();
})