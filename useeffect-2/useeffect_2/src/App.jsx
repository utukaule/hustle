import axios from "axios";
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState(1)
  const [todos, setTodos] = useState([])


  //useEffect to run anything only once.
  // useEffect when one perticular state value changes.
  useEffect(() => {
    axios
    .get(`http://localhost:8080/todos?_page=${page}&_limit=3`)
    .then((r)=>{
      setTodos(r.data)
    });
  }, [page]);

  return (
    <div className="App">
      {todos.map((todo, index) => (
        <div key={todo.id}>{todo.id} {`:`} {todo.value}</div>
      ))}
      <button disabled={page <= 1} onClick={()=> setPage(page-1)}> {`<`} </button>
      <button onClick={()=> setPage(page+1)}> {`>`} </button>
    </div>
  );
}

export default App;
