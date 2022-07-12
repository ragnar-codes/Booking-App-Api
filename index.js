import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomRoute from "./routes/room.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
const port = process.env.PORT
const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("Connected to the database")
    } catch(error){
        throw error;
    }
}
//middlewears
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        messagege: errorMessage,
        stack: err.stack
    })
})



app.get('/', (req, res) => {
    res.send('Hello World');
})









app.listen(port, () => {
    connect();
    console.log(`connected to port ${port}`)});