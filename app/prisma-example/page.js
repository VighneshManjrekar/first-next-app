import prisma from "@/utils/db";
export const dynamic = "force-dynamic";

const prismaHandler = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return tasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandler();
  return (
    <div>
      <h1 className="text-7xl">Tasks</h1>
      {tasks &&
        tasks.map((task) => (
          <h2 key={task.id} className="text-xl py-2 mt-8">
            {task.content} {task.completed ? "✅" : "❌"}
          </h2>
        ))}
    </div>
  );
};

export default PrismaExample;
