(function() {
	'use strict';

	angular
		.module('FirebaseApp')
		.controller('FirebaseCtrl', fbCtrl );

	function fbCtrl(firebaseFactory, $firebaseArray, $timeout){
		var vm = this;
		vm.t = {};
		vm.t.EMAIL = false;
		vm.t.PWD = false;
        vm.successfulRegistration = false;

		vm.addUser = addUser;

		function addUser(userData){
			firebaseFactory.addUser(userData, function(err,user) {
				if(err != null){
                    console.log('error',err,user);
				} else {
                    $timeout(function(){
                        vm.successfulRegistration = true;
                    });
                    console.log('success');
                }
			});
		}

	};
})();
