const addTodoBtn = document.getElementById("addTodoBtn")
const inputTag = document.getElementById("todoInput")
let todoText; //This should be populated when the user clicks on Add button
let todos = [];

addTodoBtn.addEventListener("click", ()=>{
    console.log("Hey I just Clicked")
    todoText = inputTag.value
    console.log(todoText)
    inputTag.value = ""
})