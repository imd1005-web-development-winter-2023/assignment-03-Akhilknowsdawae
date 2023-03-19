//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants
const appID = "app";

const todos = [];
const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#new-todo");
const todoName = document.querySelector("#content");
const add_btn = document.getElementById("createbutton");

add_btn.addEventListener("submit", addItem);

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

function addItem(e) {
  e.preventDefault();
  const todo = e.target.elements.content.value;
  console.log("hi i am here at addItem", todos);
  todos.push(todo);
  DisplayTodos(todos,todoList);
  todoForm.reset();
}

/* <li class="todo-item">
    <label>
      <input type="checkbox">
      <span class="bubble"></span>
    </label>
              
    <div class="todo-content">
      <button> yadayada </button>
    </div>

    <div class="action">
      <button class="edit">Edit</button>
      <button class="deletebutton">Delete</button>
    </div>
  </li> */



function DisplayTodos(items, itemsList) {

  while (itemsList.firstChild) {
    itemsList.removeChild(itemsList.firstChild);
  }
  
  console.log("hi i am here at DisplayTodos", todos);

  for (let i = 0; i < items.length; i++) {
    const todoItem = document.createElement("li");

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const deletebutton = document.createElement("button");
    const contentdisplay = document.createElement("button");


    todoItem.classList.add("todo-item");
    content.classList.add("todo-content");
    actions.classList.add("action");
    input.type="checkbox";
    input.id="checkbox";
    span.classList.add("bubble");
    deletebutton.classList.add("deletebutton");
    deletebutton.id="delete";
    deletebutton.button="button";
    deletebutton.textContent = "Delete";

    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    content.appendChild(contentdisplay);
    contentdisplay.textContent = todos[i];

    label.appendChild(input);
    label.appendChild(span);

    actions.appendChild(deletebutton);
    itemsList.appendChild(todoItem);

    let checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () =>{
      if(input.checked) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }
      DisplayTodos();
    })

    let deletelist = document.getElementById("delete");
    deletelist.addEventListener("click", () =>{
      todos.splice(i,1);
      DisplayTodos();
    })
}
  /*
    if(todo.done){
      todoItem.classList.add("done");
    }

    console.log("hi i am here at DisplayTodos", todos);

    input.addEventListener("click", e=>{
      todo.done = e.target.checked;

      if(todo.done) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }
      console.log("hi i am here at DisplayTodos", todos);
      DisplayTodos();
    })

    deletebutton.addEventListener("click", e=>{
      todos = todos.filter(t => t != todo);
      DisplayTodos();
      })
  }) */
}

//
// Inits & Event Listeners
//
todoForm.addEventListener("submit",addItem);
addEventListener("click", listClickHander);