/**
 * Created by Anton on 27.08.2015.
 */
App.Directories.AppNavItem = function factory() {
    var directiveDefinitionObject = {
        restrict: 'E',
        replace: true,
        require: '^appNav',
        transclude: true,
        scope: {},
        template: function (tElement, tAttrs) {
            return "<li><a ng-click='wrapperGo()' href=''>" + tAttrs.text + "</a></li>";
        },
        link: function (scope, tElement, tAttrs, contrl) {
            var codeAction = tAttrs.method;

            scope.wrapperGo = function () {
                scope.$parent[codeAction]();
            };
        }
    };

    return directiveDefinitionObject;
}
;

App.Directories.AppNavItem.$inject = [];

myApp.directive('appNavItem', App.Directories.AppNavItem);