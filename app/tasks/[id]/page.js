import EditForm from "@/components/EditForm";
import Link from "next/link";

const Task = async ({ params }) => {
  return (
    <>
      <div className="mb-6">
        <Link href="/tasks" className="btn btn-accent btn-sm mb-4">
          Back
        </Link>
      </div>
      <EditForm id={params.id} />
    </>
  );
};

export default Task;
