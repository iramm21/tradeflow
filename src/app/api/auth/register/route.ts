import { NextResponse } from "next/server";
import prisma from "@/db/prisma";

export async function POST(request: Request) {
  const { email, password, name } = await request.json();

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json(
      { error: "User already exists." },
      { status: 400 }
    );
  }

  // Create the user in Prisma
  const user = await prisma.user.create({
    data: {
      email,
      password,
      name,
    },
  });

  return NextResponse.json(user);
}
