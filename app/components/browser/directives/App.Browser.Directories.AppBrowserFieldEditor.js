/*********************************************************************
 * Created by Anton Baksheiev on 31.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/

App.Directories.AppBrowserFieldEditor = function factory() {
    return {
        restrict: 'E',
        templateNamespace: 'html',

        //TODO: move all template to cach
        templateUrl: function (element, attrs) {
            return 'app/components/browser/directives/tmpl/cntrs/'+attrs.type + '.html';
        },

        link: function (scope, element, attrs, tabsCtrl) {
            scope.data = scope.$parent.data;
            scope.fieldName = scope.$parent.column.field;
            scope.type = scope.$parent.column.type;

        }
    };
};

myApp.directive('appBrowserFieldEditor', App.Directories.AppBrowserFieldEditor);