const searchInput = document.getElementById('searchInput')
const postContainer = document.getElementById('container')

const URL = `https://jsonplaceholder.typicode.com/posts`

searchInput.addEventListener('keyup', (e) => {
    const value = e.target.value
    const response = fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            data.forEach(element => {
                const title = document.createElement('h1')
                title.setAttribute('class','title')
                title.innerHTML = element.title
                const body = document.createElement('div')
                body.setAttribute('class','body')
                body.innerHTML = element.body
                postContainer.appendChild(title)
                postContainer.appendChild(body)

            })
        })
})