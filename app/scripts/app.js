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
    'angular-web-notification',
    'ngAnimate-animate.css'
]);


app.config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider, cfpLoadingBarProvider) {
    localStorageServiceProvider.setPrefix('roMvpTrackerApp');
    cfpLoadingBarProvider.includeSpinner = false;

    $stateProvider.state('mvp', {
        url: '/',
        templateUrl: 'views/mvp.html'
    });

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'views/login.html'
    });

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html'
    });

    $urlRouterProvider.otherwise('/');
});

app.run(function ($rootScope, $state, firebase) {
    $rootScope.settings = {};
    $rootScope.$state = $state;

    var config = {
        apiKey: 'AIzaSyBWou-B2GvCKnjXlNQls9plahI0U0f3Y_8',
        authDomain: 'ro-mvp-tracker.firebaseapp.com',
        databaseURL: 'https://ro-mvp-tracker.firebaseio.com',
        storageBucket: 'ro-mvp-tracker.appspot.com'
    };
    firebase.initializeApp(config);
});
