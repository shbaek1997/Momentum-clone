const lines=document.querySelectorAll(".clock-line");
console.log(lines[1])
for(let i=0; i<6;i++){
    lines[i].style.transform=`rotateZ(${i*30}deg)`;
    if(i%3===0){
        lines[i].style.backgroundColor="red";
    }
}
const hourHand=document.querySelector(".hour-hand");
const minHand=document.querySelector(".min-hand");
const secHand=document.querySelector(".sec-hand");

function runAnalogClock(){
    const now=new Date()
    const hour=now.getHours();
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();
    const hourDeg=(hour/12)*360+(minutes/60)*30;
    const minDeg=(minutes/60)*360+(seconds/60)*6;
    const secDeg=(seconds/60)*360;
    hourHand.style.transform=`rotate(${hourDeg}deg)`;
    minHand.style.transform=`rotate(${minDeg}deg)`;
    secHand.style.transform=`rotate(${secDeg}deg)`;

}

runAnalogClock()
setInterval(runAnalogClock,1000);
