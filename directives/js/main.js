(function() {
	'use strict';

	angular
		.module('App',[]);

	// example using 'as Controller' and named function
	angular
		.module('App')
		.controller('MainCtrl', mainCtrl);

		function mainCtrl(){
			var vm=this;

			vm.flipped='hello';
			vm.customer = {
				name: 'Naomi',
				address: '1600 Amphitheatre'
			};
			vm.movie = {
				title: 'My Cousin Vinny',
				director : 'Jonathan Lynn',
				year: '1992'
			}
			vm.items = [1,2,3,4,5,6];
			vm.aux = 'hi';
			vm.fubar = function(boo)	{
				vm.aux = boo;
			}
			vm.bar = function(foo)	{
				vm.aux = foo;
			}

			vm.name = "Harry";
			vm.reverseName = function(){
				vm.name = vm.name.split('').reverse().join('');
			};

			// vm.name2 = "Tom";
			// vm.reverseName2 = function(){
			// 	vm.name2 = vm.name2.split('').reverse().join('');
			// };
		}

	// could not get the directive's local scope to work with the 'as Controller' scope
	angular
		.module('App')
		.controller('SubCtrl', function($scope){

			$scope.name2 = "Tom";
			$scope.reverseName2 = function(){
				$scope.name2 = $scope.name2.split('').reverse().join('');
			}

		});

})();
