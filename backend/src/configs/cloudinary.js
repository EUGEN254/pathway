import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';
import logger from '../utils/logger.js';

const connectCloudinary = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  } catch (error) {
    logger.warn(error)
  }
};

export default connectCloudinary;
