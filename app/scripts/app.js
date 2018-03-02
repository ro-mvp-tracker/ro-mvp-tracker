'use strict';

/**
 * @ngdoc overview
 * @name roMvpTrackerApp
 * @description
 * # roMvpTrackerApp
 *
 * Main module of the application.
 */

var app = angular.module('roMvpTrackerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'firebase',
    'angularMoment',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'angular-web-notification'
]);


app.config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('roMvpTrackerApp');

    $stateProvider.state('mvp', {
        url: '/',
        templateUrl: 'views/mvp.html'
    });

    $urlRouterProvider.otherwise('/');
});

app.run(function ($rootScope, firebase) {
    $rootScope.settings = {};

    var config = {
        apiKey: 'AIzaSyBWou-B2GvCKnjXlNQls9plahI0U0f3Y_8',
        authDomain: 'ro-mvp-tracker.firebaseapp.com',
        databaseURL: 'https://ro-mvp-tracker.firebaseio.com',
        storageBucket: 'ro-mvp-tracker.appspot.com'
    };
    firebase.initializeApp(config);
});
