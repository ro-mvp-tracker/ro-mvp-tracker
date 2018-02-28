'use strict';

/*globals app */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:SetupCtrl
 * @description
 * # SetupCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('SetupCtrl', function ($scope, $rootScope, $state) {
    $scope.setup = {};

    $scope.isValid = function() {
        return $scope.setup.groupKey && $scope.setup.name;
    };
    
    $scope.submit = function() {
        $rootScope.settings.groupKey = $scope.setup.groupKey;
        $rootScope.settings.name = $scope.setup.name;
        $state.go('mvp');
    };
});
