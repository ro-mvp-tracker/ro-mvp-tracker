'use strict';

/*globals app */

/**
 * @ngdoc service
 * @name roMvpTrackerApp.auth
 * @description
 * # auth
 * Service in the roMvpTrackerApp.
 */
app.service('AuthSrv', function ($firebaseAuth, DataSrv) {
    var service = {};

    service.create = function(email, password, userData) {
        return $firebaseAuth().$createUserWithEmailAndPassword(email, password)
            .then(function(user) {
                var d = DataSrv.getObj('users/' + user.uid);
                for(var k in userData) {
                    d[k] = userData[k];
                }
                d.$save();
            })
            .catch(function(err) {
                console.log(err);

                throw err;
            });
    };

    service.login = function(email, password) {
        return $firebaseAuth().$signInWithEmailAndPassword(email, password);
    };

    service.logout = function() {
        return $firebaseAuth().$signOut();
    };

    service.onStateChange = function(callback) {
        $firebaseAuth().$onAuthStateChanged(callback);
    };

    return service;
});
