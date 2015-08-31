/*********************************************************************
 * Created by Anton Baksheiev on 31.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
App.Directories.AppBrowserField = function factory() {
    return {
        restrict: 'E',
        templateNamespace: 'html',
        require:'^appBrowser',
        transclude: true,

        scope: {
        },
        controller: function ($scope) {
        },
        link: function (scope, element, attrs, tabsCtrl) {
            scope.$parent.$parent.addColumn({
                title: attrs.title,
                field: attrs.field,
                type: attrs.type,
                required:attrs['required']!=undefined?attrs['required']:false
            });
        }};
};

myApp.directive('appBrowserField', App.Directories.AppBrowserField);