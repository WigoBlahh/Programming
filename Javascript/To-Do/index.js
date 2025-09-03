const btnAdd = document.getElementById("btnAdd");
const inputToDo = document.getElementById("toDoInput");
const ul = document.getElementById("todoList");
let delBtn = document.createElement('button');
delBtn.innerText = "Delete";
delBtn.id = "btnDel";


btnAdd.onclick = function (){
    if(inputToDo.value != ""){
    console.log(inputToDo.value);
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputToDo.value));
    li.addEventListener("click", function(){
        li.classList.toggle("strikethrough");
    });
    delBtn.addEventListener("click", function(e) {
        li.parentNode.removeChild(li);
    });
    li.append(delBtn);
    ul.appendChild(li);
    inputToDo.value = "";
    }
}

