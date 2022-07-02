import './App.css';
import { Hello } from './components/Hello';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? <Hello /> : null}
      <button onClick={() => setShow(!show)}>{show ? "Tap to hide" : "Tap to show"}</button>
    </div>
  );
}

export default App;
