'use strict';

describe('Controller: SignupCtrl', function () {

  // load the controller's module
  beforeEach(module('roMvpTrackerApp'));

  var SignupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignupCtrl = $controller('SignupCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
