const toDoForm=document.querySelector(".to-do-form");
const toDoInput=document.querySelector(".to-do-form input");
const toDoList=document.querySelector(".to-do-list");
let toDos=[];
const TODOS="todos"
const savedToDos=localStorage.getItem(TODOS);
console.log(toDoForm);
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newToDoObj={
        text:newToDo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    addToDo(newToDoObj);
    saveToDo();

}
function saveToDo(){
    localStorage.setItem(TODOS,JSON.stringify(toDos));
    console.log(toDos);
}
function addToDo(item){
    const li=document.createElement("li");
    li.id=item.id;
    const div=document.createElement("div")
    const span=document.createElement("span");
    const dot=document.createElement("div");
    const button=document.createElement("button");
    dot.setAttribute('class','dot')
    div.setAttribute('class','dot-list')
    button.innerText="x";
    button.addEventListener("click",delToDo)
    li.appendChild(div);
    div.appendChild(dot);
    div.appendChild(span);
    li.appendChild(button);
    span.innerText=item.text;
    toDoList.appendChild(li);

}
function delToDo(event){
    const liToDel=event.target.parentElement;
    liToDel.remove();
    toDos=toDos.filter(elem=>elem.id!==parseInt(liToDel.id));
    saveToDo();

}
toDoForm.addEventListener("submit",handleToDoSubmit);

if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(addToDo);
}