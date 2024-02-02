import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

//Second Way
export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      (`${process.env.URL_DB_CONN}/${DB_NAME}`,
      { writeConcern: { w: "majority" } })
    );
    // console.log(connectionInstance);
    console.log(
      `\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};
