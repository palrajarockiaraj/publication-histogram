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

    var getCount = function(value){
      var  count = {};
      value.forEach(function(i) { count[i] = (count[i]||0) + 1;});
      return count;
    };

    var findFirstMatchingPubYear = function(arrayValue, matchValue){
      var filterPubYear = arrayValue.filter(function(e) {
        return e.pubYear == matchValue;
      })[0];
      return filterPubYear;
    };

    return {
      getCount: getCount,
      findFirstMatchingPubYear: findFirstMatchingPubYear
    };
  });
