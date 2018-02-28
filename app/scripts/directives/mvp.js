'use strict';

/*globals app */

/**
 * @ngdoc directive
 * @name roMvpTrackerApp.directive:mvp
 * @description
 * # mvp
 */
app.directive('mvp', function ($timeout) {
    return {
        restrict: 'A',
        scope: {
            mvp: '=',
            state: '=',
        },
        link: function postLink(scope, element, attrs) {
            var t;

            var update = function() {
                var timestamp = Math.round(new Date().getTime() / 1000);
                if (scope.mvp && scope.mvp.$track && scope.mvp.$track.time) {
                    scope.mvp.$track.$valid = true;
                    var min = Math.round(scope.mvp.respawn.min - (timestamp - scope.mvp.$track.time));
                    var max = Math.round(scope.mvp.respawn.max - (timestamp - scope.mvp.$track.time));

                    scope.state = false;
                    if (min <= 0 && max <= 0) {
                        if ((-1 * max) > scope.mvp.respawn.max * 0.5) {
                            scope.mvp.$track.$valid = false;
                        }
                        scope.state = true;
                        var tmp = max;
                        max = min;
                        min = tmp;
                    }

                    scope.mvp.$track.$respawn = scope.mvp.$track.$respawn || {};
                    scope.mvp.$track.$respawn.min = min;
                    scope.mvp.$track.$respawn.max = max;
                }

                $timeout.cancel(t);
                t = $timeout(update, ((5 - (timestamp % 5))) * 1000);
            };

            scope.$watchGroup(['mvp.$track'], update);

            update();
        }
    };
});