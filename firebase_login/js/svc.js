(function() {
	'use strict';

	angular
		.module('FirebaseApp')
		.factory('firebaseFactory_old',

			function(){

				return {
					addUser: function(data){
						var ref = new Firebase(myFirebase);
						ref.createUser({
							email: data.email,
							password: data.password
						}, addUserResults);
					}
				}
			});

			function addUserResults(error, userData) {
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
		};


	angular
		.module('FirebaseApp')
		.factory('firebaseFactory',

			function($firebaseAuth, $location) {

				var ref = new Firebase(myFirebase);
				var authObj = $firebaseAuth(ref);

				var myObj = {
					addUser: function(user) {
						return authObj.$createUser({
							email: user.email,
							password: user.password
						})
							.then(function(authData) {

								console.log(authData); // returns undefined

							});
					},

					login: function(user) {
						return authObj.$authWithPassword({
							email: user.email,
							password: user.password
						});
					},

					logout: function() {
						return authObj.$unauth();
					}
				}

				return myObj;

			});




})();

