function getDataPromise(API) {
    return new Promise((res, rej)=>{
        fetch(API)
        .then(data =>data.json())
        .then(jsonData => res(jsonData))
    })
}
const API = 'https://jsonplaceholder.typicode.com/todos'
const button = document.getElementById("button")
button.addEventListener('click',() =>{
    getDataPromise(API)
.then(res=>console.log({res}))
})