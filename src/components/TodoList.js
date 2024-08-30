// components/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  tasks,
  onEditTask,
  onDeleteTask,
  onToggleDone,
  onMoveUp,
  onMoveDown,
}) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onToggleDone={onToggleDone}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
        />
      ))}
    </ul>
  );
};

export default TodoList;
