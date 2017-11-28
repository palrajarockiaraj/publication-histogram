'use strict';

/**
 * @ngdoc directive
 * @name publicationsApp.directive:barChart
 * @description
 * # barChart
 */
angular.module('publicationsApp')
  .directive('barChart', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
	  scope: {
	    chartOptions: '='
	  },      
      link: function postLink(scope, element, attrs) {
		Highcharts.chart(element[0], {
		    chart: {
		        type: 'column'
		    },
		    title: {
		        text: scope.chartOptions.title
		    },
		    credits: {
		        enabled: false
		    },
			legend: {
        		enabled: false
    		},		    
		    xAxis: {
		    	// categories : ['1976', '2012', '2003', '2010', '2006', '2001', '2002', '1979', '2013', '2004', '2005', '1989', '1999', '2009', '2015', '1997']
		        /*categories: [
		            'Jan',
		            'Feb',
		            'Mar',
		            'Apr',
		            'May',
		            'Jun',
		            'Jul',
		            'Aug',
		            'Sep',
		            'Oct',
		            'Nov',
		            'Dec'
		        ],
		        crosshair: true*/
				type: 'datetime',
		        dateTimeLabelFormats: { // don't display the dummy year
					day: "%b %e, '%y",
                	week: "%b %e, '%y"		            
		            // month: '%e. %b',
		            // year: '%Y'
		        },
		        title: {
		            text: 'Year'
		        },
		        crosshair: true	        
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: 'Number Of Publications'
		        }
		    },
		    tooltip: {
		        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
		        footerFormat: '</table>',
		        shared: true,
		        useHTML: true
		    },
		    plotOptions: {
		        column: {
		            pointPadding: 0.2,
		            borderWidth: 0
		        }
		    },
		    // series:scope.chartOptions.chartData
		    series:[{
				data:[
					[Date.UTC(1976,8,1), 1],
					[Date.UTC(2010,10,1), 3],
					[Date.UTC(2012,12,1), 2],
					[Date.UTC(2003,3,1), 1],
					[Date.UTC(2012,12,1), 2],
					[Date.UTC(2006,11,1), 2],
					[Date.UTC(2001,1,1), 1],
					[Date.UTC(2002,10,1), 3],
					[Date.UTC(2006,5,1), 1],
					[Date.UTC(2003,9,1), 1],
					[Date.UTC(2012,4,1), 1],
					[Date.UTC(2012,12,1), 1],
					[Date.UTC(1979,6,1), 1],
					[Date.UTC(2013,4,7), 1],
					[Date.UTC(2004,1,30), 1],
					[Date.UTC(2005,3,1), 1],
					[Date.UTC(1989,3,1), 2],
					[Date.UTC(2002,4,1), 3],
					[Date.UTC(1999,12,1), 1],
					[Date.UTC(2002,1,1), 4],
					[Date.UTC(2009,7,1), 2],
					[Date.UTC(2014,12,18), 5],
					[Date.UTC(1997,4,1), 7],
					[Date.UTC(2001,10,1), 3],
					[Date.UTC(1999,10,1), 1]
				]
		    }]
		});        
      }
    };
  });
