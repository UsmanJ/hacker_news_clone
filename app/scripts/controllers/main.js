'use strict';

/**
 * @ngdoc function
 * @name hackerNewsHomepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackerNewsHomepageApp
 */
angular.module('hackerNewsHomepageApp')
  .controller('MainCtrl', ['$scope', 'New', 'Story', function ($scope, New, Story) {

    $scope.stories = [];
    $scope.topStories = 0;
    $scope.loaded = false;

    $scope.getTop = function() {
      New.get()
        .then(function(response) {
          $scope.topStories = response.data;
          console.log(response.data)
          $scope.getStories($scope.topStories);
      });
    };

    $scope.getStories = function(topStoryId) {
      var i;
      for (i = 0; i < 31; i++) {
        Story.get(topStoryId[i])
        .then(function(response) {
          $scope.stories.push(response.data);
          $scope.loaded = true;
          console.log($scope.stories[1])
          console.log($scope.stories[5])
        });
      }
    };

    angular.element(document).ready(function () {
      $scope.getTop();
    });

  }]);
