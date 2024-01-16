import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/action";

const TaskList = async () => {
  const tasks = await getAllTasks();
  return (
    <div className="flex flex-col">
      {tasks?.length > 0 ? (
        <ul className="mt-8">
          {tasks?.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
            >
              <h2
                className={`text-md ${task.completed ? "line-through" : null}`}
              >
                {task.content}
              </h2>
              <div className="flex gap-6 items-center">
                <Link
                  href={`/tasks/${task.id}`}
                  className="btn btn-accent btn-xs"
                >
                  Edit
                </Link>
                <DeleteForm id={task.id} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-lg font-medium mt-8">No tasks</h1>
      )}
    </div>
  );
};

export default TaskList;
