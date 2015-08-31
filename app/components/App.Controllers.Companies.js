/*********************************************************************
 * Created by Anton Baksheiev on 30.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
App.Controllers.CompanyController = function ($scope, $q, companyService) {
    var _refresh = function () {
        companyService.getAll()
            .then(function (data) {
                $scope.dataSource = data;
            });
    }
    _refresh();
    $scope.save = function (item) {

        companyService
            .save(item)
            .then(function () {
                item.isEdit(false);

            })
            .then(_refresh);
    };

    $scope.delete = function (item) {
        companyService.delete(item.id)
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
            });
        deferredObj.resolve();
    }

};

App.Controllers.CompanyController.$inject = ['$scope',  '$q', 'companyService'];
myApp.controller('companyController', App.Controllers.CompanyController);
