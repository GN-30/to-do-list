import React, { useState } from "react";

export default function TodoItem({ item, onDelete }) {
  const [done, setDone] = useState(false);
  const [showBlast, setShowBlast] = useState(false);

  function handleDoneClick(e) {
    e.preventDefault();
    if (done) return;
    // mark visually done
    setDone(true);
    // trigger blast animation and congrats message
    setShowBlast(true);
    // hide blast shortly after
    setTimeout(() => setShowBlast(false), 700);
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
        <div className="blast" aria-hidden>
          <div className="popper" />
          <div className="confetti conf-1" />
          <div className="confetti conf-2" />
          <div className="confetti conf-3" />
          <div className="confetti conf-4" />
          <div className="confetti conf-5" />
          <div className="confetti conf-6" />
          <div className="congrats" role="status">
            Congratulations!
          </div>
        </div>
      )}
    </li>
  );
}
