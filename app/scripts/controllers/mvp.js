'use strict';

/*globals app, angular, window */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:MvpCtrl
 * @description
 * # MvpCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('MvpCtrl', function ($scope, $rootScope, $timeout, $state, DataSrv, firebase, $firebaseObject) {
    var t;
    var unbind;

    var init = function() {
        $rootScope.$watch('settings.group', function(newValue, oldValue) {
            $timeout.cancel(t);
            if (newValue !== oldValue) {
                t = $timeout($scope.getTrackList, 2500);
            }
        });

        $scope.$watchGroup(['mvpList', 'trackList'], function() {
            if (typeof($scope.mvpList) === 'object' && typeof($scope.trackList) === 'object') {
                var key;
                var mvp;
                var track;
                for (var i in $scope.mvpList) {
                    mvp = $scope.mvpList[i];
                    if (mvp) {
                        key = mvp.id + mvp.map;
                        track = $scope.trackList[key];
                        mvp.$track = track || {};
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
                angular.element('#mvpFilter').focus();
            }
        });

        $scope.mvpList = DataSrv.getMvpList();
        $scope.getTrackList();
    };

    $scope.orderTrackList = function(a, b) {
        return Math.random();
    };

    $scope.getTrackList = function() {
        if ($rootScope.settings.group) {
            if (unbind) {
                unbind();
            }

            var ref = firebase.database().ref().child('tracks/' + $rootScope.settings.group);
            var obj = $firebaseObject(ref);

            $scope.trackListRef = ref;
            $scope.trackList = obj;

            obj.$bindTo($scope, "trackList").then(function(ub) {
                unbind = ub;
            });
        }
    };

    $scope.getTrack = function(mvp) {
        if (typeof($scope.trackList) === 'object') {
            var key = mvp.id + mvp.map;
            return $scope.trackList[key] || null;
        }

        return null;
    };

    $scope.setTrack = function(mvp, ago) {
        var key = mvp.id + mvp.map;
        var timestamp = Math.round(new Date().getTime() / 1000);
        ago = ago || 0;
        $scope.trackList[key] = {
            id: mvp.id,
            map: mvp.map,
            name: $rootScope.settings.name,
            time: timestamp - ago
        };
    };

    $scope.removeTrack = function(mvp) {
        var r = window.confirm("Do you want to remove this entry?");
        if (r) {
            var key = mvp.id + mvp.map;
            var ref = firebase.database().ref().child('tracks/' + $rootScope.settings.group + '/' + key);
            ref.remove();
            mvp.$track = {};
        }
    };

    init();
});
