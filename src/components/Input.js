// components/Input.js
import React, { useState } from "react";

const Input = ({ type, placeholder, onAddTask, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() && onAddTask) {
      onAddTask(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <>
      {type === "text" ? (
        <>
          <input
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddTask}>Add</button>
        </>
      ) : (
        <input type={type} placeholder={placeholder} onChange={onChange} />
      )}
    </>
  );
};

export default Input;
