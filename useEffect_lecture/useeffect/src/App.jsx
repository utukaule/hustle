import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  
  //synchronous function
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((d) => d.json()) //convert to json
      .then((data) => {
        setTodos(data);
      })
  },[])


  return (
    <div className="App">
      {todos.map((item)=>{
        return <>
          <div>{item.id} - {item.name} </div>
        </>
      })}
    </div>
  );
}

export default App;
