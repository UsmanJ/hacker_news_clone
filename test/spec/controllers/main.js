'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('hackerNewsHomepageApp'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.loaded).toBe(false);
  });
});
