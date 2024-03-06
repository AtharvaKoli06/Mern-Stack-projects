import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./apiError.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECURE,
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) throw new ApiError(404, "File path not provided");

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    if (!response || !response.public_id) {
      throw new ApiError(400, "Cloudinary upload failed");
    }
    await delay(1000);
    await fs.promises.unlink(localFilePath);
    console.log("File is deleted successfully");
    return response;
  } catch (error) {
    console.error("Error uploading file:", error);
    await fs.promises.unlink(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
