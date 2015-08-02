(function() {
	'use strict';

//------------------------------ restCalls factory  ------------------------------
	angular
		.module('Restful')
		.factory('restCallsFactory', restCallsFactory);

	function restCallsFactory($q, $http){
		return {
			getGoogleBooks: getGoogleBooks,
			getOpenNotifySpacePeople: getOpenNotifySpacePeople,
			getItunesMusic: getItunesMusic
		}
		// http get
		function getGoogleBooks(author){
			var deferred = $q.defer();
			var url = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:' + author + '&maxresults=10';

			$http
			.get(url)
			.error(function (data, status, headers, config) { /* error routine */ })
			.then(function(d){
				deferred.resolve(d.data.items);
			});
			return deferred.promise;
		};
		// http jsonp
		function getOpenNotifySpacePeople(){
			var deferred = $q.defer();
			var url = 'http://api.open-notify.org/astros.json?callback=JSON_CALLBACK';

			$http
			.jsonp(url)
			.error(function (data, status, headers, config) { /* error routine */ })
			.then(function(d){
				deferred.resolve(d.data);
			});
			return deferred.promise;
		};
		// http jsonp
		function getItunesMusic(artist){
			var deferred = $q.defer();
			var url = 'https://itunes.apple.com/search?term=' + artist + '&limit=10&callback=JSON_CALLBACK';

			$http
			.jsonp(url)
			.error(function (data, status, headers, config) { /* error routine */ })
			.then(function(d){
				deferred.resolve(d.data.results);
			});
			return deferred.promise;
		};
	};


})();
