/**
 * Created by Anton on 27.08.2015.
 */
App.Directories.AppNavItem = function factory(navigationService) {
    var directiveDefinitionObject = {
        restrict: 'E',
        replace: true,
        templateNamespace: 'html',
        scope: {},
        template: function (tElement, tAttrs) {
            return "<li><a ng-click='wrapperGo()' href='#'>"+tAttrs.text+"</a></li>";
        },
        link: function(scope, tElement, tAttrs) {
            var actionCode = tAttrs['actioncode'];
            scope.wrapperGo = function() {
                navigationService.go(actionCode);
            };
        }
    };

    return directiveDefinitionObject;
};

App.Directories.AppNavItem.$inject = ['navigationService'];

myApp.directive('appNavItem', App.Directories.AppNavItem);