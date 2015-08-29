/**
 * Created by Anton on 28.08.2015.
 */
App.Controllers.ModalDialogController = function ($scope) {
    $scope.alert=function(){

    };

    $scope.confirmation=function(fnOk,fnCancel){

    }
};

App.Controllers.BrowserController.$inject = ['$scope'];

myApp.controller('modalDialogController', App.Controllers.ModalDialogController);
