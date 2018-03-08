'use strict';

/*globals app */

/**
 * @ngdoc service
 * @name roMvpTrackerApp.time
 * @description
 * # time
 * Service in the roMvpTrackerApp.
 */
app.service('time', function ($rootScope, $http) {
    var service = {};
    var syncTimeLocal = 0;
    var syncTimeServer = 0;
    var synced = false;

    service.sync = function() {
        return $http.get('https://ntp-a1.nict.go.jp/cgi-bin/json')
            .then(function(res) {
                syncTimeServer = Math.floor(res.data.st);
                syncTimeLocal = Math.floor(new Date().getTime() / 1000);
                synced = true;
            })
            .catch(function(err) {
                synced = false;
            });
    };

    service.isSynced = function() {
        return synced;
    };

    service.unix = function() {
        var current = Math.floor(new Date().getTime() / 1000);
        if (!synced) {
            return current;
        }

        var diff = current - syncTimeLocal;
        var syncTime = syncTimeServer + diff;

        return syncTime;
    };

    return service;
});
