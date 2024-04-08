async function getDataPromise(API) {
    const data = await fetch(API)
    const jsonData = await data.json()
    return jsonData;
}

const API = 'https://jsonplaceholder.typicode.com/todos'

async function finalDataFunction(API) {
    const res = await getDataPromise(API)
    console.log({res})
}
finalDataFunction(API)