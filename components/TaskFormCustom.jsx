"use client";
import { createTaskCustom } from "@/utils/action";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
  success: null,
  message: null,
};

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={`btn btn-primary uppercase join-item w-1/4`}
    >
      {pending ? "Creating Task..." : "Create Task"}
    </button>
  );
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.success == false) {
      toast.error(state.message);
    } else if (state.success == true) {
      toast.success(state.message);
    }
    return;
  }, [state]);
  return (
    <form action={formAction}>
      {/* {state.message && <p className="mb-4">{state.message}</p>} */}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-3/4"
          placeholder="Type here..."
          name="content"
          required
        />
        <Submit />
      </div>
    </form>
  );
};

export default TaskFormCustom;
