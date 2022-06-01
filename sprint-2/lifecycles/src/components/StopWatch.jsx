import React,{ useState, useEffect} from 'react'

export const StopWatch = () => {
    const [timerId,setTimerId]= useState(null)
    
    const [watch,setWatch]=useState(0);
   
    const start =()=>{
        if(!timerId) {
            let id=setInterval(()=>{
                setWatch((prev)=>prev+1)
            },1000);
            setTimerId(id)
        }
    };
    const pause = ()=>{
        clearInterval(timerId)
        setTimerId(null)
    }
    const reset =()=>{
        clearInterval(timerId)
        setWatch(0)
    }

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
