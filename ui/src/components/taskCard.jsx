import { useState, useRef } from "react";

export function TaskCard({
  task_id,
  title,
  description,
  status,
  due_date,
  created_at,
  updated_at,
  deleteTask,
  updateTask
}) {
  const [isEditing, setisEditing] = useState(false);
  const [isUpdated, setisUpdated] = useState(false);
  const titleRef = useRef();
  const descriptionRef = useRef();
  return (
    <>
      <div className="todo-card my-4">
        {!isEditing && (
          <>
            <h2 className="todo-title">{title}</h2>
            <div>
              <p className="todo-description">{description}</p>
            </div>
          </>
        )}

        {isEditing && (
          <>
            <div className="p-2">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Edit this Title"
                name="title"
                defaultValue={title}
                ref={titleRef}
              ></input>
            </div>
            <div className="p-2 mb-2">
              <textarea
                className="form-control me-2"
                type="search"
                placeholder="Edit this Discription"
                aria-label="Search"
                task_id="exampleFormControlInput1"
                name="discrip"
                defaultValue={description}
                ref={descriptionRef}
              />
            </div>
          </>
        )}

        <div className="todo-meta">
          <div>
            <span className="todo-status status-in-progress">{status}</span>
          </div>
          <div className="d-flex flex-column align-items-end">
            <span className="todo-date">Due: {due_date.split("T")[0]}</span>
            {isUpdated && (
              <>
                <span className="todo-date">Edited: {updated_at.split("T")[0]}</span>
                <span className="todo-date">Created: {created_at.split("T")[0]}</span>
              </>
            )}
          </div>
        </div>

        <div className="todo-actions">
          {!isEditing && (
            <>
              <button
                type="button"
                className="canvaBtn btn-edit"
                onClick={() => setisEditing(true)}
              >
                Edit
              </button>
              <button
                type="button"
                className="canvaBtn btn-delete"
                onClick={() => deleteTask(task_id)}
              >
                Delete
              </button>
            </>
          )}
          {isEditing && (
            <>
              <button
                type="button"
                className="canvaBtn btn-cancel"
                onClick={() => setisEditing(false)}
              >
                cancel
              </button>
              <button
                type="button"
                className="canvaBtn btn-save"
                // onClick={() => {
                //   const title = titleRef.current.value;
                //   const description = descriptionRef.current.value;
                //   updateTask({
                //     task_id,
                //     title,
                //     description,
                //     status: 'just now',
                //     updated_at: new Date().toISOString().split("T")[0],
                //   });
                //   setisEditing(false);
                //   setisUpdated(true);
                // }}
              >
                💾 save
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
