let todoList = [
  { item: "Buy Milk", dueDate: "4/2/2023" },
  { item: "Go to College", dueDate: "2/5/20" },
];
displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  todoList.push({ item: todoItem, dueDate: todoDate });
  dateElement.value = "";

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;

    newHtml += `
   </br>
    <span> ${item}</span>
    <span> ${dueDate}</span>
    <button class="btn-delete" onClick="todoList.splice(${i}, 1);
    displayItems(); ">Delete</button>
    </br></br>
    `;
  }
  containerElement.innerHTML = newHtml;
}
