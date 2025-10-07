import { useRef } from "react";
import { useContext } from "react";
import { TaskContext } from "../store/contextTask";

export function TaskInput({ showTaskForm }) {
  const { addTask, cancelTaskform } = useContext(TaskContext);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusRef = useRef();
  const created_atRef = useRef();
  const dueDateRef = useRef();
  const today = new Date().toISOString().split("T")[0];

  const insertTasks = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const status = statusRef.current.value;
    const created_at = created_atRef.current.value;
    const due_date = dueDateRef.current.value;
    if (!title || !description) {
      alert("Try to fill up all the input fields");
      return;
    }
    addTask({ title, description, status, created_at, due_date });
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    statusRef.current.value = "pending";
    dueDateRef.current.value = "";
    cancelTaskform();
  };

  return (
    <>
      {showTaskForm && (
        <div className="flex justify-end items-center px-[75px]">
          <div style={{ height: "30px" }} className="mt-4 max-w-2xl">
            <form className="space-y-6">
              <div className="border-b border-gray-900/10 pb-4">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Title
                    </label>
                    <div className="mt-1">
                      <input
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Task title"
                        className="block w-full rounded-md border border-gray-300 py-2 px-3 text-base text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                        ref={titleRef}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows="3"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-600 resize-none"
                        ref={descriptionRef}
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Write a few sentences about the project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-700">
                <div className="flex flex-col w-1/3 min-w-[120px]">
                  <label htmlFor="status" className="mb-1">
                    Status
                  </label>
                  <select
                    id="status"
                    className="rounded-md border border-gray-300 py-2 px-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                    ref={statusRef}
                    defaultValue="pending"
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div className="flex flex-col w-1/3 min-w-[140px]">
                  <label htmlFor="dueDate" className="mb-1">
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    className="rounded-md border border-gray-300 py-2 px-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                    ref={dueDateRef}
                  />
                </div>

                <div className="flex flex-col w-1/3 min-w-[140px]">
                  <label htmlFor="date" className="mb-1">
                    Created At
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="rounded-md border border-gray-300 py-2 px-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                    defaultValue={today}
                    ref={created_atRef}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold text-gray-900 hover:text-gray-700"
                  onClick={cancelTaskform}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={insertTasks}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
