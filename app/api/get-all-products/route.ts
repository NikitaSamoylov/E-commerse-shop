import Product from '@/libs/models/Product';
import connect from "@/dbConnect/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (request:any) => {
  await connect();

  const fetchedProducts = await Product.find();
  return NextResponse.json(fetchedProducts)
};