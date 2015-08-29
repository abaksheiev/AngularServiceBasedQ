/**
 * Created by Anton on 27.08.2015.
 */

App.Directories.AppTableFieldEditor = function factory($templateCache) {
    return {
        restrict: 'E',
        templateNamespace: 'html',
        scope: {},
        template: function (element, attrs) {
            return $templateCache.get(attrs.type + '.html');
        },
        /*
         ------------------------------------------------------
         for debuging and developing better to use templateUrl,
         but perfomance will be reduced
         ------------------------------------------------------
         templateUrl: function (element, attrs) {
         return $templateCache.get(attrs.type + '.html');
         },
         */
        link: function (scope, element, attrs, tabsCtrl) {
            scope.data = scope.$parent.data;
            scope.fieldName = scope.$parent.field.name;

        }
    };
};
App.Directories.AppTableFieldEditor.$inject = ['$templateCache']

myApp.directive('appTableFieldEditor', App.Directories.AppTableFieldEditor);


