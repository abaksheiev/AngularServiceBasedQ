/**
 * Created by Anton on 26.08.2015.
 */
App.Controllers.UserController = function ($scope, userService) {
    userService.fillTestData();

    $scope.users = userService.getAll();

    $scope.save = function () {
        console.log(arguments);
    };

    $scope.delete = function (id) {
        userService.delete(id);
        $scope.users = userService.getAll();
    };

    $scope.cancel = function () {
        console.log(arguments);
    };

    $scope.$on('userAdd', function () {
        $scope.users.push({
            firstName: 'none',
            lastName: 'none'
        })
    });
    $scope.$on('userEdit', function () {
        alert('userEdit');
    });

    $scope.$on('userDelete', function () {
        console.log(arguments);
    });

};

App.Controllers.UserController.$inject = ['$scope', 'userService'];