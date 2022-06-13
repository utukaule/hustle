//useEffect basics and data flow is explained in this by using components. 
import './App.css';
import { Data } from './components/DataFatch';
import { Input } from './components/Input';

function App() {
  
  const name = {
    "car" : "BMW 320d",
    "price": "400000",
    "auto" : "No", 
  }

  const peoples = [
    {"name": "utu","age": "26", "gender": "male"},
    {"name": "suvarna","age": "50", "gender": "female"},
    {"name": "hrushikesh","age": "31", "gender": "male"},
    {"name": "vahini","age": "28", "gender": "female"},

]

  return (
    <div className="App">
     <Input />
     <Data peoples = {peoples} mydata= {name}/>
    </div>
  );
}

export default App;
