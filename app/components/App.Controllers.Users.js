/**
 * Created by Anton on 26.08.2015.
 */
App.Controllers.UserController = function ($scope, userService, $q) {
    userService.fillTestData();

    $scope.users = userService.getAll();

    $scope.save = function (item) {
        userService.save(item);
        $scope.users = userService.getAll();
    };

    $scope.delete = function (item) {
        userService.delete(item.id);
        $scope.users = userService.getAll();
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

    $scope.$on('userAdd', function () {
        userService.save({
            id: null,
            firstName: null,
            lastName: null
        });

        $scope.users = userService.getAll();

    });
    $scope.$on('userEdit', function () {
        alert('userEdit');
    });

    $scope.$on('userDelete', function () {

    });

    $scope.$on('userFillMockData', function () {
        userService.fillTestData();
    });
}
;

App.Controllers.UserController.$inject = ['$scope', 'userService', '$q'];
myApp.controller('userController', App.Controllers.UserController);
