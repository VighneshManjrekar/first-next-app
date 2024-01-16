import TaskList from "@/components/TaskList";
import prisma from "@/utils/db";
export const dynamic = "force-dynamic";

const fetchTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

const Tasks = async () => {
  const tasks = await fetchTasks();
  return (
    <div className="max-w-lg">
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;
