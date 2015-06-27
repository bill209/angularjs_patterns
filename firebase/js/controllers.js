(function() {
	'use strict';

	angular
		.module('FirebaseApp')
		.controller('FirebaseCtrl', fbCtrl );

		function fbCtrl(firebaseFactory, $firebaseArray){
			var vm = this;
			vm.recordsExists = true;
			vm.thoughts = {};
			vm.addThought = addThought;
			vm.getThoughts = getThoughts;

			function getThoughts(){
				vm.thoughts = firebaseFactory.getThoughts();
				console.log('vm.thoughts',vm.thoughts);
			}
			function addThought(d){
				var id = firebaseFactory.addThought(d);
				checkIfRecordsExists();
			}
			vm.getThoughts();
		}

})();
