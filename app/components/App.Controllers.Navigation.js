/**
 * Created by Anton on 26.08.2015.
 */
App.Controllers.NavigationController = function ($scope, navigationService) {

    $scope.userProxyEvents = {
        userAdd: function () {
            navigationService.go('userAdd');
        },

        userEdit: function () {
            navigationService.go('userEdit');
        },

        userDelete: function () {
            navigationService.go('userDelete');
        }
    };

};

App.Controllers.NavigationController.$inject = ['$scope','navigationService'];