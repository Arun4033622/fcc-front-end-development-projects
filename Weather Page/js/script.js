getLocation();

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getWeather, handleErr);
	} else {
		alert('Geolocation not supported by browser!');
	}
}

function getWeather(position) {
	var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
	$.getJSON(url, function(data) {
		var fahrenheit = (data.main.temp * 9/5 + 32).toFixed(1);
		$('#degree').text(data.main.temp + '°C' + ' | ' + fahrenheit + '°F');
		$('#location').text(data.name);
		$('#status').html(data.weather[0].description + '<img src="' + data.weather[0].icon + '">');
	});
}

function handleErr(err) {
	alert(err.message);	
}