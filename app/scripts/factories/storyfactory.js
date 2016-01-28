'use strict';

angular.module('hackerNewsHomepageApp')
  .factory('Story', ['$http', function($http){
    return {
      get: function(storyId){
        return $http({
          url: 'https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json?print=pretty',
          method: 'GET',
        })
      }
    }
  }]);
