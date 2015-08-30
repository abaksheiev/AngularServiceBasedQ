/*********************************************************************
 * Created by Anton Baksheiev on 27.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
App.Directories.AppTable = function factory() {
    var supportedActions = ['edit', 'save', 'delete'];

    var _fields = [];
    var _actions = [];
    var _pages=[];

    var _addField = function (item) {
        _fields.push(item);
    };

    var _addAction = function ($scope) {
        return function (a) {
            _actions.push({
                click: $scope.$parent[a.event],
                title: a.title,
                code: a.code,
                disabled: function (data) {
                    if (['save'].indexOf(a.code) > -1 && !data.isValid()) {
                        return true;
                    }

                    return false;
                },
                visibility: function (data) {

                    if (data.isEdit() && ['edit', 'delete'].indexOf(a.code) > -1) {
                        return false;
                    }

                    if (!data.isEdit() && ['save'].indexOf(a.code) > -1) {
                        return false;
                    }
                    return true;
                }
            })

        };
    };


    var _cleanUp = function () {
        _fields = [];
        _actions = [];
        _pages = [];
    };

    var _fillPages = function (totalRecords, countItemsPerPage, event) {

        var maxPages = Math.floor(totalRecords / countItemsPerPage)+1;

        for (var i = 0; i < maxPages && i<7; i++) {
            var _i = i + 1;

            _pages.push({
                title: _i,
                index: _i - 1,
                active:false,
                click: function (page) {
                    angular.forEach(_pages,function(p){
                        p.active = false;
                    })

                    page.active=true;
                    event(countItemsPerPage, page.index);
                    return false;
                }
            });
        }
 }


    return {
        restrict: 'E',
        templateNamespace: 'html',
        transclude: true,
        scope: {
            source: '=',
            countitemsperpage: '='
        },
        controller: function ($scope) {

            $scope.tableData = {};
            $scope.tableData.fields = _fields;
            $scope.tableData.actions = _actions;
            $scope.tableData.pages = _pages;


            $scope.addField = _addField;
            $scope.addAction = _addAction($scope);

            $scope.$on('$destroy', _cleanUp);

            var countitemsperpage = $scope.countitemsperpage;

            $scope.$parent.$watch(function ($scope) {
                if ($scope.totalRecords > 0 &&_pages.length===0) {
                    _fillPages($scope.totalRecords, countitemsperpage, $scope.goToPage);
                    $scope.goToPage(countitemsperpage,0);
                }
            });
        },
        link: function (scope, iElement, iAttrs, controller) {

        },
        templateUrl: 'app/directives/table/appTable.html'
    };
};

myApp.directive('appTable', App.Directories.AppTable);