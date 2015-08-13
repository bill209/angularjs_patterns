(function() {
	'use strict';
//http://tutorialzine.com/2013/08/learn-angularjs-5-examples/   by martin angelov
	angular
		.module('App',[]);

	angular
		.module('App')
		.filter('searchFor', function(){

			// All filters must return a function. The first parameter
			// is the data that is to be filtered, and the second is an
			// argument that may be passed with a colon (searchFor:searchString)

			return function(arr, searchString){

				if(!searchString){
					return arr;
				}

				var result = [];

				searchString = searchString.toLowerCase();

				// Using the forEach helper method to loop through the array
				angular.forEach(arr, function(item){

					if(item.catcher.toLowerCase().indexOf(searchString) !== -1){
						result.push(item);
					}

				});

				return result;
			};

		});

	angular
		.module('App')
		.controller('MainCtrl',function($scope){

		$scope.items = [
			{
				catcher:'Johnny Bench',
				url:'http://www.baseball-almanac.com/players/player.php?p=benchjo01'
			},
			{
				catcher:'Yogi Berra',
				url:'http://www.baseball-almanac.com/players/player.php?p=berrayo01'
			},
			{
				catcher:'Roger Bresnahan',
				url:'http://www.baseball-almanac.com/players/player.php?p=bresnro01'
			},
			{
				catcher:'Roy Campanella',
				url:'http://www.baseball-almanac.com/players/player.php?p=camparo01'
			},
			{
				catcher:'Gary Carter',
				url:'http://www.baseball-almanac.com/players/player.php?p=cartega01'
			},
			{
				catcher:'Mickey Cochrane',
				url:'http://www.baseball-almanac.com/players/player.php?p=cochrmi01'
			},
			{
				catcher:'Bill Dickey',
				url:'http://www.baseball-almanac.com/players/player.php?p=dickebi01'
			},
			{
				catcher:'Buck Ewing',
				url:'http://www.baseball-almanac.com/players/player.php?p=ewingbu01'
			},
			{
				catcher:'Rick Ferrell',
				url:'http://www.baseball-almanac.com/players/player.php?p=ferreri01'
			},
			{
				catcher:'Carlton Fisk',
				url:'http://www.baseball-almanac.com/players/player.php?p=fiskca01'
			},
			{
				catcher:'Gabby Hartnett',
				url:'http://www.baseball-almanac.com/players/player.php?p=hartnga01'
			},
			{
				catcher:'Ernie Lombardi',
				url:'http://www.baseball-almanac.com/players/player.php?p=lombaer01'
			},
			{
				catcher:'Ray Schalk',
				url:'http://www.baseball-almanac.com/players/player.php?p=schalra01'
			},
		];
	});
})();
