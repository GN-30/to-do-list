import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([]);

  const addTask = (task) => {
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: task
    };
    setList([...list, newTask]);
  };

  const deleteTask = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
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