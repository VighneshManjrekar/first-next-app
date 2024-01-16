import TaskFormCustom from "@/components/TaskFormCustom";

const layout = ({children}) => {
  return (
    <div className="flex flex-col gap-y-10 max-w-3xl">
      <TaskFormCustom />
      {children}
    </div>
  );
};

export default layout;
