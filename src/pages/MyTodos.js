import React, { useState } from "react";
import AddMyTodo from "./AddMyTodo";
let nextId = 3;
// const initialTodo = [{ id: 0, title: "Add your task" }];

export default function MyTodos() {
  const [todos, setTodos] = useState([]);
  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
      },
    ]);
  }
  console.log(todos);
  return (
    <>
      <div className="my--todo">
        <AddMyTodo onAddTodo={handleAddTodo} />
        {/* {todos.length > 3 ? (
          <p>You got a lot ofworks to do!</p>
        ) : (
          <p>You have just few works to do!</p>
        )} */}
        {todos.length > 0 && (
          <div>
            {todos.length > 3 ? (
              <p className="alot--todo">You got a lot of works to do !</p>
            ) : (
              <p className="few--todo">You have just few works to do !</p>
            )}
          </div>
        )}
        {todos.length === 0 && (
          <p className="no--todo">Wow There's nothing to do !</p>
        )}
        <ol>
          {todos.map((item, index) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ol>
      </div>
    </>
  );
}
