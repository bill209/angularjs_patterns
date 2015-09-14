(function() {
	'use strict';

	angular
		.module('FirebaseApp')
		.controller('FirebaseCtrl', fbCtrl );

	function fbCtrl(firebaseFactory, $firebaseArray){
		var vm = this;
		vm.t = {};
		vm.t.EMAIL = false;
		vm.t.PWD = false;

		vm.addUser = addUser;

		function addUser(userData){
			firebaseFactory.addUser(userData, function(err,user) {
console.log('userData',userData);
console.log('err',err);
console.log('user',user);
				if(err != false){
					vm.t.EMAIL = true;
				}
			});
		}

	};
})();
