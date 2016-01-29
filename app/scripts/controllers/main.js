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

    // $scope.stories = [];
    // $scope.topStories = 0;
    // $scope.loaded = false;
    //
    // $scope.getTop = function() {
    //   New.get()
    //     .then(function(response) {
    //       $scope.topStories = response.data;
    //       console.log(response.data)
    //       $scope.getStories($scope.topStories);
    //   });
    // };
    //
    // $scope.getStories = function(topStoryId) {
    //   var i;
    //   for (i = 0; i < 31; i++) {
    //     Story.get(topStoryId[i])
    //     .then(function(response) {
    //       $scope.stories.push(response.data);
    //       $scope.loaded = true;
    //       console.log($scope.stories[1])
    //       console.log($scope.stories[5])
    //     });
    //   }
    // };
    //
    // angular.element(document).ready(function () {
    //   $scope.getTop();
    // });


  var ref = new Firebase("http://hacker-news.firebaseio.com/v0/");
	var itemRef = ref.child('item');

	var topStories = [];
  $scope.topStories = [];
  $scope.loaded = false;

	$scope.storyCallback = function(snapshot) {
		var story = snapshot.val();
		var html = '';

    if(story.score) {
        // html = '<i>'+story.score+'</i> <a href="'+story.url+'" id="article_a">'+story.title+'</a>'
        $scope.topStories.push(story);
    }
    $scope.loaded = true;
    console.log($scope.topStories[0].title)
    // document.getElementById(topStories.indexOf(story.id)).innerHTML = html;
	}

	ref.child('topstories').once('value', function(snapshot) {
		topStories = snapshot.val();

		for(var i = 0; i < 30; i++) {
			// var element = document.createElement("P");
			// element.id = i;
			// document.getElementById('items').appendChild(element);

			itemRef.child(topStories[i]).on('value', $scope.storyCallback);
		}
	});

	// ref.child('topstories').on('child_changed', function(snapshot, prevChildName) {
	// 	var ref = snapshot.ref()
	// 	var index = ref.name();
  //
	// 	var oldItemId = topStories[index];
	// 	itemRef.child(oldItemId).off();
  //
	// 	var newItemId = snapshot.val();
  //
	// 	topStories[index] = newItemId
	// 	itemRef.child(newItemId).on('value', storyCallback);
	// });

  }]);
