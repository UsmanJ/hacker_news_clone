'use strict';

/**
 * @ngdoc function
 * @name hackerNewsHomepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackerNewsHomepageApp
 */
angular.module('hackerNewsHomepageApp')
  .controller('MainCtrl', ['$scope', '$window', function ($scope, $window) {

    var ref = new Firebase('http://hacker-news.firebaseio.com/v0/');
  	var itemRef = ref.child('item');

    var self = this;

  	var topStories = [];
    self.topStories = [];
    self.loaded = false;

  	self.storyCallback = function(snapshot) {
  		var story = snapshot.val();

      if(story.score) {
          self.topStories.push(story);
          if (self.topStories.length === 29) {
            setTimeout(function () {
                $scope.$apply(function(){
                    self.loaded = true;
                });
            }, 500);
            }
      }
  	};

    $scope.openLink = function(story) {
      $window.open(story.url);
    };

  	ref.child('topstories').once('value', function(snapshot) {
  		topStories = snapshot.val();

  		for(var i = 0; i < 30; i++) {
  			itemRef.child(topStories[i]).on('value', self.storyCallback);
  		}
  	});

  	ref.child('topstories').on('child_changed', function(snapshot, prevChildName) {
  		var ref = snapshot.ref();
  		var index = ref.name();

  		var oldItemId = topStories[index];
  		itemRef.child(oldItemId).off();

  		var newItemId = snapshot.val();

  		topStories[index] = newItemId;
  		itemRef.child(newItemId).on('value', self.storyCallback);
  	});

  }]);
