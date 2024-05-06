import React from 'react'

  
const Card = () =>{
    const randomNumber = Math.floor(Math.random()*100);
    return (
   <>
  <h1>Card Title</h1>
  {!(randomNumber % 2) && <h3> This is odd</h3>}

    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero velit molestiae excepturi magnam ducimus illum aliquam accusamus saepe facere. Sapiente repellat, sequi ipsa laudantium eum autem repudiandae commodi ullam!
    </p>
    </> 

    )
    }

export default Card