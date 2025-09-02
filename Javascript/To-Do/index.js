const btnAdd = document.getElementById("btnAdd");
const inputToDo = document.getElementById("toDoInput");
const ul = document.getElementById("todoList");

function AddToDo(){
    console.log(inputToDo.value);
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputToDo.value));
    li.addEventListener("click", function() {
        this.classList.toggle("strikethrough");
    });
    ul.appendChild(li);
    inputToDo.value = "";
}

