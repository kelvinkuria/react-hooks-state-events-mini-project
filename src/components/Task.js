import React from "react";

function Task({ task, onDelete }) {
  const handleDelete = () => {
    onDelete(task.id); // Passes the task ID to the onDelete function
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div> {/* Display category */}
      <div className="text">{task.text}</div> {/* Display text */}
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
