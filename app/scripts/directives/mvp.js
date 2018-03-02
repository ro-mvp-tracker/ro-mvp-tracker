'use strict';

/*globals app */

/**
 * @ngdoc directive
 * @name roMvpTrackerApp.directive:mvp
 * @description
 * # mvp
 */
app.directive('mvp', function ($rootScope, $timeout, firebase, webNotification) {
    var notifications = {};
    return {
        restrict: 'A',
        scope: {
            mvp: '=',
            state: '=',
        },
        link: function postLink(scope, element, attrs) {
            var t;

            var update = function() {
                var key = scope.mvp.id + scope.mvp.map;
                var timestamp = Math.round(new Date().getTime() / 1000);
                if (scope.mvp && scope.mvp.$track && scope.mvp.$track.time) {
                    var min = Math.round(scope.mvp.respawn.min - (timestamp - scope.mvp.$track.time));
                    var max = Math.round(scope.mvp.respawn.max - (timestamp - scope.mvp.$track.time));

                    scope.state = false;
                    var notificationTime = ($rootScope.settings.notificationTime || 0) * 60;
                    if (min <= 0 && max <= 0) {
                        scope.state = true;
                        var tmp = max;
                        max = min;
                        min = tmp;
                    } else if (min <= notificationTime && $rootScope.settings.notificationEnabled) {
                        if (notifications[key] !== scope.mvp.$track.time) {
                            webNotification.showNotification('Ragnarok MVP Tracker', {
                                body: scope.mvp.name + ' (' + scope.mvp.map + ') spawns in ' + (Math.round(min / 60)) + ' to ' + (Math.round(max / 60)) + ' minutes',
                                icon: 'images/mvp.png',
                                autoClose: 30000
                            }, function onShow(error, hide) {
                                if (error) {
                                    window.alert('Unable to show notification: ' + error.message);
                                }
                            });
                            notifications[key] = scope.mvp.$track.time;
                        }
                    }

                    scope.mvp.$track.$respawn = scope.mvp.$track.$respawn || {};
                    scope.mvp.$track.$respawn.min = min;
                    scope.mvp.$track.$respawn.max = max;

                    if ((-1 * max) > (scope.mvp.respawn.max * 1.0)) {
                        var ref = firebase.database().ref().child('tracks/' + $rootScope.settings.group + '/' + key);
                        ref.remove();
                        scope.mvp.$track = {};
                    }
                }

                $timeout.cancel(t);
                t = $timeout(update, ((20 - (timestamp % 20))) * 1000);
            };

            scope.$watchGroup(['mvp.$track'], update);

            scope.$on('$destroy', function() {
                $timeout.cancel(t);
            });

            update();
        }
    };
});