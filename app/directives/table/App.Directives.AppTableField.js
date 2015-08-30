/*********************************************************************
 * Created by Anton Baksheiev on 27.08.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
App.Directories.AppTableField = function factory() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateNamespace: 'html',
        requie:'^appTable',
        controller: function () {
        },
        link: function (scope, element, attrs, tabsCtrl) {
            scope.$parent.addField({
                title: attrs.title,
                name: attrs.field,
                type: attrs.type
            })
        }
    };
};

myApp.directive('appTableField', App.Directories.AppTableField);