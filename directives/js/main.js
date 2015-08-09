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
			vm.customer = {
				name: 'Naomi',
				address: '1600 Amphitheatre'
			};
			vm.movie = {
				title: 'My Cousin Vinny',
				director : 'Jonathan Lynn',
				year: '1992'
			}

		}
})();
