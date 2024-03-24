import User from "@/libs/models/User";
import connect from "@/dbConnect/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, secondName, thirdName, password, name, role } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return NextResponse.json(
      { msg: "такой email уже зарегистрирован" }, 
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    name,
    secondName,
    thirdName,
    password: hashedPassword,
    role,
  });

  try {
    await newUser.save();
    return NextResponse.json(
      {msg: "учетная запись создана"}, 
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({msg: err.message}, 
    {status: 500,}
    );
  }
};