import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ items, onDelete }) {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item.text}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
}
