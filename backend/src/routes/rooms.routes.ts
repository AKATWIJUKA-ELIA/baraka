 import express from "express";
 const router = express.Router();
 
 
 router.post("/", (req, res) => {
   // Handle room creation logic
   res.status(200).json({ message: "Room created" });
 });
 
//  get all rooms
 router.get("/", (req, res) => {

   res.status(200).json({ message: "All rooms retrieved" });
 });

//  get a specific room by ID
 router.get("/:id", (req, res) => {
   const roomId = req.params.id;
   // Handle logic to retrieve a specific room by ID
   res.status(200).json({ message: `Room with ID ${roomId} retrieved` });
 });
 
 export default router;