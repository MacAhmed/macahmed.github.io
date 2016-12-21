$(document).ready(function() {
    var geocodeAPIKey =  "AIzaSyCpNp17X-PT49cZa5EgwMdLPGlbxq3dNGA";
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            //var URL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=Quebec&mode=json&units=metric&appid=38f8e89e9485cf8789e47dd969657941"
            var URL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&appid=38f8e89e9485cf8789e47dd969657941";
            var city = getAPIData(URL);
            var amount = city.cnt;
            var date = new Date();
            var dayDate = date.getDay() - 1;

            //Icon Definitions

            for ( var count = 1 ; count < 6 ; count++){
                var element = document.getElementById( "temp" + count );
                var dayElement = document.getElementById( "dayN" + count );
                var statusElement = document.getElementById( "status" + count);
                var icon = document.getElementById( "icon" + count );

                dayElement.innerHTML = dayOfWeekAsString( dayDate );
                dayDate = dayDate + 1;
                element.innerHTML = Math.round(city.list[count-1].temp.max) + "&#x2103;";
                statusElement.innerHTML = city.list[count-1].weather[0].main ;
                var htmlIcon = provideIcon( city.list[count-1].weather[0].icon );
                icon.className += htmlIcon;
            }
        });
    } else {
        console.log( "Not Available" );
    }
});

function getAPIData(restURL){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", restURL , false);
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);

    return response;
}

function dayOfWeekAsString(dayIndex) {
    return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][dayIndex];
}

function provideIcon ( iconID ){
    var icons = ["01d", "02d", "03d", "04d", "09d", "10d", "11d", "13d", "50d", "01n", "02n", "03n", "04n", "09n", "10n", "11n", "13n", "50n"];
    var classes = ["wi-day-sunny", "wi-day-cloudy", "wi-cloud", "wi-cloudy", "wi-day-rain", "wi-rain", "wi-thunderstorm", "wi-snow", "wi-fog",
                   "wi-night-clear", "wi-night-alt-cloudy", "wi-cloud", "wi-cloudy", "wi-night-alt-rain", "wi-rain", "wi-thunderstorm", "wi-snow", "wi-fog" ]
    var iconIndex = icons.indexOf( iconID );
    return classes[iconIndex];
}