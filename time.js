const clock=document.querySelector(".clock");
const date=document.querySelector('.date');
function getClockAndDate(){
    const now=new Date()
    const year=String(now.getFullYear());
    const month=String(now.getMonth()+1).padStart(2,"0");
    const dateNum=String(now.getDate()).padStart(2,"0");
    const hour=String(now.getHours()).padStart(2,"0");
    const minutes=String(now.getMinutes()).padStart(2,"0");
    const seconds=String(now.getSeconds()).padStart(2,"0");
    clock.innerText=`${hour}:${minutes}:${seconds}`;
    date.innerText=`${year}/${month}/${dateNum}`
}
getClockAndDate()
setInterval(getClockAndDate,1000);
