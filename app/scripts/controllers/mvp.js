'use strict';

/*globals app, angular, window */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:MvpCtrl
 * @description
 * # MvpCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('MvpCtrl', function ($scope, $rootScope, $timeout, $state, DataSrv, firebase, $firebaseObject, webNotification) {
    var t;
    var unbind;

    var init = function() {
        $scope.notifications = {};
        $scope.updateTimer = null;

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

                $scope.update();
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
        $scope.update();
    };

    $scope.orderTrackList = function(a) {
        a.$track.$highlight = '';

        //no track
        if (!a.$track || !a.$track.$respawn) {
            a.$track.$highlight = '';
            return Number.MAX_SAFE_INTEGER;
        }

        //staled track
        if (a.$track.$respawn.min < 0 && a.$track.$respawn.max < 0 && -1 * a.$track.$respawn.min > 1800) {
            a.$track.$highlight = 'stale';
            return -a.$track.$respawn.min;
        }

        if (a.$track.$respawn.min > 0 && a.$track.$respawn.min <= 300) {
            a.$track.$highlight = 'warning';
        } else if (a.$track.$respawn.min > 0) {
            a.$track.$highlight = '';
        } else {
            a.$track.$highlight = 'danger';
        }

        return Number.MIN_SAFE_INTEGER + a.$track.$respawn.min;
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

    $scope.update = function() {
        var timestamp = Math.round(new Date().getTime() / 1000);

        var notificationError = function onShow(error, hide) {
            if (error) {
                window.alert('Unable to show notification: ' + error.message);
            }
        };

        for (var i = 0; i < $scope.mvpList.length; i++) {
            var mvp = $scope.mvpList[i];
            var key = mvp.id + mvp.map;
            if (mvp && mvp.$track && mvp.$track.time) {
                var min = Math.round(mvp.respawn.min - (timestamp - mvp.$track.time));
                var max = Math.round(mvp.respawn.max - (timestamp - mvp.$track.time));

                mvp.$state = false;
                var notificationTime = ($rootScope.settings.notificationTime || 0) * 60;
                if (min <= 0 && max <= 0) {
                    mvp.$state = true;
                    var tmp = max;
                    max = min;
                    min = tmp;
                } else if (min <= notificationTime && $rootScope.settings.notificationEnabled) {
                    if ($scope.notifications[key] !== mvp.$track.time) {
                        webNotification.showNotification('Ragnarok MVP Tracker', {
                            body: mvp.name + ' (' + mvp.map + ') spawns in ' + (Math.round(min / 60)) + ' to ' + (Math.round(max / 60)) + ' minutes',
                            icon: 'images/mvp.png',
                            autoClose: 30000
                        }, notificationError);
                        $scope.notifications[key] = mvp.$track.time;
                    }
                }

                mvp.$track.$respawn = mvp.$track.$respawn || {};
                mvp.$track.$respawn.min = min;
                mvp.$track.$respawn.max = max;

                if ((-1 * max) > (mvp.respawn.max * 3.2)) {
                    var ref = firebase.database().ref().child('tracks/' + $rootScope.settings.group + '/' + key);
                    ref.remove();
                    mvp.$track = {};
                }
            }
        }

        $timeout.cancel($scope.updateTimer);
        $scope.updateTimer = $timeout($scope.update, ((20 - (timestamp % 20))) * 1000);
    };

    init();
});
