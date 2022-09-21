const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const text_field = $("input");
const btn_add = $("#btn_add");
const label = $("#text_field");
const span = $(".span");
const todo_list = $("#todo_list")

function handleCreateTodoItem(text) {
  if(text !== "") {
    const div = document.createElement("div");
    div.classList.add("todo_item");
    div.innerHTML = ` <label class="text" for="${text}">
    <input type="checkbox" id='${text}'>
    <span>${text}</span>
    </label>
    <div class="btn_remove"><span>x</span></div>`;
    return div;
  }
  return;
}


function handleAdd() {
  todo_list.appendChild(handleCreateTodoItem(text_field.value))
  text_field.value = ""
  text_field.focus()
}


text_field.addEventListener("focus", () => {
  label.classList.add("active");
  span.classList.add("active_span");
});

text_field.addEventListener("blur", () => {
  if (text_field.value != "") {
    return;
  }
  label.classList.remove("active");
  span.classList.remove("active_span");
});


btn_add.addEventListener("click", handleAdd)