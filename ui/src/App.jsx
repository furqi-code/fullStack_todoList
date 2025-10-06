import { useEffect, useReducer } from "react";
import { TaskInput } from "./components/task_input";
import { TaskCard } from "./components/taskCard";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case "getTaskList":
      return {
        ...state,
        taskList: action.tasks,
      };

    case "addTaskBtn":
      return {
        ...state,
        showTaskForm: true,
      };

    case "cancelTaskform":
      return {
        ...state,
        showTaskForm: false,
      };
  }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, {
    taskList: [],
    showTaskForm: false,
  });

  const addTask = async (task) => {
    try {
      const postResponse = await axios.post("http://localhost:1111/tasks", {
        task,
      });
      console.log("Task added:", postResponse.data);

      const getResponse = await axios.get("http://localhost:1111/tasks");
      dispatch({
        type: "getTaskList",
        tasks: getResponse.data,
      });
    } catch (error) {
      console.error("Error adding tasks: ", error);
    }
  };

  const addTaskBtn = () => {
    dispatch({
      type: "addTaskBtn",
    });
  };

  const setTaskform = () => {
    dispatch({
      type: "cancelTaskform",
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:1111/tasks")
      .then((response) => {
        console.log("taskList from api: \n", response.data);
        dispatch({
          type: "getTaskList",
          tasks: response.data,
        });
      })
      .catch((err) => {
        console.log("Error while get request", err);
      });
  }, []);

  return (
    <>
      <div>
        <button
          className="m-4 p-4 text-end rounded-lg bg-yellow-200 text-gray-900 font-semibold shadow-sm hover:bg-green-300"
          onClick={addTaskBtn}
        >
          add Task
        </button>
      </div>
      <div style={{ width: "400px" }}>
        <TaskInput
          showTaskForm={state.showTaskForm}
          setTaskform={setTaskform}
          addTask={addTask}
        ></TaskInput>
      </div>
      {state.taskList.length === 0 ? (
        <h4>Zero task added</h4>
      ) : (
        state.taskList.map((task) => <TaskCard {...task}></TaskCard>)
      )}
    </>
  );
}
