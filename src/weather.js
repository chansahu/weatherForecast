
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
let weather_info='';
let icon_src = '';
var degreeSymbol = String.fromCharCode(176);
document.querySelector('select').addEventListener('change', function() {
    weather();
});

function weather() {  
    let dropdown = document.querySelector('#dropdown');
    let city = dropdown.options[dropdown.selectedIndex].value;  
    let url = baseUrl+'q='+city+'&appid='+process.env.API_KEY+'&units=metric';
    
    let weather_info = fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        weather_info = data;
        // document.getElementById('city').innerHTML = weather_info.name;
        document.getElementById('temp').innerHTML = weather_info.main.temp+degreeSymbol;
        document.getElementById('max_temp').innerHTML = weather_info.main.temp_max+degreeSymbol;
        document.getElementById('min_temp').innerHTML = weather_info.main.temp_min+degreeSymbol;
        document.getElementById('desc').innerHTML = weather_info.weather[0].main;
        document.getElementById('humidity').innerHTML = weather_info.main.humidity+'%';
        document.getElementById('windspeed').innerHTML = (weather_info.wind.speed*3.6).toFixed(2)+' kmph';
        icon_src = 'http://openweathermap.org/img/w/'+weather_info.weather[0].icon+'.png';
        document.getElementById('image').src = icon_src;
    }).catch((error)=>{
        console.log(error);
    });
}
weather();


