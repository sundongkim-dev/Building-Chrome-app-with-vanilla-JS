const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector(".js-form");
const loginInput = document.querySelector(".js-form input");
const greeting = document.querySelector(".js-greetings");
const editBtn = document.querySelector(".fa-edit");

function editUsername(){
    chooseDisplay(editBtn, false);
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

function chooseDisplay(element, boolean){
    if(boolean)
        element.style.display = "block";
    else
        element.style.display = "none";
}

function onLoginSubmit(event){
    //Default 동작 저지
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    //Input value 저장
    const username = loginInput.value;

    //Local Storage에 사용자 이름 저장
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

function paintGreetings(username){
    chooseDisplay(editBtn,true);
    const clockForDefaultSentence = document.querySelector(".js-clock h1")
    const clockArr = clock.textContent.split(":");
    const hourForDefaultSentence = parseInt(clockArr[0], 10);

    if(hourForDefaultSentence>=5 && hourForDefaultSentence<12)
        greeting.innerText = `Good morning, ${username}!`;
    else if(hourForDefaultSentence>=12 && hourForDefaultSentence<18)
        greeting.innerText = `Good afternoon, ${username}!`;
    else if(hourForDefaultSentence>=18 && hourForDefaultSentence<24)
        greeting.innerText = `Good evening, ${username}!`;
    
    greeting.classList.remove(HIDDEN_CLASSNAME);
    editBtn.addEventListener('click', editUsername);
}

function getUsername()
{    
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if(!savedUsername)
        editUsername();
    else
        paintGreetings(savedUsername);

}

//loginForm.addEventListener("submit", onLoginSubmit);
/*
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    //show the message
    paintGreetings(savedUsername);
}*/

getUsername();
