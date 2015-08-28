/**
 * Created by Anton on 27.08.2015.
 */

App.Directories.AppTable = function factory() {
    var supportedActions = ['edit', 'save', 'delete'];

    var _fields = [];
    var _actions = [];

    var _addField = function (item) {
        _fields.push(item);
    };

    var _addAction = function ($scope) {
        return function (a) {
            _actions.push({
                click: $scope.$parent[a.event],
                title: a.title,
                code: a.code,
                visibility: function(data){
                    if(data.isEdit() && ['edit','delete'].indexOf(a.code)>-1){
                        return false;
                    }

                    if(!data.isEdit() && ['save'].indexOf(a.code)>-1){
                        return false;
                    }
                    return true;
                }
            })

        };
    };
    return {
        restrict: 'E',
        templateNamespace: 'html',
        transclude: true,
        scope: {
            source: '='
        },
        controller: function ($scope) {

            $scope.tableData = {};
            $scope.tableData.fields = _fields;
            $scope.tableData.actions = _actions;

            $scope.addField = _addField;
            $scope.addAction = _addAction($scope);
        },

        templateUrl: 'app/directives/table/appTable.html'
    };
};


myApp.directive('appTable', App.Directories.AppTable);