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
    setTasks(savedTasks); // Setting tasks from localStorage when the app loads
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Updating localStorage whenever tasks array is updated
  }, [tasks]);

  // Add new task
  const addTask = (taskText) => {
    if (taskText) {
      setTasks([...tasks, { text: taskText, done: false }]);
    }
  };

  // Edit existing task
  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle task completion
  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  // Move task up in the list
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

  // Move task down in the list
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

  // Filtering tasks based on search query
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      {/* Search functionality */}
      <Input
        type="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* Input to add a new task */}
      <Input type="text" placeholder="Add a new task..." onAddTask={addTask} />
      {/* List of tasks */}
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
