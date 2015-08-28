/**
 * Created by Anton on 28.08.2015.
 */
App.Directories.AppTableAction = function factory() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateNamespace: 'html',
        requie: '^appTable',

        controller: function () {
        },

        link: function (scope, element, attrs, tabsCtrl) {
            var a = {
                event: attrs.click,
                title: attrs.title,
                code: attrs.code
            }
            scope.$parent.addAction(a);
        }
    };
};

myApp.directive('appTableAction', App.Directories.AppTableAction);
