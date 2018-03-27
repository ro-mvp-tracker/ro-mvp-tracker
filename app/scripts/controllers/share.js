'use strict';

/*globals app */

/**
 * @ngdoc function
 * @name roMvpTrackerApp.controller:ShareCtrl
 * @description
 * # ShareCtrl
 * Controller of the roMvpTrackerApp
 */
app.controller('ShareCtrl', function ($scope, $rootScope, $timeout, $state, DataSrv, time) {
    var t;
    var unbind;

    var init = function() {
        $scope.shareListLoaded = false;
        $scope.editShare = null;

        $rootScope.$watch('settings.group', function(newValue, oldValue) {
            $timeout.cancel(t);
            if (newValue !== oldValue) {
                t = $timeout($scope.getShareList, 2500);
            }
        });

        $rootScope.$watchGroup(['login.authenticating', 'login.authenticated'], function(newValue, oldValue) {
            if ($rootScope.login.authenticating === false && $rootScope.login.authenticated === false) {
                $state.go('login');
            }
        });

        $scope.$watchCollection('shareList', function() {
            if (typeof($scope.shareList) === 'object' && $scope.editShare === null) {
                $scope.update();
            }
        });

        angular.element(window).bind('keyup', function($event) {
            if ($event.keyCode === 17 /* ctrl */) {
                $scope.ctrlDown = false;
            }
        });

        angular.element(window).bind('keydown', function($event) {
            if ($event.keyCode === 17 /* ctrl */) {
                $scope.ctrlDown = true;
            }

            if ($scope.ctrlDown && ($event.keyCode === 70 /* f */)) {
                $event.preventDefault();
                angular.element('#shareFilter').select();
                window.scrollTo(0, 0);
            }
        });

        time.sync().then(function() {
            $scope.getShareList();
        });

        $timeout(function() {
            $scope.initialized = true;
        }, 1500);
    };

    $scope.randStr = function(l) {
        var text = '';
        var possible = 'abcdefghijklmnopqrstuvwxyz';

        for (var i = 0; i < l; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    };

    $scope.getShareList = function() {
        if ($rootScope.settings.group) {
            if (unbind) {
                unbind();
            }

            $scope.shareListLoaded = false;

            $scope.shareList = DataSrv.getObj('shares/' + $rootScope.settings.group);

            $scope.shareList.$loaded().finally(function() {
                $scope.shareListLoaded = true;
            });

            $scope.shareList.$bindTo($scope, 'shareList').then(function(ub) {
                unbind = ub;
            });
        }
    };

    $scope.addShare = function() {
        var timestamp = time.unix();
        $scope.editShare = {
            $id: 'NEW',
            owner: $rootScope.login.user.uid,
            items: [{
                name: '',
                amount: 1,
                price: 0,
                sold: false
            }],
            users: [{
                name: '',
                send: false
            }],
            seller: $rootScope.login.userData.username,
            date: timestamp
        };
    };

    $scope.removeShare = function(share) {
        var r = window.confirm("Do you want to remove this entry?");
        if (r) {
            var ref = DataSrv.get('shares/' + $rootScope.settings.group + '/' + share.$id);
            ref.remove();
        }
    };

    $scope.addUser = function(share) {
        if (!angular.isArray(share.users)) {
            share.users = [];
        }

        share.users.push({
            name: '',
            send: false
        });
    };

    $scope.removeUser = function(share, userId) {
        share.users.splice(userId, 1);
    };

    $scope.addItem = function(share) {
        if (!angular.isArray(share.items)) {
            share.items = [];
        }

        share.items.push({
            name: '',
            amount: 1,
            price: 0,
            sold: false
        });
    };

    $scope.removeItem = function(share, userId) {
        share.items.splice(userId, 1);
    };

    $scope.edit = function(share) {
        if (share !== null && typeof(share) === 'object') {
            $scope.editShare = angular.copy(share);
        } else {
            $scope.editShare = null;
        }
    };

    $scope.save = function(share) {
        if (share.$id === 'NEW') {
            var timestamp = time.unix();
            var key = timestamp + $scope.randStr(5);
            share.$id = key;
            share.date = timestamp;

            $scope.shareList[share.$id] = {};
        }

        angular.copy(share, $scope.shareList[share.$id]);

        $scope.editShare = null;

        $scope.update();
    };

    $scope.cancel = function(share) {
        $scope.editShare = null;

        $scope.update();
    };

    $scope.shareItemsAll = function(share, sold) {
        var items = share.items || [];
        for (var i = 0; i < items.length; i++) {
            items[i].sold = sold;
        }
    };

    $scope.isShareItemsAll = function(share, sold) {
        var items = share.items || [];
        for (var i = 0; i < items.length; i++) {
            if (items[i].sold !== sold) {
                return false;
            }
        }

        return true;
    };

    $scope.shareUsersAll = function(share, send) {
        var users = share.users || [];
        for (var i = 0; i < users.length; i++) {
            users[i].send = send;
        }
    };

    $scope.isShareUsersAll = function(share, send) {
        var users = share.users || [];
        for (var i = 0; i < users.length; i++) {
            if (users[i].send !== send) {
                return false;
            }
        }

        return true;
    };

    $scope.onShareAmountChange = function(share, item) {
        item.amount = parseInt(item.amount);
    };

    $scope.onSharePriceChange = function(share, item) {
        var priceStr = item.price + '';
        if (priceStr.length > 1) {
            var last = priceStr.substr(priceStr.length - 1);
            var price = priceStr.substr(0, priceStr.length - 1);
            var priceFloat = parseFloat(price);
            if (last === 'k') {
                item.price = priceFloat * 1000;
            } else if (last === 'm') {
                item.price = priceFloat * 1000000;
            }
        }

        item.price = parseFloat(item.price);
    };

    $scope.filterShareList = function(share, index, arr) {
        if ($rootScope.settings.shareFilter === null || $rootScope.settings.shareFilter === undefined) {
            return true;
        } else if ($rootScope.settings.shareFilter === true) {
            return !share.$sold || !share.$send;
        } else if ($rootScope.settings.shareFilter === false) {
            return share.$sold === true && share.$send === true;
        }

        return false;
    };

    $scope.orderShareList = function(share) {
        if (share.$sold === true && share.$send === true) {
            return Number.MAX_SAFE_INTEGER - share.date;
        } else {
            return -share.date;
        }
    };

    $scope.update = function() {
        $scope.shareListArr = [];
        var share;
        var items;
        var users;

        for (var id in $scope.shareList) {
            share = $scope.shareList[id];
            if (share && typeof(share) === 'object') {
                share.$id = id;
                $scope.shareListArr.push(share);

                share.$highlight = '';
                share.$total = 0;
                share.$sold = true;
                items = share.items;
                if (items) {
                    for (var i = 0; i < items.length; i++) {
                        share.$total += items[i].price * items[i].amount;
                        share.$sold = share.$sold && items[i].sold;
                    }
                }

                share.$send = true;
                users = share.users;
                if (users) {
                    for (var j = 0; j < users.length; j++) {
                        share.$send = share.$send && users[j].send;
                    }
                }

                if (share.$sold === true && share.$send === true) {
                    share.$highlight = 'fade2';
                } else {
                    share.$highlight = 'danger';
                }
            }
        }
    };
    init();
});
