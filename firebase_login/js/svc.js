(function() {
	'use strict';

	angular
		.module('FirebaseApp')
		.factory('firebaseFactory',function($q, $http,$firebaseArray){

		return {
			addUser: function(data){
				var ref = new Firebase(myFirebase);
				ref.createUser({
					email: data.email,
					password: data.password
				}, function(error, userData) {
					if (error) {
						switch (error.code) {
							case "EMAIL_TAKEN":
							console.log("The new user account cannot be created because the email is already in use.");
							break;
							case "INVALID_EMAIL":
							console.log("The specified email is not a valid email.");
							break;
						default:
							console.log("Error creating user:", error);
						}
					} else {
						console.log("Successfully created user account with uid:", userData.uid);
//						return userData.uid;
					}
				});
			}

		}
	});

})();
