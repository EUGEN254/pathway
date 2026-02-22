import mongoose from "mongoose";
import validator from "validator"

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Invalid email"],
    },
    password: { type: String, default: null },
    termsAccepted: { type: Boolean, default: false },
    image: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    googleId: { type: String },
    emailVerified: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;
