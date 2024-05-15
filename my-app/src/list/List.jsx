import React, { useState } from 'react'
// import Card from '../card/Card'
import Card from '../components/card/Card'
import './List.css'
const List = () => {
  const [card,setCard] = useState([])
  const handleClick = ()=>{
    card.push("hello")
   setCard([...card])
  }
  return (
    <div className='main-container'>
    <button onClick={handleClick}>+</button>
    <div className="container">
    {card.map((e)=><Card></Card>)}
    </div>
    </div>
  )
}

export default List