import './App.css';
import { Navbar } from './components/Navbar';
import { Offers } from './components/Offers';
import { Filters } from './components/Filters';
import { Restaurants } from './components/Restaurants';
import userInfo from './data/userInfo.json'
import offers from './data/offers.json'
function App() {
  return (
    <div>
      <Navbar  {...userInfo.location}/>
      <Offers offers = {offers}/>
      <section className="near-you">
      <Filters />
      <Restaurants />
      </section>
    </div>
  );
}

export default App;
