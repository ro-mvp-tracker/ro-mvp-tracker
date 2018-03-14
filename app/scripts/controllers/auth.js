'use strict';

/*globals app */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('AuthCtrl', function ($rootScope, $scope, $state, $timeout, localStorageService, AuthSrv, DataSrv) {
    var unbind1;

    var init = function() {
        $rootScope.login = {};

        var t1;
        $rootScope.$watch('login.credentials', function() {
            $timeout.cancel(t1);
            t1 = $timeout($scope.save, 2000);
        }, true);

        AuthSrv.onStateChange(function(user) {
            if (user) {
                //
            } else {
                $rootScope.login.user = null;
                $rootScope.login.authenticated = false;

                if (unbind1) {
                    unbind1();
                }

                $rootScope.login.userData = {};
            }
        });

        $scope.load();
        $scope.authenticate();
    };

    $scope.load = function() {
        $rootScope.login.credentials = localStorageService.get('credentials') || null;

        if (!$rootScope.login.credentials || typeof($rootScope.login.credentials) !== 'object') {
            $rootScope.login.credentials = {
                email: '',
                password: '',
            };
        }
    };

    $scope.save = function() {
        localStorageService.set('credentials', $rootScope.login.credentials);
    };

    $scope.authenticate = function() {
        if (!$rootScope.login.credentials.email || !$rootScope.login.credentials.password) {
            $rootScope.login.authenticated = false;
            $rootScope.login.authenticating = false;
            return;
        }

        $rootScope.login.authenticated = false;
        $rootScope.login.authenticating = true;

        return AuthSrv.login($rootScope.login.credentials.email, $rootScope.login.credentials.password)
            .then(function(user) {
                $rootScope.login.user = user;
                return $scope.getUserData();
            })
            .then(function() {
                console.log('authenticate OK', $rootScope.login.user);
                $rootScope.login.authenticated = true;
            })
            .catch(function(err) {
                console.log('authenticate ERROR', err);

                $rootScope.login.user = null;
                $rootScope.login.authenticated = false;

                throw err;
            })
            .finally(function() {
                $rootScope.login.authenticating = false;
            });
    };

    $scope.logout = function() {
        $rootScope.login.credentials.email = null;
        $rootScope.login.credentials.password = null;
        $scope.save();

        AuthSrv.logout()
            .then(function() {
                $state.go('login');
            })
            .catch(function() {
                //
            });
    };

    $scope.getUserData = function() {
        if (unbind1) {
            unbind1();
        }

        $rootScope.login.userData = DataSrv.getObj('users/' + $rootScope.login.user.uid);

        $rootScope.login.userData.$bindTo($rootScope, 'login.userData').then(function(ub) {
            unbind1 = ub;
        });

        return $rootScope.login.userData.$loaded();
    };

    init();
});
