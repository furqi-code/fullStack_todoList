import axios from "axios";
import { useEffect, useReducer, createContext } from "react";
import { TaskInput } from "../components/task_input";
import { ShowTasks } from "../components/showTasks";

export const TaskContext = createContext({
  taskList: [],
  addTaskBtn: () => {},
  cancelTaskform: () => {},
  addTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
});

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

    case "cancelTaskBtn":
      return {
        ...state,
        showTaskForm: false,
      };
  }
}

export function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    taskList: [],
    showTaskForm: false,
  });
  let content;

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

  const updateTask = async (updatedTask) => {
    try {
      const editedResponse = await axios.patch(`http://localhost:1111/tasks`, {
        updatedTask,
      });
      console.log("Task updated:", editedResponse.data);

      const getResponse = await axios.get("http://localhost:1111/tasks");
      dispatch({
        type: "getTaskList",
        tasks: getResponse.data,
      });
    } catch (err) {
      console.log("Error editing task: ", err);
    }
  };

  const deleteTask = async (task_id) => {
    try {
      const url = task_id
        ? `http://localhost:1111/tasks?task_id=${task_id}`
        : `http://localhost:1111/tasks`;
      const deleteResponse = await axios.delete(url);
      console.log("Task deleted:", deleteResponse.data);

      const getResponse = await axios.get("http://localhost:1111/tasks");
      dispatch({
        type: "getTaskList",
        tasks: getResponse.data,
      });
    } catch (err) {
      console.log("Error deleting task: ", err);
    }
  };

  const addTaskBtn = () => {
    dispatch({
      type: "addTaskBtn",
    });
  };

  const cancelTaskform = () => {
    dispatch({
      type: "cancelTaskBtn",
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

  if (state.showTaskForm) {
    content = <TaskInput showTaskForm={state.showTaskForm}></TaskInput>;
  } else {
    content =
      state.taskList.length === 0 ? (
        <p className="mt-5">Zero task added</p>
      ) : (
        <ShowTasks></ShowTasks>
      );
  }
  return (
    <TaskContext
      value={{
        taskList: state.taskList,
        addTaskBtn: addTaskBtn,
        cancelTaskform: cancelTaskform,
        addTask: addTask,
        deleteTask: deleteTask,
        updateTask: updateTask,
      }}
    >
      {children}
      <div className="px-4 py-3 ms-[90px]">{content}</div>
    </TaskContext>
  );
}
