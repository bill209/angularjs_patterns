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

		}
})();
