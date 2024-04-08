function getDataPromise(API) {
    return new Promise((res, rej)=>{
        fetch(API)
        .then(data =>data.json())
        .then(jsonData => res(jsonData))
    })
}
const API = 'https://jsonplaceholder.typicode.com/todos'
getDataPromise(API)
.then(res=>console.log({res}))