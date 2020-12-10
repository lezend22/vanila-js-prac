const todo_form = document.querySelector(".js-todoform");
const todo_input = todo_form.querySelector("input");
const todo_list = document.querySelector(".js-todoList");
const todo_LC = "todos";
let todo_arr = [];


function Delete(event){
  const btn = event.target;
  const li = btn.parentNode;
  todo_list.removeChild(li);
  const cleanTodo = todo_arr.filter(function(each){
    return each.id != parseInt(li.id); //li.id와 다른것만 새로운 arr에 저장
  });
  todo_arr = cleanTodo;
  SaveToDo_local();
}

function SaveToDo_local(){
  localStorage.setItem(todo_LC, JSON.stringify(todo_arr));
}

function paintTodo(text){
  const li = document.createElement("li");
  const delButton = document.createElement("button");
  const span = document.createElement("span");
  delButton.innerText = "X"
  delButton.addEventListener("click", Delete);
  span.innerText = text;
  li.appendChild(delButton);
  li.appendChild(span);
  li.id = todo_arr.length + 1;
  todo_list.appendChild(li);


  const todo_obj = {
    text: text,
    id : todo_arr.length + 1
  };
  todo_arr.push(todo_obj);
  SaveToDo_local();

}

function handleSubmit(event){
  event.preventDefault();
  const current_Value = todo_input.value;
  paintTodo(current_Value);
  todo_input.value = "";
}

function LoadTodo(){
  const LoadedToDo = localStorage.getItem(todo_LC);
  if(LoadedToDo != null){
    const parsedToDo = JSON.parse(LoadedToDo);
    parsedToDo.forEach(function(each){
      paintTodo(each.text);
    }
    )
  }
}


function init(){
  LoadTodo();
  todo_form.addEventListener("submit", handleSubmit)
}

init();