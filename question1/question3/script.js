const selectElem = document.getElementById("select")
const pElem = document.getElementById("p")

selectElem.addEventListener('change',(e) => {
    pElem.innerHTML = e.target.value;
})