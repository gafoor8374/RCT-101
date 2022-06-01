import React,{ useState, useEffect} from "react";
import './App.css';
import { Todo } from "./components/todo";

function App() {
// const [show,setShow]=useState(false)
// const [count1, setCount1] = useState(0);
// const [count2, setCount2] = useState(0);


// console.log(1)

// useEffect(() => {
//   console.log(2)
// })
// fetch("http://localhost:8080/todos")
// .then((r)=>r.json())
// .then((d)=>{
//   console.log(d)
// });
// useEffect(() => {
//   console.log("inside 1",count1,count2)
// },[])
// useEffect(() => {
//   console.log("inside 2");
// });
// useEffect(() => {
//   console.log("inside 3");
// });
// console.log(3)

// let a=<div>component A</div>
// let b = <div>component B</div>;

// let A =()=> <div>component A</div>;
// let B =()=> <div>component B</div>;



  return (
    <div className="App">
      
      {/* <div
        className="App"
        onClick={() =>
          setShow(!show)
          setCount1(count1 + 1)
        }
      >
        Counter1:{count1} */}
      {/* {show ? <A /> : <B />} */}
      {/* </div> */}
      {/* <div
        className="App"
        onClick={() =>
          // setShow(!show)
          setCount2(count2 + 1)
        }
      > */}
      {/* Counter2:{count2} */}
      {/* {show ? <A /> : <B />} */}
      {/* </div> */}
      HELLO
    <Todo />
    </div>
  );
}

export default App;
