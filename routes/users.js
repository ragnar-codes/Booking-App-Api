import express from "express";
import { updateUser,deleteUser,getOneUser,getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("Hello User, you are logged in");
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello User, you are logged in and you can delete your account");
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello Admin, you are logged in and you can delete all accounts");
// })
//update
router.put("/:id", verifyUser, updateUser)
//DELETE
router.delete("/:id",verifyUser, deleteUser);
//GET one
router.get("/:id",verifyUser, getOneUser)
//GET
router.get("/", verifyAdmin, getUsers)



export default router;