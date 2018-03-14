'use strict';

/*globals app */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the roMvpTrackerApp
 */

app.controller('LoginCtrl', function ($rootScope, $scope, $timeout, $state, $element) {
    var init = function() {
        $scope.form = $element.find('#loginForm');

        $scope.credentials = {
            email: '',
            password: ''
        };

        $rootScope.$watch('login.authenticated', function(newValue, oldValue) {
             if ($rootScope.login.authenticated === true) {
                $state.go('mvp');
             }
        });
    };

    $scope.isValid = function() {
        return $scope.validateEmail() && $scope.validatePassword();
    };

    $scope.validateEmail = function() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        return re.test($scope.credentials.email);
    };

    $scope.validatePassword = function() {
        return $scope.credentials.password && $scope.credentials.password.length > 0;
    };

    $scope.submit = function() {
        $scope.form.removeClass('animated shake');

        $rootScope.login.credentials.email = $scope.credentials.email;
        $rootScope.login.credentials.password = $scope.credentials.password;

        $scope.authenticate()
            .then(function() {
                $state.go('mvp');
            })
            .catch(function(err) {
                $rootScope.login.credentials.email = null;
                $rootScope.login.credentials.password = null;
                $scope.form.addClass('animated shake');
                $timeout(function() {
                    $scope.form.removeClass('animated shake');
                }, 1000);
                $scope.errorMessage = 'Couldn\'t login. Please verify your E-Mail address and password.';
            });
    };

    init();
});
