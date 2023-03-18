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
/* 

<div class="todo-item">
  <label>
    <input type="checkbox">
    <span class="bubble"></span>
  </label>
  
  <div class="todo-content">
    <input type="text" value="Feed the cat" readonly>
  </div>

  <div class="action">
    <button class="edit">Edit</button>
    <button class="deletebutton">Delete</button>
  </div>
</div> 

*/

function addItem(e) {
  e.preventDefault();
  const todo = {
    content: e.target.elements.content.value,
    done: false
  }
  console.log("hi i am here at addItem", todos);
  todos.push(todo);
  console.log("hi i am here at addItem", todos);
  DisplayTodos(todos,todoList);
  console.log("hi i am here at addItem", todos);
  todoForm.reset();
}

/* <li class="todo-item">
    <label>
      <input type="checkbox">
      <span class="bubble"></span>
    </label>
              
    <div class="todo-content">
      <input type="text" value="Feed the cat" readonly>
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

  const todoList = document.querySelector("#todo-list");
  console.log("hi i am here at DisplayTodos", todos);
  for (let i=0; i < items.length; i++) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.textContent = "Help me pls";
  }
  /* todos.forEach(todo =>{
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item")

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const deletebutton = document.createElement("button");

    console.log("hi i am here at DisplayTodos", todos);

    input.type = "checkbox";
    input.checked = todo.done;
    span.classList.add("bubble");

    content.classList.add("todo-content");
    actions.classList.add("actions");
    edit.classList.add("edit");
    deletebutton.classList.add("deletebutton");

    label.appendChild(input);
    label.appendChild(span);
    
    console.log("hi i am here at DisplayTodos", todos);

    actions.appendChild(edit);
    actions.appendChild(deletebutton);

    console.log("hi i am here at DisplayTodos", todos);

    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    console.log("hi i am here at DisplayTodos", todos);

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

    edit.addEventListener("click", e=>{
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", e=>{
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        DisplayTodos();
      })
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
