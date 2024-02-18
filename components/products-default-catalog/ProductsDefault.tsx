import { TNewProducts } from "@/types/catalog";
import phoneImg from './phone-sale.png';

export const newProducts: TNewProducts[] = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "Realme C51",
    price: 23999,
    brand: "realme",
    category: "phone",
    inStock: true,
    itemNew: true,
    images: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: phoneImg,
      },
      {
        color: "Gray",
        colorCode: "#808080",
        image: phoneImg,
      },
    ],
    reviews: [],
  },
  {
    id: "64a654593e91b8e73a351e9c",
    name: "Realme C31",
    price: 18999,
    brand: "realme",
    category: "phone",
    inStock: true,
    itemNew: true,
    images: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image: phoneImg,
      },
      {
        color: "Gray",
        colorCode: "#808080",
        image: phoneImg,
      },
    ],
    reviews: [],
  },
  {
    id: "64a654593e91b8e73a351e9d",
    name: "Realme C81",
    price: 38999,
    brand: "realme",
    category: "phone",
    inStock: true,
    itemNew: true,
    images: [
      {
        color: "Blue",
        colorCode: "#FFFFFF",
        image: phoneImg,
      },
      {
        color: "Gray",
        colorCode: "#808080",
        image: phoneImg,
      },
    ],
    reviews: [],
  },
];
