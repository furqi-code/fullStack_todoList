import { TaskCard } from "./taskCard";

export function ShowTasks({taskList, deleteTask, updateTask}) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {taskList.map((task) => (
          <div>
            <TaskCard
              {...task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            ></TaskCard>
          </div>
        ))}
      </div>
    </>
  );
}
