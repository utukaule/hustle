import { Header } from './components/Header';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  const data = [
    {
      image : "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      title : "Top Offers"
    },
    {
      image : "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      title: "Grocery"
    }
  ];
  return (
    <div className='App'>
      {/* {data.map((el)=> <Header image={el.image} title={el.title} />)} */}
      <Counter />
    </div>
  );
}

//components


export default App;
