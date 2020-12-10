const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting") 
const User_info = "name";
const Showing_CL = "showing";

function SaveName(text) {
  localStorage.setItem(User_info, text);
}

function handle_submit(event){
  event.preventDefault();
  const handled_value = input.value;
  paintGreeting(handled_value); 
  SaveName(handled_value);
}

function askforname(){
  form.classList.add(Showing_CL);
  form.addEventListener("submit", handle_submit)
}

function paintGreeting(text){
  form.classList.remove(Showing_CL);
  greeting.classList.add(Showing_CL);
  greeting.innerText = `Hello ${text}`;
}

function load_name(){
  const Current_User = localStorage.getItem(User_info);
  if(Current_User == null){
    askforname();
  }
  else{
    paintGreeting(Current_User);
  }

}

function init(){
  load_name();
}

init();