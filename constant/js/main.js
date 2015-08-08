(function() {
	'use strict';

	angular
		.module('App',[]);

	angular
		.module('App')
		.constant('URL','ozzis.us');

	// example using anonymous function
	angular
		.module('App')
		.controller('MainCtrl', ['URL', '$scope',function(URL, $scope){
			$scope.gurl = URL;
		}]);

	// example using 'as Controller' and named function
	angular
		.module('App')
		.controller('MinorCtrl', minorCtrl);

		function minorCtrl(URL){
			var vm = this;
			vm.curl = URL;
		}
})();
