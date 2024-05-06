import React from 'react'

  
const Card = () =>{
    const randomNumber = Math.floor(Math.random()*100);
    if (randomNumber % 2) {
  return  <h1>This is odd number card {randomNumber}</h1>
    }else{
        return <h1>This is even number card{randomNumber}</h1>
    }
}
export default Card