import { useRef } from "react";

export function TaskInput({ showTaskForm, setTaskform, addTask }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const statusRef = useRef();
  const created_atRef = useRef();
  const dueDateRef = useRef();
  // const updated_at = "";
  const today = new Date().toISOString().split("T")[0];

  const insertTasks = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const status = statusRef.current.value;
    const created_at = created_atRef.current.value;
    const due_date = dueDateRef.current.value;
    console.log("taskRef values: ", title, description, due_date);
    if (!title || !description) {
      alert("try to Fill up all the input fields");
      return;
    }
    addTask({ title, description, status, created_at, due_date });
    // Clear the form and hide it
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    statusRef.current.value = "pending";
    dueDateRef.current.value = "";
    setTaskform();
  };

  return (
    <>
      {showTaskForm && (
        <>
          <h3 className="mt-3 text-center">Task Form</h3>
          <form>
            <div class="space-y-12">
              <div class="border-b border-gray-900/10 pb-4">
                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-4">
                    <label
                      for="title"
                      class="block text-sm/6 font-medium text-gray-900"
                    >
                      Title
                    </label>
                    <div class="mt-2">
                      <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <input
                          id="title"
                          type="text"
                          name="title"
                          placeholder="janesmith"
                          class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                          ref={titleRef}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label
                      for="about"
                      class="block text-sm/6 font-medium text-gray-900"
                    >
                      Description
                    </label>
                    <div class="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows="3"
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        ref={descriptionRef}
                      ></textarea>
                    </div>
                    <p class="mt-3 text-sm/6 text-gray-600">
                      Write a few sentences about the project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2">
              <label for="status" className="form-label">
                Status
              </label>
              <select id="status" className="form-select" ref={statusRef}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="p-2">
              <label for="dueDate" className="form-label">
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                className="form-control"
                //   defaultValue={today}
                ref={dueDateRef}
              />
            </div>
            <div className="p-2">
              <label for="date" className="form-label">
                Created_at
              </label>
              <input
                type="date"
                id="date"
                className="form-control"
                defaultValue={today}
                ref={created_atRef}
              />
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                class="text-sm/6 font-semibold text-gray-900"
                onClick={setTaskform}
              >
                Cancel
              </button>
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={insertTasks}
              >
                Save
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}
