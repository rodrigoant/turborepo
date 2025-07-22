import { NextResponse } from "next/server";

export const GET = async () => {
  const response = await fetch("https://api.vercel.app/products");
  const data = await response.json();

  return NextResponse.json(data);
};
