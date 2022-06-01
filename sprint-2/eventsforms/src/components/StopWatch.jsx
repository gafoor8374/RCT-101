import React, { useState, useEffect, useRef } from "react";

export const StopWatch = () => {
    // const [timerId,setTimerId]= useState(null)
    const timerId = useRef(null)
    
    const [watch,setWatch]=useState(0);
   
    const start =()=>{
        if(!timerId.current) {
            let id=setInterval(()=>{
                setWatch((prev)=>prev+1)
            },1000);
            // setTimerId(id)
            timerId.current =id
        }
    };
    const pause = ()=>{
        clearInterval(timerId.current)
        // setTimerId(null)
            timerId.current = null;

    }
    const reset =()=>{
        clearInterval(timerId.current)
        setWatch(0)
            timerId.current = null;

    }
    useEffect(()=>{
      return reset;
    },[])

  return (
    <div>
      StopWatch
      <h1>{watch}</h1>
      <button onClick={start}>start</button>
      <button onClick={pause}>pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
