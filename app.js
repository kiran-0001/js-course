let todoList = [];

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTodo = input.value;
  todoList.push(newTodo);
  input.value = "";
  updateList();
});

function updateList() {
  list.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const item = document.createElement("li");
    item.innerHTML = todo;
    item.addEventListener("click", () => {
      todoList.splice(i, 1);
      updateList();
    });
    list.appendChild(item);
  }
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

document.addEventListener("DOMContentLoaded", function(){
  if (localStorage.getItem("todoList")) {
    todoList = JSON.parse(localStorage.getItem("todoList"));
    updateList();
  }
});
