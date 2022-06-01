import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
        if(timer<1){
            clearInterval(id)
        }
        else if(timer =>20){
            clearInterval(id)
        }
        else{
            // setTimer((prev)=>prev-1);
            setTimer(timer+1)
        }
    }, 1000);
    return () => {
        //call a api to inform the user has logged out 
      clearInterval(id);
    };
    //component is unmounting
  }, [timer]);

  return(<div>Count Down:{timer}</div>

  );
 };
