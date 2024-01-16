"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const createTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({
    data: { content },
  });
  revalidatePath("/tasks");
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: { id },
  });
};

export const updateTask = async (id, formData) => {
  const content = formData.get("content");
  const completed = Boolean(formData.get("completed"));
  await prisma.task.update({
    where: { id },
    data: { content, completed },
  });
  redirect("/tasks");
};

export const createTaskCustom = async (prevState, formData) => {
  const content = formData.get("content");
  const Task = z.object({
    content: z.string().min(5),
  });
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: { content },
    });
    revalidatePath("/tasks");
    return { success: true, message: "Task added" };
  } catch (error) {
    console.log(error);
    let err = "";
    for (let e of error.errors) {
      err += e.message;
    }
    return { success: false, message: err };
  }
};
