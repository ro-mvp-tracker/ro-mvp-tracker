'use strict';

/*globals app */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:SetupCtrl
 * @description
 * # SetupCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('SetupCtrl', function ($scope, $rootScope, $state, $timeout, $firebaseAuth) {
    var init = function() {
        var t;
        $scope.setup = {};
        $scope.setup.authKey = $rootScope.settings.authKey;
        $scope.setup.group = $rootScope.settings.group;
        $scope.setup.name = $rootScope.settings.name;
        if (!$scope.setup.group) {
            $scope.generateGroup();
        }

        $scope.$watch('setup.authKey', function(newValue, oldValue) {
            $timeout.cancel(t);
            if (newValue !== oldValue) {
                $scope.setup.$authenticated = false;
                t = $timeout($scope.authenticate, 2500);
            }
        });

        $scope.authenticate();
    };

    $scope.isValid = function() {
        return $scope.setup.$authenticated && $scope.setup.authKey && $scope.setup.group && $scope.setup.name;
    };
    
    $scope.submit = function() {
        $rootScope.settings.authKey = $scope.setup.authKey;
        $rootScope.settings.group = $scope.setup.group;
        $rootScope.settings.name = $scope.setup.name;
        $state.go('mvp');
    };
    
    $scope.generateGroup = function() {
        $scope.setup.group = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < 5; i++) {
            $scope.setup.group += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    };

    $scope.authenticate = function() {
        console.log('authenticate');
        var email = 'ro.mvp.tracker@gmx.de';
        //var password = '30edb7140';
        $firebaseAuth().$signInWithEmailAndPassword(email, $scope.setup.authKey)
        .then(function(res) {
            console.log('ok', res);
            $scope.setup.$authenticated = true;
        })
        .catch(function(error) {
            console.log('error', error);
            $scope.setup.$authenticated = false;
        });
    };

    init();
});
