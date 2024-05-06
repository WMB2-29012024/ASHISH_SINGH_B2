import React, {useState} from "react"
let count = 0;


const Counter = () => {
    const [toggle, setToggle] = useState(0);

    const handleButtonClick = () => {
    
    count++;
    
    setToggle(toggle+1);
    
    

    }
return(
    <div>
    <button onClick={handleButtonClick}>Inc{count}</button>
    </div>
)
}
export default Counter;