import React, { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [task, setTask] = useState("");

  const addItem = () => {
    onAdd(task);
    setTask("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addItem}>Add</button>
    </div>
  );
}
