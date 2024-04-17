import { addComment } from "./commentForm.js";
import { showComments } from "./commentList.js";

showComments();

const commentFormElement = document.getElementById("commentForm");
commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addComment();
    showComments();
}
);
const commentInput = document.getElementById("commentInput")
commentInput.addEventListener("keyup",(e) =>{
    
})