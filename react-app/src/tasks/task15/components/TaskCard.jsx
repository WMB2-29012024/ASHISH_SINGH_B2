import { useState, useEffect} from "react"


const TaskCard = () => {
    const [count, setCount] = useState(0)
    const[ toggle, setToggle] = useState(false);

    useEffect(()=> {
        setCount(count + 10);
        console.log('runs when "toggle" changes', {toggle});
    }, [toggle]);

    const handleButtonClick = () => {
        setToggle(!toggle);
    }
    return (
        <div className="task-card">
        <button onClick={() =>handleButtonClick() }>+</button>
        <div>{count}</div>
        <button onClick={() => handleButtonClick()}>-</button>
        </div>
    )
}
export default TaskCard;