'use strict';

/**
 * @ngdoc function
 * @name publicationsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicationsApp
 */
angular.module('publicationsApp')
  .controller('MainCtrl', ['$scope', '$http', 'AppConstants', 'util', function ($scope, $http, AppConstants, util) {
    $scope.chart = {};
    $scope.chart.title = "Publication Histogram";
    $scope.showChart = false;
    $scope.chart.categories = [];
	$scope.chart.chartData = [];

	$scope.search = function(){		
	    $http.get(AppConstants.WS_URL+'/search?query='+$scope.searchQuery+'&sort=CITED%20desc&format=json').then(function(response){
	    	if(response.data.resultList.result.length > 0){    		
		    	var allYears = [];
		    	angular.forEach(response.data.resultList.result, function(value, key){
		    		allYears.push(value.pubYear);
		    	});

		    	var count = util.getCount(allYears);
		    	angular.forEach(count, function(value, key){
		    		var tempObject = {},
		    		firstMatchingPubYear = util.findFirstMatchingPubYear(response.data.resultList.result, key);

		    		tempObject.y = value;
		    		tempObject.mostCited = firstMatchingPubYear;
		    		$scope.chart.categories.push(key);
		    		$scope.chart.chartData.push(tempObject);
		    	});

		    	$scope.showChart = true;
	    	} else {
	    		$scope.showChart = false;
	    	}
	    }, function(errorResponse){
	    	console.log(errorResponse);
	    });
	};
  }]);
