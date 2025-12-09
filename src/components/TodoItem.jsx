import React, { useState } from "react";

export default function TodoItem({ item, onDelete }) {
  const [done, setDone] = useState(false);
  const [showBlast, setShowBlast] = useState(false);

  function handleDoneClick(e) {
    e.preventDefault();
    if (done) return;
    // mark visually done
    setDone(true);
    setShowBlast(true);
    // after animation, call onDelete to remove
    setTimeout(() => {
      if (typeof onDelete === "function") onDelete();
    }, 900);
  }

  return (
    <li className="todo-item">
      <span className={done ? "todo-text done" : "todo-text"}>{item}</span>
      <button className="done-btn" onClick={handleDoneClick} disabled={done}>
        Done
      </button>
      {showBlast && (
        <div className="blast">
          <div className="popper"></div>
          <div className="confetti conf-1"></div>
          <div className="confetti conf-2"></div>
          <div className="confetti conf-3"></div>
          <div className="confetti conf-4"></div>
          <div className="confetti conf-5"></div>
          <div className="confetti conf-6"></div>
          <div className="congrats">✨ Great!</div>
        </div>
      )}
    </li>
  );
}
