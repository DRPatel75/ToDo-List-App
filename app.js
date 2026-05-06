const addTodoBtn = document.getElementById("addTodoBtn")
const inputTag = document.getElementById("todoInput")
let todoText; //This should be populated when the user clicks on Add button
//If we have todos in localStorage, we will read it 
let todos = [];
let todoString = localStorage.getItem("todos")
if(todoString){
    todos = JSON.parse(todoString)
}

addTodoBtn.addEventListener("click", ()=>{
    console.log("Hey I just Clicked")
    todoText = inputTag.value
    console.log(todoText)
    inputTag.value = ""
    let todo = {
        title: todoText,
        iscompleted: false
    }
    todos.push(todo)
    localStorage.setItem("todo", JSON.stringify(todos))
})