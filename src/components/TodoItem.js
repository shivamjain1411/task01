// components/TodoItem.js
import React from "react";

const TodoItem = ({
  task,
  index,
  onEditTask,
  onDeleteTask,
  onToggleDone,
  onMoveUp,
  onMoveDown,
}) => {
  const handleEdit = () => {
    const newText = prompt("Edit task:", task.text);
    if (newText) {
      onEditTask(index, newText.trim());
    }
  };

  return (
    <li className={task.done ? "done" : ""}>
      <span>{task.text}</span>
      <div className="actions">
        <button onClick={handleEdit}>
          <img
            src="https://www.svgrepo.com/show/522527/edit-3.svg"
            alt="Edit"
          />
          Edit
        </button>
        <button onClick={() => onDeleteTask(index)}>
          <img
            src="https://www.svgrepo.com/show/21045/delete-button.svg"
            alt="Delete"
          />
          Delete
        </button>
        <button onClick={() => onToggleDone(index)}>
          <img
            src="https://www.svgrepo.com/show/511874/done-mini-1484.svg"
            alt="Done"
          />
          Done
        </button>
        <button onClick={() => onMoveUp(index)}>
          <img
            src="https://www.svgrepo.com/show/522689/up-circle.svg"
            alt="Move Up"
          />
          Move Up
        </button>
        <button onClick={() => onMoveDown(index)}>
          <img
            src="https://www.svgrepo.com/show/522522/down-circle.svg"
            alt="Move Down"
          />
          Move Down
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
