import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([]);

  const addTask = (task) => {
    if (task.trim() === "") return;
    setList([...list, task]);
  };

  const deleteTask = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoInput onAdd={addTask} />
      <TodoList items={list} onDelete={deleteTask} />
    </div>
  );
}
