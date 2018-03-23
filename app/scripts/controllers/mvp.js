'use strict';

/*globals app, angular, window */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:MvpCtrl
 * @description
 * # MvpCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('MvpCtrl', function ($scope, $rootScope, $timeout, $state, DataSrv, webNotification, time) {
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

        $rootScope.$watchGroup(['login.authenticating', 'login.authenticated'], function(newValue, oldValue) {
            if ($rootScope.login.authenticating === false && $rootScope.login.authenticated === false) {
                $state.go('login');
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
                angular.element('#mvpFilter').select();
                window.scrollTo(0, 0);
            }
        });

        $scope.mvpList = DataSrv.getMvpList();

        time.sync().then(function() {
            $scope.getTrackList();
            $scope.update();
        });

        $timeout(function() {
            $scope.initialized = true;
        }, 1500);
    };

    $scope.orderTrackList = function(a) {
        if (!a || typeof(a) !== 'object' || !a.$track) {
            return;
        }

        a.$track.$highlight = '';

        //no track
        if (!a.$track.$respawn) {
            a.$track.$highlight = '';
            return Number.MAX_SAFE_INTEGER;
        }

        //staled track
        if (a.$track.$respawn.min < 0 && a.$track.$respawn.max < 0 && -1 * a.$track.$respawn.min > 3600) {
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

        if (a.$track.$respawn.min <= 0 && a.$track.$respawn.max <= 0) {
            return Number.MIN_SAFE_INTEGER + a.$track.$respawn.min;
        } else {
            return Number.MIN_SAFE_INTEGER + a.$track.$respawn.min + 10000;
        }
        
    };

    $scope.getTrackList = function() {
        if ($rootScope.settings.group) {
            if (unbind) {
                unbind();
            }

            $scope.trackList = DataSrv.getObj('tracks/' + $rootScope.settings.group);

            $scope.trackList.$bindTo($scope, "trackList").then(function(ub) {
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
        if (!time.isSynced()) {
            window.alert('Can\'t set track. Time not synchronized. Please reload the page.');
            return;
        }

        var key = mvp.id + mvp.map;
        var timestamp = time.unix();
        ago = ago || 0;
        $scope.trackList[key] = {
            id: mvp.id,
            map: mvp.map,
            name: $rootScope.login.userData.username || '',
            time: timestamp - ago
        };
    };

    $scope.removeTrack = function(mvp) {
        var r = window.confirm("Do you want to remove this entry?");
        if (r) {
            var key = mvp.id + mvp.map;
            var ref = DataSrv.get('tracks/' + $rootScope.settings.group + '/' + key);
            ref.remove();
            mvp.$track = {};
        }
    };

    $scope.isValid = function() {
        return $scope.login.authenticated && $scope.login.userData.activated && $scope.login.userData.username && $scope.settings.group;
    };

    $scope.update = function() {
        var timestamp = time.unix();
        if (time.isSynced()) {
            var notificationError = function onShow(error, hide) {
                if (error) {
                    window.alert('Unable to show notification: ' + error.message);
                }
            };

            //iterate over mvpList
            for (var i = 0; i < $scope.mvpList.length; i++) {
                var mvp = $scope.mvpList[i];
                var key = mvp.id + mvp.map;
                //mvp is tracked?
                if (mvp && mvp.$track && mvp.$track.time) {
                    var min = Math.round(mvp.respawn.min - (timestamp - mvp.$track.time));
                    var max = Math.round(mvp.respawn.max - (timestamp - mvp.$track.time));

                    mvp.$state = false;
                    var notificationTime = ($rootScope.settings.notificationTime || 0) * 60;
                    //old time?
                    if (min <= 0 && max <= 0) {
                        mvp.$state = true;
                        var tmp = max;
                        max = min;
                        min = tmp;
                    }
                    //spawn soon and notify user?
                    else if (min <= notificationTime && $rootScope.settings.notificationEnabled) {
                        if ($scope.notifications[key] !== mvp.$track.time) {
                            webNotification.showNotification('Ragnarok MVP Tracker', {
                                body: mvp.name + ' (' + mvp.map + ') spawns in ' + (Math.round(min / 60)) + ' to ' + (Math.round(max / 60)) + ' minutes',
                                icon: 'images/mvp.png',                                autoClose: 30000
                            }, notificationError);
                            $scope.notifications[key] = mvp.$track.time;
                        }
                    }

                    mvp.$track.$respawn = mvp.$track.$respawn || {};
                    mvp.$track.$respawn.min = min;
                    mvp.$track.$respawn.max = max;

                    //remove old tracks
                    if ((-1 * max) > (mvp.respawn.max * 3.2)) {
                        mvp.$track.$respawn = null;
                    }
                }
            }
        }

        $timeout.cancel($scope.updateTimer);
        $scope.updateTimer = $timeout($scope.update, ((20 - (timestamp % 20))) * 1000);
    };

    init();
});
