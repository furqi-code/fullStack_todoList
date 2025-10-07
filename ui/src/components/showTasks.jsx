import { useContext } from "react";
import { TaskCard } from "./taskCard";
import { TaskContext } from "../store/contextTask";

export function ShowTasks() {
  const { taskList } = useContext(TaskContext);
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {taskList.map((task) => (
          <div>
            <TaskCard {...task}></TaskCard>
          </div>
        ))}
      </div>
    </>
  );
}
