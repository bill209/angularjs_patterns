(function() {
	'use strict';

	angular
		.module('FirebaseApp')
		.controller('FirebaseCtrl', fbCtrl );

	function fbCtrl(firebaseFactory, $firebaseArray){
		var vm = this;
		vm.msg = 'zzz';
		vm.e = {};
		vm.e.EMAIL = false;
		vm.e.PWD = false;

		vm.addUser = addUser;

		function addUser(d){
			var promise = firebaseFactory.addUser(d);

			promise.then(function(uID){
console.log('uID',uID);
				$scope.usereID = uID;
			});


		}
	}

})();
