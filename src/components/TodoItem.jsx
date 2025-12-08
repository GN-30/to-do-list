import React, { useState } from "react";

export default function TodoItem({ item, onDelete }) {
  const [done, setDone] = useState(false);

  function handleDoneClick(e) {
    e.preventDefault();
    // mark visually done
    setDone(true);
    // after a short delay to show the line-through, call onDelete to remove
    setTimeout(() => {
      if (typeof onDelete === "function") onDelete();
    }, 600);
  }

  return (
    <li className="todo-item">
      <span className={done ? "todo-text done" : "todo-text"}>{item}</span>
      <button className="done-btn" onClick={handleDoneClick} disabled={done}>
        Done
      </button>
    </li>
  );
}
