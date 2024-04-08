const responseMsg = document.getElementById('response-msg')
const previousBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
let count = 1

const getTodoData = async () => {
    try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
          console.log(response)
          const data =  await response.json();
        //   button.innerText = "data fetched"
           responseMsg.innerHTML =""
    
            console.log(data.title)
            const list = document.createElement('div')
            const title = document.createElement('span')
            const span = document.createElement('span')
            span.innerText= data.getElementById
            title.innerText = data.title
            list.appendChild(span)
            list.appendChild(title)
            responseMsg.append(list)
    
        // responseMsg.innerHTML = "Data fetched";
    } catch (error) {
        responseMsg.innerHTML = "Failed to fetch data";
    }
};
// const button = document.getElementById('button')
nextBtn.addEventListener('click',()=>{
    count++
    responseMsg.innerHTML =`<div class=" loader-container">
    <div class="loader"></div>
</div>`
getTodoData() 
})
previousBtn.addEventListener('click',()=>{
    count--
    responseMsg.innerHTML =`<div class=" loader-container">
    <div class="loader"></div>
</div>`
getTodoData() 
})