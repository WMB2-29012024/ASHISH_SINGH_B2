

const form = document.getElementById("form")
const pElem = document.getElementById("p")
const genderSelect = document.getElementById('genderInput')
genderSelect.addEventListener('click',(e)=>{
    e.preventDefault();
    pElem.innerHTML = e.target.value;
}) 