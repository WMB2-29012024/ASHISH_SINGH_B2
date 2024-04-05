const input1Elem = document.getElementById("input1")
const input2Elem = document.getElementById("input2")
const pElem = document.getElementById("p")
const form = document.getElementById("form")

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const sum = Number(input1Elem.value) + Number(input2Elem.value)
    pElem.innerHTML = sum
})