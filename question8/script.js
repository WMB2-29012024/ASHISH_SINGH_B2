const select = document.getElementById('select')
const fetchData = document.getElementById('fetch-data')


select.addEventListener('change',(e) =>{
    const userId = Number(e.target.value);
    const response = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res)=>res.json())
    .then((data)=>{ 
        console.log(data)

      const postID = data[0].id  
      return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
      .then((result)=> result.json())
      .then((commentData) => {

        const uiData = value
        fetchData.innerHTML = 
        <div class="id"></div>
        <div class = "name"></div>
        <div class="email"></div>
        <div class="body"></div>
      })
      
    })
})