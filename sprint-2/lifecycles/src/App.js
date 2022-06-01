import React,{useState} from "react";
import "./App.css";
import { StopWatch } from "./components/StopWatch";
// import { Timer } from "./components/Timer";
// import { Todo } from "./components/Todo";

function App() {
 const [show,setShow]=useState(true)
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <Timer /> */}
      <StopWatch />
    </div>
  );
}

export default App;
