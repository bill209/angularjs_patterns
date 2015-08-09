// each directive can be broken out into its own file to encourage re-use. however,
// they are combined into a single file for demonstration purposes

(function() {
	'use strict';

	// template example using directive description  method
	angular
		.module('App')
		.directive('myCustomer', function() {
			return {
				restrict: 'A',
				template: 'Name: {{mainCtrl.customer.name}} Address: {{mainCtrl.customer.address}}'
			};
		});

	angular
		.module('App')
		.directive('myCousinVinny', function() {
			return {
				restrict: 'A',
				templateUrl: 'template.html'
			};
		});

	// clock - link example
	angular
		.module('App')
		.directive('clock', ['dateFilter', '$timeout', function(dateFilter, $timeout){
			return {
				restrict: 'E',
				scope: {
					format: '@'
				},
				link: tickTock
			};

			function tickTock(scope, element, attrs){
				var updateTime = function(){
					var now = Date.now();

					element.html(dateFilter(now, scope.format));
					$timeout(updateTime, now % 1000);
				};
				updateTime();
			}
		}]);

	// dom manipulation - link example
	angular
		.module('App')
		.directive('theClicker', function () {
			return {
				link: clickMe
			};

			function clickMe($scope, element, attrs) {
				element.bind('click', function () {
					element.html('You clicked me!');
				});
				element.bind('mouseenter', function () {
					element.css('background-color', 'yellow');
				});
				element.bind('mouseleave', function () {
					element.css('background-color', 'white');
				});
			}

		});

	angular
		.module('App')
		.directive('ngSparkline', function() {
			return {
				restrict: 'AE',
				require: '^ngModel',
				template: '<div class="sparkline"><h4>Weather for {{ngModel}}</h4></div>'
			}
		});


})();
