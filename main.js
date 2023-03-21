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

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

function addItem(e) {
  e.preventDefault();
  const todo = e.target.elements.content.value;
  console.log("hi i am here at addItem", todos);
  todos.push({
    text: todo,
    isdone: false,
  });
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
  
  console.log("hi i am here at DisplayTodos before", todos);

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
    input.dataset.indexcheckbox = i;
    input.checked = todos[i].isdone;
    
    if(input.checked){
      todoItem.classList.add("done");
    }

    span.classList.add("bubble");

    deletebutton.classList.add("deletebutton");
    deletebutton.id="deletebutton";
    deletebutton.button="button";
    deletebutton.textContent = "Delete";
    deletebutton.dataset.index = i;

    deletebutton.addEventListener("click", (event)=>{
      //console.log("Im a button");
      // console.log(event.target.dataset.index);

      todos.splice(event.target.dataset.index,1);

      DisplayTodos(todos,todoList);
    });

    /*input.addEventListener("change", (event)=> {
      console.log("Im a checkbox");
      console.log(event.target.dataset.indexcheckbox);
      
      if(input.checked) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }

      DisplayTodos(todos,todoList);
    }); */

    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    content.appendChild(contentdisplay);
    contentdisplay.textContent = todos[i].text;

    label.appendChild(input);
    label.appendChild(span);

    actions.appendChild(deletebutton);
    itemsList.appendChild(todoItem);

    console.log("hi i am here at DisplayTodos after", todos);
  
    input.addEventListener("click", (event) =>{
      console.log(input.dataset.indexcheckbox);
      // todos[event.target.dataset.indexcheckbox].isdone = input.checked;
      console.log(todos[event.target.dataset.indexcheckbox].isdone, input.checked);
      
      if(input.checked){
        console.log("fired");
        //todoItem.classList.add("done");
        todos[event.target.dataset.indexcheckbox].isdone = true;
      } else {
        //todoItem.classList.remove("done");
        todos[event.target.dataset.indexcheckbox].isdone = false;
      }

      // if(todos[event.target.dataset.indexcheckbox].isdone){
      //   todoItem.classList.add("done");
      // } else {
      //   todoItem.classList.remove("done");
      // }

      console.log(todoItem);
      // todoItem.classList.add("done");
      DisplayTodos(todos,todoList);
    })
}    
}

//
// Inits & Event Listeners
//
todoForm.addEventListener("submit", addItem);
//todoList.addEventListener("click", handleButtonCickINsideUl);

/*

Delete All
todos.length = 0;
renderlist;

*/