/**
 * MongoDB
 */

import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_ID, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;

async function connect() {
  mongoose.set("debug", true);
  mongoose
    .connect(`mongodb://${MONGO_ID}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`, {
      dbName: "twitchu",
    })
    .then(() => console.log("[mongo] MongoDB connected"))
    .catch((error) => console.error("[mongo] MongoDB connection error: ", error));
}

export default {
  connect,
};
