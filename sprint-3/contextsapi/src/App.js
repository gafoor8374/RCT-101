// import React ,{useReducer} from 'react';
import './App.css';
import { Body } from './components/Body';
import { Navbar } from './components/Navbar';

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
  // const [counter,setCounter]= useState(0)

  // const [counter,dispatch] = useReducer(reducer,0)
  // const [state, dispatch] = useReducer(reducer, {counter:1});

  return (
    <div className="App">
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
