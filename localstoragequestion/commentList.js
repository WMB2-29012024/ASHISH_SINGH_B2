const showComments = () => {
    const savedComment = JSON.parse(localStorage.getItem("comment") || "[]");
    console.log(savedComment)

    const listItems = document.getElementById("listItems")
    listItems.innerHTML = ''
    savedComment.forEach(element => {
    
    const listItem = document.createElement("li")  
    listItem.innerHTML += `<b>comment:</b>${element.text} <b>Date & Time:</b> ${element.date}`;
    listItems.appendChild(listItem);
    });
};

export { showComments };