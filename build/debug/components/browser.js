/*********************************************************************
 * Created by Anton Baksheiev on 31.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
App.Browser.BrowserController = function ($scope, $q, dataService, vmService) {
    var _columns = [];

    var _perPage = 10;
    var _currentPageIndex = 1;
    var _pages = [];
    var _pageMarge = 5;

    var _isEditMode = false;

    $scope.dataSource = [];

    var _refresh = function () {
        dataService
            .getData({
                perPage: _perPage, currentPageIndex: _currentPageIndex
            })
            .then(function (data) {
                $scope.dataSource = data;
            })
            .then(function () {
                //TODO: add interface in order to get total records
                var totalRecords = dataService.data.length;
                _fillPages(totalRecords);
            });
    }

    var _edit = function (item) {
        _isEditMode = true;

        angular.forEach($scope.dataSource, function (item) {
            item.isEdit(false);
        })
        item.saveState()
        item.isEdit(true);
    }

    var _delete = function (item) {

        dataService.delete(item.id)
            .then(_refresh);
    };

    var _save = function (item) {
        _isEditMode = false;
        item.isEdit(false);
    }

    var _cancel = function (item) {
        _isEditMode = false;
        item.revertState()
        item.isEdit(false);
    }

    var _addColumn = function (column) {
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

    var _fillPages = function (totalRecords) {
        _pages.length = 0;
        ;
        var pageCount = Math.floor(totalRecords / _perPage);
        var min = _currentPageIndex - _pageMarge
        var max = _currentPageIndex + _pageMarge;

        for (var i = min; i <= max; i++) {
            var _title = i;
            if (i > 0 && i < pageCount) {
                _pages.push({
                    title: _title,
                    index: _title,
                    isCurrent: _title == _currentPageIndex
                });
            }
        }

    }

    var _goToPage = function (index) {
        _currentPageIndex = index;
        _refresh()
    }

    var _getIsEditMode = function () {
        return _isEditMode;
    }

    $scope.edit = _edit;
    $scope.save = _save;
    $scope.delete = _delete;
    $scope.cancel = _cancel;
    $scope.getColumns = _getColumns;
    $scope.addColumn = _addColumn;
    $scope.init = _init;

    $scope.isEditMode = _getIsEditMode;
    $scope.loadData = _loadData;
    $scope.goToPage = _goToPage;
    $scope.columns = _columns;

    $scope.pages = _pages;
};

App.Browser.BrowserController.$inject = ['$scope', '$q', 'App.Browser.DataService', 'App.Browser.DataVMService'];
myApp.controller('browserController', App.Browser.BrowserController);

/*********************************************************************
 * Created by Anton Baksheiev on 31.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
App.Browser.DataService = function ($q, $http) {

    var obj = {
        dataUrl: '',
        data: [],
        viewModel: undefined
    };

    var _setDataUrl = function (url) {
        obj.dataUrl = url;
    }

    var _save = function(){
        var deferredObj = $q.defer();
        var pr = deferredObj.promise;

        pr.then(function (id) {
            for (var i = this.data.length - 1; i >= 0; i--) {
                if (this.data[i].id === id) {
                    this.data[i] = item;
                    break;
                }
            }
        })

        deferredObj.resolve(item.id);
        return pr;
    }

    var _delete = function(id){
        var deferredObj = $q.defer();
        var pr = deferredObj.promise;

        pr.then(function (id) {
            for (var i =0; i<obj.data.length;  i++) {
                if (obj.data[i].id === id) {
                    obj.data.splice(i, 1);
                    break;
                }
            }
        })

        deferredObj.resolve(id);
        return pr;
    }

    var _fillMockData = function () {

        return $http.get(obj.dataUrl)
            .then(function (responce) {

                for (var i = 0; i < responce.data.length; i++) {
                    var vm = obj.viewModel.getVM();
                    var _id = i;
                    responce.data[_id]['id'] = _id;
                    vm.init(responce.data[_id]);
                    obj.data.push(vm);
                }

                return obj.data;
            })

    }

    var _getData = function(settings){

        var deferredObj = $q.defer();
        var pr = deferredObj.promise;

        pr = pr.then(function () {

            var data = [];

            var minIndex = settings.perPage * (settings.currentPageIndex - 1 );
            var maxIndex = settings.perPage * (settings.currentPageIndex);

            for (var i = 0; i < obj.data.length; i++) {
                if (minIndex < i && i <= maxIndex) {
                    data.push(obj.data[i]);
                }
            }

            return data;
        })

        deferredObj.resolve()
        return pr;
    }

    var _resetData=function(perPage, pageIndex){
        obj.data =[];
    }
    /*set public methods*/
    obj.fillMockData = _fillMockData;
    obj.setDataUrl = _setDataUrl;
    obj.getData = _getData;
    obj.delete = _delete;
    obj.save = _save;

    obj.resetData = _resetData
    return obj
};

App.Browser.DataService.$inject = ['$q', '$http'];

myApp.factory('App.Browser.DataService', App.Browser.DataService);
/*********************************************************************
 * Created by Anton Baksheiev on 31.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
App.Browser.DataVMService = function () {
    var _getVM = function (columns) {

        var vm = {};
        var _isInit = true;
        var _fields = [];
        var _validationAttr = {};

        var _isEdit = false;

        var _state = {};

        // create fields
        for (var i = 0; i < columns.length; i++) {
            vm[columns[i].field] = 'j';
            _fields.push(columns[i].field);
            _validationAttr[columns[i].field] = [];
            _validationAttr[columns[i].field]['required'] = columns[i].required
            vm['type'] = columns[i]['type'];

        }

        // create constructor
        vm['init'] = function (data) {
            for (var i = 0; i < _fields.length; i++) {
                var index = i;
                this[_fields[index]] = data[_fields[index]];
            }

            // Indicate that model is loaded
            _isInit = true;
        };

        // set indicator of editing
        vm['isEdit'] = function (value) {
            if (value === undefined) {
                return _isEdit
            }
            else {
                _isEdit = value;
            }
        }

        //Validation
        vm['isFieldValid'] = function (name) {

            var isRequired = _validationAttr[name]['required'];
            if (isRequired) {
                if (this[name].length === 0) {
                    return false;
                }
            }

            return true;
        };

        vm['saveState'] = function () {
            for (var i = 0; i < _fields.length; i++) {
                var index = i;
                _state[_fields[index]] = this[_fields[index]];
            }
        }

        vm['revertState'] = function () {
            for (var i = 0; i < _fields.length; i++) {
                var index = i;
                this[_fields[index]] = _state[_fields[index]];
            }
        }

        vm['isValid'] = function () {
            if (!_isInit) {
                return true;
            }
            for (var i = 0; i < _fields.length; i++) {
                var index = i;
                if (!this['isFieldValid'](_fields[index])) {
                    return false;
                }
            }

            return true;
        }
        return vm;
    };

    return {
        getInstanceVM: function (columns) {
            var _columns = columns
            return {
                getVM: function () {
                    return _getVM(_columns);
                }
            };
        }
    }
};

App.Browser.DataVMService.$inject = [];

myApp.factory('App.Browser.DataVMService', App.Browser.DataVMService);