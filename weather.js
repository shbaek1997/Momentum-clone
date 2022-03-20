const weatherCity=document.querySelector('.weather-city');
const weatherTemperature=document.querySelector('.weather-temperature');
const weatherIcon=document.querySelector('.weather-icon');
const weatherStatus=document.querySelector('.weather-status');
const weather=document.querySelector('.weather');
function onGeoAllowed(position){
    const lat=position.coords.latitude;
    const long=position.coords.longitude;
    const APIKEY="29ae88e7b7f60251f16c64bf8643902a";
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}&units=metric`
    fetch(url).then(response=>response.json()).then(data=>{
        weatherCity.innerText=data.name;
        weatherTemperature.innerText=`${data.main.temp} °C`;
        const icon=document.createElement("img")
        icon.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        weatherIcon.appendChild(icon);
        weatherStatus.innerText=data.weather[0].main;
    });

}
function onGeoError(){
    alert("Failed to load your location info.");
}
navigator.geolocation.getCurrentPosition(onGeoAllowed,onGeoError);