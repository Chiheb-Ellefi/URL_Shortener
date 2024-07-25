import { model, Schema } from "mongoose";
import { genSalt, hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
const UserSchema = new Schema(
  {
    username: { type: String, required: [true, "Provide a username."] },
    email: {
      type: String,
      required: [true, "Provide an email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Provide a valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Provide a password"],
      minlength: [6, "Provide a valid password"],
    },
  },
  { timestamps: true }
);
UserSchema.pre("save", async function () {
  const salt = await genSalt(12);
  this.password = await hash(this.password, salt);
});

UserSchema.methods.createAccessToken = function () {
  return jwt.sign({ user_id: this.user_id }, process.env.JWT_SECRET, {
    algorithm: process.env.JWT_ALGO,
    expiresIn: process.env.JWT_EXPIRATION,
  });
};
UserSchema.methods.comparePassword = async function (password) {
  return await compare(password, this.password);
};

export default model("user", UserSchema);
