(function() {
	'use strict';

	angular
		.module('FirebaseApp')
		.factory('firebaseFactory',function($q,$http,$firebaseArray){

		return {
			test: function(){
				 var ref = new Firebase("https://k9yb2zte03z.firebaseio-demo.com/")
				return $firebaseArray(ref);
			},
			getThoughts: function(){
				var fb = new Firebase(myFirebase);
				return $firebaseArray(fb);
// 				var deferred = $q.defer();

// 				fb.on("value", function(snapshot) {
// 					deferred.resolve(snapshot.val());
// console.log('snapshot.val()',snapshot.val());
// 				}, function (errorObject) {
// 					console.log("The read failed: " + errorObject.code);
// 				});
// 				return deferred.promise
			},
			addThought: function(data) {
				//data: {user: $scope.glob.username, title: title, idx: idx
				var fb = new Firebase(myFirebase);
				var newRef = fb.push({'pondering':data.pondering});
				return newRef.name();
			},
			checkIfRecordsExists: function(){
				var fb = new Firebase(myFirebase);
				var deferred = $q.defer();

				fb.on("value", function(snapshot) {
					deferred.resolve(!!(snapshot.val()));  // this evaluates to true/false
				}, function (errorObject) {
					console.log("The read failed: " + errorObject.code);
				});
				return deferred.promise
			}
		}
	});




})();
