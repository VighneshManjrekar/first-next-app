"use client";
import { deleteTask } from "@/utils/action";
import { useFormStatus } from "react-dom";

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-error btn-xs" disabled={pending} type="submit">
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" value={id} name="id" />
      <Submit />
    </form>
  );
};

export default DeleteForm;
