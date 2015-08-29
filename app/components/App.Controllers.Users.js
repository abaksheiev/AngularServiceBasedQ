/**
 * Created by Anton on 26.08.2015.
 */
App.Controllers.UserController = function ($scope, $q, userService) {

    var _refresh = function () {
        userService.getAll()
            .then(function (data) {
                $scope.users = data;
            });
    }
    _refresh();
    $scope.save = function (item) {

        userService
            .save(item)
            .then(function () {
                item.isEdit(false);

            })
            .then(_refresh);
    };

    $scope.delete = function (item) {
        userService.delete(item.id)
            .then(function () {
                item.isEdit(false);
            })
            .then(_refresh);
        ;
    };

    $scope.cancel = function () {
    };

    $scope.edit = function (user) {

        var deferredObj = $q.defer();
        var promise = deferredObj.promise;

        promise
            .then(function () {
                for (var i = 0; i < $scope.users.length; i++) {
                    $scope.users[i].isEdit(false);
                }
            })
            .then(function () {
                user.isEdit(true);
            }).then(function () {
                angular.forEach($scope.users, function (value, key) {
                });
            });
        deferredObj.resolve();
    }
};

App.Controllers.UserController.$inject = ['$scope',  '$q', 'userService'];
myApp.controller('userController', App.Controllers.UserController);
