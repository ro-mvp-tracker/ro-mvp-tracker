'use strict';

/*globals app */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('SettingsCtrl', function ($scope, $rootScope, $timeout, $state, $transitions, localStorageService) {
    var init = function() {
        $scope.settingsDropdown = $scope.settingsDropdown || {};

        var t;
        $rootScope.$watch('settings', function() {
            $timeout.cancel(t);
            t = $timeout($scope.save, 2000);
        }, true);

        $transitions.onSuccess({}, function(event, toState, toParams, fromState, fromParams, options) {
            $scope.checkSettings();
        });

        $scope.load();
    };

    $scope.load = function() {
        $rootScope.settings = localStorageService.get('settings');

        //default settings
        if (typeof($rootScope.settings) !== 'object') {
            $rootScope.settings = {
                groupKey: '',
                name: '',
                notificationEnabled: true,
                notificationTime: 1
            };
        }
    };

    $scope.save = function() {
        localStorageService.set('settings', $rootScope.settings);

        $scope.checkSettings();
    };

    $scope.checkSettings = function() {
        if (!$rootScope.settings.groupKey || !$rootScope.settings.name) {
            $state.go('setup');
            $scope.settingsDropdown.open = false;
        } else {
            $state.go('mvp');
        }
    };

    init();
});
