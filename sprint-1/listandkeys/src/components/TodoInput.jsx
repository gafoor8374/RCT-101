import React, { useState } from "react";

export const TodoInput = ({addTodo}) => {
  const [value, setValue] = useState("");

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };
  return (
    <div>
      <input
      value={value}
       type="text"
        placeholder="new todo item" 
        onChange={(e)=>{
          setValue(e.target.value);
        }}
     />
      <button
        onClick={() => {
          console.log(value);
          addTodo(value);
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};
