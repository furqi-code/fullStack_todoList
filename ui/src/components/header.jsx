export function Header({addTaskBtn, deleteTask}) {
  return (
    <>
      <div class="container mx-auto">
        <nav class="p-4 flex flex-wrap justify-between items-center bg-gray-900">
          <div class="headd">
            <img
              src="../.././public/to-do-list.png"
              alt="Logo"
              width="54"
              class="inline-block align-middle"
            />
          </div>
          <div>
            <h4 class="text-white text-lg font-semibold">Task Manager</h4>
          </div>
          <div class="flex gap-2">
            <button
              type="button"
              class="bg-sky-500 hover:bg-sky-600 text-white font-medium shadow-sm rounded-full px-4 py-2 transition"
              
              id="plus"
              onClick={addTaskBtn}
            >
              Add
            </button>
            <button
              type="button"
              class="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-medium shadow-sm rounded-full px-3 py-2 transition"
              id="clearTasks"
              onClick={() => deleteTask()}
            >
              🗑 Clear
            </button>
            {/* <button
              type="button"
              class="bg-white hover:bg-gray-200 text-gray-800 font-medium shadow-sm rounded-full px-3 py-2 transition"
              id="signOut"
              onclick="logout()"
            >
              🚪 Log out
            </button> */}
          </div>
        </nav>
      </div>
    </>
  );
}
