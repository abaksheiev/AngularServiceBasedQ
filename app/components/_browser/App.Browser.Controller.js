/*********************************************************************
 * Created by Anton Baksheiev on 31.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
App.Browser.BrowserController = function ($scope, $q, dataService, vmService) {
    var _settings = {};
    var _columns = [];

    var _addColumn = function (column) {
        _columns.push({
            title: column.title,
            field: column.field,
            type: column.type,

            required:column.required
        })
    };

    var _init = function (settings) {
        dataService.dataUrl = settings.dataUrl;
    }

    var _loadData = function () {

        dataService.viewModel = vmService.getInstanceVM(_columns);

        dataService.fillMockData()
            .then(function (data) {
                $scope.dataSource = data;
            });
    };

    var _getColumns = function () {
        return _columns;
    }

    $scope.getColumns = _getColumns;
    $scope.addColumn = _addColumn;
    $scope.init = _init;


    $scope.loadData = _loadData;

    $scope.columns = _columns;

};

App.Browser.BrowserController.$inject = ['$scope', '$q', 'App.Browser.DataService','App.Browser.DataVMService'];
myApp.controller('browserController', App.Browser.BrowserController);
