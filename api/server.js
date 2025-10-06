const express = require("express");
const app = express();
const PORT = 1111;
const cors = require("cors");
const bodyParser = require("body-parser");
let { tasks } = require("./tasks");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);  

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.post("/tasks", (req, res) => {
  tasks.push(req.body.task);
  res.send({
    message: "task added succesfully",
  });
});

app.put("/tasks", (req, res) => {
  let updatedTask = req.body.updatedTask;
  console.log(updatedTask);
  console.log("before edit: ", tasks);
  tasks = tasks.map((task) => task.task_id !== updatedTask.task_id ? task : updatedTask);
  console.log("after edit: ", tasks);
  res.send({
    message: `task_id ${updatedTask.task_id} edited succesfully`,
  });
});

app.delete("/tasks", (req, res) => {
  console.log("before delete: ", tasks);
  tasks = tasks.filter((task) => task.task_id !== Number(req.query.task_id));
  console.log("after delete: ", tasks);
  res.send({
    message: `task_id ${req.query.task_id} deleted succesfully`,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
