import express from "express";
import { createHotel, deleteHotel, getHotels, getOneHotel, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();



//create
router.post("/", verifyAdmin, createHotel);
//update
router.put("/:id", verifyAdmin, updateHotel)
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET one
router.get("/:id", getOneHotel)
//GET
router.get("/", getHotels)


export default router;