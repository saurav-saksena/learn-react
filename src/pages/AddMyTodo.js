import React, { useState } from "react";

export default function AddMyTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        id="add-todo-input"
        style={{ margin: "10px", width: "350px" }}
        placeholder="add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <button
        style={{ marginLeft: "10px" }}
        disabled={!title}
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </>
  );
}
