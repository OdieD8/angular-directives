angular.module("directivePractice")
.directive("dirDisplay", function() {
	return {
		restrict: 'E',
      	templateUrl: "app/dirDisplayTmpl.html",
		scope: {
			user: "=userInfo",
			setUser: "&",
		},
		link: function(scope, element, attributes) {
			element.on("click", function(clickShow) {
				scope.setUser(scope.user);
				scope.clickShow = !scope.clickShow;
				scope.$apply();
			})
		}
	}
});

