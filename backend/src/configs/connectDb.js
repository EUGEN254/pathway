import mongoose from "mongoose";
import "dotenv/config";
import logger from "../utils/logger.js";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      logger.info("HandShaked with database"),
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/pathway`);
  } catch (error) {
    logger.error(error);
  }
};

export default connectDB;
