'use strict';

/*globals app */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('UsersCtrl', function ($rootScope, $scope, $timeout, localStorageService, DataSrv, time) {
    var unbind;

    var init = function() {
        $scope.updateTimeTimer = null;
        $scope.updateUsersTimer = null;
        $scope.usersOnline = [];

        $scope.$watch('usersList', function(newValue, oldValue) {
            $scope.updateUsers();
        });

        $scope.getUsersList();
        $scope.updateTime();
        $scope.updateUsers();
    };

    $scope.getUsersList = function() {
        if (unbind) {
            unbind();
        }

        $scope.usersList = DataSrv.getObj('users');

        $scope.usersList.$bindTo($scope, 'usersList').then(function(ub) {
            unbind = ub;
        });
    };

    $scope.updateTime = function() {
        $timeout.cancel($scope.updateTimeTimer);
        $scope.updateTimeTimer = $timeout($scope.updateTime, 10000);

        var timestamp = time.unix();
        if (time.isSynced() && $rootScope.login.authenticated) {
            $rootScope.login.userData.lastOnline = timestamp;
        }
    };

    $scope.updateUsers = function() {
        $timeout.cancel($scope.updateUsersTimer);
        $scope.updateUsersTimer = $timeout($scope.updateUsers, 5000);

        var timestamp = time.unix();
        $scope.usersOnline.length = 0;
        if ($scope.usersList && typeof($scope.usersList) === 'object') {
            var d;
            for (var uid in $scope.usersList) {
                d = $scope.usersList[uid];
                if (d && typeof(d) === 'object' && d.lastOnline >= timestamp - 20) {
                    $scope.usersOnline.push(d);
                }
            }
        }
    };

    init();
});
