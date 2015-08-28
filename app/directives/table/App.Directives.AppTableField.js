/**
 * Created by Anton on 27.08.2015.
 */
App.Directories.AppTableField = function factory() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateNamespace: 'html',
        requie:'^appTable',
        controller: function () {
            console.log('AppTableField: controller')
        },
        link: function (scope, element, attrs, tabsCtrl) {
            console.log('AppTableField: link')
            scope.$parent.addField({
                title: attrs.title,
                name: attrs.field,
                type: attrs.type
            })
        }
    };
};

myApp.directive('appTableField', App.Directories.AppTableField);