// each directive can be broken out into its own file to encourage re-use. however,
// they are combined into a single file for demonstration purposes

(function() {
	'use strict';

	// template example using directive description	method
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
		.directive('mirror', function(){
			return {
				restrict: 'C',
				template: '<input type="text" value="{{lipstick}}"/>'
			}
		});

	angular
		.module('App')
		.directive('flipIt', function(){
			return {
				restrict: 'C',

				scope : {
					items : "="
				},
				template: '<span>click to inverse -></span><input type="text" value="{{desi}}"/>',
				link: function (scope, element, attrs, ngModel){
					element.on("input", function (){
						scope.flipped = 'input';
						scope.$apply();
					});
					element.on("click", function (){
						scope.flipped = scope.desi.split("").reverse().join("");

						scope.$apply();
					});
				}
			}
		});
	// using ng-model on an element contained within the directive
	angular
		.module('App')
		.directive("bank", function(){
			return{
				restrict: "E",
				template: "<div> Click to deposit $10</div>",
				require: "ngModel",
				link: function (scope, element, attrs, ngModel){
					element.on("click", function (){
						ngModel.$setViewValue(ngModel.$viewValue +10);
						scope.$apply();
					});
				}
			};
		});

angular
.module('App')
.directive("myDirective", function(){
	return {
		restrict: "E",
		template : '<h1>Click to choose!</h1><span class="clkm" ng-repeat="item in mainCtrl.items" ng-click="updateModel(item)">{{item}}</span>',
		require: 'ngModel',

		link : function(scope, element, attrs, ctrl){
			scope.updateModel = function(item)
			{
				ctrl.$setViewValue(item);
			}
			ctrl.$viewChangeListeners.push(function() {
				scope.$eval(attrs.ngChange);
			});
		}
	};
});

angular
.module('App')
.directive("myDirectiveX", function(){
	return {
		restrict: "E",
		template : '<h1>Click to choose!</h1><span class="clkm" ng-repeat="item in mainCtrl.items" ng-click="updateModelx(item)">{{item}}</span>',
		require: 'ngModel',
		link : function(scope, element, attrs, ctrl){
			scope.updateModelx = function(item)
			{
				ctrl.$setViewValue(item);
			}
			ctrl.$viewChangeListeners.push(function() {
				scope.$eval(attrs.ngChange);
			});
		}
	};
});
})();
