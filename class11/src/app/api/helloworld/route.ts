import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "hello" });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  return NextResponse.json(body);
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  return NextResponse.json(body, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  return NextResponse.json(body, { status: 222 });
}
