'use strict';

describe('Controller: ShareCtrl', function () {

  // load the controller's module
  beforeEach(module('roMvpTrackerApp'));

  var ShareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShareCtrl = $controller('ShareCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
