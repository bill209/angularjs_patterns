(function() {
	'use strict';

// restCalls view controller
	angular
		.module('Restful')
		.controller('RestCallsCtrl', restCallsCtrl);

	function restCallsCtrl($scope, restCallsFactory) {
		var vm = this;
		vm.artist = 'jack johnson';
		var promise = restCallsFactory.getItunesMusic(vm.artist.replace(/ /g, '+'));
		promise.then(function(musicData){
			vm.iTunes = musicData;
		});

		var promise = restCallsFactory.getOpenNotifySpacePeople();
		promise.then(function(spaceData){
			vm.spacePeeps = spaceData;
		});

		vm.author = 'terry pratchett';
		var promise = restCallsFactory.getGoogleBooks(vm.author.replace(/ /g, '+'));
		promise.then(function(bookData){
			vm.books = bookData;
		});
	};

})();
