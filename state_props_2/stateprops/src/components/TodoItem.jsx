export const TodoItem = ({todo,handleStatus}) => {
    return <>
    <div>{todo.title} - {todo.status ? "complete":"Not Complete"}</div>
    <button onClick={()=>handleStatus(todo.id)}>Toggle</button>
    </>
}