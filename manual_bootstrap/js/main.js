(function() {
	var myApplication = angular.module("myApplication", []);

	fetchData().then(bootstrapApplication);
	myApplication.constant('appname', 'xyz');

	function fetchData() {
		var initInjector = angular.injector(["ng"]);
		var $http = initInjector.get("$http");

		return $http.get("data/config.json").then(function(response) {
			myApplication.constant("CONFIG", response.data);
		}, function(errorResponse) {
			// Handle error case
		});
	}

	function bootstrapApplication() {
		angular.element(document).ready(function() {
			angular.bootstrap(document, ["myApplication"]);
		});
	}
	myApplication.controller('test', ['CONFIG', '$scope' ,function(CONFIG, $scope){
		$scope.url = CONFIG.url;
	}]);

}());
