const inputElem = document.getElementById("input")
const listItem = document.getElementById("ul")

const fruitList = [Mango,Orange,Banana, Grape,Apple,Plum,Papaya,Pomegranate]

const renderFruit = (name) => {
    listItem.innerHTML = ""
    const li = document.createElement("li")
    li.innerHTML = name.texts

}