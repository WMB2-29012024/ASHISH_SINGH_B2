const select = document.getElementById("drop-down")
const container = document.getElementById("container")
// const p = document.getElementById("p")

select.addEventListener('change',(e)=>{
if(e.target.value == 'dark'){
    container.style.background = 'black'
    container.style.color = 'white'
}else{
    container.style.color = 'black'
    container.style.background = 'white'
}
})