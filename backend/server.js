import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import logger from "./src/utils/logger.js";
import connectCloudinary from "./src/configs/cloudinary.js";
import cors from "cors";
import connectDB from "./src/configs/connectDb.js";
import userRouter from "./src/routes/userRoutes.js";

// load environement variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// cloudinary setup and connectdb
connectCloudinary();
connectDB();

// determine environemnt and allow connections accordingly
const isProduction = process.env.NODE_ENV === "production";
const allowedOrigins = (
  isProduction ? process.env.PROD_ORIGINS : process.env.DEV_ORIGINS
)?.split(",");

// middleware to handle cors
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// sample route
app.get("/", (req, res) => {
  res.send("API is running for pathway.....");
});

// other routes
app.use("/api/user", userRouter);

// start server
app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
