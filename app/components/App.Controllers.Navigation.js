/**
 * Created by Anton on 26.08.2015.
 */
App.Controllers.NavigationController = function ($scope,$location,$window) {

    $scope.showUsers=function(){
        $location.path('/Users')
        return false;
    };

    $scope.showCountries=function(){
        $location.path('/Countries')
        return false;
    };

    $scope.showCompanies=function(){
        $location.path('/Companies')
        return false;
    };
};

App.Controllers.NavigationController.$inject = ['$scope','$location','$window'];

myApp.controller('navigationController', App.Controllers.NavigationController);
