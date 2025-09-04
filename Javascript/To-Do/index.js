const btnAdd = document.getElementById("btnAdd");
const input = document.getElementById("input");
const list = document.getElementById("list");

let todos = [];

function AddToDo(){
    if(input.value != ""){
        todos.push(input.value);
        input.value = "";
        renderList();
    }
}

function renderList(){
    list.innerHTML = "";
        todos.forEach((todo, index) => {
        //create list item
        let li = document.createElement('li');
        //create remove button
        let btnRemove = document.createElement('button');
        btnRemove.innerHTML = "Remove";
        btnRemove.id = "remove";
        btnRemove.classList = "remove";
        btnRemove.onclick = function(){
            todos.splice(index, 1);
            renderList();
        }
        //create edit button
        let btnEdit = document.createElement('button');
        btnEdit.innerHTML = "Edit";
        btnEdit.id = "edit";
        btnEdit.classList = "edit";
        btnEdit.onclick = function(){
            let edit = prompt("Write edited todo");
            if(edit != ""){
                todos[index] = edit;
                console.log(todos);
                renderList();
            }else{
               alert("Edit can't be empty, try again"); 
            }
        }

        li.appendChild(document.createTextNode(todo));
        li.appendChild(btnEdit);
        li.appendChild(btnRemove);
        list.appendChild(li);
    });
}

btnAdd.onclick = AddToDo;