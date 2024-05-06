const Input = () => {

    const handleButtonChange = () => {
        alert("Button Clicked!")
    };
    
    return <input  type="text" placeholder="Enter text"  onChange={handleButtonChange}
    
    ></input>
   
}
export default Input;