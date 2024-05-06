import {useRef} from "react"
const Task13 = () => {
    const boxRef = useRef();
    const handleButtonClick = () => {
        
        boxRef.current.style.display = 'none';

    }
    const ButtonClick = () => {
        
        boxRef.current.style.display = 'block';
        boxRef.current.style.backgroundColor ='blue';

    }

    return (
        <div>
            <div ref={boxRef} style={{width: '100px', height:'100px', backgroundColor: 'red' }}></div>
            <button onClick={handleButtonClick}>Hide Box</button>
            <button onClick={ButtonClick}>ShowBox</button>
        </div>
    )
}
export default Task13