/**
 * Created by Anton on 27.08.2015.
 */
App.Directories.AppNavItem = function factory(navigationService) {
    var directiveDefinitionObject = {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateNamespace: 'html',
        scope: {},
        template: function (tElement, tAttrs) {
            return "<li><a ng-click='wrapperGo()' href='#'>"+tAttrs.text+"</a></li>";
        },
        controller:function(){
            console.log('appNavItem:controller');

        },
        link: function(scope, tElement, tAttrs) {
            console.log('appNavItem:link')
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