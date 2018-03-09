'use strict';

/*globals app */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('UsersCtrl', function ($rootScope, $scope, $timeout, firebase, $firebaseObject, localStorageService, time) {
    var unbind;

    var init = function() {
        $scope.updateTimer = null;

        $scope.getUsersList();
        $scope.update();
    };

    $scope.getUsersList = function() {
        if (unbind) {
            unbind();
        }

        var ref = firebase.database().ref().child('users');
        var obj = $firebaseObject(ref);

        $scope.usersListRef = ref;
        $scope.usersList = obj;

        obj.$bindTo($scope, 'usersList').then(function(ub) {
            unbind = ub;
        });
    };

    $scope.createUserId = function() {
        var uid = '';
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 8; i++) {
            uid += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        localStorageService.set('uid', uid);

        return uid;
    };


    $scope.getUserId = function() {
        var uid = localStorageService.get('uid');
        if (!uid || typeof(uid) !== 'string' || uid.length !== 8) {
            uid = $scope.createUserId();
        }

        return uid;
    };

    $scope.update = function() {
        if (time.isSynced()) {
            if ($scope.usersList && typeof($scope.usersList) === 'object' && typeof($scope.usersList.$resolved) === 'undefined') {
                var uid = $scope.getUserId();
                if (uid in $scope.usersList) {
                    var user = $scope.usersList[uid];
                    user.name = $rootScope.settings.name;
                    user.time = time.unix();
                } else {
                    $scope.usersList[uid] = {
                        name: $rootScope.settings.name,
                        time: time.unix()
                    };
                }

                var timestamp = time.unix();
                angular.forEach($scope.usersList, function(user, uid) {
                    if (user && typeof(user) === 'object') {
                        var diffTime = timestamp - user.time;
                        if (diffTime > 30) {
                            var ref = firebase.database().ref().child('users/' + uid);
                            ref.remove();
                        }
                    }
                });
            }
        }

        $timeout.cancel($scope.updateTimer);
        $scope.updateTimer = $timeout($scope.update, 10000);
    };

    init();
});
