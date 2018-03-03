'use strict';

describe('Filter: ceil', function () {

  // load the filter's module
  beforeEach(module('roMvpTrackerApp'));

  // initialize a new instance of the filter before each test
  var ceil;
  beforeEach(inject(function ($filter) {
    ceil = $filter('ceil');
  }));

});
