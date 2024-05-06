
import InputItem from "./components/input";

const Task3 = () =>{
    return (

       <div>
        <InputItem placeholder="Enter Your Name" type="text" inputId="name-input"/>
        <InputItem placeholder="Enter Your age" type="number" inputId="age-input"/>
        <InputItem placeholder="Enter Your email" type="email" inputId="email-input"/>
       </div>
    )
}
export default Task3