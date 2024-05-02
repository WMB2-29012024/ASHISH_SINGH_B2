import CountComponent from " ./Components/Count"
import Buttons from "./Components/Buttons"
import {useState} from 'react'

function App() {
  const [count , setCount]= useState(0);
  return (
   <div>
   <CountComponent countNumber={count}/>
   <Buttons setCount={setCount}/>
   </div>
  );
}

export default App;
