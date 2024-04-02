
const nameInput = document.getElementById("fullname").value
const nameEmail = document.getElementById("email").value
const formElement = document.getElementById("signup-form")
const passwordElement = document.getElementById("password")
const confirmPasswordElement = document.getElementById("confirm-password")
const pElem = document.getElementsByTagName("p")


formElement.addEventListener('submit', (event) => {
event.preventDefault();

if (passwordElement.value === confirmPasswordElement.value){
    window.alert('Form submitted')
}else{
    pElem[0].innerText = "Password and Cofirm password are diffrent"
}
})