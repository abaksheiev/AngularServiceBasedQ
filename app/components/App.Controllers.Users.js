/**
 * Created by Anton on 26.08.2015.
 */
App.Controllers.UserController = function ($scope, $q, userService) {
$scope.totalRecords = 0;

    var _refresh = function () {
        userService
            .fillMockRecord()
            .then(function (dataFull) {
                $scope.totalRecords = dataFull.length;
            });
    };

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

    $scope.edit = function (item) {

        var deferredObj = $q.defer();
        var promise = deferredObj.promise;

        promise
            .then(function () {
                for (var i = 0; i < $scope.dataSource.length; i++) {
                    $scope.dataSource[i].isEdit(false);
                }
            })
            .then(function () {
                item.isEdit(true);
            }).then(function () {
                angular.forEach($scope.dataSource, function (value, key) {
                });
            });
        deferredObj.resolve();
    }

    $scope.goToPage=function(perPage, pageIndex){

        userService.getRecordsByPageIndex(perPage, pageIndex)
            .then(function (data) {
                $scope.dataSource = [];
                $scope.dataSource=data
            });
    }

};

App.Controllers.UserController.$inject = ['$scope', '$q', 'userService'];
myApp.controller('userController', App.Controllers.UserController);
