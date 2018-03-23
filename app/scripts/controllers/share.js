'use strict';

/*globals app */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:ShareCtrl
 * @description
 * # ShareCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('ShareCtrl', function ($scope, $rootScope, $timeout, $state, DataSrv, time) {
    var t;
    var unbind;

    var init = function() {
        $scope.share = {};

        $rootScope.$watch('settings.group', function(newValue, oldValue) {
            $timeout.cancel(t);
            if (newValue !== oldValue) {
                t = $timeout($scope.getShareList, 2500);
            }
        });

        $rootScope.$watchGroup(['login.authenticating', 'login.authenticated'], function(newValue, oldValue) {
            if ($rootScope.login.authenticating === false && $rootScope.login.authenticated === false) {
                $state.go('login');
            }
        });

        $timeout(function() {
            $scope.initialized = true;
        }, 1500);
    };

    $scope.randStr = function(l) {
        var text = '';
        var possible = 'abcdefghijklmnopqrstuvwxyz';

        for (var i = 0; i < l; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    };

    $scope.getShareList = function() {
        if ($rootScope.settings.group) {
            if (unbind) {
                unbind();
            }

            $scope.shareList = DataSrv.getObj('shares/' + $rootScope.settings.group);

            $scope.shareList.$bindTo($scope, 'shareList').then(function(ub) {
                unbind = ub;
            });
        }
    };

    $scope.addShare = function() {
        var timestamp = time.unix();
        var key = timestamp + $scope.randStr(5);
        $scope.shareList[key] = {
            owner: 'KrTPoTkRk2OqqvZlkp6WV70jKN92',
            item: 'test',
            seller: 'mau',
            users: [],
            date: timestamp,
            amount: 1,
            price: 0
        };
    };

    $scope.removeShare = function(id) {

    };

    $scope.editShare = function(share) {
        $scope.share.share = share;
        $scope.share.edit = angular.copy(share);
    };

    $scope.addUser = function(share) {
        if (!angular.isArray(share.users)) {
            share.users = [];
        }

        share.users.push({
            name: '',
            state: 0
        });
    };

    $scope.removeUser = function(shareId, userId) {
        var ref = DataSrv.get('shares/' + $rootScope.settings.group + '/' + shareId + '/users/' + userId);
        ref.remove();
    };

    $scope.orderShareList = function(share) {
        return share.date;
    };

    init();
});
