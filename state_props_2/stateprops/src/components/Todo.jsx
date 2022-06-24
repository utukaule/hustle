import { useState } from "react"
import { TodoInput } from "./TodoInput"
import { TodoItem } from "./TodoItem";
import {nanoid} from 'nanoid';
export const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const getData = (todo) => {
        console.log("received ", todo)
        const payload = {
            title: todo,
            status: true,
            id: nanoid(15)
        }
        setTodoList([...todoList,payload])
    }
    const handleStatus = (id) => {
        console.log("id is",id)
        const newarr = todoList.map((e)=>{
            if(e.id === id){
                return {
                    ...e,
                    status: !e.status,
                }
            }
            return e;
        })
        setTodoList(newarr);
    }
    return <>
        <div>
            <TodoInput getData={getData} />

            {/* Todo List */}
            
            {todoList.map((item)=>(

                <TodoItem todo={item} handleStatus={handleStatus}/>
            ))}
        </div>
    </>
}