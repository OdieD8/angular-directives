angular.module("directivePractice")
.directive("dirWeather", function() {
	return {
		restrict: 'E',
      	templateUrl: "app/dirWeather.html",
		scope: {
      		currentUser: "=",
			weatherCall: "&"
    	},
		controller: function($scope) {
			var getWeatherInDirective = function() {
				$scope.weatherCall({city: $scope.currentUser.city}).then(function(response) {
				$scope.weatherData = response;
				})
			}
			getWeatherInDirective();
			
			$scope.$watch("currentUser", function(value) {
				getWeatherInDirective();
			})
		},
	}
});