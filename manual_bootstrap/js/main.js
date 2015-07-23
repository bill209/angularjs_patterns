(function() {
	var app = angular.module("app", []);

	fetchData().then(bootstrapApp);

	function fetchData() {
		var initInjector = angular.injector(["ng"]);
		var $http = initInjector.get("$http");

		return $http.get("data/config.json").then(function(response) {
			app.constant("CONFIG", response.data);
		}, function(errorResponse) {
			// error handling
		});
	}

	function bootstrapApp() {
		angular.element(document).ready(function() {
			angular.bootstrap(document, ["app"]);
		});
	}
	app.controller('test', ['CONFIG', '$scope' ,function(CONFIG, $scope){
		$scope.url = CONFIG.url;
	}]);

}());
