const input = document.getElementById("input")
const p = document.getElementById("p")
input.addEventListener('keyup',(e) => {
inputValue = e.target.value; 
p.innerHTML = inputValue
})