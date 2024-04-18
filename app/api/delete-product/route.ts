import Product from '@/libs/models/Product';
import connect from "@/dbConnect/dbConnect";
import { NextResponse } from "next/server";

export async function DELETE(request:any) {
  const id = request.nextUrl.searchParams.get("id");
  await connect();
  await Product.findByIdAndDelete(id);
  console.log(request)
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}