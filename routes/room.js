import express from "express";
import { createRoom, deleteRoom, getOneRoom, getRooms, updateRoom } from "../controllers/room.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();


//create
router.post("/:hotelId", verifyAdmin, createRoom);
//update
router.put("/:id", verifyAdmin, updateRoom)
//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
//GET one
router.get("/:id", getOneRoom)
//GET
router.get("/", getRooms)

export default router;