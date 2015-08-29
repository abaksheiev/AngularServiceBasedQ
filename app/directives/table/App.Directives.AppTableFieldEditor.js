/**
 * Created by Anton on 27.08.2015.
 */

App.Directories.AppTableFieldEditor = function factory($http, $templateCache,$templateRequest) {
    return {
        restrict: 'E',
        templateNamespace: 'html',
        scope: {},
        //TODO: move all template to cach
       templateUrl: function (element, attrs) {
            return 'app/directives/table/editorFields/'+attrs.type + '.html';
         },

        link: function (scope, element, attrs, tabsCtrl) {
            scope.data = scope.$parent.data;
            scope.fieldName = scope.$parent.field.name;

        }
    };
};
App.Directories.AppTableFieldEditor.$inject = ['$http', '$templateCache', '$templateRequest']
myApp.directive('appTableFieldEditor', App.Directories.AppTableFieldEditor);


