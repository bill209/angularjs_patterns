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
			}
		}
	});

})();
