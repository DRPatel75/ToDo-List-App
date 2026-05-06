const addTodoBtn = document.getElementById("addTodoBtn")
const inputTag = document.getElementById("todoInput")
const todoListUl = document.getElementById("todoList")
let todoText; //This should be populated when the user clicks on Add button
let todos = [];
let todoString = localStorage.getItem("todos")
//If we have todos in localStorage, we will read it 
let todoString = localStorage.getItem("todos")
if(todoString){
    todos = JSON.parse(todoString)
}

const populateTodos = ()=>{
    let string = "";
    for (const todo of todos){
        string += `<li class="todo-item">
            <input type="checkbox" class="todo-checkbox">
            <span class="todo-text">${todo.title}</span>
            <button class="delete-btn">×</button>
        </li>`
    }
    todoListUl.innerHTML = todoListUl.inert + string
}

addTodoBtn.addEventListener("click", ()=>{
    todoText = inputTag.value
    inputTag.value = ""
    let todo = {
        title: todoText,
        iscompleted: false
    }
    todos.push(todo)
    localStorage.setItem("todo", JSON.stringify(todos))
})

populateTodos()