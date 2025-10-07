const express = require("express");
const app = express();
const PORT = 1111;
const cors = require("cors");
const bodyParser = require("body-parser");
const { executeQuery } = require("./mySqldb/Query");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await executeQuery(`select * from tasks`);
    res.status(200).send(tasks);
  } catch (err) {
    console.log("error while fetching tasks: ", err);
    res.status(401).send({
      message: err.message ? err.message : "Something went wrong",
    });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const { title, description, status, created_at, due_date } = req.body.task;
    const insertedTask = await executeQuery(
      `insert into tasks (title, description, status, created_at, due_date) values(?,?,?,?,?)`,
      [title, description, status, created_at, due_date]
    );
    if (insertedTask.insertId > 0) {
      res.status(200).send("task inserted");
    } else {
      throw {
        message: "task not inserted in DB",
      };
    }
  } catch (err) {
    console.log("error while inserting tasks: ", err);
    res.status(401).send({
      message: err.message ? err.message : "Something went wrong",
    });
  }
  res.send({
    message: "task added succesfully",
  });
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
