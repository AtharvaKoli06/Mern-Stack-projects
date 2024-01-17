import dotenv from "dotenv";
import { connectDB } from "./db/indexDB.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

app.on("error", (error) => {
  console.log("ERROR", error);
  throw error;
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Listening on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(`Mongo DB Connection failed${err.message}`));
