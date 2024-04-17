const addComment = () => {
    const commentInputElement = document.getElementById("commentInput")
    if (commentInputElement.value) {
        const commentInputDate = new Date().toLocaleString();
        const commentData = {
            date: commentInputDate,
            text: commentInputElement.value
        };
        const savedComment = JSON.parse(localStorage.getItem("comment") || "[]")
        savedComment.push(commentData)

        localStorage.setItem("comment", JSON.stringify(savedComment));
        commentInputElement.value = '';
    } else {
        alert('Please enter something to add');
    }
};

export { addComment };