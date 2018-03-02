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

        var t;
        $rootScope.$watch('settings', function() {
            $timeout.cancel(t);
            t = $timeout($scope.save, 2000);
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

        $rootScope.$watch('settings.authKey', function() {
            $scope.authenticate();
        });

        $rootScope.$watch('settings.authKey', function() {
            $scope.authenticate();
        });

        var retauthenticate = false;
        $firebaseAuth().$onAuthStateChanged(function(user) {
            console.log('!!!!!!!!!!', user);
            if (user) {
                $scope.settings.$authenticated = true;
                retauthenticate = false;
            } else {
                $scope.settings.$authenticated = false;
                if (!retauthenticate) {
                    retauthenticate = true;
                    $scope.authenticate();
                }
            }
        });

        $transitions.onSuccess({}, function(event, toState, toParams, fromState, fromParams, options) {
            $scope.checkSettings();
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

        $scope.checkSettings();
    };

    $scope.authenticate = function() {
        console.log('authenticate');
        var email = 'ro.mvp.tracker@gmx.de';
        $firebaseAuth().$signInWithEmailAndPassword(email, $rootScope.settings.authKey)
        .then(function(res) {
            console.log('->ok', res);
            $rootScope.settings.$authenticated = true;
        })
        .catch(function(error) {
            console.log('->error', error);
            $rootScope.settings.$authenticated = false;
        });
    };

    $scope.checkSettings = function() {
        if (!$rootScope.settings.authKey || !$rootScope.settings.group || !$rootScope.settings.name) {
            $state.go('setup');
            $scope.settingsDropdown.open = false;
        } else {
            $state.go('mvp');
        }
    };

    init();
});
