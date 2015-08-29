/**
 * Created by Anton on 27.08.2015.
 */

App.Directories.AppNav = function factory() {
    var directiveDefinitionObject = {
        templateUrl: 'app/directives/navigation/appNav.html', // or // function(tElement, tAttrs) { ... },
        restrict: 'E',
        templateNamespace: 'html',
        transclude: true,
        controller: 'navigationController',
        link: function link(scope, element, attrs, cntrl) {

        }
    };

    return directiveDefinitionObject;
};

App.Directories.AppNav.$inject = [];
myApp.directive('appNav', App.Directories.AppNav);
