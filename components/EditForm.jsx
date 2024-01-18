"use client";
import { useState, useEffect } from "react";
import { getTask, updateTask } from "@/utils/action";
import { useFormStatus } from "react-dom";

const Submit = ({ isPending }) => {
  return (
    <button
      className="btn uppercase btn-primary btn-sm btn-block"
      disabled={isPending}
    >
      {isPending ? "Updating..." : "Update Task"}
    </button>
  );
};

const EditForm = ({ id }) => {
  const [task, setTask] = useState(null);
  const { pending } = useFormStatus();

  useEffect(() => {
    const fetchTask = async () => {
      const taskData = await getTask(id);
      setTask(taskData);
    };

    fetchTask();
  }, [id]);

  return task ? (
    <form
      action={updateTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" value={id} name="id" />
      <input
        type="text"
        className="input w-full input-bordered"
        name="content"
        required
        defaultValue={task?.content}
      />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultChecked={task?.completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <Submit isPending={pending} />
    </form>
  ) : (
    <span className="loading loading-spinner loading-md"></span>
  );
};

export default EditForm;
