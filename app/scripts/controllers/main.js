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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.chart = {};
    $scope.chart.title = "Publication Histogram";
    $scope.showChart = false;
	$scope.chart.chartData = [];

	$scope.search = function(){		
	    $http.get(AppConstants.WS_URL+'/search?query='+$scope.searchQuery+'&sort=CITED%20desc&format=json').then(function(response){
	    	if(!response.data.errCode){    		
		    	var allYears = [];
		    	angular.forEach(response.data.resultList.result, function(value, key){
		    		allYears.push(value.pubYear);
		    	});

		    	var count = util.getCount(allYears);
		    	angular.forEach(count, function(value, key){
		    		$scope.chart.chartData.push([+key, value]);
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
