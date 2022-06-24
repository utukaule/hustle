import { useState } from 'react';
import './App.css';

function App() {
  const [text,setText] = useState("")
  const num = 8;
  const gatFn = (data)=> {
    console.log({data},"Thank you just got your data");
    setText(data);
  }
  return (
    <div className="App">
      <PtoC no = {num}  />
      <CtoP gatData={gatFn}/>
      <StoS childData = {text}/>
    </div>
  );
}

// parent to child data.
function PtoC ({no}){
  
  return <>
  <div>I am child with parent data {no}</div>
  </>
}

//Child to Parent
function CtoP({gatData}){
  const ch = "Parent need me"
  gatData(ch);
  return <>
    <div>sending data to Parent</div>
  </>
}

//Sibling to Sibling
function StoS({childData}){
  return <><div>Bro to Bro {childData}</div></>
}
export default App;
