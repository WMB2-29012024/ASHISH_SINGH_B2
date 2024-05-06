const Button = () => {

    const handleButtonClICK = () => {
        alert("Button Clicked!")
    };
    const handleRightClick = () =>{
alert("Button right clicked")
    }
    return <button style={{padding: '10px 20px' , margin: '10px'}} onClick={handleButtonClICK}
    onContextMenu={handleRightClick}
    >Click me!</button>
   
}
export default Button;