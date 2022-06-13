
import './App.css';
import { Counter } from './components/Counter';
// import { Github } from './components/Github';

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   // never put a setState inside this
  //   // unnecessarily
  //   console.log("2nd");
  //   setTimeout(() => {


  //     document.title = `${count}`
  //   }, 1000);

  // })

  // console.log("1st");

  return (
    <div className="App">
      <Counter />
      {/* <Github/> */}
      {/* <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button> */}
    </div>
  );
}

export default App;

//After each render useEffect is called.
//useEffect only runs after UI is mounted.
//Generally never want to use

//useEffect with no dependencies, or only once