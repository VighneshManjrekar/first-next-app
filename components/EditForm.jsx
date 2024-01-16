'use client'
import { getTask, updateTask } from "@/utils/action";
import { useFormStatus } from "react-dom";

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="btn uppercase btn-primary btn-sm btn-block"
      type="submit"
      disabled={pending}
    >
      {pending ? "Updating..." : "Update Task"}
    </button>
  );
};

const EditForm = async ({ id }) => {
  const task = await getTask(id);
  const updateTaskWithId = updateTask.bind(null, task.id);
  return (
    <form
      action={updateTaskWithId}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input
        type="text"
        className="input w-full input-bordered"
        name="content"
        required
        defaultValue={task.content}
      />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <Submit />
    </form>
  );
};

export default EditForm;
