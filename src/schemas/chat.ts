/**
 * Schema: Chat
 */

import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Chat", chatSchema);
