import {useRef} from "react"

const Task12 = () => {
    const inputRef = useRef();
    const handleInputChange = () => {
        
        console.log(inputRef.current.value)
    }
    return (
        <div>
            <input ref={inputRef}  onChange={handleInputChange}type="text" />
        </div>
    )
}
export default Task12;