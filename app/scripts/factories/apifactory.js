'use strict';

angular.module('hackerNewsHomepageApp')
  .factory('New', ['$http', function($http){
    var queryUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    return {
      get: function(){
        return $http({
          url: queryUrl,
          method: 'GET',
        });
      }
    };
  }]);
