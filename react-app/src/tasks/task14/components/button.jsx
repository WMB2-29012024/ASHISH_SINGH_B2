import  {useState} from "react";
const Button = () => {
    const [count, setCount] = useState(0);
    const CountIncrease = () => {
        setCount(count+1)
    }

    const CountDecrease = () => {
        setCount(count-1)
    }
    return (
        <>
        <div>{count}</div>
        <button onClick = {CountIncrease}>Increase</button>
        <button onClick={CountDecrease}>Decrease</button>
        </>
    )
}
export default Button;