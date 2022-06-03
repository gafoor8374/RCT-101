import React ,{useReducer,useContext} from 'react';
import './App.css';
import { Body } from './components/Body';
import { Navbar } from './components/Navbar';
import {ThemeContext} from "./context/ThemeContext"

// const reducer =(state,action) => {
//   switch (action.type) {
//     case "INCREMENT": {
//       // return state + action.payload;
//       return {...state, counter:state.value+action.payload}
//     }
//     case "DECREMENT": {
//       return state - action.payload;
//     }
//     default: {
//       return state;
//     }
//   }

// }

function App() {
const {isLight} = useContext(ThemeContext)
  // const [counter,setCounter]= useState(0)

  // const [counter,dispatch] = useReducer(reducer,0)
  // const [state, dispatch] = useReducer(reducer, {counter:1});

  return (
    <div className={`App ${isLight ?"light":"dark"}`}>
      {/* Counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button> */}
      {/* <div>
      Counter: {state.counter}
      </div>
      <button onClick={() => dispatch({type:"INCREMENT" , payload:1})}>+</button>
      <button onClick={() => dispatch({type:"DECREMENT" ,payload: 1})}>-</button> */}
    <Navbar />
    <Body />
    </div>
  );
}

export default App;
