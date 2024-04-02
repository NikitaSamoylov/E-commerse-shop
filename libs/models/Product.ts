import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "введите название"],
      minLength: [2, "от 2 символов"],
      maxLength: [58, "не больше 58 символов"]
    },
    description: {
      type: String,
      required: [true, "введите название"],
      minLength: [2, "от 2 символов"],
      maxLength: [1050, "слишком большой текст"]
    },
    price: {
      type: String,
      required: [true, "введите цену"],
      minLength: [1, "от 1 символа"],
      maxLength: [12, "не больше 12 символов"]
    },
    brand: {
      type: String,
      required: [true, "введите бренд"],
      minLength: [2, "от 2 символов"],
      maxLength: [30, "не больше 30 символов"]
    },
    category: {
      type: String,
      required: [true, "введите категорию товара"],
      minLength: [2, "от 2 символов"],
      maxLength: [30, "не больше 30 символов"]
    },
    inStock: {
      required: [true, "товар в наличии?"],
      type: Boolean,
    },
    quantity: {
      type: String,
      required: [true, "какое количество товара в наличии?"],
      minLength: [1, "от 1 символа"],
    },
    images: [
      {
        color: String,
        colorCode: String,
        image: [],
      }
    ],
    reviews: []
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", productSchema);