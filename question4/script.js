const responseMsg = document.getElementById('response-msg')

const getTodoData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        await response.json();
        responseMsg.innerText = "Data fetched";
    } catch (error) {
        responseMsg.innerText = "Failed to fetch data";
    }
};
getTodoData();