(function() {
	'use strict';

	angular
		.module('FirebaseApp')
		.controller('FirebaseCtrl', fbCtrl );

	function fbCtrl(firebaseFactory, $firebaseArray){
		var vm = this;
		vm.addUser = addUser;

		function addUser(userData){
			firebaseFactory.addUser(userData, function(e,u) {
				console.log('e',e);
				console.log('u',u);
			});
		}

	};
})();
