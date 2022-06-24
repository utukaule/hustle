import './App.css';
// import { useState } from 'react';
// import { States } from './components/ChildToParent';
// import { Parent } from './components/ParentToChild';
import { Todo } from './components/Todo';

function App() {
  // const [msg, setMsg] = useState("Hi");

  // const haveData = (data,data2) => {
  //   console.log("Five i need your some data:", data)
  //   setMsg(data2)
  // }
  
  return (
    <div className="App">
      {/* <First />
      <Second />
      <States />
      <br />
      <Parent />
      <Five hihi={haveData}  />
      <Six getmsg={msg}/> */}

      <Todo/>


    </div>
  );
}
//First and second components getting data from parent
// function First() {
//   const [x, setX] = useState(30)
//   return <><div>This is first {x}</div></>
// }

// function Second() {
//   return <><div>This is second</div></>
// }

// //five this component giving data to parent
// function Five({ hihi }) {
//   const five_data = "Parent needs me";
//   const sibling = "six needs me"
//   hihi(five_data,sibling);

// }

// //Six wants data from Five. We have to use useState init Lets go....
// function Six({getmsg}){
//   console.log("this is me and this is Five's data:",{getmsg})
//   return (
//     <div>this is me and this is Five's data : {getmsg}</div>
//   )
// }

export default App;
