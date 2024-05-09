

const TodoForm = ({setTodoData}) => {
    const handleTodoFormSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${e.target.todoInput.value}`
        );
        const data = await response.json();
        setTodoData(data);
    };
    

    return (
        
            <form action="" onSubmit ={handleTodoFormSubmit}>
                <input id="todoInput"
                type="number" />
                <button type="submit">Get Todo</button></form>
        
    )
}
export default TodoForm;