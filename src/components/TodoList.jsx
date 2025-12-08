import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ items, onDelete }) {
  return (
    <ul className="todo-list">
      {items.map((item, index) => (
        <TodoItem key={index} item={item} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
}
