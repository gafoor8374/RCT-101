import React, { useState, useEffect } from "react";

export const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState([]);

  const saveInfo = () => {
    //call api to save the data in backend and
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTodo,
        isComplete: false,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setTodo([...todo, d]);
        setNewTodo("");
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((r) => r.json())
      .then((d) => {
        //  console.log(d);
        setTodo(d);
      });
  }, []);

  return (
    <div>
      Todo List
      <div>
        <input type="text" onChange={({ target }) => setNewTodo(target.value)} />
        <button onClick={saveInfo}>Add +</button>
      </div>
      {todo.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.id}.{todo.title}
       {/* <edit>todo edit</edit> */}
       <button>Delete</button>
          </div>
        );
      })}
      
    </div>
  );
};
