import Button from "./components/Button"


    const Task7 = () => {
        const handleButtonClICK = () => {
            alert("Button Clicked!")
    }
    
    

    
    return (
        <div>
    <Button btnClick={handleButtonClICK} />
    <Button btnClick={()=> alert('second button clicked')} />
    </div>
    )
   
}
export default Task7;