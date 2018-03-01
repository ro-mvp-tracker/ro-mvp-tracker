'use strict';

/*globals app */

/**
 * @ngdoc filter
 * @name roMvpTrackerApp.filter:ceil
 * @function
 * @description
 * # ceil
 * Filter in the roMvpTrackerApp.
 */
app.filter('ceil', function () {
    return function (input) {
        return Math.ceil(input);
    };
});
