const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function handleCheck(event){
    const input_checkbox = event.target;
    const labelText = input_checkbox.nextSibling;

    if(input_checkbox.checked === true)
        labelText.className = "line-through";
    else{
        input_checkbox.removeAttribute("checked");
        labelText.className = "";
    }
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(event)
{
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDO => toDO.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    //리스트
    const li = document.createElement("li");
    li.id = newTodo.id;

    //삭제버튼
    const button = document.createElement("button");
    button.innerText = "❌";
    button.className = "deleteButton";
    button.addEventListener("click", deleteToDo);
    
    //체크박스 부여
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.type = "checkbox";

    label.setAttribute("for", newTodo.text);
    label.innerText = newTodo.text;

    input.addEventListener("click", handleCheck);
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item) => paintToDo(item));
}
toDoForm.addEventListener("submit", handleToDoSubmit);

