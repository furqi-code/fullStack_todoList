export function Header({ addTaskBtn, deleteTask }) {
  return (
    <header className="gradient-header">
      <div className="container mx-auto">
        <nav className="glass-nav px-3 py-2 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="logo-container w-8 h-8 rounded-md flex items-center justify-center border border-white/20">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col justify-around items-center">
              <h1 className="text-white text-sm title-shadow leading-tight" style={{ fontSize: "1.875rem" }}>
                Task Manager
              </h1>
              <p className="text-white/80 text-[14px] font-normal leading-none">
                Stay organized & productive
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-2 sm:mt-0">
            <button
              type="button"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-sm rounded-full px-3 py-1.5 transition-all duration-300 btn-glow flex items-center space-x-1"
              onClick={addTaskBtn}
            >
              <svg
                className="w-4.5 h-4.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="text-md">Add</span>
            </button>

            <button
              type="button"
              className="bg-white/10 border-2 border-red-400/60 text-red-100 hover:bg-red-500 hover:border-red-500 hover:text-white font-semibold shadow-sm rounded-full px-3 py-1.5 transition-all duration-300 btn-glow flex items-center space-x-1"
              onClick={() => deleteTask()}
            >
              <span className="text-md">🗑</span>
              <span className="text-md">Clear</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

