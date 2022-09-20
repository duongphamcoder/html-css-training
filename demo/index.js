const text_field = document.querySelector("input");
const btn_add = document.querySelector("#btn_add > button");
const todo_list = document.querySelector("#todo_list");

const handleRemoveTodoItem = function (e) {
  const button = e.target;
  const parent = button.parentElement.parentElement;
  parent.remove();
};

const handleCreateTodoItem = function (text) {
  const div = document.createElement("div");
  div.classList.add("todo_item");
  div.innerHTML = ` <div class="text"><span>${text}</span></div>
  <div class="btn_remove">
    <button onclick="handleRemoveTodoItem(event)">X</button>
  </div>`;

  return div;
};

const handleAdd = function () {
  todo_list.appendChild(handleCreateTodoItem(text_field.value));
  text_field.value = "";
};

btn_add.addEventListener("click", handleAdd);
