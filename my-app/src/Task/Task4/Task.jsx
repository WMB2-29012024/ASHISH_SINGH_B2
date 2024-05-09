import {useState} from "react"
import TodoData from "./components/TodoData"
import TodoForm from "./components/TodoForm"
const Task4 = () => {
const [todoData,setTodoData] = useState({})

   return (
    <div>
 <TodoForm  setTodoData={setTodoData}/>
 <TodoData todoData={todoData}/>
 </div>
   ) 
}
export default Task4;