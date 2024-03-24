import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "введите email"],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "неверный email"]
    },
    name: {
      type: String,
      required: [true, "введите имя"],
      minLength: [2, "имя от 2 символов"],
      maxLength: [30, "не больше 30 символов"]
    },
    secondName: {
      type: String,
      required: [true, "введите имя"],
      minLength: [2, "имя от 2 символов"],
      maxLength: [30, "не больше 30 символов"]
    },
    thirdName: {
      type: String,
    },
    password: {
      type: String,

    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      default: 'user'
    }
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);