angular.module("directivePractice").service("weatherService", function($http, $q) {
	this.getWeather = function(city) {
		var deferred = $q.defer();
		var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=df5df3cba0b4f25ad2c024bb5cc306a1";
		$http ({
			method: "GET",
			url: url
		}).then(function(response) {
			var temp = response.data.main.temp;
			var weatherDesc = response.data.weather[0].description;
			var results = {
				temp: temp,
				weather: weatherDesc
			};
			deferred.resolve(results);
		})
		return deferred.promise;
	};
	
});