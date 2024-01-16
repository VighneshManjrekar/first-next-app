import db from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const tasks = await db.task.findMany();
  return NextResponse.json({ sucess: true, data: tasks });
};

export const POST = async (req) => {
  const {content} = await req.json();
  const task = await db.task.create({
    data: { content },
  });
  return Response.json({ success: true, data: task });
};
