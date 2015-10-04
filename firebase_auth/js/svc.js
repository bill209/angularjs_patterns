(function () {
	'use strict';

	angular
		.module('FirebaseApp')
		.factory('firebaseFactory', function ($firebaseArray) {

            var ref = new Firebase(myFirebase);
			var addUser = function (userData, callback) {
				ref.createUser({
					'email' : userData.email,
					'password' : userData.password
				}, callback);
			};
			return { addUser : addUser };
		});
})();
