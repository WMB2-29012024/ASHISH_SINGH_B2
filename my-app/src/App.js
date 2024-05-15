
import { React,useState } from 'react';
// import List from './components/list/List';
import List from './list/List';
import './App.css';

function App() {
  const [list,setList] = useState([])


  const handleClick = ()=>{
    list.push("yash")
   setList([...list])
  }
  return (
    <div className="App">
    <button onClick={handleClick}>+</button>
    <div className="container">
    {list.map((e)=><List></List>)}
    </div>
    </div>
  );
}

export default App;