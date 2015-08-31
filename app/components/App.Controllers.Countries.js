/*********************************************************************
 * Created by Anton Baksheiev on 30.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
App.Controllers.CountryController = function ($scope, $q, countryService) {
    var _refresh = function () {
        countryService.getAll()
            .then(function (data) {
                $scope.dataSource = data;
            });
    }
    _refresh();
    $scope.save = function (item) {

        countryService
            .save(item)
            .then(function () {
                item.isEdit(false);

            })
            .then(_refresh);
    };

    $scope.delete = function (item) {
        countryService.delete(item.id)
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

App.Controllers.CountryController.$inject = ['$scope',  '$q', 'countryService'];
myApp.controller('countryController', App.Controllers.CountryController);
