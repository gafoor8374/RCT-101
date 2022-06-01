import React, { useState, useEffect } from "react";
import axios from "axios";

export const Todo = () => {
    const [page, setPage] = useState(1);
    const [todo, setTodo] = useState([]);
    const [limit, setLimit] = useState(5);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
      // const getTodo = async () => {
      axios
        .get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
        .then((r) => {
          console.log(r);
          setTodo(r.data);
          setTotalCount(Number(r.headers["x-total-count"]));
        });
      // };
    }, [page, limit]);
  return (
    <div>
      <button
        disabled={page <= 1}
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >
        {`<`}
      </button>
      <select onChange={(e) => setLimit(Number(e.target.value))}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <button
        disabled={totalCount < page * 5}
        onClick={() => setPage(page + 1)}
      >{`>`}</button>
      
      {todo.map((todo, index) => (
        <div key={index}>
          {todo.id}
          {`:`} 
          {todo.title}
        </div>
      ))}
    </div>
  );
}
