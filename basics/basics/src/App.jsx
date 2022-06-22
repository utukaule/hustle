import './App.css';

function App() {
  const cars = ['bmw','audi','lambo','tata']
  return (
    <div className="App">
      {cars.map((e)=>{
        return <>
        <Car cary={e} />
        </>
      })}
    </div>
  );
}

// components
function Car({cary}){
  return <h2>My dream cars: {cary}</h2>
}

export default App;
