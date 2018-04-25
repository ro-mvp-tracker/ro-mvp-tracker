'use strict';

describe('Controller: MvpallCtrl', function () {

  // load the controller's module
  beforeEach(module('roMvpTrackerApp'));

  var MvpallCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MvpallCtrl = $controller('MvpallCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
