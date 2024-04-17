import Product from '@/libs/models/Product';
import connect from "@/dbConnect/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { 
    name, description, price, brand, category, inStock, quantity, images, reviews
  } = await request.json();

  await connect();

  const newProduct = new Product({
    name,
    description,
    price,
    brand,
    category,
    inStock,
    quantity,
    images,
    reviews
  });

  try {
    await newProduct.save();
    return NextResponse.json(
      { msg: "продукт добавлен" },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ msg: err.message },
      { status: 500, }
    );
  }
};