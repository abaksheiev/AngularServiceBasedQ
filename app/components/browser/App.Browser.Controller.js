/*********************************************************************
 * Created by Anton Baksheiev on 31.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
App.Browser.BrowserController = function ($scope, $q, dataService, vmService) {
    var _settings = {};
    var _columns = [];

    var _perPage = 10;
    var _currentPageIndex = 1;
    var _pages = [];

    var _refresh = function () {
        dataService
            .getData({
                perPage: _perPage,
                currentPageIndex: _currentPageIndex
            })
            .then(function (data) {
                $scope.dataSource = data;
            })
            .then(function(){
                var total = dataService.data.length;
            });
    }

    var _edit = function (item) {
        item.saveState()
        item.isEdit(true);
    }

    var _delete = function (item) {

        dataService.delete(item.id)
            .then(_refresh);
    };

    var _save = function (item) {
        item.isEdit(false);
    }

    var _cancel = function (item) {
        item.revertState()
        item.isEdit(false);
    }

    var _addColumn = function (column) {
        console.log('add column')

        _columns.push({
            title: column.title,
            field: column.field,
            type: column.type,

            required: column.required
        })
    };

    var _init = function (settings) {
        dataService.dataUrl = settings.dataUrl;
    }

    var _loadData = function () {

        dataService.viewModel = vmService.getInstanceVM(_columns);

        dataService.resetData();

        dataService
            .fillMockData()
            .then(_refresh);
    };

    var _getColumns = function () {
        return _columns;
    }

    $scope.edit = _edit;
    $scope.save = _save;
    $scope.delete = _delete;
    $scope.cancel = _cancel;
    $scope.getColumns = _getColumns;
    $scope.addColumn = _addColumn;
    $scope.init = _init;

    $scope.loadData = _loadData;

    $scope.columns = _columns;

    $scope.pages = _pages;
};

App.Browser.BrowserController.$inject = ['$scope', '$q', 'App.Browser.DataService', 'App.Browser.DataVMService'];
myApp.controller('browserController', App.Browser.BrowserController);
