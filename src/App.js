// App.js
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import Input from "./components/Input";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState("");

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    if (taskText) {
      setTasks([...tasks, { text: taskText, done: false }]);
    }
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <Input
        type="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <Input type="text" placeholder="Add a new task..." onAddTask={addTask} />
      <TodoList
        tasks={filteredTasks}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        onToggleDone={toggleDone}
        onMoveUp={moveTaskUp}
        onMoveDown={moveTaskDown}
      />
    </div>
  );
};

export default App;
