const express = require("express");
const Router = express.Router();
const { executeQuery } = require("../mySqldb/Query");

Router.get("/", async (req, res) => {
  try {
    const tasks = await executeQuery(`select * from tasks`);
    res.status(200).send(tasks);
  } catch (err) {
    console.log("error while fetching tasks: ", err);
    res.status(500).send({
      message: err.message ? err.message : "Something went wrong",
    });
  }
});

Router.post("/add", async (req, res) => {
  try {
    const { title, description, status, created_at, due_date } = req.body.task;
    const insertedTask = await executeQuery(
      `insert into tasks (title, description, status, created_at, due_date) values(?,?,?,?,?)`,
      [title, description, status, created_at, due_date]
    );
    if (insertedTask.insertId > 0) {
      res.status(200).send("task inserted in DB");
    } else {
      throw {
        message: "task not inserted in DB",
      };
    }
  } catch (err) {
    console.log("error while inserting tasks: ", err);
    res.status(500).send({
      message: err.message ? err.message : "Something went wrong",
    });
  }
});

Router.patch("/edit", async (req, res) => {
  try {
    const { task_id, title, description, status, updated_at } =
      req.body.updatedTask;
    let editedTask = await executeQuery(
      `update tasks set title = ?, description = ?, status = ?, updated_at = ? where task_id = ?`,
      [title, description, status, updated_at, task_id]
    );
    if (editedTask.affectedRows > 0)
      res.status(200).send(`Task id ${task_id} is updated right now`);
    else
      throw {
        message: `Task id ${task_id} not updated`,
      };
  } catch (err) {
    console.log("error while editing tasks: ", err);
    res.status(500).send({
      message: err.message ? err.message : "Something went wrong",
    });
  }
});

Router.delete("/delete", async (req, res) => {
  try {
    const task_id = req.query.task_id;
    if (task_id) {
      await executeQuery(`delete from tasks WHERE task_id = ?`, [task_id]);
      res.status(200).send({ message: `task ${task_id} deleted from DB` });
    } else {
      await executeQuery(`DELETE FROM tasks`);
      res.status(200).send({ message: "All tasks deleted successfully" });
    }
  } catch (err) {
    console.log("error while deleting tasks: ", err);
    res.status(500).send({
      message: err.message ? err.message : "Something went wrong",
    });
  }
});

module.exports = Router;
