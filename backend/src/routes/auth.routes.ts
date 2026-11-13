import express from "express";
import { type Request, type Response } from "express";
import {prisma} from "../lib/prisma";
import bcrypt from "bcryptjs";

// const prisma = new prisma();

const router = express.Router();


router.post("/register", async (req: Request, res: Response) => {
  // Handle registration logic
  if (!req.body) {
    return res.status(400).json({ message: "Missing request body" });
  }
  const { username, email, password } = await req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.user.create({
      data:{
            username,
            email,
            role: "USER",
            password: hashedPassword
      }
  })

  res.status(200).json({ message: "Register route", data: { username, email } });
});


router.post("/login", (req: Request, res: Response) => {
  // Handle login logic
  res.status(200).json({ message: "Login route" });
});

export default router;