 import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import Todoapp from "./components/Todoapp";



function App() {
  const [toggle,setToggle] =useState(false);
  return (
    <div className="App">
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      {toggle ? "Show Counter app" : "show Components"}

      {toggle ? <Counter /> : <Todoapp />}
     {/* <Counter />
     <Todoapp /> */}
    </div>
  );
}

export default App;
