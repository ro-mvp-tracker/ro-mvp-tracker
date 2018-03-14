'use strict';

/*globals app */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('SignupCtrl', function ($rootScope, $scope, $timeout, $element, $state, AuthSrv, DataSrv) {
    var init = function() {
        $scope.form = $element.find('#signupForm');

        $scope.signup = {
            $active: false,
            password1: '',
            password2: '',
            username: ''
        };

        $rootScope.$watch('login.authenticated', function(newValue, oldValue) {
             if ($rootScope.login.authenticated === true) {
                $state.go('mvp');
             }
        });

        $scope.$watch('signup.email', function(newValue, oldValue) {
            $scope.signup.$emailValid = $scope.validateEmail();
        });

        $scope.$watchGroup(['signup.password1', 'signup.password2'], function(newValue, oldValue) {
            $scope.signup.$passwordValid = $scope.validatePassword();
        });
    };

    $scope.isValid = function() {
        return $scope.signup.$emailValid && $scope.signup.email && $scope.signup.$passwordValid && $scope.signup.password1 && $scope.signup.password2;
    };

    $scope.validateEmail = function() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        return re.test($scope.signup.email);
    };

    $scope.validatePassword = function() {
        return $scope.signup.password1 && $scope.signup.password1 === $scope.signup.password2 && $scope.signup.password1.length > 5;
    };

    $scope.submit = function() {
        $scope.form.removeClass('animated shake');

        var email = $scope.signup.email;
        var password = $scope.signup.password1;
        var userData = {
            username: $scope.signup.username
        };
        $scope.signup.$active = true;
        AuthSrv.create(email, password, userData)
            .then(function() {
                $rootScope.login.credentials.email = email;
                $rootScope.login.credentials.password = password;
                
                return $scope.authenticate();
            })
            .then(function() {
                $scope.signup.$active = false;
                $state.go('mvp');
            })
            .catch(function(err) {
                $scope.form.addClass('animated shake');
                $timeout(function() {
                    $scope.form.removeClass('animated shake');
                }, 1000);

                $scope.errorMessage = err.message;
                $scope.signup.$active = false;
            });
    };

    init();
});
