const API_KEY = '5aa865f859bec0744d56e9ad0e5a57b5'

const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon= document.querySelector(".weather-icon")

async function checkWeather (city){

    const response = await fetch(apiUrl+ city+`&appid=${API_KEY}`);

    if(response.status===404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
    let data = await response.json()
    console.log(data)

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";
  
    if (data.weather[0].main==="Clouds"){
        weathericon.src ="images/clouds.png";}
    if (data.weather[0].main==="Clear"){
        weathericon.src ="images/clear.png";}
    if (data.weather[0].main==="Rain"){
        weathericon.src ="images/rain.png";}
    if (data.weather[0].main==="Drizzle"){
        weathericon.src ="images/drizzle.png";}
    if (data.weather[0].main==="Mist"){
        weathericon.src ="images/Mist.png";}

        document.querySelector(".weather").style.display= "block";
    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(search.value);
   
})
