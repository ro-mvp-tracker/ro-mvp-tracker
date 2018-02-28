'use strict';

describe('Controller: MvpCtrl', function () {

  // load the controller's module
  beforeEach(module('roMvpTrackerApp'));

  var MvpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MvpCtrl = $controller('MvpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
