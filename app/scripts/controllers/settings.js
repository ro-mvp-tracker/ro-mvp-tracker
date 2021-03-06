'use strict';

/*globals app, Notification */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('SettingsCtrl', function ($scope, $rootScope, $timeout, $state, $transitions, $firebaseAuth, localStorageService) {
    var init = function() {
        $scope.settingsDropdown = $scope.settingsDropdown || {};
        $scope.notificationTimeList = [1, 2, 3, 4, 5];

        var t1;
        $rootScope.$watch('settings', function() {
            $timeout.cancel(t1);
            t1 = $timeout($scope.save, 2000);
        }, true);

        $rootScope.$watch('settings.notificationEnabled', function() {
            if (Notification && $rootScope.settings.notificationEnabled) {
                Notification.requestPermission(function (permission) {
                    if (permission === "granted") {
                        $rootScope.settings.notificationEnabled = true;
                    } else {
                        $rootScope.settings.notificationEnabled = false;
                    }
                });
            }
        });

        $scope.load();
    };

    $scope.load = function() {
        $rootScope.settings = localStorageService.get('settings') || null;

        //default settings
        if (!$rootScope.settings || typeof($rootScope.settings) !== 'object') {
            $rootScope.settings = {
                authKey: '',
                group: '',
                name: '',
                notificationEnabled: false,
                notificationTime: 1
            };
        }
    };

    $scope.save = function() {
        localStorageService.set('settings', $rootScope.settings);
    };

    $rootScope.isValidSettings = function() {
        if (!$rootScope.settings.authKey || 
            !$rootScope.settings.group || 
            !$rootScope.settings.name) {
            return false;
        } else {
            return true;
        }
    };

    init();
});
