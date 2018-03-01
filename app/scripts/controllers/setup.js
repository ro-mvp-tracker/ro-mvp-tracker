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
    var init = function() {
        $scope.setup = {};
        $scope.setup.groupKey = $rootScope.settings.groupKey;
        $scope.setup.name = $rootScope.settings.name;
        if (!$scope.setup.groupKey) {
            $scope.generateGroupKey();
        }
    };

    $scope.isValid = function() {
        return $scope.setup.groupKey && $scope.setup.name;
    };
    
    $scope.submit = function() {
        $rootScope.settings.groupKey = $scope.setup.groupKey;
        $rootScope.settings.name = $scope.setup.name;
        $state.go('mvp');
    };
    
    $scope.generateGroupKey = function() {
        $scope.setup.groupKey = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < 5; i++) {
            $scope.setup.groupKey += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    };

    init();
});
