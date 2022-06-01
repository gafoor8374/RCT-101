import React, { useState, Fragment } from "react";

export const Counter = ({ intialvalues }) => {
  //HOOK useState
  // let count = 0
  const [count, setCount] = React.useState(intialvalues);

  // const incrementCount = ()=>{
  //   console.log("pre",count);
  //   setCount(count+1)
  // }
  const decrementCount = () => {
    console.log("post", count);
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <Fragment>
      <h1>Counter :{count}</h1>

      <button
        // onClick={incrementCount}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        //   onClick={decrementCount}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </Fragment>
  );
};
