import { Schema, model } from "mongoose";

const Session = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: [true, "Provide an user_id."],
    },
    access_token: {
      type: String,
      required: [true, "Provide an access token."],
    },
    refresh_token: {
      type: String,
      required: [true, "Provide a refresh token."],
    },
  },
  { timestamps: true }
);

export default model("Session", Session, "sessions");
