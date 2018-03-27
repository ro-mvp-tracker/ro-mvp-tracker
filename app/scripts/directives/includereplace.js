'use strict';

/*globals app, $ */

/**
 * @ngdoc directive
 * @name roMvpTrackerApp.directive:includeReplace
 * @description
 * # includeReplace
 */
app.directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            var classes = element.attr('class');
            var children = element.children();
            children.each(function(i) {
                $(this).addClass(classes);
            });
            element.replaceWith(children);
        }
    };
});
