import { db, todo } from "@/db/schema";
import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const res = await sql`select * from todo14`;
//     return NextResponse.json(res.rows, { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(err, { status: 500 });
//   }
// }

//Get throught drizzle
export async function GET() {
  try {
    const res = await db.select().from(todo);
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 500 });
  }
}

//post
// export async function POST(req: NextRequest) {
//   try {
//     const { id, title, completed } = await req.json();
//     const res =
//       await sql`insert into todo14 (id,title,completed) values (${id},${title},${completed}) returning *`;
//     return NextResponse.json(res.rows, { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(err, { status: 500 });
//   }
// }

// post through drizzle
export async function POST(req: NextRequest) {
  try {
    const { title, completed } = await req.json();
    const res = await db.insert(todo).values({ title, completed }).returning();
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 500 });
  }
}

//put
// export async function PUT(req: NextRequest) {
//   try {
//     const { id, title, completed } = await req.json();
//     const res =
//       await sql`update todo14 set title = ${title}, completed = ${completed} where id = ${id} returning *`;
//     return NextResponse.json(res.rows, { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(err, { status: 500 });
//   }
// }

//put via drizzle
export async function PUT(req: NextRequest) {
  try {
    const { id, title, completed } = await req.json();
    const res = await db
      .update(todo)
      .set({ title, completed })
      .where(eq(todo.id, id))
      .returning();
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 500 });
  }
}

// //delete
// export async function DELETE(req: NextRequest) {
//   try {
//     const { id } = await req.json();
//     const res = await sql`delete from todo14 where id = ${id} returning *`;
//     return NextResponse.json(res.rows, { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(err, { status: 500 });
//   }
// }

//delete via drizzle
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const res = await db.delete(todo).where(eq(todo.id, id)).returning();
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 500 });
  }
}
