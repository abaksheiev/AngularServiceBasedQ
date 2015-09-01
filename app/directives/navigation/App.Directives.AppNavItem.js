/**
 * Created by Anton on 27.08.2015.
 */
App.Directories.AppNavItem = function factory() {
    var directiveDefinitionObject = {
        restrict: 'E',
        require: '^appNav',
        transclude: true,
        link: function (scope, tElement, tAttrs, contrl) {
            var text = tAttrs.text;
            var method = tAttrs.method;

            scope.addMenuItem(text, method)
        }
    };

    return directiveDefinitionObject;
}
;

App.Directories.AppNavItem.$inject = [];

myApp.directive('appNavItem', App.Directories.AppNavItem);