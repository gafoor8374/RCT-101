import React ,{useState} from 'react';

export const Todos = ()=>{
    const [value,setValue] = useState("");
    const [todo,setTodo] = useState([])

    const handleChange = (e) =>{
        // console.log(e.target)
        setTodo(e.target.value)
    }
    return (
        <div>
        Todo : <input value={value} 
        // onChange={handleChange}
        onChange={(e)=>{
            setValue(e.target.value)
        }} 
        />
        <button 
        // onClick={()=>
        //     {
        //         todo.push()
        //         setTodo
        //         }}
        onClick={()=>{
            setTodo([...todo,
            {value:value,id:Date.now()}])
            setValue("")
        }}
                >Add</button>
        {todo.map((i)=>(
         <div key={todo.id}>{i.value}</div>
        ))}
        </div>
    )
}