'use strict';

/**
 * @ngdoc service
 * @name publicationsApp.util
 * @description
 * # util
 * Factory in the publicationsApp.
 */
angular.module('publicationsApp')
  .factory('util', function () {

    var meaningOfLife = 42;

    var getCount = function(value){
      var  count = {};
      value.forEach(function(i) { count[i] = (count[i]||0) + 1;});
      return count;
    };

    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getCount: getCount
    };
  });
