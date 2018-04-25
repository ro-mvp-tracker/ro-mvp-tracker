'use strict';

/*globals app, $ */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:MvpallCtrl
 * @description
 * # MvpallCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('MvpAllCtrl', function ($scope, $rootScope, $timeout, $state, DataSrv, webNotification, time) {
    var t;
    var unbind;

    var init = function() {
        $scope.notifications = {};

        $rootScope.$watch('settings.group', function(newValue, oldValue) {
            $timeout.cancel(t);
            if (newValue !== oldValue) {
                t = $timeout($scope.getTrackAllList, 2500);
            }
        });

        $rootScope.$watchGroup(['login.authenticating', 'login.authenticated'], function(newValue, oldValue) {
            if ($rootScope.login.authenticating === false && $rootScope.login.authenticated === false) {
                $state.go('login');
            }
        });

        $scope.$watchGroup(['mvpList', 'trackAllList'], function() {
            var toArray = function(value, index) {
                return [value];
            };

            if (typeof($scope.mvpList) === 'object' && typeof($scope.trackAllList) === 'object') {
                var key;
                var mvp;
                var track;
                var trackArr;
                for (var i in $scope.mvpList) {
                    mvp = $scope.mvpList[i];
                    if (mvp) {
                        key = mvp.id + mvp.map;
                        track = $scope.trackAllList[key];
                        trackArr = $.map(track, toArray);
                        trackArr.sort();
                        mvp.$track = trackArr || [];
                    }
                }
            }
        });

        angular.element(window).bind('keyup', function($event) {
            if ($event.keyCode === 17 /* ctrl */) {
                $scope.ctrlDown = false;
            }
        });

        angular.element(window).bind('keydown', function($event) {
            if ($event.keyCode === 17 /* ctrl */) {
                $scope.ctrlDown = true;
            }

            if ($scope.ctrlDown && ($event.keyCode === 70 /* f */)) {
                $event.preventDefault();
                angular.element('#mvpFilter').select();
                window.scrollTo(0, 0);
            }
        });

        $scope.mvpList = DataSrv.getMvpList();

        time.sync().then(function() {
            $scope.getTrackAllList();
        });

        $timeout(function() {
            $scope.initialized = true;
        }, 1500);
    };

    $scope.getTrackAllList = function() {
        if ($rootScope.settings.group) {
            if (unbind) {
                unbind();
            }

            $scope.trackAllList = DataSrv.getObj('tracks_all/');

            $scope.trackAllList.$bindTo($scope, "trackAllList").then(function(ub) {
                unbind = ub;
            });
        }
    };

    $scope.isValid = function() {
        return $scope.login.authenticated && $scope.login.userData.activated && $scope.login.userData.username;
    };

    init();
});
