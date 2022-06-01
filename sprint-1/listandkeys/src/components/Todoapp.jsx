import React,{useState} from 'react'
import { TodoInput } from './TodoInput'
import TodoList from './TodoList'

function Todoapp() {
    const [todos,setTodos]= useState([]);

    const addTodo=(newTodo)=>{
      todos.push()
        setTodos([...todos,newTodo])
    }
  return (
    <div>Todoapp
        <TodoInput addTodo={addTodo} />
        
        <TodoList todos={todos} />
    </div>
  )
}

export default Todoapp