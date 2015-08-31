/**
 * Created by Anton on 28.08.2015.
 */

App.Directories.ModalDialog = function factory() {
    var directiveDefinitionObject = {
        templateUrl: 'app/directives/modalDialog/appNav.html', // or // function(tElement, tAttrs) { ... },
        restrict: 'E',
        templateNamespace: 'html',
        transclude: true,
        controller: function () {
        },
        link: function link(scope, element, attrs) {
        }
    };

    return directiveDefinitionObject;
};

App.Directories.AppNav.$inject = [];
myApp.directive('modalDialog', App.Directories.ModalDialog);