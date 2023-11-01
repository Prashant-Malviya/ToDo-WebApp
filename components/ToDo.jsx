import { useEffect, useState, useRef } from 'react'
import './CSS/ToDo.css'
import ToDoItems from './ToDoItems';

let count = 0;
const ToDo = () => {

    const [todos,setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () =>{
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
        inputRef.current.value = "";
    }

    useEffect(() =>{
        console.log(todos)
    },[todos])

  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input' />
            <div onClick={()=>{add()}} className="todo-add-btn">Add</div>
        </div>
        <div className="todo-list">
            {todos.map((item,index)=>{
                return <ToDoItems key={index} no={item.no} display={item.display} text={item.text}/>
            })}
        </div>
    </div>
  )
}

export default ToDo
