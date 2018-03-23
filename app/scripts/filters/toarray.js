'use strict';

/*globals app */

/**
 * @ngdoc filter
 * @name roMvpTrackerApp.filter:toArray
 * @function
 * @description
 * # toArray
 * Filter in the roMvpTrackerApp.
 */
app.filter('toArray', function () {
    return function (input) {
        var output = [];
        var v;
        for (var k in input) {
        	v = input[k];
            if (v && typeof(v) === 'object') {
                v.$key = k;
            	output.push(v);
            }
        }

        return output;
    };
});
