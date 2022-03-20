const CLASSUSERNAME="username";
const CLASSHIDDEN="hidden";
const logOutBtn=document.querySelector(".log-out-btn");
const timeOfDay=new Date();
const hour=timeOfDay.getHours();
const savedUsername=localStorage.getItem(CLASSUSERNAME);
const analogClock=document.querySelector('.analog-clock');
const rightSideForm=document.querySelector('.to-do');


function handleLogInSubmit(event){
  event.preventDefault();
  loginInput.classList.add(CLASSHIDDEN);
  weather.classList.remove(CLASSHIDDEN);
  analogClock.classList.remove(CLASSHIDDEN);
  date.classList.remove(CLASSHIDDEN);
  clock.classList.remove(CLASSHIDDEN);
  quoteHTML.classList.remove(CLASSHIDDEN);
  logOutBtn.classList.remove(CLASSHIDDEN);
  rightSideForm.classList.remove(CLASSHIDDEN);
  const nameValue=loginInput.value;
  localStorage.setItem(CLASSUSERNAME, nameValue);
  sayHello(nameValue,hour);
  
}

function handleLogOut(){
  loginInput.classList.remove(CLASSHIDDEN);
  rightSideForm.classList.add(CLASSHIDDEN);
  weather.classList.add(CLASSHIDDEN);
  analogClock.classList.add(CLASSHIDDEN);
  date.classList.add(CLASSHIDDEN);
  clock.classList.add(CLASSHIDDEN);
  quoteHTML.classList.add(CLASSHIDDEN);
  logOutBtn.classList.add(CLASSHIDDEN);
  localStorage.removeItem(CLASSUSERNAME);
  greeting.classList.add(CLASSHIDDEN);
  loginInput.value="";
}


  function sayHello(name,hour){
    if(hour>=5 && hour<12){
      greeting.innerText=`Good Morning, ${name}.`;
    }
    else if(hour>=12 && hour<17){
      greeting.innerText=`Good Afternoon, ${name}.`;
    }
    else if (hour>=17 && hour<22){
      greeting.innerText=`Good Evening, ${name}.`;
    }
    else{
      greeting.innerText=`Good Night, ${name}.`;
    }
    greeting.classList.remove(CLASSHIDDEN);
  }

  loginForm.addEventListener("submit",handleLogInSubmit);
  logOutBtn.addEventListener("click",handleLogOut);
  /*시간에 따라 인사를 바꾸자*/
if(savedUsername!=null){
  sayHello(savedUsername,hour);
} else{
  handleLogOut()
}
