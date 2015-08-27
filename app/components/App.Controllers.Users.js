/**
 * Created by Anton on 26.08.2015.
 */
App.Controllers.UserController = function ($scope, userService) {
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
        console.log(arguments);
    };

    $scope.edit = function (user) {
        user.isEdit(true);
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
        console.log(arguments);
    });

    $scope.$on('userFillMockData', function(){
        userService.fillTestData();
    });
};

App.Controllers.UserController.$inject = ['$scope', 'userService'];
myApp.controller('userController', App.Controllers.UserController);
