import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: [true, "введите название"],
      minLength: [2, "от 2 символов"],
      maxLength: [30, "не больше 30 символов"]
    },
    description: {
      type: String,
      minLength: [2, "от 2 символов"],
      maxLength: [1645, "слишком большой текст"]
    },
    price: {
      type: Number,
      required: [true, "введите цену"],
      minLength: [1, "от 1 символа"],
      maxLength: [11, "не больше 11 символов"]
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
      type: Number,
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