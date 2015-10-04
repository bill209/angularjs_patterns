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
            var removeUser = function (email, callback){
                ref.removeUser({ email : email , password : 'justdoit' }, function(error) {
                    if (error){
                        console.log('error',error);
                    } else {
                        console.log('user successfully deleted');
                    }
                })
            };
			return { addUser : addUser, removeUser : removeUser };
		});
})();
