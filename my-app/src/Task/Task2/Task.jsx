import { useEffect, useState } from 'react'

const Task2 = () => {
    const [todoData , setTodoData] = useState([]);
    console.log("", todoData)


    useEffect(() => {
         const fetchTodoData =async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos"
            );
            const data = await response.json();
            setTodoData(data)
        }
        fetchTodoData()
    },[])
    console.log("2", todoData)

return (
    <div>
      <h1 style={{marginLeft:"25px"}}>Todo Data</h1>
       
           <ol> {todoData.map((elem)=> {
             return <li>{elem.title}</li>

            })}</ol>
       
    </div>
)
}

export default Task2;