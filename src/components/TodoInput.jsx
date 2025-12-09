import React, { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [task, setTask] = useState("");

  const addItem = () => {
    onAdd(task);
    setTask("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
        className="input"
      />

      <button onClick={addItem} className="btn btn-primary">
        Add
      </button>
    </div>
  );
}
