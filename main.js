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
const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".new-todo");
const todoName = document.querySelector("#content");
const create_btn_el = document.getElementById("create");

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//
function addItem(e) {
  e.preventDefault();
  const name = todoName.value;
  todos.push(name);
  renderList(todos,todoList);
  todoForm.reset();
}

/* 

<li class="todo-item">
  <label>
    <input type="checkbox">
    <span class="bubble"></span>
  </label>
  
  <div class="todo-content">
    <input type="text" value="Feed the cat" readonly>
  </div>

  <div class="action">
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  </div>
</li> 

*/

function renderList(items, itemsList) {
  while (itemsList.firstChild) {
    itemsList.removeChild(itemsList.firstChild);
  }

  for(let i=0; i<items.length; i++){
    const listItem = document.createElement("li");
    listItem.textContent = items[i];
    itemsList.appendChild(listItem);
  }
}

//
// Inits & Event Listeners
//
todoForm.addEventListener("submit",addItem);

renderList(todos, todoList);