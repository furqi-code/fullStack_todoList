create database todo_list;
use todo_list;

CREATE TABLE tasks (
  task_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('pending', 'in-progress', 'completed', 'just now') DEFAULT 'pending',
  created_at DATE NOT NULL,
  due_date DATE,
  updated_at DATE
);

INSERT INTO tasks (title, description, status, created_at, due_date, updated_at)
VALUES ('Sample Task 1', 'Description of task 1', 'pending', '2027-01-09', '2025-10-10', NULL);

select * from tasks;

DELETE FROM tasks WHERE task_id = 1;


drop database todo_list;