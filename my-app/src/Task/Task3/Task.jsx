import {useState , useEffect} from 'react'

const Task3 = () => {
    const [todoData , setTodoData] = useState([]);
    const handleButtonClick = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTodoData(data);

    }

   
return (
    <div>
    <ol> {todoData.map((elem)=> {
        return <li>{elem.title}</li>

       })}</ol>
<button onClick={handleButtonClick}>Click</button>

</div>
)
}
export default Task3;