(function() {
	'use strict';

	angular
		.module('FirebaseApp')
		.factory('firebaseFactory',function($q,$http,$firebaseArray){

		return {
			getThoughts: function(){
				var fb = new Firebase(myFirebase);
				return $firebaseArray(fb);
			},
			addThought: function(data) {
				//data: {user: $scope.glob.username, title: title, idx: idx
				var fb = new Firebase(myFirebase);
				var newRef = fb.push({'pondering':data.pondering});
				return newRef.name();
			},

			addUser: function(data){
				var ref = new Firebase(myFirebase);
				ref.createUser({
					email: "bobtony@firebase.com",
					password: "correcthorsebatterystaple"
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
					}
				});
			}

		}
	});

})();
