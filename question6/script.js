const responseMsg = document.getElementById('response-msg')

const getTodoData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        await response.json();
        responseMsg.innerHTML = "Data fetched";
    } catch (error) {
        responseMsg.innerHTML = "Failed to fetch data";
    }
};
const button = document.getElementById('button')
button.addEventListener('click',()=>{
    responseMsg.innerHTML =`<div class=" loader-container">
    <div class="loader"></div>
</div>`
getTodoData() 
})
