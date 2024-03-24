import User from "@/libs/models/User";
import connect from "@/dbConnect/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const {
    id,
    name,
    secondName,
    thirdName,
    email,
    phone
  } = await request.json();

  await connect();

  const existingUser = await User.findOne({ _id: id });

  if (!existingUser) {
    console.log(id)
    console.log(existingUser)
    return NextResponse.json(
      { msg: "ошибка авторизации" },
      { status: 400 }
    );
  }

  try {
    await User.findOneAndUpdate({ _id: id }, { name, secondName, thirdName, phone, email }, {  
      new: true
    })
    return NextResponse.json(
      { msg: "имя пользователя обновлено" },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json({ msg: err.message },
      { status: 500, }
    );
  }
};